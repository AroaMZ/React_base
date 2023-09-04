import React, { useContext } from "react";
import storeItems from "../data/products.json";

import { CartContext } from "../contexts/ShoppingCartContext";

export const ItemList = () => {
  const { cart, setCart } = useContext(CartContext);
  const { check, setCheck } = useContext(CartContext);
  console.log(check);

  const addImageToCart = (product) => {
    setCart([...cart, product]);
  };

  // const removeImageFromCart = (product) => {
  //   cart.filter((product) => product !== true);
  // };

  const handleOnChange = (product) => {
    setCheck(!check);
    if(check==true){
      addImageToCart(product)
      console.log("add", product)
    }
    // } else {
    //   removeImageFromCart(product)
    //   console.log("delete", product)
    // }
  };

  return storeItems.map((product, index) => {
    return (
      <div className="Item-box" key={product.id}>
        <div className="imagen">
          {product.imgUrl}
          <div className="name">{product.name}</div>
          <input
            type="checkbox"
            id="cartCheck"
            checked={check[index]}
            // onChange={handleOnChange}
            onChange={handleOnChange}
    
          />
        </div>
      </div>
    );
  });
};
