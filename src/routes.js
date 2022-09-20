import React, { Component } from "react";
import { BrowserRouter as Router, Route,Routes, Link, Switch } from "react-router-dom";
import Catalogue from "./pages/Catalogue";
import HomePage from "./pages/HomePage";
import Product from "./pages/Product";
import SideBar from "./pages/SideBar";
const routes = (
  <Routes>
    <> 
    <Route exact path="/" element={<HomePage/>}/>
    <Route path="/catalogue" element={<Catalogue/>}/>
    <Route path="/product" element={<Product/>}/>
    <Route path="/laser" element={ <SideBar/>}/>
    </>
  </Routes>
);

export default routes;