import React from "react";
import { useTranslation } from "react-i18next";
import { IMG, PALETTE } from "./theme";

export default function BeforeAfter() {
  const { t } = useTranslation();
  const [val, setVal] = React.useState(58);

  return (
    <div
      className="rounded-2xl overflow-hidden"
      style={{ border: `1px solid ${PALETTE.border}`, background: "white", color: PALETTE.cacao }}
    >
      <div className="p-4">
        <h4 className="font-black mb-2">
          {t("beforeAfter.title", "Before & After — noise / heat")}
        </h4>

        <div className="relative aspect-[16/10] rounded-xl overflow-hidden">
          <img
            src={IMG.gallery[0]}
            alt={t("beforeAfter.before", "Before")}
            className="absolute inset-0 w-full h-full object-cover"
          />
          <img
            src={IMG.gallery[1]}
            alt={t("beforeAfter.after", "After")}
            className="absolute inset-0 w-full h-full object-cover"
            style={{ clipPath: `inset(0 ${100 - val}% 0 0)` }}
          />
          <div className="absolute inset-y-0" style={{ left: `calc(${val}% - 1px)` }}>
            <div className="h-full w-[2px]" style={{ background: PALETTE.caramel }} />
            <div
              className="absolute top-1/2 -translate-y-1/2 -left-2 text-white text-xs px-2 py-1 rounded"
              style={{ background: PALETTE.caramel }}
            >
              {val}%
            </div>
          </div>
        </div>

        <input
          aria-label={t("beforeAfter.slider", "Reveal slider")}
          type="range"
          min="0"
          max="100"
          value={val}
          onChange={(e) => setVal(Number(e.target.value))}
          className="w-full mt-3"
        />
      </div>
    </div>
  );
}
