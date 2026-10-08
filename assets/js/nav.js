(function () {
  const nav = document.querySelector('.site-nav');
  const hamburger = document.querySelector('.hamburger');
  const overlay = document.querySelector('.mobile-overlay');
  const overlayLinks = overlay ? overlay.querySelectorAll('a') : [];

  function onScroll() {
    if (window.scrollY > 80) nav.classList.add('scrolled');
    else nav.classList.remove('scrolled');
  }
  window.addEventListener('scroll', onScroll);
  onScroll();

  // Active link highlighting
  const currentPage = (location.pathname.split('/').pop() || 'index.html');
  document.querySelectorAll('.nav-links a, .mobile-overlay a').forEach(a => {
    const href = a.getAttribute('href');
    if (href === currentPage || (currentPage === '' && href === 'index.html')) {
      a.classList.add('active');
    }
  });

  // Hamburger toggle (animation handled in nav.css)
  function setMenu(open) {
    hamburger.classList.toggle('open', open);
    overlay.classList.toggle('open', open);
    hamburger.setAttribute('aria-expanded', open ? 'true' : 'false');
    document.body.style.overflow = open ? 'hidden' : '';
    if (window.__lenis) { open ? window.__lenis.stop() : window.__lenis.start(); }
  }

  if (hamburger && overlay) {
    hamburger.setAttribute('aria-expanded', 'false');
    hamburger.addEventListener('click', () => setMenu(!hamburger.classList.contains('open')));
    overlayLinks.forEach(link => link.addEventListener('click', () => setMenu(false)));
    document.addEventListener('keydown', (e) => { if (e.key === 'Escape') setMenu(false); });
    window.addEventListener('resize', () => { if (window.innerWidth > 768) setMenu(false); });
  }
})();
