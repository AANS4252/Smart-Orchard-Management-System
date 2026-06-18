document.getElementById("addOrchardBtn").addEventListener("click", function () {
  window.location.href = "add-orchard.html";
});

const orchards = JSON.parse(localStorage.getItem("orchards")) || [];

document.getElementById("orchardCount").textContent = orchards.length;

const container = document.getElementById("orchardContainer");

orchards.forEach(function (orchard) {
  const card = document.createElement("div");

  card.classList.add("orchard-card");

  card.innerHTML = `
        <h3>${orchard.name}</h3>

        <p>Location:
        ${orchard.location}</p>

        <p>Crop:
        ${orchard.crop}</p>

        <p>Area:
        ${orchard.area}</p>

        <button>
            View Details
        </button>
    `;

  container.appendChild(card);
});
