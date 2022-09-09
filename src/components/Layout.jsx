import React from 'react'
import './Layout.css'
import NavigationBar from './NavigationBar'
const Layout = (props) => {
    return (

        <> 
        <div className="clipboard1">
        </div>
        <div className="container  ">
               {props.children}
              
        </div> 
        <NavigationBar/>
        <div className="clipboard">
        
        </div>
   
        </>
        

    )
}

export default Layout