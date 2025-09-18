import React from "react";
import { Outlet } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { IMG } from "./theme";
import Header from "./Header.jsx";
import Footer from "./Footer.jsx";
import ScrollProgressThin from "./ScrollProgressThin.jsx";

export default function Layout({ onLangToggle }) {
  const { i18n } = useTranslation();

  React.useEffect(() => {
    document.documentElement.dir = i18n.language?.startsWith("ar") ? "rtl" : "ltr";
  }, [i18n.language]);

  return (
    <div
      className="min-h-screen"
      style={{ backgroundImage: `url(${IMG.textures.paper})`, backgroundSize: "200px 200px" }}
    >
      <ScrollProgressThin />
      <Header onLangToggle={onLangToggle} />
      <Outlet />
      <Footer />
    </div>
  );
}
