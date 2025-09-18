import React from "react";
import { useTranslation } from "react-i18next";
import { PALETTE, IMG } from "./theme";
import i18n from "./i18n";

/* ----------------- Inject NEW translations (EN + AR) here ----------------- */
const ABOUT_LOCALIZED = {
  en: {
    aboutExtra: {
      missionVision: {
        tag: "Mission & Vision",
        missionTitle: "Our Mission",
        missionText:
          "Design, manufacture and deliver high-performance uPVC windows and doors that enhance comfort, security and energy efficiency across Egypt—using advanced technology, premium materials and expert craftsmanship with long-term sustainability in mind.",
        visionTitle: "Our Vision",
        visionText:
          "To be Egypt’s leading provider of innovative, energy-efficient and sustainable uPVC solutions—setting the standard for quality, durability and customer satisfaction.",
      },
      philosophy: {
        tag: "Our Philosophy",
        lead:
          "Quality, integrity and innovation: every window and door is part of creating safe, efficient and comfortable spaces.",
        list: [
          "Precision & durability in every detail of our uPVC systems",
          "Honest craftsmanship for long-term client relationships",
          "Sustainable practices that reduce energy consumption",
          "Continuous improvement with modern technologies",
        ],
      },
      organization: {
        tag: "The Organization",
        team: [
          { name: "Ahmed N. Aboseada", role: "Chief Executive Officer" },
          { name: "Yassin A. Aboseada", role: "Co-Chief Executive Officer" },
          { name: "Mohamed N. Aboseada", role: "Marketing Director" },
        ],
      },
      productsSummary: {
        tag: "What We Make",
        list: [
          {
            h: "Casement Windows",
            d: "Excellent ventilation, strong sealing and security—multiple opening styles and finishes.",
            img: IMG?.prod?.[0],
          },
          {
            h: "Sliding Windows",
            d: "Space-saving operation with smooth travel and wide, unobstructed views.",
            img: IMG?.prod?.[1],
          },
          {
            h: "Roller Shutters (Aluminum)",
            d: "Sun, dust and noise protection with manual or motorized control, sourced from Madar.",
            img: IMG?.gallery?.[3],
          },
          {
            h: "uPVC Doors",
            d: "Entrance, balcony and patio doors—thermal insulation, acoustic comfort and security.",
            img: IMG?.prod?.[5],
          },
        ],
      },
      materials: {
        tag: "Materials & Partnerships",
        partners: [
          {
            name: "Adopen (uPVC Profiles)",
            bullets: [
              "High-performance, weather-resistant uPVC systems",
              "Excellent thermal insulation and structural integrity",
              "Eco-friendly and low-maintenance",
            ],
          },
          {
            name: "Saint-Gobain (Glass)",
            bullets: [
              "Superior thermal & acoustic insulation",
              "UV and solar control options",
              "Enhanced safety and clarity",
            ],
          },
          {
            name: "Kale Kilit (Hardware)",
            bullets: [
              "Durable locks, hinges and fittings",
              "Smooth functionality and modern finishes",
              "Enhanced security features",
            ],
          },
          {
            name: "Madar (Aluminum Roller Shutters)",
            bullets: [
              "Sun, noise and dust protection",
              "Manual or motorized operation",
              "Compatible with modern & traditional designs",
            ],
          },
        ],
      },
      cta: {
        title: "Ready to talk about your project?",
        desc: "Share a plan or request a site visit—our engineers will guide you to the right system.",
        browse: "Browse Products",
        quote: "Request a Quote",
      },
    },
  },
  ar: {
    aboutExtra: {
      missionVision: {
        tag: "الرسالة والرؤية",
        missionTitle: "رسالتنا",
        missionText:
          "تصميم وتصنيع وتسليم نوافذ وأبواب uPVC عالية الأداء تعزّز الراحة والأمان وكفاءة الطاقة في أنحاء مصر—اعتمادًا على تقنيات متقدمة ومواد عالية الجودة وحِرفة خبيرة وبمنظور استدامة طويل الأمد.",
        visionTitle: "رؤيتنا",
        visionText:
          "أن نكون المزود الرائد في مصر لحلول uPVC المبتكرة والموفّرة للطاقة والمستدامة—مع وضع معيار للجودة والمتانة ورضا العملاء.",
      },
      philosophy: {
        tag: "فلسفتنا",
        lead:
          "الجودة والنزاهة والابتكار: كل نافذة وباب جزء من صنع مساحات آمنة وفعّالة ومريحة.",
        list: [
          "دقّة ومتانة في كل تفصيلة ضمن أنظمة uPVC",
          "حِرفة صادقة لعلاقات طويلة الأمد مع عملائنا",
          "ممارسات مستدامة تقلّل استهلاك الطاقة",
          "تحسين مستمر بتبنّي أحدث التقنيات",
        ],
      },
      organization: {
        tag: "الهيكل التنظيمي",
        team: [
          { name: "أحمد ن. أبوسعدة", role: "المدير التنفيذي" },
          { name: "ياسين أ. أبوسعدة", role: "المدير التنفيذي المشارك" },
          { name: "محمد ن. أبوسعدة", role: "مدير التسويق" },
        ],
      },
      productsSummary: {
        tag: "ماذا نصنّع",
        list: [
          {
            h: "نوافذ مفصلية",
            d: "تهوية ممتازة وإحكام قوي وأمان—أنماط فتح وتشطيبات متعددة.",
            img: IMG?.prod?.[0],
          },
          {
            h: "نوافذ منزلقة",
            d: "توفير للمساحة بحركة سلسة ورؤية واسعة بدون عوائق.",
            img: IMG?.prod?.[1],
          },
          {
            h: "ستائر رول ألمنيوم",
            d: "حماية من الشمس والغبار والضجيج بتحكم يدوي أو كهربائي، من شركة مدار.",
            img: IMG?.gallery?.[3],
          },
          {
            h: "أبواب uPVC",
            d: "أبواب دخول وشُرفات وحدائق—عزل حراري وصوتي وأمان.",
            img: IMG?.prod?.[5],
          },
        ],
      },
      materials: {
        tag: "المواد والشراكات",
        partners: [
          {
            name: "Adopen (بروفيلات uPVC)",
            bullets: [
              "أنظمة uPVC عالية الأداء ومقاومة للعوامل الجوية",
              "عزل حراري ممتاز وصلابة إنشائية",
              "صديقة للبيئة وقليلة الصيانة",
            ],
          },
          {
            name: "Saint-Gobain (الزجاج)",
            bullets: [
              "عزل حراري وصوتي متميز",
              "تحكم بالأشعة فوق البنفسجية والطاقة الشمسية",
              "أمان ووضوح بصري أفضل",
            ],
          },
          {
            name: "Kale Kilit (الملحقات)",
            bullets: [
              "أقفال ومفصلات وتركيبات متينة",
              "تشغيل سلس وتشطيبات عصرية",
              "ميزات أمان معزّزة",
            ],
          },
          {
            name: "Madar (ستائر رول ألمنيوم)",
            bullets: [
              "حماية من الشمس والضجيج والغبار",
              "تشغيل يدوي أو كهربائي",
              "متوافق مع التصاميم الحديثة والكلاسيكية",
            ],
          },
        ],
      },
      cta: {
        title: "جاهز للحديث عن مشروعك؟",
        desc: "أرسل المخطط أو اطلب زيارة ميدانية—مهندسونا سيرشدونك للنظام المناسب.",
        browse: "تصفّح المنتجات",
        quote: "اطلب عرض سعر",
      },
    },
  },
};
i18n.addResourceBundle("en", "translation", ABOUT_LOCALIZED.en, true, true);
i18n.addResourceBundle("ar", "translation", ABOUT_LOCALIZED.ar, true, true);
/* --------------------------- end translations --------------------------- */

function Card({ children }) {
  return (
    <div
      className="rounded-2xl p-6 bg-white"
      style={{ border: `1px solid ${PALETTE.border}`, color: PALETTE.cacao }}
    >
      {children}
    </div>
  );
}

function Bullet({ children }) {
  return (
    <div className="flex items-start gap-2 text-sm" style={{ color: PALETTE.cacao }}>
      <span className="mt-1 inline-block w-1.5 h-1.5 rounded-full" style={{ background: PALETTE.caramel }} />
      <span style={{ color: PALETTE.cacao }}>{children}</span>
    </div>
  );
}

export default function About() {
  const { t, i18n: inst } = useTranslation();

  // Existing top section (your old title/lead) stays as-is; we extend beneath it.
  const stats = t("about.stats", { returnObjects: true, defaultValue: [] });
  const values = t("about.values", { returnObjects: true, defaultValue: [] });
  const partners = t("aboutExtra.materials.partners", { returnObjects: true, defaultValue: [] });
  const products = t("aboutExtra.productsSummary.list", { returnObjects: true, defaultValue: [] });
  const team = t("aboutExtra.organization.team", { returnObjects: true, defaultValue: [] });

  return (
    <main className="py-16" style={{ background: "white", color: PALETTE.cacao }}>
      <div className="max-w-7xl mx-auto px-4">
        {/* Intro */}
        <h1 className="text-3xl sm:text-4xl font-black">{t("about.tag", "About EGYWIN")}</h1>
        <p className="mt-3 max-w-2xl" style={{ color: PALETTE.cacaoSoft }}>
          {t(
            "about.lead",
            "We are a Cairo-based uPVC manufacturer and installer. Our team blends classical craft with precise fabrication for long-lasting, quiet, energy-efficient spaces."
          )}
        </p>

        {/* Stats */}
        {stats?.length > 0 && (
          <div className="mt-8 grid sm:grid-cols-3 gap-3">
            {stats.map((s, i) => (
              <Card key={i}>
                <div className="text-3xl font-black" style={{ color: PALETTE.caramel }}>
                  {Number(s.n || 0).toLocaleString(inst.language)}
                </div>
                <div className="text-xs tracking-wider" style={{ color: PALETTE.cacaoSoft }}>{s.l}</div>
              </Card>
            ))}
          </div>
        )}

        {/* Values */}
        {values?.length > 0 && (
          <div className="mt-12 grid md:grid-cols-3 gap-4">
            {values.map((v, i) => (
              <Card key={i}>
                <div className="font-black mb-1">{v.h}</div>
                <p className="text-sm" style={{ color: PALETTE.cacaoSoft }}>{v.d}</p>
              </Card>
            ))}
          </div>
        )}

        {/* Mission & Vision */}
        <section className="mt-12 grid md:grid-cols-2 gap-4">
          <Card>
            <div className="text-xl font-black mb-1">{t("aboutExtra.missionVision.tag")}</div>
            <div className="mt-2 font-bold">{t("aboutExtra.missionVision.missionTitle")}</div>
            <p className="text-sm mt-1" style={{ color: PALETTE.cacaoSoft }}>
              {t("aboutExtra.missionVision.missionText")}
            </p>
          </Card>
          <Card>
            <div className="text-xl font-black mb-1 sm:invisible md:visible opacity-0 md:opacity-100">
              {/* spacer to align titles on small screens */}
            </div>
            <div className="mt-2 font-bold">{t("aboutExtra.missionVision.visionTitle")}</div>
            <p className="text-sm mt-1" style={{ color: PALETTE.cacaoSoft }}>
              {t("aboutExtra.missionVision.visionText")}
            </p>
          </Card>
        </section>

        {/* Philosophy */}
        <section className="mt-12">
          <div className="text-2xl font-black">{t("aboutExtra.philosophy.tag")}</div>
          <p className="mt-1 text-sm" style={{ color: PALETTE.cacaoSoft }}>{t("aboutExtra.philosophy.lead")}</p>
          <div className="mt-4 grid sm:grid-cols-2 lg:grid-cols-2 gap-3">
            {t("aboutExtra.philosophy.list", { returnObjects: true, defaultValue: [] }).map((b, i) => (
              <Card key={i}><Bullet>{b}</Bullet></Card>
            ))}
          </div>
        </section>

        {/* Organization */}
        <section className="mt-12">
          <div className="text-2xl font-black">{t("aboutExtra.organization.tag")}</div>
          <div className="mt-4 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {team.map((m, i) => (
              <Card key={i}>
                <div className="font-black">{m.name}</div>
                <div className="text-sm" style={{ color: PALETTE.cacaoSoft }}>{m.role}</div>
              </Card>
            ))}
          </div>
        </section>

        {/* What we make */}
        <section className="mt-12">
          <div className="text-2xl font-black">{t("aboutExtra.productsSummary.tag")}</div>
          <div className="mt-4 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {products.map((p, i) => (
              <div key={i} className="rounded-2xl overflow-hidden bg-white"
                   style={{ border: `1px solid ${PALETTE.border}`, color: PALETTE.cacao }}>
                <div className="h-40 overflow-hidden">
                  <img src={p.img} alt={p.h} className="w-full h-full object-cover" />
                </div>
                <div className="p-4">
                  <div className="font-bold">{p.h}</div>
                  <p className="text-sm mt-1" style={{ color: PALETTE.cacaoSoft }}>{p.d}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Materials & Partnerships */}
        <section className="mt-12">
          <div className="text-2xl font-black">{t("aboutExtra.materials.tag")}</div>
          <div className="mt-4 grid md:grid-cols-2 gap-4">
            {partners.map((x, i) => (
              <Card key={i}>
                <div className="font-black">{x.name}</div>
                <div className="mt-2 grid gap-2">
                  {x.bullets.map((b, k) => (
                    <Bullet key={k}>{b}</Bullet>
                  ))}
                </div>
              </Card>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
