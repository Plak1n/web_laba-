document.addEventListener('DOMContentLoaded', () => {
  const modal = document.getElementById('modal');
  const openBtn = document.getElementById('ctaBtn');
  const closeBtn = document.getElementById('closeModal');

  // открыть окно
  openBtn.addEventListener('click', () => {
    modal.classList.add('show');
  });

  // закрыть по кнопке
  closeBtn.addEventListener('click', () => {
    modal.classList.remove('show');
  });

  // закрыть по клику вне формы
  window.addEventListener('click', (e) => {
    if (e.target === modal) {
      modal.classList.remove('show');
    }
  });
});

document.addEventListener('DOMContentLoaded', () => {
  const modal = document.getElementById('feedbackModal');
  const openBtn = document.getElementById('openFeedbackBtn');
  const closeBtn = document.getElementById('closeFeedbackModal');
  const form = document.getElementById('feedbackForm');

  // открыть модалку
  openBtn.addEventListener('click', () => {
    modal.classList.add('show');
  });

  // закрыть модалку
  closeBtn.addEventListener('click', () => {
    modal.classList.remove('show');
  });

  // закрыть по клику вне окна
  window.addEventListener('click', (e) => {
    if (e.target === modal) modal.classList.remove('show');
  });

});