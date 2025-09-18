// src/Contact.jsx
import React from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import i18n from "./i18n";
import { PALETTE, IMG } from "./theme";
import ContactForm from "./ContactForm.jsx";

/* ----------------- Inject NEW translations (EN + AR) here ----------------- */
const CONTACT_LOCALIZED = {
  en: {
    contactExtra: {
      quick: {
        tag: "Quick contact",
        items: [
          { l: "Email", v: "egywin@me.com", href: "mailto:egywin@me.com" },
          { l: "Phone", v: "+20 1222131118", href: "tel:+201222131118" },
          { l: "WhatsApp", v: "+20 1222131118", href: "https://wa.me/201222131118" },
        ],
      },
      hours: {
        tag: "Business hours",
        rows: [
          "Saturday–Thursday: 9:00–18:00",
          "Friday: Closed",
        ],
      },
      areas: {
        tag: "Service areas",
        lead: "Cairo & Giza as standard; nationwide projects on request.",
        list: ["New Cairo", "Nasr City", "Heliopolis", "Sheikh Zayed", "6th of October"],
      },
      office: {
        tag: "Office / Workshop",
        lines: [
          "New Cairo, 5th Settlement",
          "Cairo, Egypt",
        ],
      },
      map: {
        tag: "Location",
        note: "Approximate location — contact us for a pinned map before your visit.",
        alt: "Map / location placeholder",
      },
      visit: {
        tag: "Book a site visit",
        steps: [
          { h: "Share details", d: "Send your area & window/door count or a simple sketch." },
          { h: "Schedule", d: "Pick a convenient time for measurement." },
          { h: "Measure", d: "Our engineer measures and confirms specifications." },
          { h: "Quote", d: "You receive a clear proposal with options." },
        ],
      },
      faq: {
        tag: "FAQs",
        list: [
          { q: "Do you remove old frames?", a: "Yes—clean removal and responsible waste handling." },
          { q: "Payment terms?", a: "Typical split between down payment, fabrication and post-installation." },
          { q: "Warranty?", a: "Profile & hardware per manufacturer + installation workmanship warranty." },
        ],
      },
      cta: {
        title: "Need a quick estimate?",
        desc: "Send basic dimensions or photos—our team will get back shortly.",
        browse: "Browse Products",
        quote: "Request a Quote",
      },
    },
  },
  ar: {
    contactExtra: {
      quick: {
        tag: "تواصل سريع",
        items: [
          { l: "البريد الإلكتروني", v: "egywin@me.com", href: "mailto:egywin@me.com" },
          { l: "الهاتف", v: "+20 1222131118", href: "tel:+201222131118" },
          { l: "واتساب", v: "+20 1222131118", href: "https://wa.me/201222131118" },
        ],
      },
      hours: {
        tag: "ساعات العمل",
        rows: [
          "السبت–الخميس: 9:00–18:00",
          "الجمعة: مغلق",
        ],
      },
      areas: {
        tag: "نطاق الخدمة",
        lead: "القاهرة والجيزة بشكل أساسي؛ مشاريع على مستوى الجمهورية عند الطلب.",
        list: ["القاهرة الجديدة", "مدينة نصر", "هليوبوليس", "الشيخ زايد", "6 أكتوبر"],
      },
      office: {
        tag: "المكتب / الورشة",
        lines: [
          "القاهرة الجديدة، التجمع الخامس",
          "القاهرة، مصر",
        ],
      },
      map: {
        tag: "الموقع",
        note: "موقع تقريبي — راسلنا للحصول على موقع مُثبّت قبل الزيارة.",
        alt: "صورة موقع / خريطة",
      },
      visit: {
        tag: "حجز زيارة ميدانية",
        steps: [
          { h: "إرسال التفاصيل", d: "المساحة وعدد النوافذ/الأبواب أو رسمة بسيطة." },
          { h: "تحديد الموعد", d: "اختر وقتًا مناسبًا للقياس." },
          { h: "القياس", d: "مهندسنا يقيس ويؤكّد المواصفات." },
          { h: "العرض", d: "سوف تستلم عرضًا واضحًا مع الخيارات." },
        ],
      },
      faq: {
        tag: "الأسئلة الشائعة",
        list: [
          { q: "هل تُزيلون الإطارات القديمة؟", a: "نعم — إزالة نظيفة والتخلص الآمن من المخلفات." },
          { q: "شروط الدفع؟", a: "تقسيم معتاد بين دفعة مقدمة والتصنيع وما بعد التركيب." },
          { q: "الضمان؟", a: "ضمان من المصنع للبروفيلات والملحقات + ضمان تركيب." },
        ],
      },
      cta: {
        title: "تحتاج تقديرًا سريعًا؟",
        desc: "أرسل أبعادًا أساسية أو صورًا — وسنرد عليك سريعًا.",
        browse: "تصفح المنتجات",
        quote: "اطلب عرض سعر",
      },
    },
  },
};
// Merge without clobbering existing keys
i18n.addResourceBundle("en", "translation", CONTACT_LOCALIZED.en, true, true);
i18n.addResourceBundle("ar", "translation", CONTACT_LOCALIZED.ar, true, true);
/* --------------------------- end translations --------------------------- */

function Card({ children }) {
  return (
    <div className="rounded-2xl p-6 bg-white" style={{ border: `1px solid ${PALETTE.border}`, color: PALETTE.cacao }}>
      {children}
    </div>
  );
}
function Pill({ children }) {
  return (
    <span className="inline-flex items-center px-3 h-8 rounded-full text-sm font-semibold"
          style={{ background: PALETTE.linen, border: `1px solid ${PALETTE.border}`, color: PALETTE.cacao }}>
      {children}
    </span>
  );
}

export default function Contact() {
  const { t } = useTranslation();

  const quick = t("contactExtra.quick.items", { returnObjects: true, defaultValue: [] });
  const hours = t("contactExtra.hours.rows", { returnObjects: true, defaultValue: [] });
  const areas = t("contactExtra.areas.list", { returnObjects: true, defaultValue: [] });
  const office = t("contactExtra.office.lines", { returnObjects: true, defaultValue: [] });
  const steps = t("contactExtra.visit.steps", { returnObjects: true, defaultValue: [] });
  const faqs = t("contactExtra.faq.list", { returnObjects: true, defaultValue: [] });

  return (
    <main className="py-16" style={{ color: PALETTE.cacao }}>
      <div className="max-w-7xl mx-auto px-4 grid lg:grid-cols-[1.1fr_.9fr] gap-10 items-start">
        {/* Left: Form + Visit steps */}
        <div className="space-y-6">
          <ContactForm />

          {/* Visit steps */}
          <Card>
            <div className="text-xl font-black mb-2">{t("contactExtra.visit.tag")}</div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3">
              {steps.map((s, i) => (
                <div key={i} className="rounded-xl p-4 bg-white"
                     style={{ border: `1px solid ${PALETTE.border}`, color: PALETTE.cacao }}>
                  <div className="text-2xl font-black" style={{ color: PALETTE.caramel }}>
                    {String(i + 1).padStart(2, "0")}
                  </div>
                  <div className="mt-1 font-bold">{s.h}</div>
                  <p className="text-sm" style={{ color: PALETTE.cacaoSoft }}>{s.d}</p>
                </div>
              ))}
            </div>
          </Card>
        </div>

        {/* Right: Info panel */}
        <div className="space-y-6">
          {/* Quick contact */}
          <Card>
            <div className="text-xl font-black mb-2">{t("contactExtra.quick.tag")}</div>
            <div className="grid gap-2">
              {quick.map((q, i) => (
                <div key={i} className="flex items-center justify-between">
                  <div className="text-sm" style={{ color: PALETTE.cacaoSoft }}>{q.l}</div>
                  <a href={q.href} className="font-bold" style={{ color: PALETTE.caramel }}>
                    {q.v}
                  </a>
                </div>
              ))}
            </div>
          </Card>

          {/* Business hours */}
          <Card>
            <div className="text-xl font-black mb-2">{t("contactExtra.hours.tag")}</div>
            <div className="grid gap-1 text-sm" style={{ color: PALETTE.cacao }}>
              {hours.map((h, i) => (<div key={i}>{h}</div>))}
            </div>
          </Card>

          {/* Service areas */}
          <Card>
            <div className="text-xl font-black mb-2">{t("contactExtra.areas.tag")}</div>
            <p className="text-sm mb-2" style={{ color: PALETTE.cacaoSoft }}>{t("contactExtra.areas.lead")}</p>
            <div className="flex flex-wrap gap-2">
              {areas.map((a, i) => (<Pill key={i}>{a}</Pill>))}
            </div>
          </Card>

          {/* Office / Workshop + Map placeholder */}
          <Card>
            <div className="text-xl font-black mb-2">{t("contactExtra.office.tag")}</div>
            <div className="text-sm" style={{ color: PALETTE.cacaoSoft }}>
              {office.map((ln, i) => (<div key={i}>{ln}</div>))}
            </div>

            <div className="mt-3 rounded-xl overflow-hidden"
                 style={{ border: `1px solid ${PALETTE.border}`, background: "white" }}>
              <img
                src={IMG.projects?.[2] || IMG.hero}
                alt={t("contactExtra.map.alt")}
                className="w-full h-44 object-cover"
              />
            </div>
            <div className="mt-1 text-xs" style={{ color: PALETTE.cacaoSoft }}>
              {t("contactExtra.map.note")}
            </div>
          </Card>

          {/* FAQ */}
          <Card>
            <div className="text-xl font-black mb-2">{t("contactExtra.faq.tag")}</div>
            <div className="grid gap-3">
              {faqs.map((f, i) => (
                <div key={i} className="rounded-xl p-4 bg-white"
                     style={{ border: `1px solid ${PALETTE.border}` }}>
                  <div className="font-bold">{f.q}</div>
                  <p className="text-sm mt-1" style={{ color: PALETTE.cacaoSoft }}>{f.a}</p>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </div>

      {/* CTA band */}
      <section className="mt-12 py-12" style={{ background: PALETTE.cream }}>
        <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-4">
          <div>
            <h3 className="text-xl font-black" style={{ color: PALETTE.cacao }}>
              {t("contactExtra.cta.title")}
            </h3>
            <p className="text-sm" style={{ color: PALETTE.cacaoSoft }}>
              {t("contactExtra.cta.desc")}
            </p>
          </div>
          <div className="flex gap-3">
            <Link
              to="/products"
              className="inline-flex items-center px-5 py-3 rounded-xl font-extrabold shadow"
              style={{ background: PALETTE.caramel, color: "white" }}
            >
              {t("contactExtra.cta.browse")}
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center px-5 py-3 rounded-xl font-extrabold"
              style={{ border: `2px solid ${PALETTE.caramel}`, color: PALETTE.caramel }}
            >
              {t("contactExtra.cta.quote")}
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
