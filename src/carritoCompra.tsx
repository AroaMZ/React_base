import React from "react";
import { useNavigate } from "react-router-dom";

export const CarritoCompraPage: React.FC = () => {
    const navigate = useNavigate();

    const handleNavigation = () => {
        navigate("/");
    }


    return (
        <>
      <button onClick={handleNavigation}>carritoCompra</button>
        </>
    );
};



