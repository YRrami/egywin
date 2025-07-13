import React from "react";
import "./styles.css";
import "./i18n";

const GALLERY_IMAGES = [
  { src: "/image1.png", alt: "Gallery 1" },
  { src: "/image2.png", alt: "Gallery 2" },
  { src: "/image3.png", alt: "Gallery 3" },
  { src: "/image4.png", alt: "Gallery 4" }
];

export default function App() {
  const [selected, setSelected] = React.useState(0);
  const [navOpen, setNavOpen] = React.useState(false);

  React.useEffect(() => {
    if (navOpen) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "";
  }, [navOpen]);

  return (
    <div className="lux-root">
      {/* HEADER */}
      <header className="lux-header">
        <nav className="lux-nav">
          <div className="nav-section nav-center">EGYWIN</div>
          <button
            className="hamburger"
            aria-label={navOpen ? "Close menu" : "Open menu"}
            aria-expanded={navOpen}
            aria-controls="main-menu"
            onClick={() => setNavOpen((v) => !v)}
          >
            <div className={"ham-bar" + (navOpen ? " ham-open" : "")} />
            <div className={"ham-bar" + (navOpen ? " ham-open" : "")} />
            <div className={"ham-bar" + (navOpen ? " ham-open" : "")} />
          </button>
          <div className="nav-section nav-left nav-desktop">
            <a href="#">PRODUCTS</a>
            <a href="#">COLLECTIONS</a>
            <a href="#">STORIES</a>
            <a href="#">MORE</a>
          </div>
          <div className="nav-section nav-right nav-desktop">
            <button className="icon-btn" aria-label="Search">
              <svg width={18} height={18} viewBox="0 0 20 20" fill="none"><circle cx="9" cy="9" r="6.5" stroke="#42391D" strokeWidth="1.5"/><path d="M15.2 15.2L18 18" stroke="#42391D" strokeWidth="1.5" strokeLinecap="round"/></svg>
            </button>
            <button className="icon-btn" aria-label="Profile">
              <svg width={18} height={18} viewBox="0 0 20 20" fill="none"><circle cx="10" cy="7" r="4" stroke="#42391D" strokeWidth="1.5"/><ellipse cx="10" cy="15" rx="6" ry="3" stroke="#42391D" strokeWidth="1.5"/></svg>
            </button>
            <span className="nav-lang">ENG</span>
          </div>
        </nav>
        <div className={`mobile-nav-drawer${navOpen ? " open" : ""}`} id="main-menu">
          <div className="drawer-links">
            <a href="#">PRODUCTS</a>
            <a href="#">COLLECTIONS</a>
            <a href="#">STORIES</a>
            <a href="#">MORE</a>
            <div className="drawer-actions">
              <button className="icon-btn" aria-label="Search">
                <svg width={18} height={18} viewBox="0 0 20 20" fill="none"><circle cx="9" cy="9" r="6.5" stroke="#42391D" strokeWidth="1.5"/><path d="M15.2 15.2L18 18" stroke="#42391D" strokeWidth="1.5" strokeLinecap="round"/></svg>
              </button>
              <button className="icon-btn" aria-label="Profile">
                <svg width={18} height={18} viewBox="0 0 20 20" fill="none"><circle cx="10" cy="7" r="4" stroke="#42391D" strokeWidth="1.5"/><ellipse cx="10" cy="15" rx="6" ry="3" stroke="#42391D" strokeWidth="1.5"/></svg>
              </button>
              <span className="nav-lang">ENG</span>
            </div>
          </div>
        </div>
      </header>

      {/* MAIN SPLIT LAYOUT */}
      <main className="lux-main">
        <section className="lux-hero-left">
          <div className="lux-hero-left-content">
            <h1 className="lux-hero-title">
              <span className="lux-crafted">crafted</span> for<br />
              modern living<br />
              with timeless<br />
              appeal.
            </h1>
            <div className="lux-hero-desc">
              Innovative aluminum systems for the future of living.
            </div>
            <a href="#" className="lux-explore-link">
              <span>Explore new collection</span>
              <svg width="15" height="12" viewBox="0 0 16 12" style={{marginLeft: 4}}><path d="M1 6h13m0 0-3.5-3.5M14 6l-3.5 3.5" stroke="#a17b43" strokeWidth="1.5" fill="none" strokeLinecap="round"/></svg>
            </a>
          </div>
        </section>
        <section className="lux-hero-center">
          <div className="modohouz-gallery-area">
            <div className="gallery-main-img-box">
              <img
                className="gallery-main-img"
                src={GALLERY_IMAGES[selected].src}
                alt={GALLERY_IMAGES[selected].alt}
                key={GALLERY_IMAGES[selected].src}
              />
              <div className="lux-mini-card">
                <img
                  src={GALLERY_IMAGES[selected].src}
                  alt="Window"
                  className="lux-mini-card-img"
                />
                <div>
                  <div className="lux-mini-card-title">PUFF ÉPURE</div>
                  <div className="lux-mini-card-desc">Inspired by French minimalism</div>
                </div>
              </div>
            </div>
            <div className="gallery-vertical-rail">
              {GALLERY_IMAGES.map((img, i) => (
                <button
                  key={img.src}
                  className={
                    "gallery-thumb" + (i === selected ? " selected" : "")
                  }
                  style={{
                    width: i === selected ? 85 : 60,
                    height: i === selected ? 85 : 60
                  }}
                  onClick={() => setSelected(i)}
                  aria-label={`Show image ${i + 1}`}
                  tabIndex={0}
                >
                  <img src={img.src} alt={img.alt} />
                </button>
              ))}
            </div>
          </div>
        </section>
      </main>

      {/* ABOUT US SECTION */}
<section className="lux-about">
  <div className="lux-about-bg" />
  <div className="lux-about-inner">
    <div className="lux-about-grid">
      <div className="lux-about-info">
        <div className="lux-about-brandmark">SINCE 2006</div>
        <div className="lux-about-tag">
          <span className="lux-about-dot"></span> About EGYWIN
        </div>
        <h2 className="lux-about-headline">
          Elevating Spaces<br />
          <span>with Timeless <span className="lux-about-gold">Design</span></span>
        </h2>
        <div className="lux-about-desc">
          <p>
            <b>EGYWIN</b> has been crafting world-class uPVC and aluminum systems since 2006.<br />
            Our products empower architects and dreamers to create luminous, comfortable, and secure spaces.
          </p>
          <p className="lux-about-highlight">
            With passion, innovation, and a touch of elegance, we turn every window and door into a statement.
          </p>
        </div>
        <div className="lux-about-quote">
          <span className="lux-quote-mark">“</span>
          <span>
            We don’t just make windows and doors.<br />
            We build trust, one project at a time.
          </span>
        </div>
      </div>
      <div className="lux-about-image-col">
        <div className="lux-about-imagebox">
          <img
            src="/image1.png"
            alt="Modern EGYWIN window"
            className="lux-about-img"
          />
          <div className="lux-about-img-glow"></div>
        </div>
      </div>
    </div>
  </div>
</section>


{      /* PRODUCTS SECTION */}
<section className="lux-products">
  <div className="lux-products-inner">
    <div className="lux-products-header">
      <div className="lux-products-tagline">
        <span className="lux-products-dot" />
        Signature Solutions
      </div>
      <h2 className="lux-products-title">
        Products that <span>transform spaces</span>
      </h2>
      <p className="lux-products-lead">
        Discover our selection of systems that combine performance, design, and a timeless sense of luxury.
      </p>
    </div>
    <div className="lux-products-featured">
      {/* Feature product card (hero) */}
      <div className="lux-product-feature">
        <div className="lux-product-feature-imgbox">
          <img src="/image2.png" alt="Slimline Panorama" className="lux-product-feature-img" />
          <div className="lux-product-feature-goldglow" />
        </div>
        <div className="lux-product-feature-info">
          <div className="lux-product-feature-tag">BESTSELLER</div>
          <div className="lux-product-feature-name">Slimline Panorama System</div>
          <div className="lux-product-feature-desc">
            Effortless minimal frame, uninterrupted glass, for breathtaking light and modern elegance.
          </div>
          <a href="#" className="lux-product-feature-link">
            <span>Learn More</span>
            <svg width="15" height="12" viewBox="0 0 16 12" style={{marginLeft: 4, marginBottom: -2}}><path d="M1 6h13m0 0-3.5-3.5M14 6l-3.5 3.5" stroke="#a17b43" strokeWidth="1.5" fill="none" strokeLinecap="round"/></svg>
          </a>
        </div>
      </div>
    </div>
    {/* Product grid below hero */}
    <div className="lux-products-list">
      {[
        {
          name: "Heritage Casement",
          img: "/image1.png",
          desc: "Classic lines, re-engineered. Heritage style with modern performance and security.",
        },
        {
          name: "uPVC Tilt & Turn",
          img: "/image2.png",
          desc: "Flexible European design opens two ways for all-season comfort and ventilation.",
        },
        {
          name: "Lift & Slide Door",
          img: "/image3.png",
          desc: "Seamless indoor-outdoor living. Huge panels, featherlight operation.",
        },
      ].map((product, idx) => (
        <div className="lux-product-card" key={product.name + idx}>
          <div className="lux-product-imgbox">
            <img src={product.img} alt={product.name} className="lux-product-img" />
          </div>
          <div className="lux-product-info">
            <div className="lux-product-name">{product.name}</div>
            <div className="lux-product-desc">{product.desc}</div>
            <a href="#" className="lux-product-link">
              <span>Learn More</span>
              <svg width="14" height="12" viewBox="0 0 16 12" style={{marginLeft: 4, marginBottom: -2}}><path d="M1 6h13m0 0-3.5-3.5M14 6l-3.5 3.5" stroke="#a17b43" strokeWidth="1.5" fill="none" strokeLinecap="round"/></svg>
            </a>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>

{      /* CONTACT SECTION */}
<section className="lux-contact">
  <div className="lux-contact-bg"></div>
  <div className="lux-contact-wrap">
    <div className="lux-contact-col lux-contact-info">
      <div className="lux-contact-titlebox">
        <div className="lux-contact-bar"></div>
        <div className="lux-contact-tagline">Contact</div>
        <h2 className="lux-contact-title">
          Start your<br />
          <span>next project</span>
          <span className="lux-contact-gold">with us</span>
        </h2>
        <div className="lux-contact-lead">
          Ready for a quote or advice on your custom system? Fill the form or reach out—our team replies fast.
        </div>
      </div>
      <div className="lux-contact-details">
        <div>
          <b>Email:</b> <a href="mailto:info@egywin.com">info@egywin.com</a>
        </div>
        <div>
          <b>Phone:</b> <a href="tel:+20123456789">+20 123 456 789</a>
        </div>
        <div>
          <b>Address:</b> 123 Modern Avenue, Cairo, Egypt
        </div>
      </div>
      <div className="lux-contact-img-accent">
        <img src="/contact-brand.jpg" alt="Brand interior" />
      </div>
    </div>
    <form className="lux-contact-col lux-contact-form" onSubmit={e => { e.preventDefault(); alert("Submitted! (Demo)"); }}>
      <div className="lux-contact-fields">
        <div className="lux-contact-field">
          <label htmlFor="name">Name</label>
          <input type="text" id="name" name="name" required placeholder="Your name" />
        </div>
        <div className="lux-contact-field">
          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" required placeholder="you@email.com" />
        </div>
      </div>
      <div className="lux-contact-field">
        <label htmlFor="message">Message</label>
        <textarea id="message" name="message" required placeholder="How can we help?"></textarea>
      </div>
      <button type="submit" className="lux-contact-btn">
        <span>Send Message</span>
        <svg width="19" height="15" viewBox="0 0 19 15" style={{marginLeft: 11, marginBottom: -3}}>
          <path d="M1 7.5h16m0 0-5-5M17 7.5l-5 5" stroke="#a17b43" strokeWidth="1.7" fill="none" strokeLinecap="round"/>
        </svg>
      </button>
    </form>
  </div>
</section>


<footer className="lux-footer">
  <div className="lux-footer-inner">
    <div className="lux-footer-brand">
      <span className="lux-footer-logo">EGYWIN</span>
      <span className="lux-footer-since">Since 2006</span>
    </div>
    <nav className="lux-footer-nav">
      <a href="#">Products</a>
      <a href="#">Collections</a>
      <a href="#">Stories</a>
      <a href="#">Contact</a>
    </nav>
    <div className="lux-footer-social">
      <a href="mailto:info@egywin.com" aria-label="Email" className="lux-footer-icon">
        <svg width="22" height="22" fill="none" viewBox="0 0 22 22"><path d="M3 5.8A2.8 2.8 0 0 1 5.8 3h10.4A2.8 2.8 0 0 1 19 5.8v7.6a2.8 2.8 0 0 1-2.8 2.8H5.8A2.8 2.8 0 0 1 3 13.4V5.8Zm.72 0 7.28 5.45 7.28-5.45M3 13.4V16.2A2.8 2.8 0 0 0 5.8 19h10.4A2.8 2.8 0 0 0 19 16.2v-2.8" stroke="#a17b43" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/></svg>
      </a>
      <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="lux-footer-icon">
        <svg width="22" height="22" fill="none" viewBox="0 0 22 22"><path d="M14.2 11.7h2.15V9.1h-2.15V7.9c0-.49.26-.8.8-.8h1.4V4.8h-2.2c-1.81 0-2.7.92-2.7 2.7V9.1H9.1v2.6h2.1v6.5h3V11.7Z" stroke="#a17b43" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/></svg>
      </a>
      <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="lux-footer-icon">
        <svg width="22" height="22" fill="none" viewBox="0 0 22 22"><rect x="3" y="3" width="16" height="16" rx="5" stroke="#a17b43" strokeWidth="1.4"/><circle cx="11" cy="11" r="4" stroke="#a17b43" strokeWidth="1.4"/><circle cx="16.2" cy="5.8" r="0.8" fill="#a17b43"/></svg>
      </a>
    </div>
    <div className="lux-footer-credits">
      <span>© {new Date().getFullYear()} EGYWIN. All rights reserved.</span>
      <span className="lux-footer-crafted">Crafted with <span className="lux-footer-heart">♥</span> in Egypt</span>
    </div>
  </div>
</footer>

    </div>
  );
}
