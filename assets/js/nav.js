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

  // Hamburger toggle
  if (hamburger && overlay) {
    hamburger.addEventListener('click', () => {
      const isOpen = hamburger.classList.toggle('open');
      overlay.classList.toggle('open', isOpen);
      document.body.style.overflow = isOpen ? 'hidden' : '';

      if (isOpen && typeof gsap !== 'undefined') {
        gsap.fromTo(overlay, { xPercent: 100 }, { xPercent: 0, duration: 0.35, ease: 'power2.out' });
        gsap.to(overlayLinks, { opacity: 1, y: 0, duration: 0.4, stagger: 0.06, delay: 0.15, ease: 'power2.out' });
      } else if (typeof gsap !== 'undefined') {
        gsap.to(overlay, { xPercent: 100, duration: 0.3, ease: 'power2.in' });
        gsap.set(overlayLinks, { opacity: 0, y: 20 });
      }
    });

    overlayLinks.forEach(link => {
      link.addEventListener('click', () => {
        hamburger.classList.remove('open');
        overlay.classList.remove('open');
        document.body.style.overflow = '';
      });
    });
  }
})();
