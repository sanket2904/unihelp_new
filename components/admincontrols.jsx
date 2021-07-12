import React, { useEffect, useState } from "react"
import style from "../styles/admindash.module.css"
import dynamic from "next/dynamic"
import $, { data } from "jquery"
import axios from "axios"



const Loader = dynamic(() => import("./loader"))
export default function AdminDash() {
    
    const [toggle,setToggle] = useState(false)
    const [nav,setNav] = useState(false)
    const [feature,setFeature] = useState(false)
    const [add,setAdd] = useState({
        mainTitle:"",
        imgLink:""
        

    })
    let [init,setInit] = useState([])
    const fetchedData = async (id) => {
        const data = axios.get(`/api/addFeature/${id}`).then(response => {
            setInit(response.data)
        })
        
        
    }
    
    let [dataitem, setdataItem] = useState([{
        name:"",
        price:""
    }])
    let [newData, setnewData] = useState({
        title:"",
        Description:"",
        price:"",
        imageLink:"",
        items:dataitem
    })
    
    let [edit,setEdit] = useState(false)
    let [data,setData] = useState([])
    useEffect(() => {
        axios.get("/api/addFeature").then(response => {
            setData(response.data)
            

        }).catch(err => {
            console.log("tumse nai ho payega")
        })
    },[])
    
    const [handler,setHandler] = useState(false)
    
   
    async function changeEvent(e,height,width,feature,className) {
        
        
        if(feature) {
            
            
            
            
            setTimeout(() => {
                
                document.querySelector(`.admindash_feature__2G8Mj`).classList.add(style.gobigger)
                $(`.${style.uppercontainer}`).addClass(`${style.uppercontaineractive}`)
            },152)
            
        }
        else {
            
            setTimeout(() => {
                document.querySelector(`.admindash_feature__2G8Mj`).classList.remove(style.gobigger)

                document.querySelector(`.admindash_feature__2G8Mj`).classList.add(style.gosmaller)
            },152)
            
        }
        
        
        setTimeout(() => {
            
            setFeature(feature)
            
        },150)
    }
    if(toggle) return (
        <div className={style.admindash}>
            {
                nav && <div className={style.usernav} >

                </div>
            }
            <div className={style.nav}>
                <Logo />
                <div className={style.options}>
                    <div className={style.active} onClick={() => {setToggle(false)}} >
                        <Dashicon fill="#f2f6ff" />
                        <h1 style={{ color: "#f2f6ff", fontWeight: 400, fontSize: "22px" }}>Dashboard</h1>

                    </div>
                    <div className={style.active} style={{ backgroundColor: "#f2f6ff", borderRadius: "15px" }} onClick={() => { setToggle(true) }} >
                        <SettingIcon fill="#1f1f47" />
                        <h1 style={{ color: "#1f1f47", fontWeight: 400, fontSize: "22px" }}>
                            Settings
                        </h1>
                    </div>

                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
            </div>
            <div className={style.center}>
                <h1 style={{fontSize:"36px"}}>Settings</h1>
                <div className={style.features}>
                    {
                        
                    }
                    {!feature && <>
                    
                    <div className={style.feature} onClick={(e) => {
                        
                        changeEvent(e, "700px", "700px", true,style.feature)
                        
                }}>
                        <PlusSvg fill="#1f1f47" />
                        <h1>Add a feature</h1>
                        
                    </div>
                        {
                            data.map((item) => {
                                
                                if (!edit) return (
                                    <div className={style.feature} key={item._id} id={item._id} onClick={ async () =>{
                                        const data = await axios.get(`/api/addFeature/${item._id}`).then(async response => {
                                            await setInit(response.data)
                                            
                                            
                                        })
                                        
                                        setEdit(true)
                                        
                                        }} >
                                        <h1 style={{ gridColumn: "1/-1", justifySelf:"center" }} >{item.title}</h1>
                                    </div>
                                )
                                else return (
                                    
                                    <div className={`${style.feature} ${style.gobigger} `} key={item.data._id} style={{gridTemplateColumns:"1fr 1fr 1fr"}}>
                                        <Backsvg fill="#1f1f47" onClick={(e) => {
                                            setEdit(false)
                                            document.querySelector(".admindash_gobigger__3wfdZ").classList.remove("admindash_gobigger__3wfdZ")

                                        }
                                        } />    
                                        
                                        <div className={style.items} style={{justifySelf:"left",margin:"50px"}}>
                                            {
                                                init.data.map((data) => {
                                                    
                                                    return (
                                                        
                                                        <div key={data._id}  style={{display:"flex"}} >
                                                            <h1 style={{backgroundColor:"aliceblue",padding:"20px 40px",margin:"15px 0"}} onClick={ async (e) => {
                                                               
                                                                const dataa = await axios.get(`/api/addFeature/${init._id}/${data._id}/items`).then( async (response) => {
                                                                    await setInit(response.data)
                                                                    await console.log(response)
                                                                })
                                                            }} >{data.title || data.name} </h1>
                                                            
                                                            <DeleteSvg fill="black" style={{position:"static !important"}} onClick={(e) => {
                                                                axios.delete(`/api/addFeature/${init._id}/${data._id}`)
                                                            }} />
                                                        </div>
                                                    )
                                                })
                                            }
                                        </div>
                                        <div className={style.addingItems} style={{justifySelf:"center",alignSelf:"center",gridColumn:"2/3",display:"flex",flexDirection:"column"}}>
                                            <h1>Adding an Entry</h1>
                                            <input type="text" placeholder="Title" onChange={(e) => {
                                                setnewData({
                                                    ...newData,
                                                    title:e.target.value
                                                })
                                            }} />
                                            <input type="text" placeholder="Desciption" onChange={(e) => {
                                                setnewData({
                                                    ...newData,
                                                    Description: e.target.value
                                                })
                                            }} />
                                            <input type="text" placeholder="Price" onChange={(e) => {
                                                setnewData({
                                                    ...newData,
                                                    price: e.target.value
                                                })
                                            }} />
                                            <input type="text" placeholder="ImageLink" onChange={(e) => {
                                                setnewData({
                                                    ...newData,
                                                    imageLink: e.target.value
                                                })
                                            }} />
                                            {/* <button style={{ backgroundColor:"#1f1f47",color:"#fff",height:"40px",borderRadius:"25px"}}>Submit</button> */}
                                        </div>
                                        <div className={style.subItems} style={{gridColumn:"3"}}>
                                            <h1>Add Items</h1>
                                            <form action="/api/testDatabase" method="POST" className="itemform" >
                                                
                                            {
                                                dataitem.map((items,key) => {
                                                    
                                                    
                                                    return(
                                                        <div className = {style.manage}>
                                                            <input type="text" placeholder="Item Title" name="title" onChange={e => {
                                                                let init = dataitem
                                                                init[key].name = e.target.value
                                                               
                                                            }} />
                                                            <input type="text" placeholder="Price"  name="price" onChange={e => {
                                                                let init = dataitem
                                                                init[key].price = e.target.value
                                                                
                                                            }} />
                                                        
                                                        </div >
                                                    )
                                                })
                                            }
                                            <PlusSvg onClick={() => {
                                                setdataItem([...dataitem, {
                                                    
                                                }])
                                                

                                            }} />
                                                <input type="submit" value="Submit" style={{ backgroundColor: "#1f1f47", color: "#fff", height: "40px", borderRadius: "25px" }} onClick={(e) => {

                                                e.preventDefault()
                                                    console.log(item._id)
                                                newData["items"] = dataitem 

                                                    axios.post(`/api/addFeature/${init._id}`,newData).then((response) => console.log(response) )
                                                    
                                            }} />
                                            </form>
                                        </div>
                                        
                                    </div>
                                )
                            })
                        }
                    </>
                    }
                    {
                        feature && <div className={style.feature} >
                            <Backsvg fill="#1f1f47"  onClick={(e) => {
                                changeEvent(e, "320px", "155px", false, style.feature)

                            }
                            } />
                            <div className={style.uppercontainer} >
                                <h1 style={{ fontSize: "32px" }}>Add a feature</h1>
                                <div className={style.addingform1}>
                                    
                                    <h2>Main title</h2>
                                    <input type="text"  placeholder="Title" onChange={(e) => (setAdd({
                                        ...add,
                                        mainTitle:e.target.value
                                    }))} />
                                    <input type="text" placeholder="ImageLink" onChange={(e) => (setAdd({
                                        ...add,
                                        imgLink:e.target.value
                                    }))} />
                                    <button type="submit" onClick={(e) => {
                                        axios.post("/api/addFeature", add, {
                                            // headers: {
                                            //     Authorization: `Bearer ${window.session.token}`
                                            // }
                                        },).then(res => {
                                            if(res.data.message === "Entry Added") setHandler(true)
                                        } )
                                    }}> Submit</button>

                                    {
                                        
                                            handler && <div className={style.status}>
                                                <h1>Entry Added</h1>
                                            </div>
                                    }
                                    
                                </div>
                                
                            </div>
                        </div>
                    }
                </div>
            </div>
            <div className={style.admininfo}>
                <Signout fill="#1f1f47" />
                <div className={style.photo}>

                </div>
                <h1>Raj Agarwal</h1>
                <p>agarwalsanket29@gmail.com</p>
                <div className={style.infosection}>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>

            </div>
            
        </div>
    )
    else if (!toggle) return(
        <div className={style.admindash}>
            <div className={style.nav}>
                <Logo />
                <div className={style.options} >
                    <div className={style.active} style={{ backgroundColor: "#f2f6ff", borderRadius: "15px" }} onClick={() => { setToggle(false) }}>
                        <Dashicon fill="#1f1f47" />
                        <h1 style={{ color:"#1f1f47",fontWeight:400,fontSize:"22px"}}>Dashboard</h1>
                       
                    </div>
                    <div className={style.active} onClick={(e) => { 
                       
                        setToggle(!toggle) 
                        }}>
                        <SettingIcon fill="#f2f6ff" />
                        <h1 style={{ color: "#f2f6ff", fontWeight: 400, fontSize: "22px" }}>
                            Settings
                        </h1>
                    </div>
                    
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
            </div>
            <div className={style.center}>
               <div className={style.textdata}>
                   <h1>Hello,Raj</h1>
                   <p>Welcome back!</p>
               </div>
               <div className={style.analytics}>
                   <div className={style.sales}>
                       
                   </div>
                   <div className={style.secondary}>

                   </div>
                   <div className={style.third}>

                   </div>
               </div>
            </div>
            
            <div className={style.admininfo}>
                <Signout fill="#1f1f47" />
                <div className={style.photo}>

                </div>
                <h1>Raj Agarwal</h1>
                <p>agarwalsanket29@gmail.com</p>
                <div className={style.infosection}>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
               
            </div>
        </div>
    )
}
 

function Logo() {
    return(
        <svg width="184" height="129" viewBox="0 0 184 129" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M41.4682 35.843V49.4226C41.4682 51.6788 40.7602 53.463 39.3442 54.7751C37.9376 56.0873 36.0118 56.7434 33.5669 56.7434C31.1596 56.7434 29.248 56.1062 27.832 54.8318C26.416 53.5574 25.6938 51.8062 25.6655 49.5784V35.843H29.9135V49.4509C29.9135 50.8009 30.2345 51.7874 30.8764 52.4104C31.5278 53.024 32.4246 53.3308 33.5669 53.3308C35.9552 53.3308 37.1683 52.0753 37.206 49.5642V35.843H41.4682ZM61.7172 56.4602H57.4692L49.1997 42.8948V56.4602H44.9516V35.843H49.1997L57.4834 49.4368V35.843H61.7172V56.4602ZM69.9443 56.4602H65.6963V35.843H69.9443V56.4602Z" fill="#FEFEFE" />
            <path d="M87.4867 56.4602H83.2387V47.6243H74.955V56.4602H70.7069V35.843H74.955V44.1975H83.2387V35.843H87.4867V56.4602ZM103.615 47.5251H95.4589V53.0476H105.031V56.4602H91.2108V35.843H105.003V39.2839H95.4589V44.1975H103.615V47.5251ZM111.771 53.0476H120.791V56.4602H107.523V35.843H111.771V53.0476ZM127.489 49.196V56.4602H123.241V35.843H131.284C132.832 35.843 134.192 36.1262 135.362 36.6926C136.542 37.259 137.448 38.0662 138.081 39.114C138.713 40.1524 139.03 41.3372 139.03 42.6682C139.03 44.6884 138.336 46.2838 136.948 47.4543C135.57 48.6155 133.658 49.196 131.213 49.196H127.489ZM127.489 45.7551H131.284C132.407 45.7551 133.262 45.4908 133.847 44.9622C134.442 44.4335 134.739 43.6783 134.739 42.6965C134.739 41.6864 134.442 40.8699 133.847 40.2468C133.252 39.6238 132.431 39.3028 131.383 39.2839H127.489V45.7551Z" fill="white" />
            
        </svg>

    )
}
function Dashicon({fill}) {
    return(
        <svg version="1.0" xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 512.000000 512.000000" preserveAspectRatio="xMidYMid meet" fill="blue">

            <g transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)" fill="#000000" stroke="none">
                <path d="M275 5106 c-111 -35 -190 -104 -239 -206 l-31 -65 0 -570 0 -570 33 -67 c40 -82 119 -157 200 -190 l57 -23 840 -3 c603 -2 857 0 900 8 160 31 274 145 305 305 8 42 10 216 8 580 -3 517 -3 520 -26 577 -33 81 -108 160 -190 200 l-67 33 -875 2 c-688 2 -884 -1 -915 -11z" fill= {fill} />
                <path d="M3049 5106 c-106 -28 -209 -121 -251 -224 l-23 -57 -3 -1160 c-2 -838 0 -1177 8 -1220 31 -160 145 -274 305 -305 43 -8 297 -10 900 -8 l840 3 57 23 c81 33 160 108 200 190 l33 67 0 1210 0 1210 -31 65 c-40 84 -100 144 -182 183 l-67 32 -870 2 c-667 1 -881 -1 -916 -11z" fill={fill}/>
                <path d="M300 2979 c-112 -22 -217 -107 -268 -217 l-27 -57 0 -1210 0 -1210 31 -65 c39 -83 101 -145 184 -184 l65 -31 890 0 890 0 67 33 c82 40 157 119 190 200 l23 57 3 1160 c2 838 0 1177 -8 1220 -30 157 -142 271 -298 304 -64 13 -1672 14 -1742 0z" fill={fill} />
                <path d="M3065 1696 c-150 -37 -255 -148 -285 -301 -8 -42 -10 -215 -8 -580 3 -517 3 -520 26 -577 33 -81 108 -160 190 -200 l67 -33 890 0 890 0 67 32 c82 39 142 99 182 183 l31 65 0 570 0 570 -33 67 c-40 82 -119 157 -200 190 l-57 23 -855 2 c-649 1 -867 -1 -905 -11z" fill={fill} />
            </g>
        </svg>
    )
}
function SettingIcon({fill}) {
    return(
        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill={fill} className="bi bi-gear-fill" viewBox="0 0 16 16">
            <path d="M9.405 1.05c-.413-1.4-2.397-1.4-2.81 0l-.1.34a1.464 1.464 0 0 1-2.105.872l-.31-.17c-1.283-.698-2.686.705-1.987 1.987l.169.311c.446.82.023 1.841-.872 2.105l-.34.1c-1.4.413-1.4 2.397 0 2.81l.34.1a1.464 1.464 0 0 1 .872 2.105l-.17.31c-.698 1.283.705 2.686 1.987 1.987l.311-.169a1.464 1.464 0 0 1 2.105.872l.1.34c.413 1.4 2.397 1.4 2.81 0l.1-.34a1.464 1.464 0 0 1 2.105-.872l.31.17c1.283.698 2.686-.705 1.987-1.987l-.169-.311a1.464 1.464 0 0 1 .872-2.105l.34-.1c1.4-.413 1.4-2.397 0-2.81l-.34-.1a1.464 1.464 0 0 1-.872-2.105l.17-.31c.698-1.283-.705-2.686-1.987-1.987l-.311.169a1.464 1.464 0 0 1-2.105-.872l-.1-.34zM8 10.93a2.929 2.929 0 1 1 0-5.86 2.929 2.929 0 0 1 0 5.858z" />
        </svg>
    )
}
function Signout({fill}){
    
    return (
        
        <svg onClick={() => data.setNav(!nav)} aria-hidden="true" focusable="false" width="30" height="30" data-prefix="far" data-icon="user-circle" className="svg-inline--fa fa-user-circle fa-w-16" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512"><path fill={fill} d="M248 104c-53 0-96 43-96 96s43 96 96 96 96-43 96-96-43-96-96-96zm0 144c-26.5 0-48-21.5-48-48s21.5-48 48-48 48 21.5 48 48-21.5 48-48 48zm0-240C111 8 0 119 0 256s111 248 248 248 248-111 248-248S385 8 248 8zm0 448c-49.7 0-95.1-18.3-130.1-48.4 14.9-23 40.4-38.6 69.6-39.5 20.8 6.4 40.6 9.6 60.5 9.6s39.7-3.1 60.5-9.6c29.2 1 54.7 16.5 69.6 39.5-35 30.1-80.4 48.4-130.1 48.4zm162.7-84.1c-24.4-31.4-62.1-51.9-105.1-51.9-10.2 0-26 9.6-57.6 9.6-31.5 0-47.4-9.6-57.6-9.6-42.9 0-80.6 20.5-105.1 51.9C61.9 339.2 48 299.2 48 256c0-110.3 89.7-200 200-200s200 89.7 200 200c0 43.2-13.9 83.2-37.3 115.9z"></path></svg>
    )
}
function PlusSvg({fill,onClick}) {
    return (
        <svg onClick={onClick} xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill={fill} className="bi bi-plus-circle-fill" viewBox="0 0 16 16">
            <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.5 4.5a.5.5 0 0 0-1 0v3h-3a.5.5 0 0 0 0 1h3v3a.5.5 0 0 0 1 0v-3h3a.5.5 0 0 0 0-1h-3v-3z" />
        </svg>
    )
}
function Backsvg({fill,onClick}) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" onClick={onClick} width="30" height="30" fill={fill} className="bi bi-caret-left-square" viewBox="0 0 16 16">
            <path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z" />
            <path d="M10.205 12.456A.5.5 0 0 0 10.5 12V4a.5.5 0 0 0-.832-.374l-4.5 4a.5.5 0 0 0 0 .748l4.5 4a.5.5 0 0 0 .537.082z" />
        </svg>
    )
}
function DeleteSvg({fill,onClick,style}) {
    return(
        <svg style={{position:"static !important"}} onClick={onClick} xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill={fill} className="bi bi-trash" viewBox="0 0 16 16">
            <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z" />
            <path fillRule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z" />
        </svg>
    )
}