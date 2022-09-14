import React, { Component } from "react";
import { BrowserRouter as Router, Route,Routes, Link, Switch } from "react-router-dom";
import Catalogue from "./pages/Catalogue";
import HomePage from "./pages/HomePage";
// import Laser from "./pages/Laser";
import Product from "./pages/Product";
import SideBar from "./pages/SideBar";
// import Overview from "./component/overview/overview";
// import UsersList from "./component/userslist/UsersList";
// import FavUserList from "./component/userslist/FavUserList";

const routes = (
  <Routes>

    <> 
   
    {/* <Catalogue/> */}
    <Route exact path="/" element={<HomePage/>}/>
    <Route path="/catalogue" element={<Catalogue/>}/>
    <Route path="/product" element={<Product/>}/>
    <Route path="/laser" element={ <SideBar/>}/>
    </>
  
  
  </Routes>
);

export default routes;