// Capivara Adventure - Scripts Principais
document.addEventListener('DOMContentLoaded', () => {
  // 1. Destaque automático da página atual no menu
  const file = window.location.pathname.split(/[/\\]/).pop() || 'index.html';
  document.querySelectorAll('.nav-link').forEach(link => {
    link.classList.toggle('active', link.getAttribute('href') === file);
  });

  // 2. Sistema de Lightbox para a Galeria
  const modal = document.getElementById('lightboxModal');
  const img = document.getElementById('lightboxImg');
  const caption = document.getElementById('lightboxCaption');

  if (modal && img) {
    const close = () => {
      modal.classList.remove('open');
      document.body.style.overflow = '';
    };

    document.querySelectorAll('.gallery-zoom-trigger').forEach(item => {
      item.addEventListener('click', () => {
        const full = item.getAttribute('data-full') || item.querySelector('img')?.src;
        if (full) {
          img.src = full;
          if (caption) caption.textContent = item.getAttribute('data-caption') || item.querySelector('img')?.alt || '';
          modal.classList.add('open');
          document.body.style.overflow = 'hidden';
        }
      });
    });

    document.getElementById('lightboxClose')?.addEventListener('click', close);
    modal.addEventListener('click', e => e.target === modal && close());
    document.addEventListener('keydown', e => e.key === 'Escape' && close());
  }
});
