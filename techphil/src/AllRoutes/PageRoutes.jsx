import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Header } from "../components/navbar/Header";
import { Footer } from "../components/footer/Footer";
import { Layout } from "../pages/home/Layout";
import { Cart } from "../pages/cart/Cart";
import { Contact } from "../pages/contact/Contact";
import { OrderStatus } from "../pages/status/OrderStatus";
import { ShopContextProvider } from "../context/UserContext";

export const PageRoutes = () => {
  return (
    <>
      <ShopContextProvider>
        <BrowserRouter>
          <section>
            <Header />
            <Routes>
              <Route path="/" element={<Layout />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/status" element={<OrderStatus />} />
            </Routes>
            <Footer />
          </section>
        </BrowserRouter>
      </ShopContextProvider>
    </>
  );
};
