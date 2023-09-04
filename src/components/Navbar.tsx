import React, { useContext } from "react";
import ".././index.css";
import { CartContext } from "../contexts/ShoppingCartContext";
import { Link } from "react-router-dom";


export const NavBar = () => {
    // const [cart, setCart] = useContext(CartContext);
    const { cart, setCart } = useContext(CartContext);

    const quantity = cart.length
    return(
        <nav>
            <Link to={"/"}>
                <h2>Store</h2>
            </Link>
           
            <ul className="nav-list">
                <Link to={"/cart"}>
                <li>
                    cart items: <span className="cart-count">{quantity}</span>
                </li>
                </Link>
            </ul>
        </nav>
    )
}