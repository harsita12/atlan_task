const mongoose = require('mongoose');
const { mongoURI } = require('../config/keys');

// Directly adding the connection string
const connection = 'mongodb://localhost:27017/';  // Connection string should be a string

mongoose.connect(connection, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
})
    .then(() => console.log("Database Connected Successfully"))
    .catch(err => console.log(err));
