const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
require('dotenv').config();
const app = express();


// Middleware
app.use(express.json()); // For parsing JSON bodies

// MongoDB Connection
const uri = process.env.URI_STRING;

mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log('Connected to MongoDB successfully');
    })
    .catch((err) => {
        console.error('Error connecting to MongoDB:', err);
    });

const connection = mongoose.connection;

connection.once('open', () => {
    console.log("MongoDB Connection successfully");
});

// Import and use routes
const UserRouter = require('./Routing/UrlRouting');
app.use('/', UserRouter);



// Global Error Handling Middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something broke!');
});

// Start the server
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
