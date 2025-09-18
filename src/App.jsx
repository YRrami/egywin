import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";

import Layout from "./Layout.jsx";
import Home from "./Home.jsx";
import About from "./About.jsx";
import Products from "./Products.jsx";
import Contact from "./Contact.jsx";

function ScrollToTop() {
  const { pathname } = useLocation();
  React.useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [pathname]);
  return null;
}

export default function App() {
  const { i18n } = useTranslation();
  const toggleLang = () => {
    const next = i18n.language?.startsWith("ar") ? "en" : "ar";
    i18n.changeLanguage(next);
    localStorage.setItem("appLang", next);
  };

  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route element={<Layout onLangToggle={toggleLang} />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="products" element={<Products />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<Home />} />
        </Route>
      </Routes>
    </>
  );
}
