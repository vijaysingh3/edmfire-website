// ═══════════════════════════════════
//  EdmFire — Shared Components
// ═══════════════════════════════════

const APK_LINK = "https://github.com/vijaysingh3/EdmFire__apk/raw/refs/heads/main/EdmFire-v1.0-release.apk";

const NAV_LINKS = [
  { label: "Home",               href: "../index.html" },
  { label: "Features",           href: "../pages/features.html" },
  { label: "How To Use",         href: "../pages/how-to-use.html" },
  { label: "Blogs",              href: "../pages/blogs.html" },
  { label: "FAQ",                href: "../pages/faq.html" },
  { label: "About Us",           href: "../pages/about-us.html" },
  { label: "Contact Us",         href: "../pages/contact-us.html" },
  { label: "Privacy Policy",     href: "../pages/privacy-policy.html" },
  { label: "Terms & Conditions", href: "../pages/terms-conditions.html" },
  { label: "Refund Policy",      href: "../pages/refund-policy.html" },
  { label: "Price Distribution", href: "../pages/price-distribution.html" },
];

// All searchable content of the site
const SEARCH_DATA = [
  { title: "Download EdmFire APK", desc: "Free Fire Tournament App download karo — Android 6.0+", href: "index.html", tag: "Download" },
  { title: "Features",             desc: "Live Tournaments, Wallet, KYC, Anti-Cheat, Notifications", href: "pages/features.html", tag: "Page" },
  { title: "How To Use",           desc: "APK download, register, KYC, coins add, tournament join", href: "pages/how-to-use.html", tag: "Guide" },
  { title: "FAQ",                  desc: "Aksar puche gaye sawaal — payment, KYC, refund, support", href: "pages/faq.html", tag: "Help" },
  { title: "About Us",             desc: "EDMFire Technologies ke baare mein", href: "pages/about-us.html", tag: "Company" },
  { title: "Contact Us",           desc: "Email: edmfiresupport@gmail.com · WhatsApp: +91 92447 49305", href: "pages/contact-us.html", tag: "Support" },
  { title: "Privacy Policy",       desc: "Data collection aur privacy information", href: "pages/privacy-policy.html", tag: "Legal" },
  { title: "Terms & Conditions",   desc: "App use karne ke terms aur conditions", href: "pages/terms-conditions.html", tag: "Legal" },
  { title: "Refund Policy",        desc: "Refund kab milega aur kab nahi", href: "pages/refund-policy.html", tag: "Legal" },
  { title: "Price Distribution",   desc: "Tournament prize pool distribution details", href: "pages/price-distribution.html", tag: "Legal" },
  { title: "Blogs",                desc: "EdmFire latest news aur updates", href: "pages/blogs.html", tag: "Blog" },
  { title: "Tournament",           desc: "Solo, Duo, Squad tournaments — Free & Paid entry", href: "index.html#features", tag: "Feature" },
  { title: "Wallet & Payment",     desc: "UPI se coins add karo — PhonePe, Paytm supported", href: "index.html#features", tag: "Feature" },
  { title: "KYC Verification",     desc: "Free Fire UID verify karo profile section mein", href: "index.html#howto", tag: "Guide" },
  { title: "Support",              desc: "3AM–12AM daily fast support available", href: "pages/contact-us.html", tag: "Help" },
];

function injectNavbar(isRoot = false) {
  const prefix = isRoot ? '' : '../';

  const links = NAV_LINKS.map(l => {
    const href = isRoot ? l.href.replace('../', '') : l.href;
    return `<li><a href="${href}">${l.label}</a></li>`;
  }).join('');

  const mobileLinks = NAV_LINKS.map(l => {
    const href = isRoot ? l.href.replace('../', '') : l.href;
    return `<a href="${href}">${l.label}</a>`;
  }).join('');

  // Logo: try image first, fallback to text
  const logoImgSrc = `${prefix}images/edmlogo.png`;

  const html = `
  <nav class="navbar">
    <a class="nav-brand" href="${prefix}index.html">
      <img class="nav-logo-img" src="${logoImgSrc}" alt="EdmFire Logo"
           onerror="this.style.display='none';this.nextElementSibling.style.display='flex'"/>
      <div class="nav-logo-placeholder" style="display:none;">EF</div>
      <div>
        <div class="nav-title">EdmFire</div>
        <div class="nav-subtitle">Free Fire Tournament</div>
      </div>
    </a>

    <ul class="nav-menu">${links}</ul>

    <div class="nav-right">
      <button class="nav-search-btn" id="navSearchBtn" aria-label="Search">
        <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2">
          <circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/>
        </svg>
      </button>
      <button class="hamburger" aria-label="Menu">
        <span></span><span></span><span></span>
      </button>
    </div>
  </nav>
  <div class="mobile-menu">${mobileLinks}</div>
  `;
  document.body.insertAdjacentHTML('afterbegin', html);
}

function injectFooter(isRoot = false) {
  const prefix = isRoot ? '' : '../';
  const html = `
  <footer>
    <div class="footer-top">
      <div class="footer-brand">
        <div class="footer-logo">EdmFire</div>
        <p class="footer-desc">India ka best Free Fire Tournament platform. Virtual coins se khelo, jeeto aur mazze karo!</p>
        <p class="footer-desc" style="margin-top:8px;font-size:.8rem;">© 2026 EDMFire Technologies · India</p>
      </div>
      <div class="footer-links-col">
        <div class="footer-links-title">App</div>
        <a href="${prefix}pages/features.html">Features</a>
        <a href="${prefix}pages/how-to-use.html">How To Use</a>
        <a href="${prefix}pages/blogs.html">Blogs</a>
        <a href="${prefix}pages/faq.html">FAQ</a>
      </div>
      <div class="footer-links-col">
        <div class="footer-links-title">Company</div>
        <a href="${prefix}pages/about-us.html">About Us</a>
        <a href="${prefix}pages/contact-us.html">Contact Us</a>
        <a href="${prefix}pages/price-distribution.html">Price Distribution</a>
      </div>
      <div class="footer-links-col">
        <div class="footer-links-title">Legal</div>
        <a href="${prefix}pages/privacy-policy.html">Privacy Policy</a>
        <a href="${prefix}pages/terms-conditions.html">Terms &amp; Conditions</a>
        <a href="${prefix}pages/refund-policy.html">Refund Policy</a>
      </div>
    </div>
    <div class="footer-bottom">
      <div class="footer-copy">© 2026 EDMFire Technologies · India · edmfire.in · edmfiresupport@gmail.com</div>
      <div class="social-links">
        <a href="#" class="social-link" title="WhatsApp">💬</a>
        <a href="#" class="social-link" title="YouTube">▶️</a>
        <a href="#" class="social-link" title="Instagram">📸</a>
        <a href="#" class="social-link" title="Telegram">📱</a>
      </div>
    </div>
  </footer>
  `;
  document.body.insertAdjacentHTML('beforeend', html);
}
