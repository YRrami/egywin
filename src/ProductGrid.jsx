import React from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { PALETTE } from "./theme";

export default function ProductGrid({ limit }) {
  const { t } = useTranslation();
  const list = t("products.list", { returnObjects: true, defaultValue: [] });
  const items = typeof limit === "number" ? list.slice(0, limit) : list;

  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {items.map((p, i) => (
        <article
          key={i}
          className="group rounded-2xl overflow-hidden"
          style={{ border: `1px solid ${PALETTE.border}`, background: PALETTE.linen }}
        >
          <div className="relative">
            <img
              src={p.img}
              alt={p.name}
              className="w-full h-52 object-cover [transition:transform_700ms] group-hover:scale-[1.05]"
            />
            <div
              className="absolute inset-0"
              style={{ background: "linear-gradient(180deg, rgba(0,0,0,0.18), transparent)" }}
            />
          </div>
          <div className="p-5">
            <h3 className="font-black text-lg" style={{ color: PALETTE.cacao }}>
              {p.name}
            </h3>
            <p className="text-sm mt-1" style={{ color: PALETTE.cacaoSoft }}>
              {p.desc}
            </p>
            <div className="mt-3 flex justify-between items-center">
              <Link to="/contact" className="font-bold" style={{ color: PALETTE.caramel }}>
                Get Specs
              </Link>
              <svg width="18" height="18" viewBox="0 0 16 16">
                <path
                  d="M2 8h12M8 2l6 6-6 6"
                  stroke={PALETTE.caramel}
                  strokeWidth="1.6"
                  fill="none"
                  strokeLinecap="round"
                />
              </svg>
            </div>
          </div>
        </article>
      ))}
    </div>
  );
}
