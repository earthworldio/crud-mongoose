const mongoose = require('mongoose');
const databaseName = 'mongodb://localhost:27017/todo-app'

mongoose.connect(databaseName, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'MongoDB connection error:'));