  //  // JS интерактивность

  //   // Плавный скролл к форме (заглушка)
  //   document.getElementById('ctaBtn').addEventListener('click', () => {
  //     alert('Заявка на карту оформлена!');
  //   });

  //   // Подсветка активного меню при скролле
  //   const navLinks = document.querySelectorAll('nav a');
  //   navLinks.forEach(link => {
  //     link.addEventListener('click', e => {
  //       e.preventDefault();
  //       navLinks.forEach(l => l.classList.remove('active'));
  //       link.classList.add('active');
  //     });
  //   });

  //   // Поиск (заглушка)
  //   document.querySelector('.search-icon').addEventListener('click', () => {
  //     const query = prompt("Введите запрос для поиска:");
  //     if(query) alert("Поиск по: " + query);
  //   });