document.addEventListener("DOMContentLoaded", () => {
    const openModalButtons = document.querySelectorAll(".open-modal");
    const modal = document.getElementById("modal");
    const closeModalButton = modal.querySelector(".modal_close");
    const submitButton = modal.querySelector('.form_button');
    const openModalBurgerBtn = document.querySelector('.burger_modal_open');

    openModalButtons.forEach((button) => {
        button.addEventListener("click", openModal);
    });

    openModalBurgerBtn.addEventListener('click', openModal);

    function openModal() {
        modal.style.display = "block";
        document.body.classList.add("no-scroll");
    }

    closeModalButton.addEventListener("click", closeModal);

    window.addEventListener("click", (event) => {
        if (event.target === modal) {
            closeModal();
        }
    });

    function closeModal() {
        modal.style.display = "none";
        document.body.classList.remove("no-scroll");
    }

    submitButton.addEventListener('click', (e) => {
        e.preventDefault();

        const inputs = document.querySelectorAll('.input');
        const [fullName, email, phoneNumber, sessionType, date, time] = inputs;
        const letterBody = `Full name: ${fullName.value}<br> email: ${email.value}<br> phone number: ${phoneNumber.value}<br> session type: ${sessionType.value}<br> date: ${date.value}<br> time: ${time.value}`
        
        const emptyChecker = fullName.value === '' || email.value === '' || phoneNumber.value === '' || sessionType.value === '' || date.value === '' || time.value === '';

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if ([fullName, email, phoneNumber, sessionType, date, time].some(input => input.value === '')) {
            alert('Please, fill in all the form inputs!');
            return;
        } else if (!emailRegex.test(email.value)) {
            alert('Please, enter a valid email address!');
            return;
        }

        if (emptyChecker) {
            alert('Please, fill in all the form inputs!');
              
        } else {
            Email.send({
                Host : "smtp.elasticemail.com",
                Username : "sodayt228@gmail.com",
                Password : "A453C767CB3417F6806273F8E62B35BD326B",
                To : 'sodayt228@gmail.com',
                From : "sodayt228@gmail.com",
                Subject : "BOOKING A SESSION",
                Body : letterBody
            }).then(
              message => alert(message)
            );
        }
        
        
    });

});
