const mongoose = require('mongoose');
// const config = require("config");
import config from 'config';

module.exports = function() {
    const db = config.get("MONGODB_URI");
    mongoose.connect(db)
        .then(() => console.log('Connected to MongoDB'))
        .catch((err: Error) => console.error('Failed to connect to MongoDB', err));    
}