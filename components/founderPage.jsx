import React from "react"
import style from "../styles/founder.module.css"
export default function FounderPage(props) {
    return(
        <div className={style.founderPage}>
            <h1>Meet the Founders</h1>
            <h3>Unihelp is our brainchild that came into inception through our very own lived encounters and the whirlwind of emotions that we experienced while studying in UK.Having gone throughit all,we made it our moto to make the experience of settling down abroad amazing,comfortable,easy and well,memorable!</h3>
            <div className={style.parentCard}>
                {props.data.map((element) => {
                
                    return(
                        
                        <div className={style.founderPageCard}>
                           
                                <img src={element.imgLink} alt="" />
                                <h3>{element.name}</h3>
                                <p>{element.Role}</p>
                                <div className={style.icons}>
                                    <a href={element.twitterLink} target="_blank">
                                        <img src="/api/images/twitter-brands" alt=""  />
                                    </a>
                                    <a href={element.linkedinLink} target="_blank">
                                        <img src="/api/images/linkedin-brands" alt="" />
                                    </a>
                                   
                                </div>

                            
                            
                        </div>
                    )
                })}
            </div>
            
        </div>
    )
}