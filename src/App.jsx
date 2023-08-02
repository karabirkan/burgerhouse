import "./App.css";
import Layout from "./components/Layout/Layout";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Menu from "./pages/Menu";
import PageNotFound from "./pages/PageNotFound";
import OrderNow from "./pages/OrderNow";
import Help from "./pages/Help";
import Catering from "./pages/Catering";
import Blog from "./pages/Blog";

function App() {
  return (
    <>
      <div>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<PageNotFound />} />
            <Route path="/menu" element={<Menu />} />
            <Route path="/ordernow" element={<OrderNow />} />
            <Route path="/help" element={<Help />} />
            <Route path="/catering" element={<Catering />} />
            <Route path="/blog" element={<Blog />} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
