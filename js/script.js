document.addEventListener('DOMContentLoaded', () => {

  // --- 1. ЛОГИКА МОДАЛЬНЫХ ОКОН (из твоего кода) ---
  function setupModal(modalId, openBtnId, closeBtnId) {
    const modal = document.getElementById(modalId);
    const openBtn = document.getElementById(openBtnId);
    const closeBtn = document.getElementById(closeBtnId);

    if (!modal || !openBtn || !closeBtn) return;

    // Открыть окно
    openBtn.addEventListener('click', () => {
      modal.classList.add('show');
    });

    // Закрыть по крестику
    closeBtn.addEventListener('click', () => {
      modal.classList.remove('show');
    });

    // Закрыть по клику вне формы
    modal.addEventListener('click', (e) => {
      if (e.target === modal) {
        modal.classList.remove('show');
      }
    });
  }
  // Вызываем функцию для двух модалок
  setupModal('modal', 'ctaBtn', 'closeModal');
  setupModal('feedbackModal', 'openFeedbackBtn', 'closeFeedbackModal');


  // --- 2. ЛОГИКА ОТПРАВКИ ФОРМ ЧЕРЕЗ mailto (из твоего кода) ---
  const TO_EMAIL = 'jamaraxi806@gmail.com';

  function setupMailtoForm(formId, modalId, subjectBuilder, bodyBuilder) {
    const form = document.getElementById(formId);
    const modal = document.getElementById(modalId);

    if (!form) return;

    form.addEventListener('submit', (e) => {
      e.preventDefault();

      const subject = subjectBuilder(form);
      const body = bodyBuilder(form);

      const mailtoLink =
        'mailto:' + encodeURIComponent(TO_EMAIL) +
        '?subject=' + encodeURIComponent(subject) +
        '&body=' + encodeURIComponent(body);

      window.location.href = mailtoLink;
      alert('Сейчас откроется ваш почтовый клиент для отправки письма.');

      form.reset();
      if (modal) {
        modal.classList.remove('show');
      }
    });
  }
  // Форма заявки на карту
  setupMailtoForm(
    'cardForm', 'modal',
    (form) => 'Заявка на оформление карты НекстФин',
    (form) => {
      const name = form.querySelector('[name="name"]')?.value || '';
      const email = form.querySelector('[name="email"]')?.value || '';
      const phone = form.querySelector('[name="phone"]')?.value || '';
      return `Новая заявка на оформление карты:\r\nИмя: ${name}\r\nEmail: ${email}\r\nТелефон: ${phone}\r\n`;
    }
  );
  // Форма обратной связи
  setupMailtoForm(
    'feedbackForm', 'feedbackModal',
    (form) => 'Обратная связь с сайта НекстФин',
    (form) => {
      const name = form.querySelector('[name="name"]')?.value || '';
      const email = form.querySelector('[name="email"]')?.value || '';
      const message = form.querySelector('[name="message"]')?.value || '';
      return `Сообщение с формы обратной связи:\r\nИмя: ${name}\r\nEmail: ${email}\r\nСообщение:\r\n${message}\r\n`;
    }
  );


  // --- 3. ЛОГИКА БУРГЕР-МЕНЮ (добавляем её сюда) ---
  const burgerBtn = document.getElementById('burger');
  const navMenu = document.getElementById('nav');
  const header = document.querySelector('.header');
  const navLinks = document.querySelectorAll('.header__link');

  if (burgerBtn && navMenu && header) {
    // Открытие/закрытие по клику на бургер
    burgerBtn.addEventListener('click', () => {
      toggleMenu();
    });

    // Закрытие меню по клику на любую из ссылок
    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        if (navMenu.classList.contains('show')) {
          toggleMenu();
        }
      });
    });
  }
  
  // Функция для переключения состояния меню
  function toggleMenu() {
    navMenu.classList.toggle('show');
    header.classList.toggle('open');
    document.body.classList.toggle('no-scroll');
  }

});
