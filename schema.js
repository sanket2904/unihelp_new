const mongoose = require("mongoose")
let url = "mongodb+srv://dbUser:unihelpuk@cluster0.qy3jg.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
mongoose.connect(url,{ useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false, useCreateIndex: true })
mongoose.connection.on("open",() => {
    console.log("connected to database")
})
const userSchema = new mongoose.Schema({
    firstName: String,
    lastName: String,
    email: {type:String,unique:true},
    password: String,
    date: Date
})

const User = mongoose.model('User',userSchema)
module.exports = User