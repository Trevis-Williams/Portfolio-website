$(".close").click(function(){
    $(this).parent().fadeOut();
 });


function toggleContactForm() {
    const contactForm = document.getElementById('contact-form');
    const submitButton = document.getElementById('submit-button');
    const contactLink = document.getElementById('contact-link'); 

    if (contactForm.style.display === 'none' || contactForm.style.display === '') {
        contactForm.style.display = 'block';
        submitButton.disabled = false;
        contactLink.removeEventListener('click', toggleContactForm); // Remove the click event listener
    } else {
        contactForm.style.display = 'none';
        submitButton.disabled = true;
    }
}

function handleSubmit(event) {
    event.preventDefault(); 

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    
    if (name === '' || email === '' || message === '') {
        alert('Please fill out all the form fields before submitting.');
        return; 
    }

    
    const formData = {
        name,
        email,
        message,
    };

    
    const formDataJSON = JSON.stringify(formData);


    localStorage.setItem('formData', formDataJSON);

    
    document.getElementById('name').value = '';
    document.getElementById('email').value = '';
    document.getElementById('message').value = '';

    
    toggleContactForm();

    alert('Form data submitted and saved to local storage.');
}

function handleSubmit(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    if (name === '' || email === '' || message === '') {
        alert('Please fill out all the form fields before submitting.');
        return;
    }

    const formData = {
        name,
        email,
        message,
    };

    const formDataJSON = JSON.stringify(formData);

    localStorage.setItem('formData', formDataJSON);

    document.getElementById('name').value = '';
    document.getElementById('email').value = '';
    document.getElementById('message').value = '';

    toggleContactForm();

    // Display the success alert
    const successAlert = document.querySelector('.success-alert');
    successAlert.style.display = 'block';

    // Hide the success alert after 5 seconds
    setTimeout(function () {
        successAlert.style.display = 'none';
    }, 5000);
}




const contactForm = document.getElementById('contact-form');
contactForm.addEventListener('submit', handleSubmit);

