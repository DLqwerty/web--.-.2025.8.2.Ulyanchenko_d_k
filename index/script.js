
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
  const registerForm = document.getElementById('registerForm');
    if (registerForm) {
        registerForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const email = document.getElementById('registerEmail').value;
            const password = document.getElementById('registerPassword').value;
            const confirmPassword = document.getElementById('confirmPassword').value;
            
            if (password !== confirmPassword) {
                alert('Пароли не совпадают!');
                return;
            }
            
           
            console.log('Регистрация:', { email, password });
            
    
            const modal = bootstrap.Modal.getInstance(document.getElementById('registerModal'));
            modal.hide();
            
            alert('Регистрация прошла успешно!');
        });
    }
});