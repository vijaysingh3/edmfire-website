// ═══════════════════════════════════
//  EdmFire — Shared Components
// ═══════════════════════════════════

const APK_LINK = "https://github.com/vijaysingh3/edmfire-v3.0/releases/download/edmfire-v3.0/EdmFire-v3.0-release.apk";

// ── NAV LINKS — Yahan naye links add karo ──
const NAV_LINKS = [
  { label: "Home",               href: "../index.html" },
  { label: "Features",           href: "../pages/features.html" },
  { label: "How To Use",         href: "../pages/how-to-use.html" },
  { label: "Referral System",    href: "../pages/referral-system.html" },
  { label: "Blogs",              href: "../pages/blogs.html" },
  { label: "FAQ",                href: "../pages/faq.html" },
  { label: "About Us",           href: "../pages/about-us.html" },
  { label: "Contact Us",         href: "../pages/contact-us.html" },
  { label: "Tournament Rules",   href: "../pages/tournament-rules.html" },
  { label: "Privacy Policy",     href: "../pages/privacy-policy.html" },
  { label: "Terms & Conditions", href: "../pages/terms-conditions.html" },
  { label: "Refund Policy",      href: "../pages/refund-policy.html" },
  { label: "Price Distribution", href: "../pages/price-distribution.html" },
];

// ══════════════════════════════════════════
//  SOCIAL LINKS — Yahan apne links daalo
//  Naya link add karna ho to ek naya object
//  copy-paste karo is array mein
// ══════════════════════════════════════════
const SOCIAL_LINKS = [
  {
    label: "Instagram",
    icon: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><rect x="2" y="2" width="20" height="20" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1" fill="currentColor"/></svg>`,
    href: "https://www.instagram.com/edmfireapp?igsh=YmNkcTFwMmpjYnF4",   // ← apna Instagram link yahan
  },
  {
    label: "YouTube",
    icon: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46A2.78 2.78 0 0 0 1.46 6.42 29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58 2.78 2.78 0 0 0 1.95 1.96C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.95-1.96A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z"/><polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" fill="currentColor" stroke="none"/></svg>`,
    href: "www.youtube.com/@edmfireapp",    // ← apna YouTube link yahan
  },
  {
    label: "WhatsApp Channel",
    icon: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/></svg>`,
    href: "https://whatsapp.com/channel/0029VbCKKn7GufImyI6Bkx11", // ← apna WhatsApp channel link yahan
  },
  // ── Naya social link add karna ho to neeche copy karo ──
  // {
  //   label: "Telegram",
  //   icon: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="m22 2-7 20-4-9-9-4 20-7z"/><path d="M22 2 11 13"/></svg>`,
  //   href: "https://t.me/edmfire",
  // },
];

// ── SEARCH DATA ──
const SEARCH_DATA = [
  { title: "Download EdmFire APK",  desc: "Free Fire Tournament App download karo — Android 6.0+",    href: "index.html",                      tag: "Download" },
  { title: "Features",              desc: "Live Tournaments, Wallet, KYC, Anti-Cheat, Notifications", href: "pages/features.html",             tag: "Page"     },
  { title: "How To Use",            desc: "APK download, register, KYC, coins add, tournament join",  href: "pages/how-to-use.html",           tag: "Guide"    },
  { title: "Referral System",       desc: "Referral kaise kaam karta hai — invite karo, reward pao",  href: "pages/referral-system.html",      tag: "Feature"  },
  { title: "FAQ",                   desc: "Aksar puche gaye sawaal — payment, KYC, refund, support",  href: "pages/faq.html",                  tag: "Help"     },
  { title: "About Us",              desc: "EDMFire Technologies ke baare mein",                       href: "pages/about-us.html",             tag: "Company"  },
  { title: "Contact Us",            desc: "Email: edmfiresupport@gmail.com · WhatsApp: +91 9244749305", href: "pages/contact-us.html",         tag: "Support"  },
  { title: "Tournament Rules",      desc: "Tournament ke sabhi rules aur fair play guidelines",       href: "pages/tournament-rules.html",     tag: "Rules"    },
  { title: "Privacy Policy",        desc: "Data collection aur privacy information",                  href: "pages/privacy-policy.html",       tag: "Legal"    },
  { title: "Terms & Conditions",    desc: "App use karne ke terms aur conditions",                    href: "pages/terms-conditions.html",     tag: "Legal"    },
  { title: "Refund Policy",         desc: "Refund kab milega aur kab nahi",                           href: "pages/refund-policy.html",        tag: "Legal"    },
  { title: "Price Distribution",    desc: "Tournament prize pool distribution details",               href: "pages/price-distribution.html",   tag: "Legal"    },
  { title: "Blogs",                 desc: "EdmFire latest news aur updates",                          href: "pages/blogs.html",                tag: "Blog"     },
  { title: "Tournament",            desc: "Solo, Duo, Squad tournaments — Free & Paid entry",         href: "index.html#features",             tag: "Feature"  },
  { title: "Wallet & Payment",      desc: "UPI se coins add karo — PhonePe, Paytm supported",        href: "index.html#features",             tag: "Feature"  },
  { title: "KYC Verification",      desc: "Free Fire UID verify karo profile section mein",          href: "index.html#howto",                tag: "Guide"    },
  { title: "Support",               desc: "3AM–12AM daily fast support available",                   href: "pages/contact-us.html",           tag: "Help"     },
];

// ══════════════════════════════════════════
//  NAVBAR INJECT
// ══════════════════════════════════════════
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

// ══════════════════════════════════════════
//  FOOTER INJECT
// ══════════════════════════════════════════
function injectFooter(isRoot = false) {
  const prefix = isRoot ? '' : '../';

  // Social links HTML auto-generate from SOCIAL_LINKS array
  const socialsHTML = SOCIAL_LINKS.map(s => `
    <a href="${s.href}" class="social-link" title="${s.label}" target="_blank" rel="noopener">
      ${s.icon}
    </a>`
  ).join('');

  const html = `
  <footer>
    <div class="footer-top">
      <div class="footer-brand">
        <div class="footer-logo">EdmFire</div>
        <p class="footer-desc">India ka best Free Fire Tournament platform. Virtual coins se khelo, jeeto aur mazze karo!</p>
        <p class="footer-desc" style="margin-top:8px;font-size:.8rem;">© 2026 EDMFire Technologies · India</p>
        <div class="footer-socials">${socialsHTML}</div>
      </div>
      <div class="footer-links-col">
        <div class="footer-links-title">App</div>
        <a href="${prefix}pages/features.html">Features</a>
        <a href="${prefix}pages/how-to-use.html">How To Use</a>
        <a href="${prefix}pages/referral-system.html">Referral System</a>
        <a href="${prefix}pages/blogs.html">Blogs</a>
        <a href="${prefix}pages/faq.html">FAQ</a>
      </div>
      <div class="footer-links-col">
        <div class="footer-links-title">Company</div>
        <a href="${prefix}pages/about-us.html">About Us</a>
        <a href="${prefix}pages/contact-us.html">Contact Us</a>
        <a href="${prefix}pages/tournament-rules.html">Tournament Rules</a>
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
      <div class="social-links">${socialsHTML}</div>
    </div>
  </footer>
  `;
  document.body.insertAdjacentHTML('beforeend', html);
}
