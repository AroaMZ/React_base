import React from "react";
import { useContext } from "react";
import { CartContext } from "../contexts/ShoppingCartContext";





export const CartElements = () => {
    const {cart} = useContext(CartContext);
    return cart.map((product)=>{
      return(
        <div key={product.id}>
          <div>{product.name}</div>
        </div>
      )
    })
  }
