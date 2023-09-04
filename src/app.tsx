import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { CarritoCompraPage } from "./carritoCompra";

import { NavBar } from "./components/Navbar";

import { ItemList } from "./components/ItemList";
import { CartContent } from "./components/CartContent";
import { ShoppingCartProvider } from "./contexts/ShoppingCartContext";

export const App = () => {
  return (
    <ShoppingCartProvider>
      <Router>
        <NavBar />

        <Routes>
          <Route path="/" element={<ItemList />} />
          <Route path="/cart" element={<CartContent />} />
        </Routes>
      </Router>
    </ShoppingCartProvider>
  );
};
