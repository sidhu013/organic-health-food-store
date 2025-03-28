document.addEventListener('DOMContentLoaded', function() {
    
    const loginForm = document.querySelector('#login-form');

    

    // Handle login
    loginForm.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent default form submission

        
        data = {
            login_username: document.getElementById('login_username').value,
            
            login_password: document.getElementById('login_password').value,
            
        }

        fetch('http://127.0.0.1:8000/api/login', {
            method: 'POST',
            body: JSON.stringify(data),
        })
        .then(response => response.json())
        .then(data => {
            if (data.success) {
                alert('Login successful!');
                window.location.replace('/dashboard');
                // Optionally redirect to another page
            } else {
                alert('Login failed: ' + data.message);
            }
        })
        .catch(error => {
            console.error('Error:', error);
        });
    });
});
