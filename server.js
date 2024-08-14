const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
const port = 3000;

// Middleware
app.use(cors());
app.use(express.json());

// Connect to MongoDB
//test
mongoose.connect('mongodb://localhost/task-manager', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
