import React from "react";
import { useTranslation } from "react-i18next";
import { PALETTE } from "./theme";
import ProductGrid from "./ProductGrid.jsx";
import BeforeAfter from "./BeforeAfter.jsx";

export default function Products() {
  const { t } = useTranslation();
  const feats = t("products.features.list", { returnObjects: true, defaultValue: [] });

  return (
    <main className="py-16" style={{ background: "white", color: PALETTE.cacao }}>
      <div className="max-w-7xl mx-auto px-4">
        <h1 className="text-3xl sm:text-4xl font-black">{t("products.tag", "Our Products")}</h1>
        <p className="mt-1" style={{ color: PALETTE.cacaoSoft }}>
          {t("products.tagline", "Windows & Doors — refined, efficient and durable.")}
        </p>

        <div className="mt-6">
          <ProductGrid />
        </div>

        <div className="mt-12 grid lg:grid-cols-[1.3fr_.7fr] gap-8">
          <div
            className="rounded-2xl overflow-hidden"
            style={{ border: `1px solid ${PALETTE.border}`, background: PALETTE.cream }}
          >
            <div className="p-6">
              <h3 className="font-black text-xl mb-2">{t("products.features.tag")}</h3>
              <ul className="grid sm:grid-cols-2 gap-4">
                {feats.map((f, i) => (
                  <li
                    key={i}
                    className="rounded-xl p-4 flex items-start gap-3 bg-white"
                    style={{ border: `1px solid ${PALETTE.border}` }}
                  >
                    <span className="inline-block w-1.5 h-1.5 rounded-full" style={{ background: PALETTE.caramel }} />
                    <div>
                      <div className="font-bold" style={{ color: PALETTE.cacao }}>
                        {f.h}
                      </div>
                      <p className="text-sm" style={{ color: PALETTE.cacaoSoft }}>
                        {f.d}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <BeforeAfter />
        </div>
      </div>
    </main>
  );
}
