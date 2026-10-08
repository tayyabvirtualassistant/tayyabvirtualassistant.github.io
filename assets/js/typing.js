(function () {
  const el = document.querySelector('[data-typing]');
  if (!el) return;

  const words = [
    'Social Media Management',
    'Email Management',
    'Data Entry',
    'Content Creation',
    'Professional Writing',
    'Executive Assistance',
    'Recruitment and HR Support'
  ];

  let wordIndex = 0, charIndex = 0, isDeleting = false;
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  if (reduceMotion) {
    el.textContent = words[0];
    return;
  }

  function tick() {
    const currentWord = words[wordIndex];
    if (!isDeleting) {
      charIndex++;
      el.textContent = currentWord.slice(0, charIndex);
      if (charIndex === currentWord.length) {
        isDeleting = true;
        setTimeout(tick, 2500);
        return;
      }
      setTimeout(tick, 80);
    } else {
      charIndex--;
      el.textContent = currentWord.slice(0, charIndex);
      if (charIndex === 0) {
        isDeleting = false;
        wordIndex = (wordIndex + 1) % words.length;
        setTimeout(tick, 400);
        return;
      }
      setTimeout(tick, 40);
    }
  }
  tick();
})();
