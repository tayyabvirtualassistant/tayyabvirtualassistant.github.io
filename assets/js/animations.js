(function () {
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  // Scroll reveal via IntersectionObserver (lighter than GSAP for simple fade/slide)
  const revealEls = document.querySelectorAll('.reveal');
  if (reduceMotion) {
    revealEls.forEach(el => el.classList.add('revealed'));
  } else if ('IntersectionObserver' in window) {
    const io = new IntersectionObserver((entries) => {
      entries.forEach((entry, i) => {
        if (entry.isIntersecting) {
          const el = entry.target;
          const delay = el.dataset.staggerIndex ? parseInt(el.dataset.staggerIndex) * 100 : 0;
          setTimeout(() => el.classList.add('revealed'), delay);
          io.unobserve(el);
        }
      });
    }, { threshold: 0.2 });
    revealEls.forEach(el => io.observe(el));
  } else {
    revealEls.forEach(el => el.classList.add('revealed'));
  }

  // Stagger index for groups
  document.querySelectorAll('[data-stagger-group]').forEach(group => {
    Array.from(group.children).forEach((child, i) => {
      if (child.classList.contains('reveal')) child.dataset.staggerIndex = i;
    });
  });

  // Skill bars
  const bars = document.querySelectorAll('.skill-bar-fill');
  if (bars.length) {
    const barIO = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const el = entry.target;
          el.style.width = el.dataset.percent + '%';
          barIO.unobserve(el);
        }
      });
    }, { threshold: 0.3 });
    bars.forEach(b => barIO.observe(b));
  }

  // Timeline SVG draw
  const timelineSvgs = document.querySelectorAll('.timeline-line-svg');
  if (timelineSvgs.length) {
    const tIO = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('drawn');
          tIO.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });
    timelineSvgs.forEach(s => tIO.observe(s));
  }

  // Timeline node pop
  const nodes = document.querySelectorAll('.timeline-node');
  if (nodes.length) {
    const nIO = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
          nIO.unobserve(entry.target);
        }
      });
    }, { threshold: 0.5 });
    nodes.forEach(n => nIO.observe(n));
  }

  // Magnetic buttons
  if (!reduceMotion && window.matchMedia('(pointer:fine)').matches) {
    document.querySelectorAll('.magnetic').forEach(btn => {
      btn.addEventListener('mousemove', (e) => {
        const rect = btn.getBoundingClientRect();
        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;
        const max = 12;
        btn.style.transform = `translate(${Math.max(-max, Math.min(max, x * 0.3))}px, ${Math.max(-max, Math.min(max, y * 0.3))}px)`;
      });
      btn.addEventListener('mouseleave', () => {
        btn.style.transform = 'translate(0,0)';
        btn.style.transition = 'transform 0.4s cubic-bezier(0.34,1.56,0.64,1)';
        setTimeout(() => { btn.style.transition = ''; }, 400);
      });
    });
  }

  // Splitting.js hero animation
  if (typeof Splitting !== 'undefined') {
    const results = Splitting({ target: '.split-text', by: 'chars' });
    if (!reduceMotion && typeof gsap !== 'undefined') {
      results.forEach(res => {
        gsap.set(res.chars, { opacity: 0, y: 40, rotateX: 90, transformPerspective: 400 });
      });
      setTimeout(() => {
        results.forEach(res => {
          gsap.to(res.chars, { opacity: 1, y: 0, rotateX: 0, duration: 0.6, stagger: 0.02, ease: 'power2.out' });
        });
      }, 550);
    }
  }
})();
