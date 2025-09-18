import React from "react";
import { useTranslation } from "react-i18next";
import { PALETTE } from "./theme";

export default function ContactForm() {
  const { t, i18n } = useTranslation();
  const dirRtl = i18n.language?.startsWith("ar");
  const [ok, setOk] = React.useState(false);

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        const honey = e.currentTarget.querySelector('input[name="company"]');
        if (honey && honey.value) return; // spam bot
        setOk(true);
        setTimeout(() => setOk(false), 3500);
      }}
      className="rounded-2xl p-6 shadow bg-white"
      style={{ border: `1px solid ${PALETTE.border}`, color: PALETTE.cacao }}
    >
      {/* honeypot */}
      <input type="text" name="company" className="hidden" tabIndex={-1} autoComplete="off" />

      <h3 className="text-xl font-black mb-2">
        {t("contact.title", "Start your next project with us")}
      </h3>
      <p className="mb-4" style={{ color: PALETTE.cacaoSoft }}>
        {t("contact.lead", "Send a message — our team replies fast.")}
      </p>

      <div className="grid sm:grid-cols-2 gap-4">
        <label className="grid gap-1">
          <span className="text-sm font-bold">{dirRtl ? "الاسم" : "Name"}</span>
          <input
            className="rounded-xl px-3 py-2"
            required
            placeholder={dirRtl ? "اسمك" : "Your name"}
            style={{ border: `1px solid ${PALETTE.border}`, color: PALETTE.cacao }}
          />
        </label>

        <label className="grid gap-1">
          <span className="text-sm font-bold">Email</span>
          <input
            type="email"
            className="rounded-xl px-3 py-2"
            required
            placeholder="you@email.com"
            style={{ border: `1px solid ${PALETTE.border}`, color: PALETTE.cacao }}
          />
        </label>

        <label className="sm:col-span-2 grid gap-1">
          <span className="text-sm font-bold">{dirRtl ? "رسالتك" : "Message"}</span>
          <textarea
            className="rounded-xl px-3 py-2 min-h-[120px]"
            required
            placeholder={dirRtl ? "كيف نساعدك؟" : "How can we help?"}
            style={{ border: `1px solid ${PALETTE.border}`, color: PALETTE.cacao }}
          />
        </label>
      </div>

      <button
        type="submit"
        className="mt-4 inline-flex items-center px-5 py-3 rounded-xl font-extrabold shadow"
        style={{ background: PALETTE.caramel, color: "white" }}
      >
        {t("contact.submit", "Send Message")}
      </button>

      {ok && (
        <div
          className="mt-3 rounded-xl p-3"
          style={{ color: "#1f6b3a", background: "#EAF7EF", border: "1px solid #BFE5CB" }}
        >
          Thanks! We will contact you soon.
        </div>
      )}

      {/* Contact details */}
      <div className="mt-5 text-sm" style={{ color: PALETTE.cacaoSoft }}>
        <div>
          <b>{t("contact.email")}:</b> <a href="mailto:egywin@me.com">egywin@me.com</a>
        </div>
        <div>
          <b>{t("contact.phone")}:</b> <a href="tel:+201222131118">+20 1222131118</a>
        </div>
        <div>
          <b>Web:</b>{" "}
          <a href="https://www.egywin.com" target="_blank" rel="noreferrer">
            www.egywin.com
          </a>
        </div>
      </div>
    </form>
  );
}
