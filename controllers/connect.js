// DB connect function

const mongoose = require('mongoose')

// connect DB - throw err when it fails

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI, { // haal regel op van .env
            useNewUrlParser: true,
            useUnifiedTopology: true
        })
        console.log('database connected')
    } catch (err) {
        console.log('error occured while trying to connect to db:', err);
        throw err;
    }
}

module.exports = connectDB;