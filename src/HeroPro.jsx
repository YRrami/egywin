import React from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { IMG, PALETTE } from "./theme";
import { useParallax } from "./utils";

function Corner({ className }) {
  return (
    <svg className={className} viewBox="0 0 60 60" fill="none" aria-hidden="true">
      <path d="M59 1H21a20 20 0 0 0-20 20v38" stroke={PALETTE.brass} strokeWidth="1.5" />
    </svg>
  );
}

function GearSvg({ className, color = PALETTE.caramel }) {
  return (
    <svg className={className} viewBox="0 0 120 120" fill="none" aria-hidden="true">
      <g transform="translate(60,60)">
        <circle r="50" stroke={color} strokeWidth="2.2" fill="transparent" />
        {Array.from({ length: 12 }).map((_, i) => (
          <rect
            key={i}
            x="-3"
            y="-62"
            width="6"
            height="12"
            rx="1.5"
            transform={`rotate(${(i * 360) / 12})`}
            fill={color}
            opacity="0.85"
          />
        ))}
        <circle r="22" stroke={color} strokeWidth="1.8" fill="transparent" />
      </g>
    </svg>
  );
}

export default function HeroPro() {
  const { t } = useTranslation();
  const y = useParallax(0.22);
  const feats = t("home.bullets", { returnObjects: true, defaultValue: [] });

  return (
    <section id="home" className="relative isolate overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <img
          src={IMG.hero}
          alt={t("home.heroAlt", "uPVC windows and doors in a modern space")}
          className="w-full h-[92vh] object-cover"
          style={{ transform: `translateY(${y * -0.45}px)` }}
        />
        <div
          className="absolute inset-0"
          style={{
            background: `radial-gradient(1200px 520px at 75% 15%, transparent, ${PALETTE.cream}), linear-gradient(180deg, ${PALETTE.cream}, transparent 35%, ${PALETTE.cream})`,
          }}
        />
      </div>

      <Corner className="absolute top-0 start-0 w-16 h-16 opacity-70" />
      <Corner className="absolute bottom-0 end-0 w-16 h-16 opacity-70 rotate-180" />

      <div className="max-w-7xl mx-auto px-4 pt-12 pb-10 grid lg:grid-cols-[1.1fr_.9fr] items-center gap-10">
        <div>
          <p className="tracking-[0.35em] text-xs sm:text-sm" style={{ color: PALETTE.cacaoSoft }}>
            {t("home.pre", "EGYWIN")}
          </p>
          <h1
            className="mt-2 text-4xl sm:text-5xl lg:text-6xl font-black leading-tight"
            style={{ color: PALETTE.cacao }}
          >
            <span className="inline-block" style={{ color: PALETTE.caramel }}>
              {t("home.titleA")}
            </span>
            <br />
            <span className="inline-block">{t("home.titleB")}</span>
            <br />
            <span className="inline-block">{t("home.titleC")}</span>
          </h1>
          <p className="mt-3 max-w-prose text-base sm:text-lg" style={{ color: PALETTE.cacaoSoft }}>
            {t("home.subtitle")}
          </p>

          <ul className="mt-4 flex flex-wrap gap-2">
            {feats.map((f, i) => (
              <li
                key={i}
                className="inline-flex items-center px-3 h-8 rounded-full text-sm font-semibold border"
                style={{ background: PALETTE.linen, borderColor: PALETTE.border, color: PALETTE.cacao }}
              >
                <span
                  className="me-2 inline-block w-1.5 h-1.5 rounded-full"
                  style={{ background: PALETTE.caramel }}
                />
                {f}
              </li>
            ))}
          </ul>

          <div className="mt-6 flex flex-wrap gap-3">
            <Link
              to="/products"
              className="inline-flex items-center px-5 py-3 rounded-xl font-extrabold shadow hover:-translate-y-0.5 hover:shadow-lg transition"
              style={{ background: PALETTE.caramel, color: "white" }}
            >
              {t("home.ctaBrowse")}
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center px-5 py-3 rounded-xl font-extrabold"
              style={{ border: `2px solid ${PALETTE.caramel}`, color: PALETTE.caramel }}
            >
              ▷ &nbsp; {t("home.ctaQuote")}
            </Link>
          </div>
        </div>

        <div className="relative hidden md:block">
          <div className="absolute -top-10 -end-6 w-40 h-40 opacity-80 animate-spin-slow">
            <GearSvg />
          </div>
          <div
            className="rounded-3xl p-6 backdrop-blur-md shadow-xl"
            style={{ background: "rgba(255,255,255,0.65)", border: `1px solid ${PALETTE.border}`, color: PALETTE.cacao }}
          >
            <div className="relative rounded-2xl overflow-hidden border" style={{ borderColor: PALETTE.border }}>
              <img
                src={IMG.heroInset}
                alt={t("home.insetAlt", "Slim uPVC frame")}
                className="w-full h-56 object-cover"
              />
              <div
                className="absolute inset-0 pointer-events-none"
                style={{ background: "radial-gradient(400px 140px at 80% 10%, transparent, rgba(252,247,241,.8))" }}
              />
              <span
                className="absolute top-3 start-3 text-xs font-bold px-2 py-1 rounded"
                style={{ background: PALETTE.caramel, color: "white" }}
              >
                {t("common.signature", "Signature")}
              </span>
            </div>
            <p className="mt-3 text-sm" style={{ color: PALETTE.cacaoSoft }}>
              {t(
                "home.cardText",
                "Refined profiles, generous glass, perfect seals. A timeless palette that pairs classical warmth with industrial precision."
              )}
            </p>
          </div>
        </div>
      </div>

      <style>{`.animate-spin-slow{animation:spin 26s linear infinite}@keyframes spin{from{transform:rotate(0)}to{transform:rotate(360deg)}}`}</style>
    </section>
  );
}
