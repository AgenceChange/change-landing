document.addEventListener('DOMContentLoaded', () => {
  const openBtn = document.getElementById('openLegalModal');
  const modal = document.getElementById('legalModal');
  const closeBtn = document.getElementById('closeLegalModal');

  if (!openBtn || !modal || !closeBtn) return;

  openBtn.addEventListener('click', () => {
    modal.style.display = 'flex';
    modal.classList.add('fade-in');
  });

  closeBtn.addEventListener('click', () => {
    modal.classList.remove('fade-in');
    modal.style.display = 'none';
  });

  window.addEventListener('click', (event) => {
    if (event.target === modal) {
      modal.style.display = 'none';
    }
  });
});
