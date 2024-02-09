
    document.getElementById('contact-form').addEventListener('submit', function(event) {
        
        if (validateForm()) {
          alert('Form submitted successfully!');
        }else{
            event.preventDefault(); 
        }
      });
  
      function validateForm() {
        const fullName = document.getElementById('fullname').value.trim();
        const email = document.getElementById('email').value.trim();
        const phone = document.getElementById('phone').value.trim();
  
        if (fullName === '' || email === '' || phone === '') {
          alert('Please fill in all fields.');
          return false;
        }
  
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(email)) {
          alert('Please enter a valid email address.');
          return false;
        }
  
        const phonePattern = /^\d{11}$/; 
        if (!phonePattern.test(phone)) {
          alert('Please enter a valid phone number (11 digits only).');
          return false;
        }
  
        return true;
      }
    