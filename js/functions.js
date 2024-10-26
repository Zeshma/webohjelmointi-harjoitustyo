


// Saaliiskirjaus osio ALKU

// Olipa muka työmaa löytää keino saada päivämäärä näkymään pp.kk.vvvv
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
  
  // Saaliin lisäys
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
  
    // Resetoi lomakkeen saaliin ilmotuksen jälkeen
    document.getElementById("catch-form").reset();
  });
  
  // Poistoboksi saaliille
  function deleteCatch(index) {
    catches.splice(index, 1);
    localStorage.setItem("catches", JSON.stringify(catches));
    displayCatches();
  }
  
  // Tällä näkkyy kirjatut saaliit kun sivu ladataan 
  displayCatches();
  
  // Saaliinkirjaus osio LOPPU
  