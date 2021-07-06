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
app.runPost("/api/addFeature", async (req,res,next) => {
    let data = req.body
    console.log(req.body)
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