import React, { useEffect } from "react"
import dynamic from "next/dynamic"
import style from "../../styles/login.module.css"
import {useState} from "react"
import axios from "axios"



const Loader = dynamic(() => import("../../components/loader"))
const Top = dynamic(() => import("../../components/top"))
const Dashboard = dynamic(() => import("../../components/admincontrols"))
export default function DashHome () {
    const [err,setErr] = useState(false)
   
    const [main,setMain] = useState({
        user:false,
        up:false,
        signin:true,
        signup:false,
        loader:false
    })
    
    const [state,setState] = useState({
        firstName:"",
        lastName: "",
        email:"",
        password:""
    })
    const [email,setEmail] = useState("")
    const [signState,setSignState] = useState({
        email:"",
        password:""
    })
    const initialCheck = () => {
        if(!window.session) {
            window.session = JSON.parse(window.localStorage.getItem("session"))
        }
        if(window.session) {
            setMain({
                ...main,
                user:true,
                loader:false
            })
        }
        else {
            setMain({
                ...main,
                loader:false,
                up:true
            })
        }
    }
    
    useEffect(() => {
        initialCheck()
        
        
    },[])
    function handleSignIn(event) {
        event.preventDefault()
        setSignState({
            ...signState,
            [event.target.name]:event.target.value
        })
    }
    function Check() {
        setMain({
            user:false,
            up:false,
            signin:false,
            signup:false,
            loader:true
        })
        axios.post("/api/email",{email : email}).then(res => {
            if(res.data.validation === 'signup') {
                
                setTimeout(() => {
                    setMain({
                        ...main,
                        up:false,
                        signin:false,
                        signup:true,
                        loader:false,
                        
                    })
                    
                },300)
                    
                
            }
            else if(res.data.validation === 'signin') {
               
                    setTimeout(() => {
                        setMain({
                            ...main,
                            up:false,
                            signin:true,
                            signup:false,
                            loader:false,
                            
                        })
                        
                    },300)
               
            }
        })
    }
    function handleChange(event) {
        event.preventDefault()
        setState({...state,
            [event.target.name]:event.target.value
        })
    }
    
    function Send() {
        
        axios.post("/api/addUser",state).then(res => {
            console.log(res)
            if(res.status === 200) {
                
            }
        })
    }

    function SignIn() {
        setMain({
            user:false,
            up:false,
            signin:false,
            signup:false,
            loader:true
        })
        axios.post("/api/signin",signState).then(res => {
            
            if(res.data.verification) {
                let session = {
                    token:res.data.token,
                    session:res.data.session
                }
                window.session = session
                window.localStorage.setItem("session",JSON.stringify(session))

                
                // setTimeout(() => {
                    
                   setMain({
                    user:true,
                    up:false,
                    signin:false,
                    signup:false,
                    loader:false
                   })

                // },300)
            }
            else {
                setErr(!err)
                setMain({
                    ...main,
                    loader:false
                })
            }
            
        })
    }
    if (main.user) return <Dashboard />
    else if (main.loader) return <Loader />
    else if(main.up) return (
        <>
        <Top />
        <div className={style.login}>
            <div className={style.leftContent}>

            </div>
            <div className={style.rightContent}>
                <h2> Sign In or Sign Up</h2>
                <form action="#" onSubmit={Check}>
                    
                   
                    <input type="email" name="email" id="" placeholder="Email*" value={email} onChange={(event) => setEmail(event.target.value) } />
                   
                    
                    <input type="button" value="submit" className={style.button}  onClick={Check} onSubmit={Check}  />
                </form>
            </div>
        </div>
        </> 
    )
        
    
    else if (main.signin) return (
        <>
        <Top />
        <div className={style.login}>
            <div className={style.leftContent}>

            </div>
            <div className={style.rightContent}>
                <h2> Sign In</h2>
                <form action="#" onSubmit={SignIn}>
                    
                   
                    <input type="email" name="email" id="" placeholder="Email*" value={signState.email} onChange={handleSignIn} />
                    <input type="password" name="password" id="" placeholder="Password*" value={signState.password} onChange={handleSignIn} />
                    
                    <input type="button" value="submit" className={style.button}  onClick={SignIn} onSubmit={SignIn} />
                    {
                        err && <label htmlFor="test">Wrong password try again</label>
                    }
                </form>
            </div>
        </div>
        </> 
    )
    else if(main.signup) return(
        <>
        <Top />
        <div className={style.login}>
            <div className={style.leftContent}>

            </div>
            <div className={style.rightContent}>
                <h2> Sign Up</h2>
                <form action="#" onSubmit={Send}>
                    
                    <input type="text" name="firstName" id="" placeholder="First Name*" value={state.firstName} onChange={handleChange} />
                    <input type="text" name="lastName" id="" placeholder="Last Name*" value={state.lastName} onChange={handleChange} />
                    <input type="email" name="email" id="" placeholder="Email*" value={state.email} onChange={handleChange} />
                    <input type="password" name="password" id="" placeholder="Create Password" value={state.password} onChange={handleChange} />
                    <p>Password must be at least 8 characters long</p>
                    <input type="button" value="submit" className={style.button}  onClick={Send} onSubmit={Send} />
                </form>
            </div>
        </div>
        </>
    )
   
}
