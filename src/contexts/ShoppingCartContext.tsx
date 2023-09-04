import React, { createContext, useState } from "react";
import { PictureInfo, SelectedCheck } from "../components/viewModel";


export const CartContext = createContext(null);

export const ShoppingCartProvider = ({children}) => {
    const [cart, setCart] = useState<PictureInfo[]>([]);
    const [check, setCheck] = useState<SelectedCheck>({selected: true})
    


    return <CartContext.Provider value={{cart, setCart, check, setCheck}}>{children}</CartContext.Provider>;
}