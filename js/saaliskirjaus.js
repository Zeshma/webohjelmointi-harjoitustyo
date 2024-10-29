//Tämä jQuery UI kirjaston datepicker on AI:n toteuttama, en saanut millään päivämäärää pp.mm.vvvv muotoon, jossain kohdassa päivämäärä muuttui mm/dd/yyyy tai muuten jenkki malliin joko lomakkeessa tai kirjatussa saaliskortissa.
$(document).ready(function () {
    $("#date").datepicker({
      dateFormat: "dd.mm.yy",
      changeMonth: true,
      changeYear: true,
      yearRange: "1900:2100"  // Vuosihaarukka kalenterissa
    });
  });
  
  let catches = JSON.parse(localStorage.getItem("catches")) || [];
  
  // Trofee seinä, tässä näkyy kirjatut saaliit
  function displayCatches() {
    const catchList = document.getElementById("catch-list");
    catchList.innerHTML = catches.map((c, index) => `
      <div class="card mb-3">
        <div class="card-body">
          <h5 class="card-title">${c.species}</h5>
          <p class="card-text"><strong>Päivämäärä:</strong> ${c.date}</p>
          <p class="card-text"><strong>Paikka:</strong> ${c.location}</p>
          <p class="card-text"><strong>Lisätiedot:</strong> ${c.notes}</p>
          <button class="btn btn-danger btn-sm" onclick="deleteCatch(${index})">Poista</button>
        </div>
      </div>
    `).join("");
  }
  
  document.getElementById("catch-form").addEventListener("submit", function (e) {
    e.preventDefault();
  
    const species = document.getElementById("species").value;
    const date = document.getElementById("date").value;
    const location = document.getElementById("location").value;
    const notes = document.getElementById("notes").value;
  
    const newCatch = { species, date, location, notes };
    catches.push(newCatch);
    localStorage.setItem("catches", JSON.stringify(catches));
  
    displayCatches();
  
    document.getElementById("catch-form").reset();
  });
  
  function deleteCatch(index) {
    catches.splice(index, 1);
    localStorage.setItem("catches", JSON.stringify(catches));
    displayCatches();
  }

  displayCatches();