import React, { useEffect, useState } from "react"
import style from  "../styles/style.module.css"
import dynamic from "next/dynamic"
import Link from 'next/link'
import axios from "axios"


const FounderPage = dynamic(() => import("../components/founderPage"))
const Top = dynamic(() => import("../components/top"))
export default function Home() {
    useEffect(() => {
        document.title = "Unihelp"
    })
    let [arr,setArr] = useState([])
    let [nav,setNav] = useState(false)
    useEffect(() => {
        let data =  axios.get("/api/addFeature").then(async (response) => {
            await setArr(response.data)

        })
    },[])
    let [form,setForm] = useState({
        name:"",
        email:"",
        number:"",
        country:""
    })
    const founderData = [
        {
            name: 'Raj Garg',
            Role: 'Co-Founder',
            
            imgLink: '/api/images/raj',
            twitterLink:"https://twitter.com/rjgarg98",
            linkedinLink:"https://www.linkedin.com/in/raj-garg-74a07b1b5"
        },
        {
            name:"Devansh Bansal",
            Role: 'Co-Founder',
           
            imgLink:'/api/images/devash',
            twitterLink:"https://twitter.com/devansh225?s=09",
            linkedinLink:"https://www.linkedin.com/in/devanshsbansal"
        }

    ]
    
    return(
        <>
        <Top nav={nav} setNav={setNav} />
        {nav && <div className={style.navbar}>
            <h1>
                Sign in
            </h1>
            
        </div>}
        <div className={style.contentFirst}>
            
            
                <h1 className={style.title}>We help you  Settle</h1> 
                
                <p className={style.p}>We are here to Settle you right  in and turn your new house  across seas into your home. </p>
                    {/* <Link href="/contact"> */}
                    <button className={style.button}>Get Started</button>
                    {/* </Link> */}
                
            
                <img src="/api/images/ill" className={style.mainill} layout="fill" />
            
            
            
            
            
        </div>
       
        <div className={style.sec2}>
            <h1>Hi,We are UNIHELP</h1>
            <p>We cover all the bases that will spell out the Uni life that you have always wanted.
                Say goodbye to the hassles of packing the essentials, from bedding to stationery to food, everything you need to kickstart a new phase of your life away from home, we got it all under one roof!</p>
                <div className={style.card}>
                {arr.map( (element,key) => {
                    
                    return (
                        <div className={style.card1} key={element.key} style={{background:'#fff'}   }  >
                        
                            <div className={style.miniCard} style={element.myStyle} >
                                <div className={style.content}>
                                    {/* {element.element} */}
                                    <img src={element.element} alt="" />
                                    <h3>{element.title}</h3>
                                </div>
                                
                            </div>
                            <div className={style.cardList}>
                                <h2 style={{padding:'15px 0 '}}>Title</h2>
                                    <a href="#" className={style.cardLink}>
                                        <div className={style.innerContent}>
                                            
                                            {element.data.map((val,key) => {
                                               
                                                return(
                                                    < >
                                                    <div className={style.listSectionLeft} >
                                                        <p>{key + 1}</p>
                                                    </div>
                                                        <div className={style.listSectionRight}   >
                                                        <p className={style.sectionTitle}>{val.title}</p>
                                                        <p className={style.sectionDescription}>{val.description}</p>
                                                    </div>
                                                    </>
                                                )
                                            })}
                                            
                                        </div>
                                    </a>
                            </div>
                        </div>
                    )
                }) }
                    <div className={style.card1} style={{background:"#fff"}}>
                        <Link href="/contact">
                            <div className={style.miniCard} style={{ background: "linear-gradient(209.21deg, rgb(64, 141, 213) 13.57%, rgb(99, 11, 140) 98.38%)", borderRadius: "25px" }} >
                                <div className={style.content}  >

                                    <img src="/api/images/Forms" />
                                    <h3>Book a free consultation</h3>
                                </div>
                            </div>
                        </Link>
                        
                        <div className={style.cardList}>
                            <form action="" method="post" style={{padding:"20px",textAlign:"center"}}>
                                <input type="text" placeholder="Name*" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })}  />
                                <input type="text" placeholder="Email*" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })}  />
                                <input type="text" placeholder="Phone Number*" value={form.number} onChange={(e) => setForm({ ...form, number: e.target.value })}  />
                                <input type="text" placeholder="Country*" value={form.country} onChange={(e) => setForm({...form,country:e.target.value})} />
                                <input type="button" value="Submit" className={style.button} style={{maxWidth:"200px"}} onSubmit={e => {
                                    axios.post("/api/sendmail",form).then(res => console.log(res) )
                                }} onClick={e => {
                                    axios.post("/api/sendmail", form).then(res => console.log(res))
                                }}  />
                            </form >
                        </div>
                    </div>
                </div>
                
        
        </div>
       
        <FounderPage data={founderData} />
        <div className={style.footer}>

        </div>
        </>
        
    )
}

