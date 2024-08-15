const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
const port = 3000;

// Import routes after initializing the app
const taskRoutes = require('./routes/taskRoutes');

// Middleware
app.use(cors());
app.use(express.json());

// Connect to MongoDB
mongoose.connect('mongodb://localhost/task-manager', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

// Use routes
app.use('/api', taskRoutes);

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
// Add this before defining your routes
app.get('/', (req, res) => {
    res.send('Welcome to the Task Manager API!');
});
