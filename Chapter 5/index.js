const express = require('express');
const mongoose = require('mongoose');

const app = express();

mongoose.connect('mongodb://127.0.0.1/my_database');

app.listen(3000, () => {
    console.log('App listening on port 3000 and connected to MongoDB')
});