const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const taskRoutes = require('./routes/taskRoutes');

const app = express();
const port = 3000;

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/taskmanager', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => console.log('Connected to MongoDB'))
.catch(err => console.error('Failed to connect to MongoDB:', err));

// Middleware
app.use(express.json()); // Parse incoming JSON requests
app.use(express.static(path.join(__dirname, 'public'))); // Serve static files from 'public'

// Routes
app.use('/api', taskRoutes); // API routes

// Serve the main HTML page
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Handle 404 errors
app.use((req, res) => {
    res.status(404).send('Page not found');
});

// Start server
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
