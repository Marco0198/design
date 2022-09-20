import React from 'react'
import './Layout.css'
import NavigationBar from './NavigationBar'
import logo from '../assets/memi-logo.png'

const Layout = (props) => {
    return (
        <>
            <div className="clipboard1">
                {props.showLogo ? <img src={logo} alt="Cloudy Sky" /> : ""}
            </div>
            <div className="container-box">
                {props.children}
            </div>
            <NavigationBar />
            <div className="clipboard">
            </div>
        </>


    )
}

export default Layout