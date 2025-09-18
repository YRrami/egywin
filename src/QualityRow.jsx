import React from "react";
import { useTranslation } from "react-i18next";
import { PALETTE } from "./theme";

export default function QualityRow() {
  const { t } = useTranslation();

  const items = t("quality.items", {
    returnObjects: true,
    defaultValue: [
      "ISO-aligned quality control",
      "Saint-Gobain glazing",
      "Adopen uPVC profiles",
      "Kale Kilit hardware",
    ],
  });

  return (
    <div className="border-y" style={{ borderColor: PALETTE.border, background: PALETTE.linen }}>
      <div
        className="max-w-7xl mx-auto px-4 py-4 grid grid-cols-2 sm:grid-cols-4 gap-3 text-sm font-bold"
        style={{ color: PALETTE.cacao }}
      >
        {items.map((x, i) => (
          <div key={i} className="flex items-center gap-2">
            <span
              className="inline-block w-1.5 h-1.5 rounded-full"
              style={{ background: PALETTE.caramel }}
            />
            {x}
          </div>
        ))}
      </div>
    </div>
  );
}
