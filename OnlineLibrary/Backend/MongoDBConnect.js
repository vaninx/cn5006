const mongoose = require('mongoose')


const MONG_URI = 'mongodb://localhost:27017/BooksData'

mongoose.connect(MONG_URI)

const db =  mongoose.connection;

db.on('error', function(err){
    console.log('Error occured' + err)
})

db.once('connected',function(){
    console.log("Current Version of Mongoose installed " + mongoose.version)
    console.log('connection is successful to ' + MONG_URI)
})

module.exports = db