document
  .getElementById("orchardForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    const orchard = {
      name: document.getElementById("name").value,

      location: document.getElementById("location").value,

      crop: document.getElementById("crop").value,

      area: document.getElementById("area").value,

      year: document.getElementById("year").value,
    };

    let orchards = JSON.parse(localStorage.getItem("orchards")) || [];

    orchards.push(orchard);

    localStorage.setItem("orchards", JSON.stringify(orchards));

    alert("Orchard Saved");

    window.location.href = "dashboard.html";
  });
