import React from "react"
import "../css/global.css"
import Header from "../components/header"
import Banner from "../components/banner"

export default function Index() {
    return (
        <React.Fragment>
            <Header/>
            <Banner/> 
        </React.Fragment>   
    )
}