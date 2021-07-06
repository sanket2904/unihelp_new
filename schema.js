const mongoose = require("mongoose")
let url = "mongodb+srv://dbUser:unihelp@cluster0.qy3jg.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
mongoose.connect(url,{ useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false, useCreateIndex: true })
mongoose.connection.on("open",() => {
    console.log("connected to database")
}).catch((error) => {
    console.log("error")
})
const cartItemSchema = new mongoose.Schema({
    name:String,
    price:Number,
    imageLink:String,
    quantity:Number
})
const userSchema = new mongoose.Schema({
    firstName: String,
    lastName: String,
    email: {type:String,unique:true},
    password: String,
    date: Date,
    adminPrivilege:Boolean,
    userCart:[cartItemSchema]
})



const itemSchema = new mongoose.Schema({
    name: String,
    price:Number
})
const childSchema = new mongoose.Schema({
    title:String,
    description:String,
    price:Number,
    imageLink:String,
    items:[itemSchema]
})
const featureSchema = new mongoose.Schema({
    title:String,
    imageLink:String,
    data:[childSchema],
    date: Date
})

const Features = mongoose.model("Features",featureSchema)
const User = mongoose.model('User',userSchema)

module.exports =  {User , Features }