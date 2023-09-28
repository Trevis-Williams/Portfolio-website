function toggleContactForm() {
    const contactForm = document.getElementById('contact-form');
  
    if (contactForm.style.display === 'none' || contactForm.style.display === '') {
        contactForm.style.display = 'block'; 
    } else {
        contactForm.style.display = 'none'; 
    }
}

function handleSubmit(event) {
    event.preventDefault(); 
    
  
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    
   
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
    
    alert('Form data submitted You will hear from me!');
}


const contactForm = document.getElementById('contact-form');
contactForm.addEventListener('submit', handleSubmit);

  
  
