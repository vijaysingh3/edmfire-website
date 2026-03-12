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
    if (href.includes(currentPage) ||
        (currentPage === 'index.html' && href === 'index.html') ||
        (currentPage === '' && href === 'index.html')) {
      a.classList.add('active');
    }
  });

  // ── Page Content Bar ──
  const contentBar = document.querySelector('.page-content-bar');
  if (contentBar) {
    const isHome = currentPage === 'index.html' || currentPage === '' || currentPage === '/';
    if (!isHome) contentBar.classList.add('visible');
  }

  // ══════════════════════════════════════════════
  //  DOWNLOAD BUTTON — Progress Animation
  // ══════════════════════════════════════════════
  function initDownloadButtons() {
    document.querySelectorAll('.btn-download').forEach(btn => {
      btn.addEventListener('click', function(e) {
        // Agar already processing ho toh dobara click block karo
        if (btn.classList.contains('downloading')) return;

        e.preventDefault(); // pehle default rok do
        const originalHTML = btn.innerHTML;
        btn.classList.add('downloading');

        // Progress bar inject karo button ke andar
        btn.innerHTML = `
          <div class="dl-progress-wrap">
            <div class="dl-progress-label">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
                <path d="M12 3v13M5 14l7 7 7-7"/><path d="M3 21h18"/>
              </svg>
              <span id="dlStatusText">Connecting...</span>
            </div>
            <div class="dl-bar-track">
              <div class="dl-bar-fill" id="dlBarFill"></div>
            </div>
          </div>`;

        const fillEl   = btn.querySelector('#dlBarFill');
        const textEl   = btn.querySelector('#dlStatusText');
        let progress   = 0;

        // Stages
        const stages = [
          { pct: 15,  label: 'Connecting...',       delay: 300  },
          { pct: 35,  label: 'Starting Download...', delay: 600  },
          { pct: 60,  label: 'Downloading...',       delay: 900  },
          { pct: 85,  label: 'Almost Done...',       delay: 1400 },
          { pct: 100, label: 'Download Started! ✅', delay: 1800 },
        ];

        stages.forEach(s => {
          setTimeout(() => {
            if (fillEl) fillEl.style.width = s.pct + '%';
            if (textEl) textEl.textContent = s.label;

            // 100% pe actual download trigger karo
            if (s.pct === 100) {
              // Real download start karo
              const link    = document.createElement('a');
              link.href     = typeof APK_LINK !== 'undefined' ? APK_LINK : btn.dataset.href || '#';
              link.download = 'EdmFire-v1.0-release.apk';
              document.body.appendChild(link);
              link.click();
              document.body.removeChild(link);

              // 2.5s baad button reset karo
              setTimeout(() => {
                btn.classList.remove('downloading');
                btn.innerHTML = originalHTML;
              }, 2500);
            }
          }, s.delay);
        });
      });
    });
  }

  // Navbar inject ke baad bhi buttons init karo
  setTimeout(initDownloadButtons, 100);

  // ── SEARCH SYSTEM ──
  const searchOverlay = document.getElementById('searchOverlay');
  const searchInput   = document.getElementById('searchInput');
  const searchResults = document.getElementById('searchResults');
  const searchClose   = document.getElementById('searchClose');
  const navSearchBtn  = document.getElementById('navSearchBtn');

  function openSearch() {
    if (!searchOverlay) return;
    searchOverlay.classList.add('active');
    setTimeout(() => searchInput && searchInput.focus(), 100);
  }
  function closeSearch() {
    if (!searchOverlay) return;
    searchOverlay.classList.remove('active');
    if (searchInput)   searchInput.value = '';
    if (searchResults) searchResults.innerHTML = '';
  }

  if (navSearchBtn) navSearchBtn.addEventListener('click', openSearch);
  if (searchClose)  searchClose.addEventListener('click', closeSearch);
  if (searchOverlay) {
    searchOverlay.addEventListener('click', e => {
      if (e.target === searchOverlay) closeSearch();
    });
  }

  document.addEventListener('keydown', e => {
    if ((e.ctrlKey && e.key === 'k') || (e.key === '/' && document.activeElement.tagName !== 'INPUT')) {
      e.preventDefault(); openSearch();
    }
    if (e.key === 'Escape') closeSearch();
  });

  if (searchInput) {
    searchInput.addEventListener('input', () => {
      const q = searchInput.value.trim().toLowerCase();
      if (!q) { searchResults.innerHTML = ''; return; }

      const isRoot = !window.location.pathname.includes('/pages/');
      const prefix = isRoot ? '' : '../';

      const matches = (typeof SEARCH_DATA !== 'undefined' ? SEARCH_DATA : [])
        .filter(item =>
          item.title.toLowerCase().includes(q) ||
          item.desc.toLowerCase().includes(q) ||
          item.tag.toLowerCase().includes(q)
        );

      if (matches.length === 0) {
        searchResults.innerHTML = `<div class="search-no-result">Koi result nahi mila 😕 — dusra keyword try karo</div>`;
        return;
      }

      searchResults.innerHTML = matches.map(item => {
        const href = prefix + item.href;
        return `
          <a class="search-result-item" href="${href}">
            <div class="sri-left">
              <div class="sri-title">${item.title}</div>
              <div class="sri-desc">${item.desc}</div>
            </div>
            <span class="sri-tag">${item.tag}</span>
          </a>`;
      }).join('');
    });
  }

  // ── Screenshot Slider ──
  const track      = document.querySelector('.screenshots-track');
  const leftArrow  = document.querySelector('.ss-arrow.left');
  const rightArrow = document.querySelector('.ss-arrow.right');
  if (track && leftArrow && rightArrow) {
    leftArrow.addEventListener('click',  () => track.scrollBy({ left: -240, behavior: 'smooth' }));
    rightArrow.addEventListener('click', () => track.scrollBy({ left:  240, behavior: 'smooth' }));
  }

  // ── FAQ Accordion ──
  document.querySelectorAll('.faq-question').forEach(btn => {
    btn.addEventListener('click', () => {
      const item   = btn.closest('.faq-item');
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
        ? 'rgba(255,106,0,0.25)'
        : 'var(--dark-border)';
    }
  });

});
