import React from "react";

/** Merge class names safely */
export const cn = (...s) => s.filter(Boolean).join(" ");

/** Y-parallax hook (respects prefers-reduced-motion) */
export function useParallax(factor = 0.22) {
  const [y, setY] = React.useState(0);
  React.useEffect(() => {
    const mql = window.matchMedia?.("(prefers-reduced-motion: reduce)");
    const calc = () => setY(mql?.matches ? 0 : window.scrollY * factor);
    calc();
    const on = () => calc();
    window.addEventListener("scroll", on, { passive: true });
    window.addEventListener("resize", on);
    return () => {
      window.removeEventListener("scroll", on);
      window.removeEventListener("resize", on);
    };
  }, [factor]);
  return y;
}

/** Lock body scroll while `open` is true (mobile drawers, modals) */
export function useLockBody(open) {
  React.useEffect(() => {
    const original = document.body.style.overflow;
    if (open) document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = original;
    };
  }, [open]);
}

/** Run handler when Escape is pressed */
export function useOnEscape(handler) {
  React.useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") handler?.();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [handler]);
}
