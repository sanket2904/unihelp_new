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
    this.delete = function(path,callback) {
        server.delete(path,callback)
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
const Feature = require("./schema.js").Features
const {Session} = require("./schema.js")
const argon2 = require("argon2")
const Features = require("./schema.js").Features

const jwt = require("jsonwebtoken")
const sgMail = require("@sendgrid/mail")
const nanoid = require("nanoid")
const generate = (data) => {
    return data + nanoid.customAlphabet("abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789", 10)
}
const app = new Hulkenberg({
    message:"working",
    port:1337
})

sgMail.setApiKey(process.env.SENDGRID_API_KEY)

const tokenAuth = async (request) => {
    let promise = new Promise((resolve,reject) => {
        try {
            
            const auth =  request.get("Authorization")
            if (!auth) { reject("auth is undefined") }
            const token =  auth.substring(7)
            const verification =  jwt.verify(token, process.env.SECRET)
            
                if (!token || !verification.id || !auth) {
                    reject({
                        err: "wrong token"
                    })
                }
                resolve(verification)
            

        } catch (error) {
            if(error) {
                reject(error)
            }
                
        }
        
        


    })
    
    
    return promise
}

app.runGet("/api", (req,res) => {
    setTimeout(() => {
        res.json({message:"working"})
    },2000)
    

})
app.runPost("/api/sendmail",(req,res) => {
    const data = req.body 
    console.log(data)
    const msg = {
        to:"rj1998.rg@gmail.com.",
        from:"support@unihelp.uk",
        subject:"Unihelp Enquiry",
        text:`You have a new enquiry from 
        name:${data.name},
        email:${data.email},
        number:${data.number},
        country:${data.country}`
    }
    sgMail.send(msg).then((res) => console.log(res)).catch((error) => console.log(error))
})
app.runGet("/api/images/:id",(req,res) => {
    // res.json(req.params.id)
    res.sendFile(__dirname +`/${req.params.id}.svg`)

})
app.runPost("/api/tokenauth", async (req,res) => {
    let response
    let data = req.body[0] || req.body
    console.log(data)
    try {
        response = await tokenAuth(req)
    } catch (error) {
        console.log(error)
    }
    await console.log(response)
    if (!response) {
        res.json({
            err: "problem"
        })
    }
    else {
        let deleteData
        await Session.findById(data._id, (err, result) => {
            
            deleteData =  result
            if(result) {
                result.remove()
                result.save()
            }
            
            if(err) {
                res.json({
                    err:"problem"
                })
            }
            

        })
        
            let session = new Session({
                name: deleteData.firstName,
                email: deleteData.email,
                date: new Date()
            })
            session.save().catch((err) => console.log(err))
            res.status(200).json({
                token: req.get("Authorization").substring(7),
                session: session
            })
            
        
        
    }

})
app.runPost("/api/signin", async (req,res) => {
    let data = req.body
    let fetchingData = await User.findOne({email:data.email})

    

   
    let token = jwt.sign({email:fetchingData.email,id:fetchingData._id},process.env.SECRET)
    
    try {
        
        if(await argon2.verify(fetchingData.password,req.body.password) ){
            
            let session = new Session({
                
                name:fetchingData.firstName,
                email:fetchingData.email,
                date:new Date()
            })
            await session.save().catch(err => res.json({
                err:err
            }))
            await res.json({
                token:token,
                verification:true,
                email:fetchingData.email,
                _id:fetchingData._id,
                session:[session]
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
app.runPost("/api/addFeature", async (req,res,next) => {
    
    let data = req.body
    let response
    try {
         response = await tokenAuth(req)
    } catch (error) {
        console.log(error)
    }
    
    if(!response) {
        res.json({
            err:"problem"
        })
    }
    
    const feature = new Features({
        title:data.mainTitle || data.title,
        imageLink:data.imageLink,
        data:data.data,
        date: new Date()
    })

    feature.save().then(response => {
        res.json({
            message:"entry Added"
        })
    }).catch((error) => res.json({
        message:error
    }) )
    
})
app.runGet("/api/addFeature", async (req,res,next) => {
    const retrivalData = await Feature.find({})
    res.json(retrivalData)
}) 
app.runGet("/api/addFeature/:id", async (req,res,next) => {
    const retrivalData = await Feature.findById(req.params.id)
    res.json(retrivalData)
})
app.delete('/api/addFeature/:id', async (req,res,next) => {

    const retrivalData = await Feature.findById(req.params.id)
    console.log(retrivalData)
    Feature.deleteOne({_id:req.params.id} , (err) => {
        if (err) console.log(err) 
        
        res.json({message:"Deleted Successfully"})
    })
    
})
app.runGet("/api/addFeature/:id/:child" , async (req,res) => {
    await Feature.findById(req.params.id, (err, result) => {

        let newData = result.data.id(req.params.child)
        res.json({
            data: newData
        })
    })
})
app.runGet("/api/addFeature/:id/:child/:toget" , async (req,res) => {
    await Feature.findById(req.params.id , (err,result) => {
        
        let newData = result.data.id(req.params.child)[req.params.toget]
        res.json({
            data:newData
        })
    })
})
app.delete("/api/addFeature/:id/:child", async (req,res,next) => {
        await Feature.findById(req.params.id, (err,result ) => {
        result.data.id(req.params.child).remove()
        result.save()
        if(err) res.json({
            error:err
        })
        else res.json({
            status:"deleted",
            _id:req.params.child
        })
    })
    
})
app.runPost("/api/addFeature/:id" , async (req,res,next) => {
    
    await Feature.findById(req.params.id, (err,result) => {
        console.log(res)
        console.log(req.body)
        result.data.push(req.body)
        result.save()
        res.json(result)
        if (err) res.json({
            error:err
        })
    })

})
app.runPost("/api/testDatabase",async (req,res) => {
   
   
    console.log(req.body)
    res.json({
        message:"ok"
    })

})

app.runStart()