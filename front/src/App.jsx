import React from "react";
import { Route, Routes } from "react-router-dom";
import ProductModal from "./components/ProductModal/ProductModal";
import Home from "./pages/Home/Home";
import Shop from "./pages/Shop/Shop";
import Newss from "./pages/News";
import Cart from "./pages/Cart/Cart";
import ThankYou from "./pages/ThankYou/ThankYou";
import Orders from "./pages/Orders/Orders";
import PageNotFound from "./pages/PageNotFound/PageNotFound";
import { ModalProvider } from "./hooks/ModalContext";
import { CartProvider } from "./hooks/CartContext";
function App() {
  return (
    <ModalProvider>
      <CartProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/news" element={<Newss />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/thankyou" element={<ThankYou />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/*" element={<PageNotFound />} />
        </Routes>
        <ProductModal />
      </CartProvider>
    </ModalProvider>
  );
}

export default App;
