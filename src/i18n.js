import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import { IMG } from "./theme";

/** EN & AR resources (uPVC-only) */
const RES = {
  en: {
    nav: { home: "Home", about: "About", products: "Products", contact: "Contact", lang: "عربي" },

    // Common small strings used across components
    common: {
      since: "Since 2006",
      signature: "Signature",
    },

    home: {
      pre: "EGYWIN",
      titleA: "Classical craftsmanship",
      titleB: "meets industrial modernity",
      titleC: "for brighter, quieter spaces.",
      subtitle:
        "Since 2006 we design, manufacture and install high-quality uPVC windows & doors in Egypt — delivering durability, energy efficiency and refined aesthetics.",
      bullets: ["uPVC systems", "Acoustic & thermal", "Security & durability"],
      ctaBrowse: "Browse Products",
      ctaQuote: "Get a Quote",
      featured: "Featured Picks",
      // Added:
      ctaAll: "All Products",
    },

    about: {
      tag: "About EGYWIN",
      lead:
        "We are a Cairo-based uPVC manufacturer and installer. Our team blends classical craft with precise fabrication for long-lasting, quiet, energy-efficient spaces.",
      stats: [
        { l: "Years", n: new Date().getFullYear() - 2006 },
        { l: "Engineers", n: 35 },
        { l: "Projects", n: 1200 },
      ],
      values: [
        { h: "Precision", d: "Tight tolerances, clean lines, verified performance." },
        { h: "Durability", d: "Weather-resistant profiles and hardware." },
        { h: "Service", d: "From first sketch to after-sales care." },
      ],
    },

    products: {
      tag: "Our Products",
      // Added tagline for Products page hero
      tagline: "Windows & Doors — refined, efficient and durable.",
      tabs: ["Windows", "Doors"],
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
      features: {
        tag: "Performance Features",
        list: [
          { h: "Thermal Insulation", d: "Multi-chamber profiles + insulated glazing reduce heat transfer." },
          { h: "Acoustic Control", d: "Thicker/laminated panes cut exterior noise dramatically." },
          { h: "Security", d: "Multi-point locking and reinforced frames deter intrusion." },
          { h: "Sealing", d: "Quality gaskets + tight tolerances ensure air/water tightness." },
        ],
      },
    },

    // Quality strip items (translated list)
    quality: {
      items: [
        "ISO-aligned quality control",
        "Saint-Gobain glazing",
        "Adopen uPVC profiles",
        "Kale Kilit hardware",
      ],
    },

    // Before/After widget
    beforeAfter: {
      title: "Before & After — noise / heat",
    },

    contact: {
      tag: "Contact",
      title: "Start your next project with us",
      lead: "Send a message — our team replies fast.",
      submit: "Send Message",
      email: "Email",
      phone: "Phone",
      address: "Address",
      // Added:
      findUs: "Find us",
      locationBlurb: "Cairo — New Cairo, 5th Settlement • Nationwide projects on request.",
    },

    footer: { rights: "All rights reserved." },
  },

  ar: {
    nav: { home: "الرئيسية", about: "من نحن", products: "المنتجات", contact: "تواصل", lang: "ENG" },

    common: {
      since: "منذ 2006",
      signature: "مُميز",
    },

    home: {
      pre: "إيجي وين",
      titleA: "حرفية كلاسيكية",
      titleB: "بلمسة صناعية عصرية",
      titleC: "لمساحات أكثر إشراقًا وهدوءًا.",
      subtitle:
        "منذ 2006 — نصمّم ونصنّع ونركّب نوافذ وأبواب uPVC عالية الجودة في مصر، بمتانة وكفاءة طاقة ولمسة عصرية.",
      bullets: ["أنظمة uPVC", "عزل حراري وصوتي", "أمان ومتانة"],
      ctaBrowse: "تصفح المنتجات",
      ctaQuote: "اطلب عرض سعر",
      featured: "مختارات مميزة",
      ctaAll: "كل المنتجات",
    },

    about: {
      tag: "عن إيجي وين",
      lead:
        "شركة مصرية لتصنيع وتركيب أنظمة uPVC. نمزج بين الحِرفة الكلاسيكية والتصنيع الدقيق لمساحات هادئة وموفرة للطاقة.",
      stats: [
        { l: "سنوات", n: new Date().getFullYear() - 2006 },
        { l: "مهندسًا", n: 35 },
        { l: "مشروعًا", n: 1200 },
      ],
      values: [
        { h: "دقة", d: "تلرانسات دقيقة وخطوط نظيفة وأداء مُثبت." },
        { h: "متانة", d: "بروفايلات وملحقات مقاومة للعوامل الجوية." },
        { h: "خدمة", d: "من أول رسمة وحتى ما بعد البيع." },
      ],
    },

    products: {
      tag: "منتجاتنا",
      tagline: "نوافذ وأبواب — راقية وفعّالة ومتينة.",
      tabs: ["نوافذ", "أبواب"],
      list: [
        { name: "نافذة مفصلية (uPVC)", desc: "تهوية ممتازة وإحكام وأمان. أنماط وتشطيبات متعددة.", img: IMG.prod[0], cat: "نوافذ" },
        { name: "نافذة منزلقة (uPVC)", desc: "توفير مساحة وحركة سلسة ورؤية واسعة ومقاومة للعوامل.", img: IMG.prod[1], cat: "نوافذ" },
        { name: "تلت آند تيرن (uPVC)", desc: "فتح بطريقتين لراحة وأمان وسهولة تنظيف.", img: IMG.prod[3], cat: "نوافذ" },
        { name: "باب دخول (uPVC)", desc: "أبواب معزولة بإقفال متعددة لمتانة وأمان.", img: IMG.prod[5], cat: "أبواب" },
        { name: "باب ليفت آند سلايد (uPVC)", desc: "ألواح كبيرة وحركة خفيفة — تواصل داخلي/خارجي.", img: IMG.prod[2], cat: "أبواب" },
        { name: "باب فرنش (uPVC)", desc: "مظهر كلاسيكي بخصائص عزل وأمان حديثة.", img: IMG.prod[4], cat: "أبواب" },
      ],
      features: {
        tag: "مزايا الأداء",
        list: [
          { h: "عزل حراري", d: "غرف متعددة وزجاج معزول لتقليل انتقال الحرارة." },
          { h: "عزل صوتي", d: "ألواح سميكة/مصفّحة تقلل الضجيج الخارجي." },
          { h: "أمان", d: "غلق متعدد النقاط وإطارات معزّزة." },
          { h: "إحكام", d: "جوانات ودقة تصنيع لإحكام الهواء والماء." },
        ],
      },
    },

    quality: {
      items: [
        "رقابة جودة متوافقة مع ISO",
        "زجاج سان-غوبان",
        "بروفيلات uPVC من Adopen",
        "معدّات Kale Kilit",
      ],
    },

    beforeAfter: {
      title: "قبل وبعد — الضجيج/الحرارة",
    },

    contact: {
      tag: "تواصل",
      title: "ابدأ مشروعك القادم معنا",
      lead: "أرسل رسالة — سنرد سريعًا.",
      submit: "إرسال",
      email: "البريد الإلكتروني",
      phone: "الهاتف",
      address: "العنوان",
      findUs: "موقعنا",
      locationBlurb: "القاهرة — القاهرة الجديدة، التجمع الخامس • مشاريع في جميع أنحاء البلاد عند الطلب.",
    },

    footer: { rights: "جميع الحقوق محفوظة." },
  },
};

const saved =
  (typeof window !== "undefined" && localStorage.getItem("appLang")) || "en";

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

// Keep bundles fresh (HMR-safe)
i18n.addResourceBundle("en", "translation", RES.en, true, true);
i18n.addResourceBundle("ar", "translation", RES.ar, true, true);

export default i18n;
