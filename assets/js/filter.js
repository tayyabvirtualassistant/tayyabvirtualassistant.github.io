(function () {
  const buttons = document.querySelectorAll('.filter-btn');
  const cards = document.querySelectorAll('.review-card');
  if (!buttons.length) return;

  buttons.forEach(btn => {
    btn.addEventListener('click', () => {
      buttons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const filter = btn.dataset.filter;

      cards.forEach(card => {
        const match = filter === 'all' || card.dataset.service === filter;
        if (typeof gsap !== 'undefined') {
          if (match) {
            card.style.display = '';
            gsap.fromTo(card, { opacity: 0 }, { opacity: 1, duration: 0.35 });
          } else {
            gsap.to(card, { opacity: 0, duration: 0.2, onComplete: () => { card.style.display = 'none'; } });
          }
        } else {
          card.style.display = match ? '' : 'none';
        }
      });
    });
  });
})();
