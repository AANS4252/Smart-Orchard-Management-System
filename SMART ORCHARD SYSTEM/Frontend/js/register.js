document
  .getElementById("registerForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    const user = {
      name: document.getElementById("name").value,

      email: document.getElementById("email").value,

      village: document.getElementById("village").value,

      district: document.getElementById("district").value,

      state: document.getElementById("state").value,

      pincode: document.getElementById("pincode").value,

      username: document.getElementById("username").value,

      password: document.getElementById("password").value,
    };

    localStorage.setItem("user", JSON.stringify(user));

    alert("Registration Successful");

    window.location.href = "login.html";
  });
