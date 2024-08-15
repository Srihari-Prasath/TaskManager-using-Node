document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('task-form');
    const titleInput = document.getElementById('task-title');
    const completedInput = document.getElementById('task-completed');
    const taskList = document.getElementById('task-list');

    const apiUrl = 'http://localhost:3000/api/tasks';

    // Load tasks
    function loadTasks() {
        fetch(apiUrl)
            .then(response => response.json())
            .then(data => {
                taskList.innerHTML = '';
                data.forEach(task => {
                    const li = document.createElement('li');
                    li.innerHTML = `
                        <span>${task.title} - ${task.completed ? 'Completed' : 'Not Completed'}</span>
                        <div>
                            <button class="edit" data-id="${task._id}">Edit</button>
                            <button class="delete" data-id="${task._id}">Delete</button>
                        </div>
                    `;
                    taskList.appendChild(li);
                });
            });
    }

    // Add task
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const title = titleInput.value;
        const completed = completedInput.checked;

        fetch(apiUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ title, completed })
        })
        .then(response => response.json())
        .then(() => {
            titleInput.value = '';
            completedInput.checked = false;
            loadTasks();
        });
    });

    // Delete task
    taskList.addEventListener('click', (e) => {
        if (e.target.classList.contains('delete')) {
            const id = e.target.getAttribute('data-id');

            fetch(`${apiUrl}/${id}`, {
                method: 'DELETE'
            })
            .then(() => loadTasks());
        }
    });

    // Initial load
    loadTasks();
});
