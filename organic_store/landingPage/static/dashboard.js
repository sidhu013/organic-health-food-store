document.addEventListener("DOMContentLoaded", function() {
 const checkout = document.querySelector(".btn.checkout")
 
 checkout.addEventListener("submit", function(event){
    event.preventDefault()
    data = {
        login_username: getElementById('login_username').value,
        login_password: getElementById('login_password').value,
    }

    fetch("http://127.0.0.1:8000/api/login",{
        method: 'post',
        body: JSON.stringify(data)
    })
    .then(response => response.json())
    .then(data => {
        if(data.success){
            alert('login successful!')
            window.location.replace('/dashboard')
        } else {
            alert(data.message)
        }
    })
    .catch(error => {
        console.log(error)
    })
  })
})