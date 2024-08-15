document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('task-details-form');
    const titleInput = document.getElementById('task-title');
    const completedInput = document.getElementById('task-completed');

    const taskId = new URLSearchParams(window.location.search).get('id');
    const apiUrl = `http://localhost:3000/api/tasks/${taskId}`;

    // Load task details
    fetch(apiUrl)
        .then(response => response.json())
        .then(task => {
            titleInput.value = task.title;
            completedInput.checked = task.completed;
        });

    // Update task
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const title = titleInput.value;
        const completed = completedInput.checked;

        fetch(apiUrl, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ title, completed })
        })
        .then(() => window.location.href = 'index.html');
    });
});
