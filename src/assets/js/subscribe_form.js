 // Ініціалізація EmailJS
 emailjs.init('Udx_LWEVEy1m4hfH8'); // Замініть на ваш Public Key з EmailJS

 document.querySelector('.touch_form').addEventListener('submit', function (event) {
   event.preventDefault();

   const email = document.querySelector('.touch_form-input').value;

   emailjs
     .send('service_znajjfj', 'template_iqix5va', {
       user_email: email, // Параметр для шаблону
     })
     .then(
       function (response) {
         alert('Email успішно надіслано!');
       },
       function (error) {
         alert('Помилка при надсиланні email: ' + error.text);
       }
     );
 });