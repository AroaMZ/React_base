import React, { useContext } from "react";
import ".././index.css";
import { Link } from "react-router-dom";


export const NavBar = () => {
    return(
        <nav>
            <Link to={"/"}>
                <h2>Home</h2>
            </Link>
           
        </nav>
    )
}