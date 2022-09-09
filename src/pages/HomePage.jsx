import React from 'react'
import './HomePage.css'
import logo from '../assets/memi-logo.png'
import TreeLifeAg from '../assets/TreeLife-Ag.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
// import layoutimage from './assets/group-25.png'
import NavigationBar from '../components/NavigationBar.jsx'
const HomePage = () => {
    const element = <FontAwesomeIcon icon={faEnvelope} />
    return (
        <>
            <div className="clipboard1">
                <img src={logo} alt="Cloudy Sky" />
            </div>
            <div className="clipboard" >
                <div className="achild">
                    <img src={TreeLifeAg} alt="Cloudy Sky" />
                </div>
            </div>
            <div className="aparent">
                <div style={{ height: "200px" }}>
                    <img src={TreeLifeAg} alt="Cloudy Sky" />
                </div>
                
            </div>
        </>
    )
}

export default HomePage