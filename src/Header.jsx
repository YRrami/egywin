// src/Header.jsx
import React from "react";
import { createPortal } from "react-dom";
import { NavLink, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { PALETTE } from "./theme";
import { cn, useLockBody, useOnEscape } from "./utils";

function Drawer({ open, onClose, side = "right", children }) {
  // lock body scroll only when open
  useLockBody(open);
  useOnEscape(() => onClose?.());

  const [mounted, setMounted] = React.useState(false);
  React.useEffect(() => setMounted(true), []);

  const closedX = side === "left" ? "-100%" : "100%";
  const panelStyle =
    side === "left"
      ? { left: 0, right: "auto" }
      : { right: 0, left: "auto" };

  const portal = (
    <div
      className={cn(
        "fixed inset-0 z-[999]",
        open ? "pointer-events-auto" : "pointer-events-none"
      )}
      aria-hidden={!open}
    >
      {/* Backdrop */}
      <div
        className={cn("absolute inset-0 transition-opacity", open ? "opacity-100" : "opacity-0")}
        style={{ background: "rgba(0,0,0,0.35)" }}
        onClick={onClose}
      />

      {/* Panel */}
      <div
        className="fixed top-0 h-[100dvh] w-[82vw] max-w-[380px] bg-white shadow-xl overflow-y-auto overscroll-contain"
        style={{
          ...panelStyle,
          transform: open ? "translate3d(0,0,0)" : `translate3d(${closedX},0,0)`,
          transition: "transform .28s ease",
          willChange: "transform",
          borderLeft: side === "right" ? `1px solid ${PALETTE.border}` : undefined,
          borderRight: side === "left" ? `1px solid ${PALETTE.border}` : undefined,
        }}
        role="dialog"
        aria-modal="true"
        aria-label="Main menu"
      >
        {children}
      </div>
    </div>
  );

  return mounted ? createPortal(portal, document.body) : null;
}

export default function Header({ onLangToggle }) {
  const { t, i18n } = useTranslation();
  const isRtl = i18n.language?.startsWith("ar");
  const [open, setOpen] = React.useState(false);
  const loc = useLocation();

  // Close on route or language change to avoid mid-transition flips
  React.useEffect(() => setOpen(false), [loc.pathname, i18n.language]);

  const nav = [
    { to: "/", label: t("nav.home", "Home") },
    { to: "/products", label: t("nav.products", "Products") },
    { to: "/about", label: t("nav.about", "About") },
    { to: "/contact", label: t("nav.contact", "Contact") },
  ];

  return (
    <header
      className="sticky top-0 z-50"
      style={{
        background: "rgba(252,247,241,0.92)",
        backdropFilter: "blur(8px)",
        borderBottom: `1px solid ${PALETTE.border}`,
      }}
    >
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        <NavLink to="/" className="font-black tracking-[0.35em]" style={{ color: PALETTE.cacao }}>
          EGYWIN
        </NavLink>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-1">
          {nav.map((n) => (
            <NavLink
              key={n.to}
              to={n.to}
              className={({ isActive }) =>
                cn("px-3 py-2 text-sm font-semibold rounded-lg transition", isActive && "text-black")
              }
              style={({ isActive }) => ({
                color: isActive ? PALETTE.cacao : PALETTE.cacaoSoft,
              })}
            >
              <span className="relative">
                {n.label}
                <span
                  className="absolute start-0 -bottom-0.5 h-[2px] transition-all"
                  style={{
                    width: "100%",
                    background: PALETTE.caramel,
                    transform: "scaleX(var(--u,0))",
                  }}
                />
              </span>
            </NavLink>
          ))}
        </nav>

        {/* Lang + Hamburger */}
        <div className="flex items-center gap-2">
          <button
            onClick={onLangToggle}
            className="px-3 py-1 rounded-xl font-bold border hidden sm:inline-flex"
            style={{ borderColor: PALETTE.border, color: PALETTE.cacao }}
          >
            {t("nav.lang", "عربي")}
          </button>

          <button
            className="lg:hidden h-10 w-10 grid place-items-center rounded-xl"
            aria-label="Menu"
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => setOpen((o) => !o)}
            style={{ border: `1px solid ${PALETTE.border}`, color: PALETTE.cacao }}
          >
            <div className="space-y-1.5">
              <span className="block h-0.5 w-6" style={{ background: PALETTE.cacao }} />
              <span className="block h-0.5 w-6" style={{ background: PALETTE.cacao }} />
              <span className="block h-0.5 w-6" style={{ background: PALETTE.cacao }} />
            </div>
          </button>
        </div>
      </div>

      {/* Drawer rendered in a portal, direction-aware */}
      <Drawer open={open} onClose={() => setOpen(false)} side={isRtl ? "left" : "right"}>
        <div className="px-4 py-3 border-b" style={{ borderColor: PALETTE.border }}>
          <div className="flex items-center justify-between">
            <span className="font-black tracking-[0.35em]" style={{ color: PALETTE.cacao }}>
              EGYWIN
            </span>
            <button
              onClick={() => setOpen(false)}
              aria-label="Close menu"
              className="h-10 w-10 grid place-items-center rounded-xl"
              style={{ border: `1px solid ${PALETTE.border}`, color: PALETTE.cacao }}
            >
              ✕
            </button>
          </div>
        </div>

        <nav className="p-3">
          {nav.map((n) => (
            <NavLink
              key={n.to}
              to={n.to}
              onClick={() => setOpen(false)}
              className="block px-3 py-3 rounded-lg text-base font-semibold"
              style={{ color: PALETTE.cacaoSoft }}
            >
              {n.label}
            </NavLink>
          ))}

          <button
            onClick={() => {
              onLangToggle?.();
              setOpen(false);
            }}
            className="mt-2 w-full px-3 py-3 rounded-lg font-bold border text-left"
            style={{ borderColor: PALETTE.border, color: PALETTE.cacao }}
          >
            {t("nav.lang", "عربي")}
          </button>
        </nav>
      </Drawer>
    </header>
  );
}
