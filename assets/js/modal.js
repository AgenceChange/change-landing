// document.addEventListener('DOMContentLoaded', () => {
//   const openBtn = document.getElementById('openLegalModal');
//   const modal = document.getElementById('legalModal');
//   const closeBtn = document.getElementById('closeLegalModal');

//   if (!openBtn || !modal || !closeBtn) return;

//   openBtn.addEventListener('click', () => {
//     modal.style.display = 'flex';
//     modal.classList.add('fade-in');
//   });

//   closeBtn.addEventListener('click', () => {
//     modal.classList.remove('fade-in');
//     modal.style.display = 'none';
//   });

//   window.addEventListener('click', (event) => {
//     if (event.target === modal) {
//       modal.style.display = 'none';
//     }
//   });
// });

document.addEventListener('DOMContentLoaded', () => {
  const openBtn = document.getElementById('openLegalModal');
  const modal = document.getElementById('legalModal');
  const closeBtn = document.getElementById('closeLegalModal');

  if (!openBtn || !modal || !closeBtn) return;

  // S'assurer que la modale est cachée au démarrage
  modal.style.display = 'none';

  // --- OUVERTURE ---
  openBtn.addEventListener('click', (e) => {
    e.preventDefault();
    modal.style.display = 'flex';
    modal.classList.add('fade-in');
    document.body.style.overflow = 'hidden'; // empêche le scroll du fond
  });

  // --- FERMETURE (croix) ---
  closeBtn.addEventListener('click', () => {
    closeModal();
  });

  // --- FERMETURE (clic en dehors) ---
  window.addEventListener('click', (event) => {
    if (event.target === modal) {
      closeModal();
    }
  });

  // --- FERMETURE (touche Échap) ---
  window.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
      closeModal();
    }
  });

  // --- Fonction utilitaire ---
  function closeModal() {
    modal.classList.remove('fade-in');
    modal.style.display = 'none';
    document.body.style.overflow = ''; // réactive le scroll du fond
  }
});
