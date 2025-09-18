import React from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import i18n from "./i18n";
import HeroPro from "./HeroPro.jsx";
import QualityRow from "./QualityRow.jsx";
import ProductGrid from "./ProductGrid.jsx";
import { IMG, PALETTE } from "./theme";

/* --- Inject NEW translations here (merged into the 'translation' namespace) --- */
const HOME_LOCALIZED = {
  en: {
    home: {
      // keep using your existing keys (featured, ctaBrowse, ctaQuote, ctaAll...)
      systems: {
        tag: "Systems we build",
        list: [
          { h: "Casement Windows", d: "Top sealing, great ventilation and clean sightlines.", i: 0 },
          { h: "Sliding Windows", d: "Space-saving with smooth travel and wide views.", i: 1 },
          { h: "Tilt & Turn", d: "Dual opening for safe ventilation and easy cleaning.", i: 3 },
          { h: "Lift & Slide Doors", d: "Large panes, featherlight action and perfect sealing.", i: 2 },
        ],
      },
      benefits: {
        tag: "Benefits at a glance",
        lead: "Engineered to be quiet, efficient and secure — with clean, careful installation.",
        list: [
          "Thermal comfort (U-values from ~1.6 W/m²K)",
          "Acoustic reduction up to 38–45 dB",
          "Multi-point locking & reinforced frames",
          "Weather-tight gaskets and precise tolerances",
          "Local after-sales support",
        ],
      },
      specs: {
        tag: "Specs snapshot",
        list: [
          { l: "U-value", v: "from ~1.6 W/m²K" },
          { l: "Sound reduction", v: "up to 38–45 dB" },
          { l: "Glass", v: "Saint-Gobain insulated glazing" },
          { l: "Profiles", v: "uPVC (Adopen)" },
          { l: "Hardware", v: "Kale Kilit / multipoint" },
          { l: "Sealing", v: "High-quality gaskets" },
        ],
      },
      faq: {
        tag: "FAQs",
        list: [
          { q: "Do you retrofit existing openings?", a: "Yes. We measure, fabricate and install with minimal disruption." },
          { q: "Typical lead time?", a: "Around 10–20 working days depending on scope and finish." },
          { q: "Do you work nationwide?", a: "We are Cairo-based and handle nationwide projects on request." },
        ],
      },
      ctaBand2: {
        title: "Upgrade your thermal & acoustic comfort",
        desc: "Browse systems or request a quick estimate with our team.",
      },
    },
  },
  ar: {
    home: {
      systems: {
        tag: "الأنظمة التي نقدّمها",
        list: [
          { h: "نوافذ مفصلية", d: "إحكام عالٍ وتهوية ممتازة وخطوط نظيفة.", i: 0 },
          { h: "نوافذ منزلقة", d: "توفير للمساحة بحركة سلسة ورؤية واسعة.", i: 1 },
          { h: "تلت آند تيرن", d: "فتح بطريقتين لتهوية آمنة وتنظيف سهل.", i: 3 },
          { h: "أبواب ليفت آند سلايد", d: "ألواح كبيرة بحركة خفيفة وإحكام مثالي.", i: 2 },
        ],
      },
      benefits: {
        tag: "مزايا سريعة",
        lead: "مصمّمة للهدوء والكفاءة والأمان — مع تركيب نظيف بعناية.",
        list: [
          "راحة حرارية (قيم U حتى ~1.6 W/m²K)",
          "خفض ضجيج حتى 45–38 ديسيبل",
          "إقفال متعدد النقاط وإطارات معزّزة",
          "جوانات إحكام وتلرانسات دقيقة",
          "دعم وخدمة محلية بعد البيع",
        ],
      },
      specs: {
        tag: "ملخّص المواصفات",
        list: [
          { l: "قيمة U", v: "حتى ~1.6 W/m²K" },
          { l: "خفض الضجيج", v: "حتى 45–38 ديسيبل" },
          { l: "الزجاج", v: "سان-غوبان معزول" },
          { l: "البروفيلات", v: "uPVC (Adopen)" },
          { l: "الملحقات", v: "Kale Kilit / متعدد النقاط" },
          { l: "الإحكام", v: "جوانات عالية الجودة" },
        ],
      },
      faq: {
        tag: "الأسئلة الشائعة",
        list: [
          { q: "هل تركّبون على فتحات قائمة؟", a: "نعم. نقيس ونصنّع ونركّب بأقل قدر من الإزعاج." },
          { q: "ما مدة التنفيذ المعتادة؟", a: "حوالي 10–20 يوم عمل حسب النطاق والتشطيب." },
          { q: "هل تعملون في جميع المحافظات؟", a: "مقرّنا القاهرة وننفّذ مشاريع على مستوى الجمهورية عند الطلب." },
        ],
      },
      ctaBand2: {
        title: "طوّر عزل الحرارة والصوت لديك",
        desc: "تصفّح الأنظمة أو اطلب تقديرًا سريعًا مع فريقنا.",
      },
    },
  },
};
// Merge (deep) without clobbering existing keys
i18n.addResourceBundle("en", "translation", HOME_LOCALIZED.en, true, true);
i18n.addResourceBundle("ar", "translation", HOME_LOCALIZED.ar, true, true);
/* --- end translations injection --- */

function Dot() {
  return <span className="inline-block w-1.5 h-1.5 rounded-full" style={{ background: PALETTE.caramel }} />;
}

export default function Home() {
  const { t } = useTranslation();

  const systems = t("home.systems.list", { returnObjects: true, defaultValue: [] });
  const benefits = t("home.benefits.list", { returnObjects: true, defaultValue: [] });
  const specs = t("home.specs.list", { returnObjects: true, defaultValue: [] });
  const faqs = t("home.faq.list", { returnObjects: true, defaultValue: [] });

  return (
    <main>
      <HeroPro />
      <QualityRow />

      {/* Featured */}
      <section className="py-16" style={{ background: "white", color: PALETTE.cacao }}>
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-sm font-extrabold uppercase tracking-widest" style={{ color: PALETTE.caramel }}>
            {t("home.featured")}
          </h2>
          <div className="mt-6"><ProductGrid limit={3} /></div>
          <div className="mt-8 flex gap-3">
            <Link
              to="/products"
              className="inline-flex items-center px-5 py-3 rounded-xl font-extrabold shadow"
              style={{ background: PALETTE.caramel, color: "white" }}
            >
              {t("home.ctaAll", "All Products")}
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center px-5 py-3 rounded-xl font-extrabold"
              style={{ border: `2px solid ${PALETTE.caramel}`, color: PALETTE.caramel }}
            >
              {t("home.ctaQuote", "Get a Quote")}
            </Link>
          </div>
        </div>
      </section>

      {/* Systems we build */}
      <section className="py-16" style={{ background: PALETTE.cream }}>
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-2xl font-black" style={{ color: PALETTE.cacao }}>
            {t("home.systems.tag")}
          </h2>
          <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {systems.map((s, i) => (
              <article key={i} className="rounded-2xl overflow-hidden bg-white"
                       style={{ border: `1px solid ${PALETTE.border}`, color: PALETTE.cacao }}>
                <div className="h-40 overflow-hidden">
                  <img src={IMG.prod[s.i]} alt={s.h} className="w-full h-full object-cover" />
                </div>
                <div className="p-4">
                  <div className="font-bold flex items-center gap-2"><Dot /> {s.h}</div>
                  <p className="mt-1 text-sm" style={{ color: PALETTE.cacaoSoft }}>{s.d}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16" style={{ background: "white" }}>
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-2xl font-black" style={{ color: PALETTE.cacao }}>
            {t("home.benefits.tag")}
          </h2>
          <p className="mt-1 text-sm" style={{ color: PALETTE.cacaoSoft }}>
            {t("home.benefits.lead")}
          </p>
          <ul className="mt-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {benefits.map((b, i) => (
              <li key={i} className="rounded-xl p-4 bg-white"
                  style={{ border: `1px solid ${PALETTE.border}`, color: PALETTE.cacao }}>
                <div className="flex items-center gap-2 font-semibold">
                  <Dot /> <span>{b}</span>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Specs snapshot */}
      <section className="py-16" style={{ background: PALETTE.linen }}>
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-2xl font-black" style={{ color: PALETTE.cacao }}>
            {t("home.specs.tag")}
          </h2>
          <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {specs.map((s, i) => (
              <div key={i} className="rounded-xl p-4 bg-white"
                   style={{ border: `1px solid ${PALETTE.border}`, color: PALETTE.cacao }}>
                <div className="text-xs uppercase tracking-wider" style={{ color: PALETTE.cacaoSoft }}>{s.l}</div>
                <div className="font-bold mt-1">{s.v}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16" style={{ background: "white" }}>
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-2xl font-black" style={{ color: PALETTE.cacao }}>
            {t("home.faq.tag")}
          </h2>
          <div className="mt-6 grid md:grid-cols-3 gap-4">
            {faqs.map((f, i) => (
              <div key={i} className="rounded-2xl p-5 bg-white"
                   style={{ border: `1px solid ${PALETTE.border}`, color: PALETTE.cacao }}>
                <div className="font-bold">{f.q}</div>
                <p className="mt-1 text-sm" style={{ color: PALETTE.cacaoSoft }}>{f.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA band */}
      <section className="py-12" style={{ background: PALETTE.cream }}>
        <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-4">
          <div>
            <h3 className="text-xl font-black" style={{ color: PALETTE.cacao }}>
              {t("home.ctaBand2.title")}
            </h3>
            <p className="text-sm" style={{ color: PALETTE.cacaoSoft }}>
              {t("home.ctaBand2.desc")}
            </p>
          </div>
          <div className="flex gap-3">
            <Link
              to="/products"
              className="inline-flex items-center px-5 py-3 rounded-xl font-extrabold shadow"
              style={{ background: PALETTE.caramel, color: "white" }}
            >
              {t("home.ctaBrowse")}
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center px-5 py-3 rounded-xl font-extrabold"
              style={{ border: `2px solid ${PALETTE.caramel}`, color: PALETTE.caramel }}
            >
              {t("home.ctaQuote")}
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
