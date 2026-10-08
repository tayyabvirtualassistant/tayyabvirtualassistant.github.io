(function () {
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const overlay = document.querySelector('.page-transition-overlay');
  const content = document.querySelector('.page-content');
  const loader = document.querySelector('.page-loader');

  // Hide the full-page loader once everything (fonts, images, CDN scripts) is ready
  function hideLoader() {
    if (!loader) return;
    loader.classList.add('loaded');
  }
  if (document.readyState === 'complete') {
    setTimeout(hideLoader, 150);
  } else {
    window.addEventListener('load', () => setTimeout(hideLoader, 150));
  }
  // Safety net so the loader never gets stuck
  setTimeout(hideLoader, 2500);

  // Fade the page content in
  if (content) {
    if (reduceMotion) {
      content.classList.add('entered');
    } else {
      requestAnimationFrame(() => {
        requestAnimationFrame(() => content.classList.add('entered'));
      });
    }
  }

  if (reduceMotion) return;

  // Intercept internal link clicks for a smooth cross-fade instead of a slide
  document.addEventListener('click', function (e) {
    const link = e.target.closest('a');
    if (!link) return;
    const href = link.getAttribute('href');
    if (!href || href.startsWith('#') || href.startsWith('http') || href.startsWith('mailto') || href.startsWith('tel') || link.target === '_blank') return;
    if (!href.endsWith('.html') && href !== '/') return;

    e.preventDefault();
    document.body.classList.add('is-transitioning');

    if (overlay) overlay.classList.add('active');

    setTimeout(() => {
      window.location.href = href;
    }, 300);
  });
})();
