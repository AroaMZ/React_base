import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { NavBar } from "./components/Navbar";
import { HelloWorld } from "./components/Hello";
export const App = () => {
    return (
        <Router>
            <NavBar />
            <Routes>
                
           <Route path="/" element = {<HelloWorld />} />
            </Routes>
           
        </Router>
    )
}


