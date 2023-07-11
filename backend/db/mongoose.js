const mongoose = require('mongoose');
const mongoURL = 'mongodb+srv://pradum19441:gBfYGlm0racLJKIN@cluster0.zlloeaz.mongodb.net/?retryWrites=true&w=majority'
mongoose.connect(mongoURL, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log('Connected to MongoDB Atlas');
    })
    .catch((error) => {
        console.error('Error connecting to MongoDB Atlas:', error);
    });

mongoose.connection.on('connected', () => {
    console.log('Mongoose connected to MongoDB Atlas');
});

// Connection error
mongoose.connection.on('error', (error) => {
    console.error('Mongoose connection error:', error);
});

// Disconnected from MongoDB Atlas
mongoose.connection.on('disconnected', () => {
    console.log('Mongoose disconnected from MongoDB Atlas');
});
module.exports = mongoose