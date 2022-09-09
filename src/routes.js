import React, { Component } from "react";
import { BrowserRouter as Router, Route,Routes, Link, Switch } from "react-router-dom";
import Catalogue from "./pages/Catalogue";
import HomePage from "./pages/HomePage";
// import Overview from "./component/overview/overview";
// import UsersList from "./component/userslist/UsersList";
// import FavUserList from "./component/userslist/FavUserList";

const routes = (
  <Routes>
    <>
    {/* <Catalogue/> */}
    <Route exact path="/" element={<HomePage/>}/>
    <Route path="/catalogue" element={<Catalogue/>}/></>
  
  
  </Routes>
);

export default routes;