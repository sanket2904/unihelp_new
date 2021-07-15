import React from "react"
export default function Top({nav,setNav}) {
    return(
        <div className="top" onClick={() => setNav(!nav)}>
            <img src="/api/images/logo" alt="" />
            <img src="/api/images/menu" alt="" className="menu" />
        </div>
    )
}