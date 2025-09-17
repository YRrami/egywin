/* eslint-disable no-unused-vars */
import React from "react";
import i18n from "i18next";
import { useTranslation, initReactI18next } from "react-i18next";

/*********************************************************
 * EGYWIN — ULTRA POLISH (uPVC Windows & Doors Only)
 * Cream/Cacao palette • Tailwind-friendly utilities
 *********************************************************/

/* ------------------------------ THEME ------------------------------ */
const PALETTE = {
  cream: "#FCF7F1",
  linen: "#F6EFE7",
  cacao: "#4B3B2F",
  cacaoSoft: "#6B5646",
  caramel: "#C89B6F",
  caramelDark: "#A97E54",
  brass: "#B8864B",
  border: "#E8DCCD",
  ink: "#2b251f",
  shadow: "rgba(26,18,13,0.08)",
};

/** Curated placeholders: only uPVC windows & doors */
const IMG = {
  hero:
    "https://images.unsplash.com/photo-1580610447944-0f9481db73b8?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  heroInset:
    "https://images.unsplash.com/photo-1752829836344-79a48f76a1c4?q=80&w=938&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  gallery: [
    // Windows & doors only
    "https://images.unsplash.com/photo-1752829836344-79a48f76a1c4?q=80&w=938&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1752829836344-79a48f76a1c4?q=80&w=938&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1752829836344-79a48f76a1c4?q=80&w=938&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1545259741-2ea3ebf61fa8?q=80&w=1400&auto=format&fit=crop",
  ],
  prod: [
    // Casement Window
    "https://windowscanada-static-20250319.s3.ca-central-1.amazonaws.com/media/tinymce/2024/12/9/Casement%20Window%20Maintenance-min.jpg",
    // Sliding Window
    "https://5.imimg.com/data5/SELLER/Default/2024/5/416434316/YD/ZR/DT/19881412/upvc-sliding-window.jpeg",
    // Lift & Slide Door
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCGrvQ19ieJzJb6D0ANZAsKUN-WlonJy7eFw&s",
    // Tilt & Turn Window
    "https://cdn.shopify.com/s/files/1/0253/9179/2207/files/tilt_and_turn_window_generic_480x480.jpg?v=1707491855",
    // French Door (placeholder)
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSoj3TKdqgVLS8SoHet1sy1mzabIzf92c9hQ&s",
    // Entrance Door (placeholder)
    "https://tiimg.tistatic.com/fp/1/007/604/long-lasting-sleek-design-more-spacious-white-upvc-entrance-door-for-residential-use-758.jpg",
  ],
  projects: [
    "https://images.unsplash.com/photo-1582582429416-3a8cf58e0b2b?q=80&w=1600&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1431576901776-e539bd916ba2?q=80&w=1600&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1501183638710-841dd1904471?q=80&w=1600&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1529429612779-c8e40ef2f36e?q=80&w=1600&auto=format&fit=crop",
  ],
  avatar: [
    "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=300&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?q=80&w=300&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1542157585-ef20bfcce1e5?q=80&w=300&auto=format&fit=crop",
  ],
  textures: {
    paper: `data:image/svg+xml;utf8,\
      <svg xmlns='http://www.w3.org/2000/svg' width='200' height='200'>\
        <rect width='200' height='200' fill='${PALETTE.cream}'/>\
        <g opacity='0.08'>\
          <circle cx='30' cy='40' r='1' fill='${PALETTE.cacao}'/>\
          <circle cx='120' cy='120' r='1' fill='${PALETTE.cacao}'/>\
          <circle cx='170' cy='85' r='1' fill='${PALETTE.cacao}'/>\
          <circle cx='70' cy='150' r='1' fill='${PALETTE.cacao}'/>\
          <circle cx='190' cy='30' r='1' fill='${PALETTE.cacao}'/>\
        </g>\
      </svg>`,
  },
};

/* --------------------------- i18n RESOURCES --------------------------- */
/** uPVC Windows & Doors only */
const RES = {
  en: {
    nav: {
      home: "Home",
      showcase: "Showcase",
      products: "Products",
      services: "Services",
      materials: "Materials",
      partners: "Partners",
      projects: "Projects",
      features: "Features",
      process: "Process",
      faq: "FAQ",
      contact: "Contact",
      lang: "عربي",
    },
    hero: {
      pre: "EGYWIN",
      titleA: "Classical craftsmanship",
      titleB: "meets industrial modernity",
      titleC: "for brighter, quieter spaces.",
      subtitle:
        "Since 2006 we design, manufacture and install high-quality uPVC windows & doors in Egypt — delivering durability, energy efficiency and refined aesthetics.",
      bullets: ["uPVC systems", "Acoustic & thermal", "Security & durability"],
      explore: "Explore Collection",
      quote: "Get a Quote",
      stats: [
        { n: new Date().getFullYear() - 2006, l: "Years" },
        { n: 35, l: "Engineers" },
        { n: 1200, l: "Projects" },
      ],
    },
    quality: {
      items: [
        "ISO-aligned quality control",
        "Saint-Gobain glazing",
        "Adopen uPVC profiles",
        "Kale Kilit hardware",
      ],
    },
    services: {
      tag: "Services",
      list: [
        {
          h: "Design & Engineering",
          d: "Bespoke shop drawings and performance modeling for your climate & site.",
        },
        {
          h: "Manufacturing",
          d: "Advanced uPVC fabrication lines with strict QC and precise welding.",
        },
        {
          h: "Installation",
          d: "Certified teams, site supervision and air/water-tight sealing tests.",
        },
        {
          h: "After-Sales",
          d: "Warranty, maintenance and upgrade programs for long-term performance.",
        },
      ],
    },
    products: {
      tag: "Our Products",
      tabs: ["Windows", "Doors"],
      mega: {
        lead: "uPVC favorites",
        cols: [
          { h: "Windows", items: ["Casement", "Sliding", "Tilt & Turn"], img: IMG.prod[0] },
          { h: "Doors", items: ["Entrance", "Lift & Slide", "French"], img: IMG.prod[2] },
        ],
      },
      list: [
        {
          name: "Casement Window (uPVC)",
          desc: "Excellent ventilation, top sealing and reliable security. Multiple styles & finishes.",
          img: IMG.prod[0],
          cat: "Windows",
        },
        {
          name: "Sliding Window (uPVC)",
          desc: "Space-saving, smooth travel and wide views with strong weather resistance.",
          img: IMG.prod[1],
          cat: "Windows",
        },
        {
          name: "Tilt & Turn Window (uPVC)",
          desc: "Dual opening for all-season comfort, safety and easy cleaning.",
          img: IMG.prod[3],
          cat: "Windows",
        },
        {
          name: "Entrance Door (uPVC)",
          desc: "Elegant insulated door sets with multi-point locking for strength and security.",
          img: IMG.prod[5],
          cat: "Doors",
        },
        {
          name: "Lift & Slide Door (uPVC)",
          desc: "Large panes, featherlight action — seamless indoor/outdoor living.",
          img: IMG.prod[2],
          cat: "Doors",
        },
        {
          name: "French Door (uPVC)",
          desc: "Classic double-leaf opening with modern insulation and security hardware.",
          img: IMG.prod[4],
          cat: "Doors",
        },
      ],
    },
    features: {
      tag: "Performance Features",
      list: [
        { h: "Thermal Insulation", d: "Multi-chamber profiles + insulated glazing reduce heat transfer." },
        { h: "Acoustic Control", d: "Thicker/laminated panes cut exterior noise dramatically." },
        { h: "Security", d: "Multi-point locking and reinforced frames deter intrusion." },
        { h: "Sealing", d: "Quality gaskets + tight tolerances ensure air/water tightness." },
      ],
    },
    materials: {
      tag: "Materials & Components",
      list: [
        { h: "uPVC Profiles — Adopen", d: "Eco-friendly, weather-resistant profiles with excellent insulation." },
        { h: "Glass — Saint-Gobain", d: "Low-E, laminated and solar-control options for comfort and safety." },
        { h: "Hardware — Kale Kilit", d: "Durable locks, handles and hinges with smooth functionality." },
      ],
    },
    projects: {
      tag: "Recent Projects",
      lead: "From modern villas to boutique commercial — precision, performance and beauty.",
    },
    partners: { tag: "Major Partnerships", list: ["Adopen", "Saint-Gobain", "Kale Kilit"] },
    process: {
      tag: "Process",
      steps: [
        { h: "Consult", d: "Brief, site visit, measurements and requirements." },
        { h: "Design", d: "Engineering, shop drawings, specs and approvals." },
        { h: "Fabricate", d: "Precision cutting, welding, hardware and QC." },
        { h: "Install", d: "Certified teams, testing and handover." },
      ],
    },
    faq: {
      tag: "Questions, answered",
      list: [
        { q: "How long is the warranty?", a: "5-year profile warranty, 2-year hardware/installation." },
        { q: "Do you do site visits?", a: "Yes — nationwide inspections and advice." },
        { q: "Lead times?", a: "Typically 3–6 weeks depending on scope and finishes." },
      ],
    },
    testimonials: {
      tag: "What clients say",
      list: [
        { q: "Seamless from design to install — huge noise reduction.", a: "H. Kamal", r: 5 },
        { q: "Slim frames, beautiful — AC bill dropped!", a: "S. Farouk", r: 5 },
        { q: "Professional team — fast, clean, precise.", a: "A. El-Shenawy", r: 5 },
      ],
    },
    awards: {
      tag: "Certifications & Mentions",
      list: ["ISO-aligned fabrication", "Preferred Saint-Gobain partner", "Local compliance & testing"],
    },
    calculator: {
      tag: "Energy Savings Estimator",
      lead: "Estimate yearly savings and ROI after upgrading windows.",
      inputs: {
        area: "Glazing Area (m²)",
        rate: "kWh price (EGP)",
        ac: "AC hours/day",
        season: "Cooling months",
        uOld: "Old U-Value",
        uNew: "New U-Value",
        cost: "Upgrade cost (EGP)",
      },
      result: {
        saved: "Estimated kWh saved/year",
        money: "EGP saved/year",
        payback: "Estimated payback (months)",
      },
    },
    contact: {
      email: "Email",
      phone: "Phone",
      address: "Address",
      title: "Start your next project with us",
      lead: "Send a message — our team replies fast.",
      submit: "Send Message",
    },
    footer: { rights: "All rights reserved." },
    marq: ["uPVC", "Sliding", "Casement", "Tilt & Turn", "Lift & Slide", "Low-E Glass", "Laminated"],
  },

  ar: {
    nav: {
      home: "الرئيسية",
      showcase: "العرض",
      products: "المنتجات",
      services: "الخدمات",
      materials: "المواد",
      partners: "الشركاء",
      projects: "المشاريع",
      features: "المزايا",
      process: "العملية",
      faq: "الأسئلة الشائعة",
      contact: "تواصل",
      lang: "ENG",
    },
    hero: {
      pre: "إيجي وين",
      titleA: "حرفية كلاسيكية",
      titleB: "بلمسة صناعية عصرية",
      titleC: "لمساحات أكثر إشراقًا وهدوءًا.",
      subtitle:
        "منذ 2006 — نصمّم ونصنّع ونركّب نوافذ وأبواب uPVC عالية الجودة في مصر، بمتانة وكفاءة طاقة ولمسة عصرية.",
      bullets: ["أنظمة uPVC", "عزل حراري وصوتي", "أمان ومتانة"],
      explore: "استكشف المجموعة",
      quote: "اطلب عرض سعر",
      stats: [
        { n: new Date().getFullYear() - 2006, l: "سنوات" },
        { n: 35, l: "مهندسًا" },
        { n: 1200, l: "مشروعًا" },
      ],
    },
    quality: {
      items: [
        "جودة متوافقة مع ISO",
        "زجاج Saint-Gobain",
        "بروفايلات Adopen",
        "مستلزمات Kale Kilit",
      ],
    },
    services: {
      tag: "الخدمات",
      list: [
        { h: "التصميم والهندسة", d: "رسومات تنفيذ ونمذجة أداء وفق الموقع والمناخ." },
        { h: "التصنيع", d: "تصنيع uPVC متقدّم مع فحوصات جودة صارمة." },
        { h: "التركيب", d: "فرق معتمدة وإشراف واختبارات إحكام هواء ومياه." },
        { h: "ما بعد البيع", d: "ضمان وصيانة وترقيات لأداء طويل الأمد." },
      ],
    },
    products: {
      tag: "منتجاتنا",
      tabs: ["نوافذ", "أبواب"],
      mega: {
        lead: "أفضل خطوط uPVC",
        cols: [
          { h: "نوافذ", items: ["مفصلية", "منزلقة", "تلت آند تيرن"], img: IMG.prod[0] },
          { h: "أبواب", items: ["دخول", "ليفت آند سلايد", "فرنش"], img: IMG.prod[2] },
        ],
      },
      list: [
        { name: "نافذة مفصلية (uPVC)", desc: "تهوية ممتازة وإحكام وأمان. أنماط وتشطيبات متعددة.", img: IMG.prod[0], cat: "نوافذ" },
        { name: "نافذة منزلقة (uPVC)", desc: "توفير مساحة وحركة سلسة ورؤية واسعة ومقاومة للعوامل.", img: IMG.prod[1], cat: "نوافذ" },
        { name: "تلت آند تيرن (uPVC)", desc: "فتح بطريقتين لراحة وأمان وسهولة تنظيف.", img: IMG.prod[3], cat: "نوافذ" },
        { name: "باب دخول (uPVC)", desc: "أبواب معزولة بإقفال متعددة لمتانة وأمان.", img: IMG.prod[0], cat: "أبواب" },
        { name: "باب ليفت آند سلايد (uPVC)", desc: "ألواح كبيرة وحركة خفيفة — تواصل داخلي/خارجي.", img: IMG.prod[2], cat: "أبواب" },
        { name: "باب فرنش (uPVC)", desc: "مظهر كلاسيكي بخصائص عزل وأمان حديثة.", img: IMG.prod[4], cat: "أبواب" },
      ],
    },
    features: {
      tag: "مزايا الأداء",
      list: [
        { h: "عزل حراري", d: "غرف متعددة وزجاج معزول لتقليل انتقال الحرارة." },
        { h: "عزل صوتي", d: "ألواح سميكة/مصفّحة تقلل الضجيج الخارجي." },
        { h: "أمان", d: "غلق متعدد النقاط وإطارات معزّزة." },
        { h: "إحكام", d: "جوانات ودقة تصنيع لإحكام الهواء والماء." },
      ],
    },
    materials: {
      tag: "المواد والمكونات",
      list: [
        { h: "uPVC — Adopen", d: "بروفايلات مستدامة ومقاومة للعوامل بعزل ممتاز." },
        { h: "الزجاج — Saint-Gobain", d: "Low-E ومصفّح وتحكّم شمسي للراحة والسلامة." },
        { h: "الملحقات — Kale Kilit", d: "أقفال ومقابض ومفصلات متينة بأداء سلس." },
      ],
    },
    projects: { tag: "مشاريع حديثة", lead: "من فيلات حديثة إلى واجهات بوتيك — دقة وأداء وجمال." },
    partners: { tag: "الشراكات الرئيسية", list: ["Adopen", "Saint-Gobain", "Kale Kilit"] },
    process: {
      tag: "العملية",
      steps: [
        { h: "استشارة", d: "زيارة موقع وقياسات ومتطلبات." },
        { h: "تصميم", d: "رسومات تنفيذ ومواصفات واعتمادات." },
        { h: "تصنيع", d: "تقطيع ولحام وتركيب ملحقات وفحص جودة." },
        { h: "تركيب", d: "فرق معتمدة واختبارات وتسليم." },
      ],
    },
    faq: {
      tag: "أسئلة شائعة",
      list: [
        { q: "كم مدة الضمان؟", a: "5 سنوات للبروفايلات وسنتان للملحقات/التركيب." },
        { q: "هل تقومون بمعاينات؟", a: "نعم — زيارات ونصائح في جميع المحافظات." },
        { q: "المدد؟", a: "عادة 3–6 أسابيع حسب النطاق والتشطيبات." },
      ],
    },
    testimonials: {
      tag: "ماذا يقول عملاؤنا",
      list: [
        { q: "تجربة سلسة من التصميم حتى التركيب — فارق واضح في الضوضاء.", a: "هـ. كمال", r: 5 },
        { q: "إطارات رفيعة وجميلة — فاتورة التكييف انخفضت!", a: "س. فاروق", r: 5 },
        { q: "فريق محترف — سريع ونظيف ودقيق.", a: "أ. الشناوي", r: 5 },
      ],
    },
    awards: { tag: "اعتمادات وذكر", list: ["جودة متوافقة مع ISO", "شريك Saint-Gobain مفضّل", "مطابقة واختبارات محلية"] },
    calculator: {
      tag: "حساب توفير الطاقة",
      lead: "احسب التوفير السنوي والعائد بعد ترقية النوافذ.",
      inputs: {
        area: "مساحة الزجاج (م²)",
        rate: "سعر الكيلووات (جنيه)",
        ac: "ساعات التكييف/اليوم",
        season: "أشهر التبريد",
        uOld: "قيمة U القديمة",
        uNew: "قيمة U الجديدة",
        cost: "تكلفة الترقية (جنيه)",
      },
      result: {
        saved: "كيلووات موفّرة/سنة",
        money: "توفير بالجنيه/سنة",
        payback: "فترة الاسترداد (أشهر)",
      },
    },
    contact: {
      email: "البريد الإلكتروني",
      phone: "الهاتف",
      address: "العنوان",
      title: "ابدأ مشروعك القادم معنا",
      lead: "أرسل رسالة — سنرد سريعًا.",
      submit: "إرسال",
    },
    footer: { rights: "جميع الحقوق محفوظة." },
    marq: ["uPVC", "منزلقة", "مفصلية", "تلت & تيرن", "ليفت & سلايد", "Low-E", "مصفّح"],
  },
};

/* ----------------------------- i18n INIT ----------------------------- */
(function ensureI18n() {
  const saved = (typeof window !== "undefined" && localStorage.getItem("appLang")) || "en";
  if (!i18n.isInitialized) {
    i18n.use(initReactI18next).init({
      lng: saved,
      fallbackLng: "en",
      debug: false,
      interpolation: { escapeValue: false },
      returnObjects: true,
      resources: { en: { translation: RES.en }, ar: { translation: RES.ar } },
      load: "languageOnly",
    });
  }
  i18n.addResourceBundle("en", "translation", RES.en, true, true);
  i18n.addResourceBundle("ar", "translation", RES.ar, true, true);
})();

/* --------------------------- UTILS & HOOKS --------------------------- */
const cn = (...s) => s.filter(Boolean).join(" ");
function useScrollDir() {
  const [dir, setDir] = React.useState("up");
  React.useEffect(() => {
    let last = window.scrollY;
    const on = () => {
      const y = window.scrollY;
      setDir(y > last && y > 64 ? "down" : "up");
      last = y;
    };
    window.addEventListener("scroll", on, { passive: true });
    return () => window.removeEventListener("scroll", on);
  }, []);
  return dir;
}
function useSectionSpy(ids) {
  const [active, setActive] = React.useState("");
  React.useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setActive(e.target.id)),
      { rootMargin: "-45% 0px -50% 0px", threshold: [0, 0.25, 0.5, 1] }
    );
    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) obs.observe(el);
    });
    return () => obs.disconnect();
  }, [ids]);
  return active;
}
function useParallax(f = 0.22) {
  const [y, setY] = React.useState(0);
  React.useEffect(() => {
    const mql = window.matchMedia("(prefers-reduced-motion: reduce)");
    const on = () => setY(mql.matches ? 0 : window.scrollY * f);
    on();
    const s = () => on();
    window.addEventListener("scroll", s, { passive: true });
    window.addEventListener("resize", s);
    return () => {
      window.removeEventListener("scroll", s);
      window.removeEventListener("resize", s);
    };
  }, [f]);
  return y;
}

/* -------------------------------- ICONS ------------------------------ */
const Chevron = (p) => (
  <svg width="18" height="18" viewBox="0 0 24 24" {...p}>
    <path d="M7 10l5 5 5-5" stroke="currentColor" strokeWidth="1.6" fill="none" strokeLinecap="round" />
  </svg>
);
const SearchIcon = (p) => (
  <svg width="18" height="18" viewBox="0 0 20 20" {...p}>
    <circle cx="9" cy="9" r="6.5" stroke="currentColor" strokeWidth="1.5" />
    <path d="M15.2 15.2L18 18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
  </svg>
);

/* ------------------------------ MEGA NAV ----------------------------- */
function MegaMenu({ open, onClose, anchor, config }) {
  if (!open) return null;
  return (
    <div className="absolute left-0 right-0 top-full z-40" onMouseLeave={onClose}>
      <div className="mx-auto max-w-7xl px-4">
        <div className="rounded-3xl overflow-hidden shadow-xl" style={{ background: "white", border: `1px solid ${PALETTE.border}` }}>
          <div className="grid md:grid-cols-[1.1fr_.9fr]">
            <div className="p-6 sm:p-8">
              <div className="text-xs font-bold" style={{ color: PALETTE.cacaoSoft }}>{config.lead}</div>
              <div className="mt-4 grid sm:grid-cols-2 gap-6">
                {config.cols.map((col, i) => (
                  <div key={i}>
                    <div className="text-sm font-black" style={{ color: PALETTE.cacao }}>{col.h}</div>
                    <ul className="mt-2 grid gap-1 text-sm" style={{ color: PALETTE.cacaoSoft }}>
                      {col.items.map((it) => (
                        <li key={it}><a href="#products" className="hover:text-black">{it}</a></li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative hidden md:block">
              <img src={config.cols[anchor % config.cols.length].img} alt="preview" className="w-full h-full object-cover" />
              <div className="absolute inset-0" style={{ background: "linear-gradient(180deg, rgba(252,247,241,0.6), transparent)" }} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/* -------------------------- COMMAND PALETTE -------------------------- */
function CommandPalette({ open, onClose, items }) {
  const [q, setQ] = React.useState("");
  React.useEffect(() => {
    const on = (e) => e.key === "Escape" && onClose();
    if (open) window.addEventListener("keydown", on);
    return () => window.removeEventListener("keydown", on);
  }, [open, onClose]);
  if (!open) return null;
  const filtered = items.filter((x) => x.label.toLowerCase().includes(q.toLowerCase()));
  return (
    <div className="fixed inset-0 z-[80] grid place-items-start pt-24 px-4" style={{ background: "rgba(0,0,0,0.45)" }} role="dialog" aria-modal="true" aria-label="Command menu">
      <div className="w-full max-w-xl rounded-2xl overflow-hidden" style={{ background: "white", border: `1px solid ${PALETTE.border}` }}>
        <div className="flex items-center gap-2 px-3 py-2 border-b" style={{ borderColor: PALETTE.border, color: PALETTE.cacao }}>
          <SearchIcon />
          <input autoFocus value={q} onChange={(e) => setQ(e.target.value)} placeholder="Type to search… ( / )" className="flex-1 py-2 outline-none" />
          <button onClick={onClose} className="text-sm font-bold px-2 py-1 rounded" style={{ color: PALETTE.cacao }}>Esc</button>
        </div>
        <div className="max-h-72 overflow-auto" style={{ color: PALETTE.cacao }}>
          {filtered.map((x) => (
            <a key={x.href} href={x.href} onClick={onClose} className="block px-4 py-3 hover:bg-stone-50">{x.label}</a>
          ))}
          {!filtered.length && <div className="px-4 py-6 text-sm" style={{ color: PALETTE.cacaoSoft }}>No matches</div>}
        </div>
      </div>
    </div>
  );
}

/*********************** SERVICES ***********************/
function Services() {
  const { t } = useTranslation();
  const services = t("services.list", { returnObjects: true, defaultValue: [] });

  return (
    <section
      id="services"
      className="pt-16 pb-14"
      style={{
        backgroundImage: `url(${IMG.textures.paper})`,
        backgroundSize: "200px 200px",
        color: PALETTE.cacao,
      }}
    >
      <div className="max-w-7xl mx-auto px-4">
        <h2
          className="text-sm font-extrabold uppercase tracking-widest"
          style={{ color: PALETTE.caramel }}
        >
          {t("services.tag", "Services")}
        </h2>

        <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {services.map((s, i) => (
            <div
              key={i}
              className="rounded-2xl p-6 relative overflow-hidden"
              style={{
                background: "white",
                border: `1px solid ${PALETTE.border}`,
                color: PALETTE.cacao,
              }}
            >
              <div
                className="absolute -top-8 -end-6 text-[80px] font-black select-none"
                style={{ color: "#d8c7b5" }}
              >
                {i + 1}
              </div>
              <h4 className="font-black mb-1">{s.h}</h4>
              <p className="text-sm" style={{ color: PALETTE.cacaoSoft }}>
                {s.d}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* --------------------------- HEADER / NAV ---------------------------- */
function Header({ onLangToggle }) {
  const { t } = useTranslation();
  const dir = useScrollDir();

  const sections = ["showcase", "products", "services", "materials", "projects", "process", "faq", "contact"];
  const active = useSectionSpy(sections);

  const [openMobile, setOpenMobile] = React.useState(false);
  const [openMega, setOpenMega] = React.useState(null); // 'products' | 'services'
  const [megaAnchor, setMegaAnchor] = React.useState(0);
  const [cmdOpen, setCmdOpen] = React.useState(false);

  const productsMega = t("products.mega", { returnObjects: true, defaultValue: { lead: "Popular", cols: [] } });
  const servicesList = t("services.list", { returnObjects: true, defaultValue: [] });

  React.useEffect(() => {
    const onKey = (e) => {
      if (e.key === "/") {
        e.preventDefault();
        setCmdOpen(true);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const navItems = [
    { id: "showcase", label: t("nav.showcase", "Showcase"), href: "#showcase" },
    { id: "products", label: t("nav.products", "Products"), href: "#products", mega: "products" },
    { id: "services", label: t("nav.services", "Services"), href: "#services", mega: "services" },
    { id: "materials", label: t("nav.materials", "Materials"), href: "#materials" },
    { id: "projects", label: t("nav.projects", "Projects"), href: "#projects" },
    { id: "process", label: t("nav.process", "Process"), href: "#process" },
    { id: "faq", label: t("nav.faq", "FAQ"), href: "#faq" },
    { id: "contact", label: t("nav.contact", "Contact"), href: "#contact" },
  ];

  return (
    <div className={cn("sticky top-0 z-50 transition-transform duration-300", dir === "down" ? "-translate-y-full" : "translate-y-0")}>
      <ScrollProgressThin />
      <header style={{ background: "rgba(252,247,241,0.92)", backdropFilter: "blur(8px)", borderBottom: `1px solid ${PALETTE.border}` }}>
        <a href="#home" className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 bg-white p-2 rounded">Skip to content</a>

        {/* Top row */}
        <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
          <a href="#home" className="font-black tracking-[0.35em]" style={{ color: PALETTE.cacao }}>EGYWIN</a>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-2">
            {navItems.map((item, idx) => (
              <div key={item.id} className="relative">
                <a
                  href={item.href}
                  onMouseEnter={() => { setOpenMega(item.mega || null); setMegaAnchor(idx); }}
                  onFocus={() => { setOpenMega(item.mega || null); setMegaAnchor(idx); }}
                  onMouseLeave={() => { if (!item.mega) setOpenMega(null); }}
                  className={cn("px-3 py-2 text-sm font-semibold rounded-lg transition", active === item.id ? "text-black" : "")}
                  style={{ color: active === item.id ? PALETTE.cacao : PALETTE.cacaoSoft }}
                >
                  <span className="relative">
                    {item.label}
                    <span className={cn("absolute start-0 -bottom-0.5 h-[2px] transition-all", active === item.id ? "w-full" : "w-0")} style={{ background: PALETTE.caramel }} />
                  </span>
                </a>
                {item.mega && <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 text-[10px]" style={{ color: PALETTE.caramel }}>▾</span>}
              </div>
            ))}
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-2">
            <button onClick={() => setCmdOpen(true)} className="hidden sm:inline-flex items-center gap-2 h-10 px-3 rounded-xl text-sm" style={{ border: `1px solid ${PALETTE.border}`, color: PALETTE.cacao }} aria-label="Open command menu">
              <SearchIcon /> /
            </button>
            <button onClick={onLangToggle} className="px-3 py-1 rounded-xl font-bold border" style={{ borderColor: PALETTE.border, color: PALETTE.cacao }}>
              {t("nav.lang", "عربي")}
            </button>
            <button onClick={() => setOpenMobile((v) => !v)} className="lg:hidden inline-flex items-center justify-center w-10 h-10 rounded-xl" style={{ border: `1px solid ${PALETTE.border}`, color: PALETTE.cacao }} aria-label="Menu">
              <svg width="22" height="22" viewBox="0 0 24 24"><path d="M4 7h16M4 12h16M4 17h16" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" /></svg>
            </button>
          </div>
        </div>

        {/* MEGAS */}
        {openMega === "products" && <MegaMenu open anchor={megaAnchor} onClose={() => setOpenMega(null)} config={productsMega} />}
        {openMega === "services" && (
          <div className="absolute left-0 right-0 top-full z-40" onMouseLeave={() => setOpenMega(null)}>
            <div className="mx-auto max-w-7xl px-4">
              <div className="rounded-3xl overflow-hidden shadow-xl" style={{ background: "white", border: `1px solid ${PALETTE.border}` }}>
                <div className="grid sm:grid-cols-2 lg:grid-cols-4">
                  {servicesList.map((s, i) => (
                    <div key={i} className="p-6 border-s" style={{ borderColor: PALETTE.border }}>
                      <div className="font-black" style={{ color: PALETTE.cacao }}>{s.h}</div>
                      <p className="text-sm mt-1" style={{ color: PALETTE.cacaoSoft }}>{s.d}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}
      </header>

      {/* Mobile Drawer (labels fixed) */}
      <div className={cn("lg:hidden", openMobile ? "block" : "hidden")} style={{ borderBottom: `1px solid ${PALETTE.border}`, background: "rgba(246,239,231,0.95)", backdropFilter: "blur(6px)", color: PALETTE.cacaoSoft }}>
        <div id="mobile-acc" className="px-4 py-3 grid gap-2 font-semibold">
          {navItems.map((item) => (
            <details
              key={item.id}
              onToggle={(e) => {
                const container = document.getElementById("mobile-acc");
                if (!container) return;
                container.querySelectorAll("details").forEach((d) => {
                  if (d !== e.currentTarget) d.open = false;
                });
              }}
            >
              <summary className="cursor-pointer list-none flex items-center justify-between py-2">
                <a href={item.href} className="flex-1" onClick={() => setOpenMobile(false)}>
                  {item.label}
                </a>
                {item.mega ? <Chevron /> : null}
              </summary>

              {/* Mobile mega content */}
              {item.mega === "products" && (
                <div className="ps-4 grid gap-2">
                  {productsMega.cols.map((c) => (
                    <div key={c.h}>
                      <div className="text-sm font-black mt-1" style={{ color: PALETTE.cacao }}>{c.h}</div>
                      <ul className="ps-4 text-sm" style={{ color: PALETTE.cacaoSoft }}>
                        {c.items.map((x) => (
                          <li key={x}>
                            <a href="#products" className="block py-1" onClick={() => setOpenMobile(false)}>{x}</a>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              )}
              {item.mega === "services" && (
                <div className="ps-4 grid gap-2">
                  {servicesList.map((s, i) => (
                    <div key={i}>
                      <div className="text-sm font-black" style={{ color: PALETTE.cacao }}>{s.h}</div>
                      <p className="text-sm" style={{ color: PALETTE.cacaoSoft }}>{s.d}</p>
                    </div>
                  ))}
                </div>
              )}
            </details>
          ))}
          <div className="pt-2">
            <button onClick={onLangToggle} className="px-3 py-1 rounded-xl font-bold border" style={{ borderColor: PALETTE.border, color: PALETTE.cacao }}>
              {t("nav.lang", "عربي")}
            </button>
          </div>
        </div>
      </div>

      <CommandPalette
        open={cmdOpen}
        onClose={() => setCmdOpen(false)}
        items={navItems.map((n) => ({ href: n.href, label: n.label }))}
      />
    </div>
  );
}

function ScrollProgressThin() {
  const [p, setP] = React.useState(0);
  React.useEffect(() => {
    const on = () => {
      const sc = window.scrollY;
      const h = document.documentElement.scrollHeight - window.innerHeight;
      setP(h > 0 ? (sc / h) * 100 : 0);
    };
    on();
    window.addEventListener("scroll", on, { passive: true });
    window.addEventListener("resize", on);
    return () => {
      window.removeEventListener("scroll", on);
      window.removeEventListener("resize", on);
    };
  }, []);
  return <div className="h-0.5 w-full"><div className="h-full" style={{ background: PALETTE.caramel, width: `${p}%` }} /></div>;
}

/* ------------------------------ HERO ------------------------------ */
function Corner({ className }) { return (<svg className={className} viewBox="0 0 60 60" fill="none" aria-hidden="true"><path d="M59 1H21a20 20 0 0 0-20 20v38" stroke={PALETTE.brass} strokeWidth="1.5" /></svg>); }
function GearSvg({ className, color = PALETTE.caramel }) {
  return (
    <svg className={className} viewBox="0 0 120 120" fill="none" aria-hidden="true">
      <g transform="translate(60,60)">
        <circle r="50" stroke={color} strokeWidth="2.2" fill="transparent" />
        {Array.from({ length: 12 }).map((_, i) => (
          <rect key={i} x="-3" y="-62" width="6" height="12" rx="1.5" transform={`rotate(${(i * 360) / 12})`} fill={color} opacity="0.85" />
        ))}
        <circle r="22" stroke={color} strokeWidth="1.8" fill="transparent" />
      </g>
    </svg>
  );
}
function Dot() { return <span className="inline-block w-1.5 h-1.5 rounded-full" style={{ background: PALETTE.caramel }} />; }

function HeroPro() {
  const { t, i18n } = useTranslation();
  const dirRtl = i18n.language?.startsWith("ar");
  const y = useParallax(0.22);
  const stats = t("hero.stats", { returnObjects: true, defaultValue: [] });
  const feats = t("hero.bullets", { returnObjects: true, defaultValue: [] });

  return (
    <section id="home" className="relative isolate overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <img src={IMG.hero} alt="uPVC windows and doors in a modern space" className="w-full h-[92vh] object-cover" style={{ transform: `translateY(${y * -0.45}px)` }} />
        <div className="absolute inset-0" style={{ background: `radial-gradient(1200px 520px at 75% 15%, transparent, ${PALETTE.cream}), linear-gradient(180deg, ${PALETTE.cream}, transparent 35%, ${PALETTE.cream})` }} />
        <div className="absolute inset-0 pointer-events-none [mask-image:linear-gradient(to-bottom,black,black,transparent)]">
          <svg width="100%" height="100%" aria-hidden="true">
            {Array.from({ length: 14 }).map((_, i) => (
              <line key={i} x1={i * 150} y1={-20} x2={i * 150 - 200} y2={800} stroke={PALETTE.brass} strokeWidth="0.6" opacity="0.18" />
            ))}
          </svg>
        </div>
      </div>

      <Corner className="absolute top-0 start-0 w-16 h-16 opacity-70" />
      <Corner className="absolute bottom-0 end-0 w-16 h-16 opacity-70 rotate-180" />

      <div className="max-w-7xl mx-auto px-4 pt-12 pb-10 grid lg:grid-cols-[1.1fr_.9fr] items-center gap-10">
        <div>
          <p className="tracking-[0.35em] text-xs sm:text-sm" style={{ color: PALETTE.cacaoSoft }}>{t("hero.pre", "EGYWIN")}</p>
          <h1 className="mt-2 text-4xl sm:text-5xl lg:text-6xl font-black leading-tight" style={{ color: PALETTE.cacao }}>
            <span className="inline-block [animation:reveal_800ms_cubic-bezier(.2,.8,.2,1)_both]" style={{ color: PALETTE.caramel }}>{t("hero.titleA", "Classical craftsmanship")}</span><br />
            <span className="inline-block [animation:reveal_1000ms_120ms_cubic-bezier(.2,.8,.2,1)_both]">{t("hero.titleB", "meets industrial modernity")}</span><br />
            <span className="inline-block [animation:reveal_1000ms_220ms_cubic-bezier(.2,.8,.2,1)_both]">{t("hero.titleC", "for brighter, quieter spaces.")}</span>
          </h1>
          <p className="mt-3 max-w-prose text-base sm:text-lg" style={{ color: PALETTE.cacaoSoft }}>{t("hero.subtitle")}</p>

          <ul className="mt-4 flex flex-wrap gap-2">
            {feats.map((f, i) => (
              <li key={i} className="inline-flex items-center px-3 h-8 rounded-full text-sm font-semibold border" style={{ background: PALETTE.linen, borderColor: PALETTE.border, color: PALETTE.cacao }}>
                <span className="me-2 inline-block w-1.5 h-1.5 rounded-full" style={{ background: PALETTE.caramel }} /> {f}
              </li>
            ))}
          </ul>

          <div className="mt-6 flex flex-wrap gap-3">
            <a href="#products" className="inline-flex items-center px-5 py-3 rounded-xl font-extrabold shadow hover:-translate-y-0.5 hover:shadow-lg transition" style={{ background: PALETTE.caramel, color: "white" }}>{t("hero.explore", "Explore Collection")}</a>
            <a href="#contact" className="inline-flex items-center px-5 py-3 rounded-xl font-extrabold" style={{ border: `2px solid ${PALETTE.caramel}`, color: PALETTE.caramel }}>▷ &nbsp; {t("hero.quote", "Get a Quote")}</a>
          </div>

          <div className="mt-7 grid grid-cols-3 gap-3">
            {stats.map((s, i) => (<HeroStat key={i} label={s?.l || "—"} value={Number(s?.n) || 0} locale={i18n.language} />))}
          </div>
        </div>

        <div className="relative hidden md:block">
          <div className="absolute -top-10 -end-6 w-40 h-40 [animation:spin_26s_linear_infinite] opacity-80"><GearSvg /></div>
          <div className="rounded-3xl p-6 backdrop-blur-md shadow-xl" style={{ background: "rgba(255,255,255,0.65)", border: `1px solid ${PALETTE.border}`, color: PALETTE.cacao }}>
            <div className="relative rounded-2xl overflow-hidden border" style={{ borderColor: PALETTE.border }}>
              <img src={IMG.heroInset} alt="Slim uPVC frame" className="w-full h-56 object-cover" />
              <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(400px 140px at 80% 10%, transparent, rgba(252,247,241,.8))" }} />
              <span className="absolute top-3 start-3 text-xs font-bold px-2 py-1 rounded" style={{ background: PALETTE.caramel, color: "white" }}>Signature</span>
            </div>
            <p className="mt-3 text-sm" style={{ color: PALETTE.cacaoSoft }}>Refined profiles, generous glass, perfect seals. A timeless palette that pairs classical warmth with industrial precision.</p>
            <div className="mt-3 flex gap-2 text-xs" style={{ color: PALETTE.cacaoSoft }}>
              <span className="inline-flex items-center gap-1"><Dot /> Low-E</span>
              <span className="inline-flex items-center gap-1"><Dot /> Laminated</span>
              <span className="inline-flex items-center gap-1"><Dot /> Multi-chamber</span>
            </div>
          </div>
        </div>
      </div>

      <a href="#showcase" className="group absolute left-1/2 -translate-x-1/2 bottom-6 inline-flex flex-col items-center" aria-label="Scroll to showcase">
        <span className="text-xs font-semibold" style={{ color: PALETTE.cacaoSoft }}>{dirRtl ? "تابع للأسفل" : "Scroll to showcase"}</span>
        <span className="mt-1 grid place-items-center h-10 w-10 rounded-full border [animation:bouncey_1.4s_infinite]" style={{ borderColor: PALETTE.border, color: PALETTE.caramel }}>↓</span>
      </a>

      <style>{`@keyframes reveal { from { opacity: 0; transform: translateY(10px); } to { opacity:1; transform: translateY(0); } } @keyframes spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } } @keyframes bouncey { 0%,100%{ transform: translateY(0); } 50%{ transform: translateY(-6px); } }`}</style>
    </section>
  );
}
function HeroStat({ label, value, locale }) {
  const [val, setVal] = React.useState(0);
  React.useEffect(() => {
    let raf;
    const t0 = performance.now(), dur = 1200;
    const tick = (t) => {
      const p = Math.min(1, (t - t0) / dur);
      const v = Math.round(value * (1 - Math.pow(1 - p, 3)));
      setVal(v);
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [value]);
  return (
    <div className="rounded-xl p-4 text-center shadow-sm" style={{ background: "rgba(255,255,255,0.75)", border: `1px solid ${PALETTE.border}`, color: PALETTE.cacao }}>
      <div className="text-3xl font-black" style={{ color: PALETTE.caramel }}>{val.toLocaleString(locale)}</div>
      <div className="text-xs tracking-wider" style={{ color: PALETTE.cacaoSoft }}>{label}</div>
    </div>
  );
}

/* --------------------------- QUALITY STRIP --------------------------- */
function QualityRow() {
  const { t } = useTranslation();
  const items = t("quality.items", { returnObjects: true, defaultValue: [] });
  return (
    <div id="showcase" className="border-y" style={{ borderColor: PALETTE.border, background: PALETTE.linen }}>
      <div className="max-w-7xl mx-auto px-4 py-4 grid grid-cols-2 sm:grid-cols-4 gap-3 text-sm font-bold" style={{ color: PALETTE.cacao }}>
        {items.map((x, i) => (<div key={i} className="flex items-center gap-2"><Dot />{x}</div>))}
      </div>
    </div>
  );
}

/* ------------------- PRODUCTS + FEATURES + COMPARE ------------------- */
function Products() {
  const { t } = useTranslation();
  const tabs = t("products.tabs", { returnObjects: true, defaultValue: [] });
  const list = t("products.list", { returnObjects: true, defaultValue: [] });
  const feats = t("features.list", { returnObjects: true, defaultValue: [] });
  const [tab, setTab] = React.useState(tabs[0] || "");
  const filtered = (tab && list.some((p) => p.cat === tab)) ? list.filter((p) => p.cat === tab) : list;

  React.useEffect(() => { if (!tab && tabs.length) setTab(tabs[0]); }, [tabs, tab]);

  const onKey = (e) => {
    if (!tabs.length) return;
    const idx = Math.max(0, tabs.indexOf(tab));
    if (e.key === "ArrowRight") setTab(tabs[(idx + 1) % tabs.length]);
    if (e.key === "ArrowLeft") setTab(tabs[(idx - 1 + tabs.length) % tabs.length]);
  };

  return (
    <section id="products" className="py-16" style={{ background: "white", color: PALETTE.cacao }}>
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-sm font-extrabold uppercase tracking-widest" style={{ color: PALETTE.caramel }}>{t("products.tag", "Our Products")}</h2>

        <div className="mt-4 flex flex-wrap gap-2" role="tablist" aria-label="Product categories" onKeyDown={onKey}>
          {tabs.map((x) => (
            <button key={x} onClick={() => setTab(x)} role="tab" aria-selected={tab === x}
              className="h-10 px-5 rounded-full text-sm font-bold"
              style={{ border: `1px solid ${tab === x ? PALETTE.caramel : PALETTE.border}`, background: tab === x ? PALETTE.caramel : "white", color: tab === x ? "white" : PALETTE.cacao }}>
              {x}
            </button>
          ))}
        </div>

        <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((p, i) => (
            <article key={i} className="group rounded-2xl overflow-hidden" style={{ border: `1px solid ${PALETTE.border}`, background: PALETTE.linen }}>
              <div className="relative">
                <img src={p.img} alt={p.name} className="w-full h-52 object-cover [transition:transform_700ms] group-hover:scale-[1.05]" />
                <div className="absolute inset-0" style={{ background: "linear-gradient(180deg, rgba(0,0,0,0.18), transparent)" }} />
              </div>
              <div className="p-5">
                <h3 className="font-black text-lg" style={{ color: PALETTE.cacao }}>{p.name}</h3>
                <p className="text-sm mt-1" style={{ color: PALETTE.cacaoSoft }}>{p.desc}</p>
                <div className="mt-3 flex justify-between items-center">
                  <a href="#contact" className="font-bold" style={{ color: PALETTE.caramel }}>Get Specs</a>
                  <svg width="18" height="18" viewBox="0 0 16 16"><path d="M2 8h12M8 2l6 6-6 6" stroke={PALETTE.caramel} strokeWidth="1.6" fill="none" strokeLinecap="round" /></svg>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-12 grid lg:grid-cols-[1.3fr_.7fr] gap-8">
          <div className="rounded-2xl overflow-hidden" style={{ border: `1px solid ${PALETTE.border}`, background: PALETTE.cream }}>
            <div className="p-6">
              <h3 className="font-black text-xl mb-2">{t("features.tag", "Performance Features")}</h3>
              <ul className="grid sm:grid-cols-2 gap-4">
                {feats.map((f, i) => (
                  <li key={i} className="rounded-xl p-4 flex items-start gap-3 bg-white" style={{ border: `1px solid ${PALETTE.border}` }}>
                    <Dot />
                    <div>
                      <div className="font-bold" style={{ color: PALETTE.cacao }}>{f.h}</div>
                      <p className="text-sm" style={{ color: PALETTE.cacaoSoft }}>{f.d}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <BeforeAfter />
        </div>
      </div>
    </section>
  );
}

function BeforeAfter() {
  const [val, setVal] = React.useState(58);
  return (
    <div className="rounded-2xl overflow-hidden" style={{ border: `1px solid ${PALETTE.border}`, background: "white", color: PALETTE.cacao }}>
      <div className="p-4">
        <h4 className="font-black mb-2">Before & After — noise / heat</h4>
        <div className="relative aspect-[16/10] rounded-xl overflow-hidden">
          <img src={IMG.gallery[0]} alt="Before" className="absolute inset-0 w-full h-full object-cover" />
          <img src={IMG.gallery[1]} alt="After" className="absolute inset-0 w-full h-full object-cover" style={{ clipPath: `inset(0 ${100 - val}% 0 0)` }} />
          <div className="absolute inset-y-0" style={{ left: `calc(${val}% - 1px)` }}>
            <div className="h-full w-[2px]" style={{ background: PALETTE.caramel }} />
            <div className="absolute top-1/2 -translate-y-1/2 -left-2 text-white text-xs px-2 py-1 rounded" style={{ background: PALETTE.caramel }}>{val}%</div>
          </div>
        </div>
        <input aria-label="Reveal slider" type="range" min="0" max="100" value={val} onChange={(e) => setVal(Number(e.target.value))} className="w-full mt-3" />
      </div>
    </div>
  );
}

/* ---------------- MATERIALS / PROJECTS / PARTNERS ---------------- */
function MaterialsProjectsPartners() {
  const { t } = useTranslation();
  const materials = t("materials.list", { returnObjects: true, defaultValue: [] });
  const partners = t("partners.list", { returnObjects: true, defaultValue: [] });
  return (
    <section id="materials" className="py-16" style={{ color: PALETTE.cacao }}>
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-sm font-extrabold uppercase tracking-widest" style={{ color: PALETTE.caramel }}>{t("materials.tag", "Materials & Components")}</h2>
        <div className="mt-6 grid md:grid-cols-3 gap-4">
          {materials.map((m, i) => (
            <div key={i} className="rounded-2xl p-6" style={{ background: "white", border: `1px solid ${PALETTE.border}` }}>
              <h4 className="font-black mb-1" style={{ color: PALETTE.cacao }}>{m.h}</h4>
              <p style={{ color: PALETTE.cacaoSoft }}>{m.d}</p>
            </div>
          ))}
        </div>

        <div id="projects" className="mt-12">
          <h2 className="text-sm font-extrabold uppercase tracking-widest" style={{ color: PALETTE.caramel }}>{t("projects.tag", "Recent Projects")}</h2>
          <p className="mt-1" style={{ color: PALETTE.cacaoSoft }}>{t("projects.lead")}</p>
          <div className="mt-5 grid auto-cols-[min(85vw,440px)] grid-flow-col gap-4 overflow-x-auto pb-2 snap-x">
            {IMG.projects.map((src, i) => (
              <figure key={src} className="rounded-2xl overflow-hidden snap-start" style={{ background: "white", border: `1px solid ${PALETTE.border}` }}>
                <img src={src} alt={`Project ${i + 1}`} className="w-full h-64 object-cover" />
                <figcaption className="p-4 text-sm" style={{ color: PALETTE.cacaoSoft }}>
                  EGYWIN — Project #{i + 1}
                </figcaption>
              </figure>
            ))}
          </div>
        </div>

        <div id="partners" className="mt-12">
          <h2 className="text-sm font-extrabold uppercase tracking-widest" style={{ color: PALETTE.caramel }}>{t("partners.tag", "Major Partnerships")}</h2>
          <div className="mt-4 flex flex-wrap gap-3">
            {partners.map((p) => (
              <span key={p} className="inline-flex items-center h-9 px-4 rounded-full" style={{ background: PALETTE.linen, border: `1px solid ${PALETTE.border}`, color: PALETTE.cacao }}>
                {p}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* --------------- PROCESS / FAQ / TESTIMONIALS / AWARDS --------------- */
function ProcessFAQExtra() {
  const { t } = useTranslation();
  const steps = t("process.steps", { returnObjects: true, defaultValue: [] });
  const faq = t("faq.list", { returnObjects: true, defaultValue: [] });
  const testi = t("testimonials.list", { returnObjects: true, defaultValue: [] });
  const awards = t("awards.list", { returnObjects: true, defaultValue: [] });

  return (
    <section id="process" className="py-16" style={{ background: "white", color: PALETTE.cacao }}>
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-sm font-extrabold uppercase tracking-widest" style={{ color: PALETTE.caramel }}>{t("process.tag", "Process")}</h2>
        <ol className="relative mt-6 border-s-2 ps-6" style={{ borderColor: `${PALETTE.caramel}66` }}>
          {steps.map((s, i) => (
            <li key={i} className="mb-6">
              <div className="absolute -start-2.5 mt-1 h-5 w-5 rounded-full" style={{ background: "white", border: `2px solid ${PALETTE.caramel}` }} />
              <div className="font-black" style={{ color: PALETTE.cacao }}>{s.h}</div>
              <p className="text-sm" style={{ color: PALETTE.cacaoSoft }}>{s.d}</p>
            </li>
          ))}
        </ol>

        <div id="faq" className="mt-12 grid lg:grid-cols-2 gap-8">
          <div>
            <h3 className="text-sm font-extrabold uppercase tracking-widest" style={{ color: PALETTE.caramel }}>{t("faq.tag", "Questions, answered")}</h3>
            <div className="mt-4 grid gap-4">
              {faq.map((f, i) => (
                <details key={i} className="group rounded-xl p-4" style={{ background: PALETTE.linen, border: `1px solid ${PALETTE.border}` }}>
                  <summary className="cursor-pointer list-none flex items-center justify-between">
                    <span className="font-bold" style={{ color: PALETTE.cacao }}>{f.q}</span>
                    <span className="[transition:transform_200ms]" style={{ color: PALETTE.caramel }}>⌄</span>
                  </summary>
                  <p className="mt-2 text-sm" style={{ color: PALETTE.cacaoSoft }}>{f.a}</p>
                </details>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-sm font-extrabold uppercase tracking-widest" style={{ color: PALETTE.caramel }}>{t("testimonials.tag", "What clients say")}</h3>
            <div className="mt-4 grid gap-3">
              {testi.map((tt, i) => (
                <figure key={i} className="rounded-xl p-4" style={{ background: "white", border: `1px solid ${PALETTE.border}` }}>
                  <blockquote className="text-sm" style={{ color: PALETTE.cacao }}>“{tt.q}”</blockquote>
                  <figcaption className="mt-2 text-xs" style={{ color: PALETTE.cacaoSoft }}>
                    <span className="inline-flex items-center gap-2">
                      <img src={IMG.avatar[i % IMG.avatar.length]} alt="Client" className="w-6 h-6 rounded-full object-cover" /> {tt.a}
                    </span>
                    <span className="ms-2">{"★".repeat(tt.r)}</span>
                  </figcaption>
                </figure>
              ))}
            </div>
            <h3 className="mt-6 text-sm font-extrabold uppercase tracking-widest" style={{ color: PALETTE.caramel }}>{t("awards.tag", "Certifications & Mentions")}</h3>
            <div className="mt-3 flex flex-wrap gap-2">
              {awards.map((x, i) => (
                <span key={i} className="inline-flex items-center px-3 h-8 rounded-full text-xs font-bold" style={{ background: PALETTE.linen, border: `1px solid ${PALETTE.border}`, color: PALETTE.cacao }}>
                  <Dot />&nbsp;{x}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ----------------------- CALCULATOR + CONTACT ----------------------- */
function CalculatorContact() {
  const { t } = useTranslation();
  const [area, setArea] = React.useState(30);
  const [rate, setRate] = React.useState(1.35);
  const [ac, setAC] = React.useState(8);
  const [season, setSeason] = React.useState(6);
  const [uOld, setUOld] = React.useState(5.8);
  const [uNew, setUNew] = React.useState(1.6);
  const [cost, setCost] = React.useState(2112);

  const kWhSaved = Math.max(0, ((uOld - uNew) / uOld) * area * ac * 30 * season * 0.05);
  const egpSaved = kWhSaved * rate;
  const paybackMonths = cost > 0 ? Math.max(1, Math.round((cost / Math.max(1, egpSaved)) * 12)) : 0;
  const moneyFmt = (n) => `${Math.round(n).toLocaleString()} EGP`;

  return (
    <section id="contact" className="py-16" style={{ color: PALETTE.cacao }}>
      <div className="max-w-7xl mx-auto px-4 grid lg:grid-cols-2 gap-10 items-start">
        <div className="rounded-2xl p-6 bg-white" style={{ border: `1px solid ${PALETTE.border}` }}>
          <h3 className="text-xl font-black mb-1">{t("calculator.tag", "Energy Savings Estimator")}</h3>
          <p className="mb-4" style={{ color: PALETTE.cacaoSoft }}>{t("calculator.lead")}</p>
          <div className="grid sm:grid-cols-2 gap-3">
            <Field label={t("calculator.inputs.area")} value={area} onChange={setArea} step={1} min={1} />
            <Field label={t("calculator.inputs.rate")} value={rate} onChange={setRate} step={0.05} min={0} />
            <Field label={t("calculator.inputs.ac")} value={ac} onChange={setAC} step={1} min={0} max={24} />
            <Field label={t("calculator.inputs.season")} value={season} onChange={setSeason} step={1} min={1} max={12} />
            <Field label={t("calculator.inputs.uOld")} value={uOld} onChange={setUOld} step={0.1} min={0.1} />
            <Field label={t("calculator.inputs.uNew")} value={uNew} onChange={setUNew} step={0.1} min={0.1} />
            <Field label={t("calculator.inputs.cost")} value={cost} onChange={setCost} step={50} min={0} />
          </div>
          <div className="mt-4 grid sm:grid-cols-3 gap-3">
            <StatCard title={t("calculator.result.saved")} value={Math.round(kWhSaved).toLocaleString()} />
            <StatCard title={t("calculator.result.money")} value={moneyFmt(egpSaved)} />
            <StatCard title={t("calculator.result.payback")} value={`${paybackMonths}`} />
          </div>
        </div>
        <ContactForm />
      </div>
    </section>
  );
}
function Field({ label, value, onChange, step = 1, min, max }) {
  return (
    <label className="grid gap-1">
      <span className="text-sm font-bold" style={{ color: PALETTE.cacao }}>{label}</span>
      <input type="number" value={value} onChange={(e) => onChange(Number(e.target.value))} step={step} min={min} max={max} className="rounded-xl px-3 py-2" style={{ border: `1px solid ${PALETTE.border}`, color: PALETTE.cacao }} />
    </label>
  );
}
function StatCard({ title, value }) {
  return (
    <div className="rounded-xl p-4" style={{ background: PALETTE.linen, border: `1px solid ${PALETTE.border}` }}>
      <div className="text-xs" style={{ color: PALETTE.cacaoSoft }}>{title}</div>
      <div className="text-2xl font-black" style={{ color: PALETTE.caramel }}>{value}</div>
    </div>
  );
}

/* ----------------------- AI ASSISTANT (NEW) ------------------------ */
/* Floating chat widget + ManyChat handoff (VITE_MANYCHAT_URL) */
const MC_URL = (typeof import.meta !== "undefined" && import.meta.env && import.meta.env.VITE_MANYCHAT_URL) || "";
function AssistantWidget() {
  const { t, i18n } = useTranslation();
  const [open, setOpen] = React.useState(false);
  const [messages, setMessages] = React.useState([]);
  const [input, setInput] = React.useState("");

  React.useEffect(() => {
    if (open && messages.length === 0) {
      const ar = i18n.language?.startsWith("ar");
      pushBot(ar
        ? "مرحباً! أنا مساعد إيجي وين. أساعدك في المنتجات، التقديرات، التوفير، وحجز الزيارة."
        : "Hi! I’m the EGYWIN assistant. I can help with products, pricing guidance, energy savings and booking a site visit.");
      pushBotQuickActions();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [open]);

  function pushUser(text) { setMessages((m) => [...m, { role: "user", text, ts: Date.now() }]); }
  function pushBot(text) { setMessages((m) => [...m, { role: "bot", text, ts: Date.now() }]); }
  function pushBotQuickActions() { setMessages((m) => [...m, { role: "system", quick: true, ts: Date.now() }]); }

  function handleSend(raw) {
    const text = (raw ?? input).trim();
    if (!text) return;
    pushUser(text);
    setInput("");
    setTimeout(() => respond(text), 150);
  }

  function respond(q) {
    const ar = i18n.language?.startsWith("ar");
    const s = q.toLowerCase();

    if (/arabic|عرب|ار|عربي/.test(s)) { i18n.changeLanguage("ar"); pushBot("تم التبديل إلى العربية."); return; }
    if (/english|eng|انجل|انكليزي/.test(s)) { i18n.changeLanguage("en"); pushBot("Switched to English."); return; }

    // products (windows/doors only)
    if (/(product|window|door|نافذ|باب)/.test(s)) {
      const list = t("products.list", { returnObjects: true, defaultValue: [] });
      const lines = list.slice(0, 6).map((p) => `• ${p.name} — ${p.desc}`);
      pushBot(lines.join("\n") + (ar ? `\n\nللمزيد: قسم المنتجات ↓` : `\n\nSee more: Products section ↓`));
      return;
    }
    if (/service|design|install|maintenance|خدمة|تصميم|تركيب|صيانة/.test(s)) {
      const list = t("services.list", { returnObjects: true, defaultValue: [] });
      const lines = list.map((p) => `• ${p.h}: ${p.d}`);
      pushBot(lines.join("\n"));
      return;
    }
    if (/material|glass|profile|hardware|مادة|زجاج|بروفايل|اكسسوارات/.test(s)) {
      const list = t("materials.list", { returnObjects: true, defaultValue: [] });
      const lines = list.map((p) => `• ${p.h}: ${p.d}`);
      pushBot(lines.join("\n"));
      return;
    }
    if (/energy|save|kwh|bill|calculator|roi|توفير|طاقة|حساب/.test(s)) {
      pushBot(ar ? "يمكنك استخدام حاسبة توفير الطاقة أسفل الصفحة. هذا تقدير تقريبي:" : "You can use the Energy Savings Estimator below. Here’s a quick rough estimate:");
      const area = 30, rate = 1.35, ac = 8, season = 6, uOld = 5.8, uNew = 1.6;
      const kWh = Math.max(0, ((uOld - uNew) / uOld) * area * ac * 30 * season * 0.05);
      const egp = kWh * rate;
      pushBot(`${ar ? "تقدير التوفير سنوياً" : "Estimated yearly savings"}: ~${Math.round(kWh).toLocaleString()} kWh • ${Math.round(egp).toLocaleString()} EGP\n${ar ? "جرّب المُدخلات في الحاسبة ↓" : "Try your inputs in the calculator ↓"}`);
      return;
    }
    if (/quote|price|call|visit|site|عرض|سعر|مكالمة|زيارة/.test(s)) {
      pushBot(ar ? "رائع! أرسل اسمك ورقمك/بريدك وسنتواصل قريبًا. يمكنك أيضًا استخدام واتساب." : "Great! Share your name and phone/email and we’ll get back shortly. You can also tap WhatsApp.");
      return;
    }
    if (/whatsapp|واتساب|wa/.test(s)) {
      pushBot((ar ? "سأفتح واتساب الآن." : "Opening WhatsApp now.") + " wa.me/201222131118");
      window.open("https://wa.me/201222131118", "_blank");
      return;
    }
    pushBot(ar ? "اسأل عن النوافذ والأبواب uPVC، الخدمات، المواد، أو اطلب زيارة. جرّب: \"ما أنواع النوافذ؟\"" : "Ask about uPVC windows & doors, services, materials, savings, or request a visit. Try: “What window types do you have?”");
  }

  const quicks = [
    { key: "products", label: i18n.language?.startsWith("ar") ? "المنتجات" : "Products", q: "products" },
    { key: "savings", label: i18n.language?.startsWith("ar") ? "حساب التوفير" : "Energy estimator", q: "energy savings" },
    { key: "visit", label: i18n.language?.startsWith("ar") ? "طلب زيارة" : "Request a site visit", q: "request a site visit" },
    { key: "whatsapp", label: "WhatsApp", q: "whatsapp" },
  ];

  return (
    <>
      <button onClick={() => setOpen((o) => !o)} className="fixed z-[70] bottom-24 left-4 h-12 w-12 rounded-full shadow-lg grid place-items-center" style={{ background: PALETTE.caramel, color: "white" }} aria-label="AI Assistant" title="AI Assistant">🤖</button>

      {open && (
        <div className="fixed z-[80] bottom-40 left-4 w-[90vw] max-w-[380px] rounded-2xl shadow-xl overflow-hidden" style={{ background: "white", border: `1px solid ${PALETTE.border}` }}>
          <div className="px-4 py-3 flex items-center justify-between" style={{ background: PALETTE.linen, borderBottom: `1px solid ${PALETTE.border}`, color: PALETTE.cacao }}>
            <div className="font-black">EGYWIN Assistant</div>
            <div className="flex items-center gap-2">
              {MC_URL ? (
                <button onClick={() => window.open(MC_URL, "_blank")} className="text-xs font-bold px-2 py-1 rounded" style={{ border: `1px solid ${PALETTE.border}`, color: PALETTE.cacao }} title="Open ManyChat">ManyChat</button>
              ) : null}
              <button onClick={() => setOpen(false)} aria-label="Close">✕</button>
            </div>
          </div>

          <div className="max-h-[50vh] overflow-auto px-3 py-3 space-y-2" style={{ color: PALETTE.cacao }}>
            {messages.map((m, idx) =>
              m.quick ? (
                <div key={idx} className="flex flex-wrap gap-2">
                  {quicks.map((q) => (
                    <button key={q.key} onClick={() => handleSend(q.q)} className="h-8 px-3 rounded-full text-xs font-bold" style={{ background: PALETTE.linen, border: `1px solid ${PALETTE.border}`, color: PALETTE.cacao }}>
                      {q.label}
                    </button>
                  ))}
                </div>
              ) : (
                <div key={idx} className={m.role === "user" ? "text-right" : "text-left"}>
                  <div className="inline-block px-3 py-2 rounded-2xl whitespace-pre-wrap"
                    style={m.role === "user" ? { background: PALETTE.caramel, color: "white" } : { background: PALETTE.cream, border: `1px solid ${PALETTE.border}` }}>
                    {m.text}
                  </div>
                </div>
              )
            )}
          </div>

          <div className="px-2 py-2 flex items-center gap-2" style={{ borderTop: `1px solid ${PALETTE.border}` }}>
            <input value={input} onChange={(e) => setInput(e.target.value)} onKeyDown={(e) => { if (e.key === "Enter") handleSend(); }} placeholder={i18n.language?.startsWith("ar") ? "اكتب سؤالك..." : "Type your question..."} className="flex-1 px-3 py-2 rounded-xl outline-none" style={{ border: `1px solid ${PALETTE.border}`, color: PALETTE.cacao }} />
            <button onClick={() => handleSend()} className="h-10 px-4 rounded-xl font-bold" style={{ background: PALETTE.caramel, color: "white" }}>
              {i18n.language?.startsWith("ar") ? "إرسال" : "Send"}
            </button>
          </div>
        </div>
      )}
    </>
  );
}

/* ------------------------ CONTACT + FOOTERS ------------------------ */
function ContactForm() {
  const { t, i18n } = useTranslation();
  const dirRtl = i18n.language?.startsWith("ar");
  const [ok, setOk] = React.useState(false);
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        const honey = e.currentTarget.querySelector('input[name="company"]');
        if (honey && honey.value) return;
        setOk(true);
        setTimeout(() => setOk(false), 3500);
      }}
      className="rounded-2xl p-6 shadow bg-white"
      style={{ border: `1px solid ${PALETTE.border}`, color: PALETTE.cacao }}
    >
      <input type="text" name="company" className="hidden" tabIndex={-1} autoComplete="off" />
      <h3 className="text-xl font-black mb-2">{t("contact.title", "Start your next project with us")}</h3>
      <p className="mb-4" style={{ color: PALETTE.cacaoSoft }}>{t("contact.lead", "Send a message — our team replies fast.")}</p>
      <div className="grid sm:grid-cols-2 gap-4">
        <label className="grid gap-1">
          <span className="text-sm font-bold">{dirRtl ? "الاسم" : "Name"}</span>
          <input className="rounded-xl px-3 py-2" required placeholder={dirRtl ? "اسمك" : "Your name"} style={{ border: `1px solid ${PALETTE.border}`, color: PALETTE.cacao }} />
        </label>
        <label className="grid gap-1">
          <span className="text-sm font-bold">Email</span>
          <input type="email" className="rounded-xl px-3 py-2" required placeholder="you@email.com" style={{ border: `1px solid ${PALETTE.border}`, color: PALETTE.cacao }} />
        </label>
        <label className="sm:col-span-2 grid gap-1">
          <span className="text-sm font-bold">{dirRtl ? "رسالتك" : "Message"}</span>
          <textarea className="rounded-xl px-3 py-2 min-h-[120px]" required placeholder={dirRtl ? "كيف نساعدك؟" : "How can we help?"} style={{ border: `1px solid ${PALETTE.border}`, color: PALETTE.cacao }} />
        </label>
      </div>
      <button type="submit" className="mt-4 inline-flex items-center px-5 py-3 rounded-xl font-extrabold shadow" style={{ background: PALETTE.caramel, color: "white" }}>
        {t("contact.submit", "Send Message")}
      </button>
      {ok && (<div className="mt-3 rounded-xl p-3" style={{ color: "#1f6b3a", background: "#EAF7EF", border: "1px solid #BFE5CB" }}>Thanks! We will contact you soon.</div>)}

      {/* Contact details */}
      <div className="mt-5 text-sm" style={{ color: PALETTE.cacaoSoft }}>
        <div><b>{t("contact.email")}:</b> <a href="mailto:egywin@me.com">egywin@me.com</a></div>
        <div><b>{t("contact.phone")}:</b> <a href="tel:+201222131118">+20 1222131118</a></div>
        <div><b>Web:</b> <a href="https://www.egywin.com" target="_blank" rel="noreferrer">www.egywin.com</a></div>
      </div>
    </form>
  );
}

function Footer() {
  const { t } = useTranslation();
  return (
    <>
      <footer className="py-10" style={{ background: "white", borderTop: `1px solid ${PALETTE.border}`, color: PALETTE.cacao }}>
        <div className="max-w-7xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <span className="font-extrabold tracking-[0.35em]">EGYWIN</span>
            <span style={{ color: PALETTE.cacaoSoft }}>Since 2006</span>
          </div>
          <nav className="text-sm flex flex-wrap gap-4 justify-center" style={{ color: PALETTE.cacaoSoft }}>
            <a href="#products">{t("nav.products", "Products")}</a>
            <a href="#projects">{t("nav.projects", "Projects")}</a>
            <a href="#materials">{t("nav.materials", "Materials")}</a>
            <a href="#contact">{t("nav.contact", "Contact")}</a>
          </nav>
          <div className="text-sm text-center" style={{ color: PALETTE.cacaoSoft }}>
            © {new Date().getFullYear()} EGYWIN. {t("footer.rights", "All rights reserved.")}
          </div>
        </div>
      </footer>

      <div className="text-center text-xs py-3" style={{ background: PALETTE.linen, borderTop: `1px solid ${PALETTE.border}`, color: PALETTE.cacaoSoft }}>
        made with passion and precision by{" "}
        <a href="https://www.bimbolabs.xyz" target="_blank" rel="noreferrer" style={{ color: PALETTE.caramel }}>
          Bimbo Labs
        </a>{" "}
        www.bimbolabs.xyz
      </div>
    </>
  );
}

function FloatingUI() {
  return (
    <>
      <AssistantWidget />
      <a href="https://wa.me/201222131118" target="_blank" rel="noreferrer" className="fixed bottom-4 left-4 h-12 w-12 grid place-items-center rounded-full shadow-lg" style={{ background: "#25D366", color: "white" }} aria-label="WhatsApp">WA</a>
      <button onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} className="fixed bottom-4 right-4 h-12 w-12 grid place-items-center rounded-full shadow-lg" style={{ background: "white", color: PALETTE.cacao, border: `1px solid ${PALETTE.border}` }} aria-label="Back to top">↑</button>
    </>
  );
}

/* ------------------------------ ROOT APP ----------------------------- */
export default function App() {
  const { i18n: inst } = useTranslation();
  React.useEffect(() => {
    document.documentElement.dir = inst.language?.startsWith("ar") ? "rtl" : "ltr";
  }, [inst.language]);
  const toggleLang = () => {
    const next = inst.language?.startsWith("ar") ? "en" : "ar";
    inst.changeLanguage(next);
    localStorage.setItem("appLang", next);
  };

  return (
    <div className="min-h-screen" style={{ backgroundImage: `url(${IMG.textures.paper})`, backgroundSize: "200px 200px" }}>
      <Header onLangToggle={toggleLang} />
      <HeroPro />
      <QualityRow />
      <Services />
      <Products />
      <MaterialsProjectsPartners />
      <ProcessFAQExtra />
      <CalculatorContact />
      <Footer />
      <FloatingUI />
    </div>
  );
}
