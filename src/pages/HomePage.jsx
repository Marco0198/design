import React from 'react'
import './HomePage.css'
import logo from '../assets/memi-logo.png'
import TreeLifeAg from '../assets/TreeLife-Ag.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
// import layoutimage from './assets/group-25.png'
import NavigationBar from '../components/NavigationBar.jsx'
import Layout from '../components/Layout'
const HomePage = () => {
    const element = <FontAwesomeIcon icon={faEnvelope} />
    return (
        <>
        <Layout showLogo={true}></Layout>
        </>
    )
}

export default HomePage