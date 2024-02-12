document.addEventListener("DOMContentLoaded", function () {
    const loginForm = document.getElementById("loginForm");
    
    loginForm.addEventListener("submit", function (event) {
      event.preventDefault();
      
      const email = document.getElementById("email").value;
      const password = document.getElementById("password").value;
      
      window.location.href = "indexbase.html";
    });
  });
  