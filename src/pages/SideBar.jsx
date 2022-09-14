import React from 'react'
import './sidebar.css'
const SideBar = () => {
  return (<>
  <div className="header"> </div>
  <input type="checkbox" className="openSidebarMenu" id="openSidebarMenu"/>
  <label for="openSidebarMenu" className="sidebarIconToggle">
    <div className="spinner diagonal part-1"></div>
    <div className="spinner horizontal"></div>
    <div className="spinner diagonal part-2"></div>
  </label>
  <div id="sidebarMenu">
    <ul className="sidebarMenuInner">
      {/* <li>Jelena Jovanovic <span>Web Developer</span></li>
      <li><a href="https://vanila.io" target="_blank">Company</a></li>
      <li><a href="https://instagram.com/plavookac" target="_blank">Instagram</a></li>
      <li><a href="https://twitter.com/plavookac" target="_blank">Twitter</a></li>
      <li><a href="https://www.youtube.com/channel/UCDfZM0IK6RBgud8HYGFXAJg" target="_blank">YouTube</a></li>
      <li><a href="https://www.linkedin.com/in/plavookac/" target="_blank">Linkedin</a></li> */}
    </ul>
  </div>
  <div id='center' className="main center">
  <div id="big_diamond">
  <div className="diamond"></div>

  <div className="diamond"></div>
  <div className="diamond"></div>
  <div className="diamond" id="red"></div>
  <div className="diamond"></div>
  <div className="diamond"></div>
  <div className="diamond"></div>
  <div className="diamond"></div>
</div>
<div className="footer"></div>
  </div>
 
  </>

  )
}

export default SideBar