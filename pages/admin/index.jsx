import React from "react"
import dynamic from "next/dynamic"
import style from "../../styles/login.module.css"
import {useState} from "react"
import axios from "axios"

const Loader = dynamic(() => import("../../components/loader"))
const Top = dynamic(() => import("../../components/top"))
export default function DashHome () {
    const [up,setUp] = useState(true)
    const [signin,setSingin] = useState(true)
    const [loader,setLoader] = useState(false)
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
    function handleSignIn(event) {
        event.preventDefault()
        setSignState({
            ...signState,
            [event.target.name]:event.target.value
        })
    }
    function Check() {
        setLoader(true)
        axios.post("/api/email",{email : email}).then(res => {
            if(res.data.validation === 'signup') {
                
                setTimeout(() => {
                    setLoader(false)
                    setUp(false)
                    setSingin(false)
                },300)
                    
                
            }
            else if(res.data.validation === 'signin') {
               
                    setTimeout(() => {
                        setLoader(false)
                        setUp(false)
                        setSingin(true)
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
        setLoader(true)
        axios.post("/api/addUser",state).then(res => {
            console.log(res)
            if(res.status === 200) {
                setTimeout(() => {
                    setLoader(false)
                },300)
            }
        })
    }

    function SignIn() {
        // setLoader(true)
        axios.post("/api/signin",signState).then(res => {
            console.log(res)
            
        })
    }
    if (loader) return <Loader />
    else if(up) return (
        <>
        <Top />
        <div className={style.login}>
            <div className={style.leftContent}>

            </div>
            <div className={style.rightContent}>
                <h2> Sign In or Sign Up</h2>
                <form action="#" onSubmit={Check}>
                    
                   
                    <input type="email" name="email" id="" placeholder="Email*" value={email} onChange={(event) => setEmail(event.target.value) } />
                   
                    
                    <input type="button" value="submit" className={style.button}  onClick={Check} onSubmit={Check} onEnter />
                </form>
            </div>
        </div>
        </> 
    )
        
    
    else if (signin) return (
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
                </form>
            </div>
        </div>
        </> 
    )
    else if(!signin) return(
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
