(function() {
  emailjs.init('dJyKkms3ahuWUx8Uu')
})();

const btn = document.querySelector('.email-submit-button');

document.querySelector('.email-update-form')
 .addEventListener('submit', function(event) {
   event.preventDefault();

   btn.textContent = 'Sending...';

   const serviceID = 'default_service';
   const templateID = 'template_mlxg5nl';

   emailjs.sendForm(serviceID, templateID, this)
    .then(() => {
      btn.textContent = 'Subscribe';
      alert('Sent!');
    }, (err) => {
      btn.textContent = 'Subscribe';
      alert(JSON.stringify(err));
    });
});