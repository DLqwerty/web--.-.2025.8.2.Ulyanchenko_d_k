
document.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById('feedbackForm');

  form.addEventListener('submit', function(e) {
    e.preventDefault();

    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();

    
    console.log('Имя:', name);
    console.log('Email:', email);
    console.log('Сообщение:', message);

    alert('Спасибо! Ваша обратная связь отправлена.');

    form.reset();
  });
});