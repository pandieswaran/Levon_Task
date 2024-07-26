const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
require('dotenv').config();
const app = express();

app.use(express.json()); 

app.use(express.static(path.join(__dirname, 'public')));


const UserRouter = require('./Routing/UrlRouting');
app.use('/', UserRouter);
app.use('/', (req, res) => {
    res.send('Levon api running new deploy');
});

// Global Error Handling Middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something broke!');
});


const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
