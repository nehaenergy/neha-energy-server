const express = require('express');

const app = express();
const mongodb = require('./database/mongodb');

const PORT = 7030;

// Connect to MongoDB
mongodb.connect();

app.get('/', (req,res) => {
    console.log('Server is running successfully');

    res.send('Server is running on ' + PORT);
});
