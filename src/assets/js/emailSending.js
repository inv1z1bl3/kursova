const btn = document.querySelector('.email-submit-button');

document.querySelector('.email-update-form')
 .addEventListener('submit', function(event) {
   event.preventDefault();

   btn.value = 'Sending...';

   const serviceID = 'default_service';
   const templateID = 'template_mlxg5nl';

   emailjs.sendForm(serviceID, templateID, this)
    .then(() => {
      btn.value = 'Send Email';
      alert('Sent!');
      location.reload();
    }, (err) => {
      btn.value = 'Send Email';
      alert(JSON.stringify(err));
    });
});