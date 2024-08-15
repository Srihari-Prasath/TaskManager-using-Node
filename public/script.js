document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('task-form');
    const titleInput = document.getElementById('task-title');
    const completedInput = document.getElementById('task-completed');
    const taskList = document.getElementById('task-list');
    let editingTaskId = null;

    const apiUrl = 'http://localhost:3000/api/tasks';

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
                            <button class="edit" data-id="${task._id}" data-title="${task.title}" data-completed="${task.completed}">Edit</button>
                            <button class="delete" data-id="${task._id}">Delete</button>
                        </div>
                    `;
                    taskList.appendChild(li);
                });
            });
    }

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const title = titleInput.value;
        const completed = completedInput.checked;
        const method = editingTaskId ? 'PUT' : 'POST';
        const url = editingTaskId ? `${apiUrl}/${editingTaskId}` : apiUrl;

        fetch(url, {
            method: method,
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ title, completed })
        })
        .then(response => response.json())
        .then(() => {
            titleInput.value = '';
            completedInput.checked = false;
            editingTaskId = null;
            loadTasks();
        });
    });

    taskList.addEventListener('click', (e) => {
        if (e.target.classList.contains('edit')) {
            const id = e.target.getAttribute('data-id');
            const title = e.target.getAttribute('data-title');
            const completed = e.target.getAttribute('data-completed') === 'true';

            titleInput.value = title;
            completedInput.checked = completed;
            editingTaskId = id;
        }

        if (e.target.classList.contains('delete')) {
            const id = e.target.getAttribute('data-id');

            fetch(`${apiUrl}/${id}`, {
                method: 'DELETE'
            })
            .then(() => loadTasks());
        }
    });

    loadTasks();
});
