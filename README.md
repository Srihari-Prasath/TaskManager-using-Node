
# Task Manager Application

The **Task Manager Application** is a full-stack web application designed to help users manage tasks efficiently. Built using **Node.js**, **Express**, and **MongoDB**, the application allows users to create, view, update, and delete tasks with ease. It features a simple and intuitive user interface for streamlined task management.

## Table of Contents

- [Features](#features)
- [Technologies Used](#technologies-used)
- [Getting Started](#getting-started)
- [Installation](#installation)
- [Usage](#usage)
- [Project Structure](#project-structure)
- [Contributing](#contributing)
- [License](#license)

## Features

- **Create Tasks**: Add new tasks with descriptions and due dates.
- **View Tasks**: See a list of all tasks, along with their status.
- **Update Tasks**: Mark tasks as completed or edit task details.
- **Delete Tasks**: Remove tasks that are no longer needed.
- **Responsive Design**: Optimized for both desktop and mobile users.

## Technologies Used

- **Node.js**: JavaScript runtime used for building the server-side logic.
- **Express.js**: Web framework for creating server-side applications.
- **MongoDB**: NoSQL database for storing task data.
- **Mongoose**: ODM library for MongoDB, used for schema-based solutions.
- **HTML, CSS, JavaScript**: Front-end technologies for the user interface.

## Getting Started

### Prerequisites

Make sure you have the following installed on your machine:

- **Node.js** (version 14 or higher) - [Install Node.js](https://nodejs.org/)
- **MongoDB** - [Install MongoDB](https://www.mongodb.com/try/download/community)

### Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/your-username/task-manager-app.git


2. **Navigate to the project directory**:
   ```bash
   cd task-manager-app
   ```

3. **Install dependencies**:
   ```bash
   npm install
   ```

4. **Set up MongoDB**:
   Ensure MongoDB is running locally on your machine or configure the app to use a remote MongoDB instance by updating the MongoDB URI in the `.env` file.

5. **Create a `.env` file**:
   Create a `.env` file in the root directory and add the following content:
   ```bash
   PORT=3000
   MONGODB_URI=your-mongodb-uri
   ```

### Running the Application

1. **Start the server**:
   ```bash
   npm start
   ```

2. **Access the application**:
   Open your browser and navigate to `http://localhost:3000` to use the Task Manager Application.

## Usage

- **Create a Task**: Use the form to add a task with a title, description, and optional due date.
- **View Tasks**: Browse the task list to see all the tasks with their current statuses.
- **Update Task**: Click the "Edit" button to update task details or mark it as completed.
- **Delete Task**: Click the "Delete" button to remove a task from the list.

## Project Structure

```
task-manager-app/
├── models/              # MongoDB models
├── public/              # Static files (CSS, JS)
├── routes/              # API routes
├── .gitattributes       # Git attributes
├── .gitignore           # Git ignore file
├── Gruntfile.js         # Grunt configuration file
├── README.md            # Project documentation
├── package-lock.json    # Lock file for project dependencies
├── package.json         # Project dependencies and scripts
└── server.js            # Main application file
```

## Contributing

Contributions are welcome! Here's how you can contribute:

1. Fork the repository.
2. Create a new branch for your feature (`git checkout -b feature-name`).
3. Commit your changes (`git commit -m 'Add new feature'`).
4. Push to your branch (`git push origin feature-name`).
5. Open a pull request.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

