document.addEventListener('DOMContentLoaded', () => {
  // Универсальная функция для модалок
  function setupModal(modalId, openBtnId, closeBtnId) {
    const modal   = document.getElementById(modalId);
    const openBtn = document.getElementById(openBtnId);
    const closeBtn = document.getElementById(closeBtnId);

    if (!modal || !openBtn || !closeBtn) return;

    // открыть окно
    openBtn.addEventListener('click', () => {
      modal.classList.add('show');
    });

    // закрыть по крестику
    closeBtn.addEventListener('click', () => {
      modal.classList.remove('show');
    });

    // закрыть по клику вне формы
    modal.addEventListener('click', (e) => {
      if (e.target === modal) {
        modal.classList.remove('show');
      }
    });
  }

  // Модалка "Оформить карту"
  setupModal('modal', 'ctaBtn', 'closeModal');

  // Модалка "Поддержка"
  setupModal('feedbackModal', 'openFeedbackBtn', 'closeFeedbackModal');

  // ---------- ОТПРАВКА ЧЕРЕЗ mailto ----------

  const TO_EMAIL = 'jamaraxi806@gmail.com'; // куда придут письма

  function setupMailtoForm(formId, modalId, subjectBuilder, bodyBuilder) {
    const form  = document.getElementById(formId);
    const modal = document.getElementById(modalId);

    if (!form) return;

    form.addEventListener('submit', (e) => {
      e.preventDefault(); // отключаем стандартный submit

      const subject = subjectBuilder(form);
      const body    = bodyBuilder(form);

      const mailtoLink =
        'mailto:' + encodeURIComponent(TO_EMAIL) +
        '?subject=' + encodeURIComponent(subject) +
        '&body=' + encodeURIComponent(body);

      // Открываем почтовый клиент пользователя
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
    'cardForm',
    'modal',
    // тема письма
    (form) => 'Заявка на оформление карты НекстФин',
    // тело письма
    (form) => {
      const name  = form.querySelector('[name="name"]')?.value || '';
      const email = form.querySelector('[name="email"]')?.value || '';
      const phone = form.querySelector('[name="phone"]')?.value || '';

      return (
        'Новая заявка на оформление карты:\r\n' +
        'Имя: ' + name + '\r\n' +
        'Email: ' + email + '\r\n' +
        'Телефон: ' + phone + '\r\n'
      );
    }
  );

  // Форма обратной связи
  setupMailtoForm(
    'feedbackForm',
    'feedbackModal',
    // тема письма
    (form) => 'Обратная связь с сайта НекстФин',
    // тело письма
    (form) => {
      const name    = form.querySelector('[name="name"]')?.value || '';
      const email   = form.querySelector('[name="email"]')?.value || '';
      const message = form.querySelector('[name="message"]')?.value || '';

      return (
        'Сообщение с формы обратной связи:\r\n' +
        'Имя: ' + name + '\r\n' +
        'Email: ' + email + '\r\n' +
        'Сообщение:\r\n' + message + '\r\n'
      );
    }
  );
});
