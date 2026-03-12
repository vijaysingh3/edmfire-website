// ═══════════════════════════════════
//  EdmFire — Main JS
// ═══════════════════════════════════

document.addEventListener('DOMContentLoaded', () => {

  // ── Hamburger Menu ──
  const hamburger = document.querySelector('.hamburger');
  const mobileMenu = document.querySelector('.mobile-menu');
  if (hamburger && mobileMenu) {
    hamburger.addEventListener('click', () => {
      hamburger.classList.toggle('open');
      mobileMenu.classList.toggle('open');
    });
    // Close on link click
    mobileMenu.querySelectorAll('a').forEach(a => {
      a.addEventListener('click', () => {
        hamburger.classList.remove('open');
        mobileMenu.classList.remove('open');
      });
    });
  }

  // ── Active Nav Link ──
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-menu a, .mobile-menu a').forEach(a => {
    const href = a.getAttribute('href') || '';
    if (href.includes(currentPage) || (currentPage === 'index.html' && href === 'index.html') || (currentPage === '' && href === 'index.html')) {
      a.classList.add('active');
    }
  });

  // ── Page Content Bar ──
  const contentBar = document.querySelector('.page-content-bar');
  if (contentBar) {
    const isHome = currentPage === 'index.html' || currentPage === '' || currentPage === '/';
    if (!isHome) {
      contentBar.classList.add('visible');
    }
  }

  // ── Screenshot Slider Arrows ──
  const track = document.querySelector('.screenshots-track');
  const leftArrow  = document.querySelector('.ss-arrow.left');
  const rightArrow = document.querySelector('.ss-arrow.right');
  if (track && leftArrow && rightArrow) {
    const scrollAmt = 240;
    leftArrow.addEventListener('click',  () => track.scrollBy({ left: -scrollAmt, behavior: 'smooth' }));
    rightArrow.addEventListener('click', () => track.scrollBy({ left:  scrollAmt, behavior: 'smooth' }));
  }

  // ── FAQ Accordion ──
  document.querySelectorAll('.faq-question').forEach(btn => {
    btn.addEventListener('click', () => {
      const item = btn.closest('.faq-item');
      const isOpen = item.classList.contains('open');
      document.querySelectorAll('.faq-item').forEach(i => i.classList.remove('open'));
      if (!isOpen) item.classList.add('open');
    });
  });

  // ── Fire Particles ──
  const hero = document.querySelector('.hero');
  if (hero) {
    for (let i = 0; i < 14; i++) {
      const p = document.createElement('div');
      p.className = 'fire-particle';
      p.style.cssText = `
        left:${Math.random() * 100}%;
        height:${120 + Math.random() * 200}px;
        animation-delay:${Math.random() * 4}s;
        animation-duration:${2 + Math.random() * 3}s;
        opacity:0;
      `;
      hero.appendChild(p);
    }
  }

  // ── Scroll Reveal ──
  const reveals = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window) {
    const obs = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (e.isIntersecting) { e.target.classList.add('visible'); obs.unobserve(e.target); }
      });
    }, { threshold: 0.1 });
    reveals.forEach(r => obs.observe(r));
  } else {
    reveals.forEach(r => r.classList.add('visible'));
  }

  // ── Navbar scroll effect ──
  const navbar = document.querySelector('.navbar');
  window.addEventListener('scroll', () => {
    if (navbar) {
      navbar.style.borderBottomColor = window.scrollY > 20
        ? 'rgba(255,106,0,0.2)'
        : 'var(--dark-border)';
    }
  });

});
