document
  .getElementById("loginForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    const username = document.getElementById("username").value;

    const password = document.getElementById("password").value;

    const savedUser = JSON.parse(localStorage.getItem("user"));

    if (
      savedUser &&
      username === savedUser.username &&
      password === savedUser.password
    ) {
      alert("Login Successful");

      window.location.href = "dashboard.html";
    } else {
      alert("Invalid Credentials");
    }
  });
