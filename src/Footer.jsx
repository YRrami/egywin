import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { PALETTE } from "./theme";

export default function Footer() {
  const { t } = useTranslation();

  return (
    <>
      <footer
        className="py-10"
        style={{ background: "white", borderTop: `1px solid ${PALETTE.border}`, color: PALETTE.cacao }}
      >
        <div className="max-w-7xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <span className="font-extrabold tracking-[0.35em]">EGYWIN</span>
            <span style={{ color: PALETTE.cacaoSoft }}>{t("common.since", "Since 2006")}</span>
          </div>

          <nav className="text-sm flex flex-wrap gap-4 justify-center" style={{ color: PALETTE.cacaoSoft }}>
            <Link to="/products">{t("nav.products", "Products")}</Link>
            <Link to="/about">{t("nav.about", "About")}</Link>
            <Link to="/contact">{t("nav.contact", "Contact")}</Link>
          </nav>

          <div className="text-sm text-center" style={{ color: PALETTE.cacaoSoft }}>
            © {new Date().getFullYear()} EGYWIN. {t("footer.rights", "All rights reserved.")}
          </div>
        </div>
      </footer>

      <div
        className="text-center text-xs py-3"
        style={{ background: PALETTE.linen, borderTop: `1px solid ${PALETTE.border}`, color: PALETTE.cacaoSoft }}
      >
        {t("footer.made", "made with passion and precision by")}{" "}
        <a
          href="https://www.bimbolabs.xyz"
          target="_blank"
          rel="noreferrer"
          style={{ color: PALETTE.caramel }}
        >
          {t("footer.madeBy", "Bimbo Labs")}
        </a>{" "}
        {t("footer.site", "www.bimbolabs.xyz")}
      </div>
    </>
  );
}
