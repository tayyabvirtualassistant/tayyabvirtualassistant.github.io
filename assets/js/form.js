(function () {
  const form = document.querySelector('#contact-form');
  if (!form) return;
  const successState = document.querySelector('#form-success');

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    form.style.display = 'none';
    successState.style.display = 'block';
  });

  const resetBtn = document.querySelector('#reset-form');
  if (resetBtn) {
    resetBtn.addEventListener('click', () => {
      form.reset();
      form.style.display = 'block';
      successState.style.display = 'none';
    });
  }
})();
