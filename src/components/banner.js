import React from "react"
import bannerImg from "../imgs/heroImage.jpg"
import "../css/banner.css"

export default function Banner() {
    return (
        <div className="banner">
            <img src={bannerImg} alt="banner.jpg"/> 
        </div>
        
    )
}
