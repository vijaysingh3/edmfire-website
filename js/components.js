// ═══════════════════════════════════
//  EdmFire — Shared Components
//  (navbar + footer inject)
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

function injectNavbar(isRoot = false) {
  const prefix = isRoot ? '' : '../';
  const links  = NAV_LINKS.map(l => {
    const href = isRoot ? l.href.replace('../', '') : l.href;
    return `<li><a href="${href}">${l.label}</a></li>`;
  }).join('');

  const mobileLinks = NAV_LINKS.map(l => {
    const href = isRoot ? l.href.replace('../', '') : l.href;
    return `<a href="${href}">${l.label}</a>`;
  }).join('');

  const html = `
  <nav class="navbar">
    <a class="nav-brand" href="${prefix}index.html">
      <div class="nav-logo-placeholder">EF</div>
      <div>
        <div class="nav-title">EdmFire</div>
        <div class="nav-subtitle">Free Fire Tournament</div>
      </div>
    </a>
    <ul class="nav-menu">${links}</ul>
    <button class="hamburger" aria-label="Menu">
      <span></span><span></span><span></span>
    </button>
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
        <p class="footer-desc">India ka best Free Fire Tournament app. Khelo, jeeto aur champion bano!</p>
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
      <div class="footer-copy">© 2025 EdmFire. All Rights Reserved.</div>
      <div class="social-links">
        <a href="#" class="social-link">📱</a>
        <a href="#" class="social-link">💬</a>
        <a href="#" class="social-link">📸</a>
        <a href="#" class="social-link">▶️</a>
      </div>
    </div>
  </footer>
  `;
  document.body.insertAdjacentHTML('beforeend', html);
}
