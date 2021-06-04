function Hulkenberg(options) {
    const express = require("express");
    const server = express()
    const http2 = require("http")
    const morgan = require("morgan")
    const next = require("next");
    const cors = require("cors")
    const dev = process.env.NODE_ENV !== "production";
    const app = next({dev});
    const handle = app.getRequestHandler();
    server.use(express.json())
    server.use(cors())
    server.use(morgan("dev"))
    this.getExpress = function() {
        return server
    }
    this.runGet = function(path,callback) {
        server.get(path,callback)
    }
    this.runPost = function(path,callback) {
        server.post(path,callback)
    }
    
    
    this.runUse = function(callback) {
        server.use(callback)
    }
    this.runStart = function() {
        app.prepare().then(() => {
            server.all("*",(req,res) => {
                
                return handle(req,res)
            })
            server.listen(options.port,() => {
                console.log(options.message)
            })
        }).catch((error) => console.error(error))
    
    }
}

const User = require("./schema.js").User
const argon2 = require("argon2")
const Features = require("./schema.js").Features
const ReactDOMServer = require("react-dom/server")

const app = new Hulkenberg({
    message:"working",
    port:1337
})

app.runGet("/api", (req,res) => {
    setTimeout(() => {
        res.json({message:"working"})
    },2000)
    

})

app.runGet("/api/images/:id",(req,res) => {
    // res.json(req.params.id)
    res.sendFile(__dirname +`/${req.params.id}.svg`)

})

app.runPost("/api/signin", async (req,res) => {
    let data = req.body
    let fetchingData = null
    await User.findOne({email:data.email},(err,res) => {
        fetchingData = res
    })

   console.log(fetchingData)
    
    try {
        if(await argon2.verify(fetchingData.password,req.body.password) ){
            res.json({
                verification:true,
                email:fetchingData.email,
                _id:fetchingData._id
            })
        }
        else {
            res.json({verification:false})
        }
    } catch (error) {
        res.json({error:error})
    }

})
app.runPost("/api/email",async (req,res) => {
    let data;
    console.log(req.body)
    await User.findOne({email:req.body.email},(err,res) => {
        data = res
    })
    console.log(req.body.email)
    
    
    if(!data) {
        res.json({validation:"signup"})
    }
    else if(data.email === req.body.email) {
        res.json({validation:'signin'})
    }
})
app.runPost("/api/addUser",async (req,res) => {
    
    let data = req.body
    let password = req.body.password
    try {
        const hash = await argon2.hash(password)
        const user = new User({
            ...data,
            password:hash,
            date: new Date()
        })
        user.save().then((res) => {
            console.log('Note Saved')
            
        })
        res.json({content:'done'})
    } catch (error) {
        console.error(error)
        res.status(404)
    }
    
} )
app.runPost("/api/testDatabase",async (req,res) => {
    

})

app.runStart()