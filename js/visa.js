  const questions = [
    {
        question: "Mitä metsäkanalintua sanotaan 'homenokaksi'?",
        options: ["Teeri", "Metso", "Pyy", "Kiiruna"],
        answer: "Metso"
    },
    {
        question: "Mikä on suurin jousella metsästettävä riistaeläin Suomessa?",
        options: ["Kauris", "Hirvi", "Karhu", "Peura"],
        answer: "Peura"
    },
    {
        question: "Mikä on suurin eläin, jota metsästetään Suomessa erityisluvalla?",
        options: ["Karhu", "Susi", "Ahma", "Villisika"],
        answer: "Karhu"
    },
    {
        question: "Mitä metsäkanalintuja Suomessa saa metsästää latvalinnustuksena?",
        options: ["Teeri- ja metsourokset", "Teeri- ja pyyurokset", "Metso- ja riekkourokset", "Pyy- ja riekkourokset"],
        answer: "Teeri- ja metsourokset"
    },
    {
        question: "Milloin latvalinnustus on mahdollinen hyvinä vuosina Pohjois- ja Keski-Suomen maakunnissa?",
        options: ["1.1.–20.1.", "10.1.–31.1.", "15.1.–15.2.", "1.2.–28.2."],
        answer: "10.1.–31.1."
    },
    {
        question: "Millä metsästysmenetelmillä on laillista käyttää keinovaloa?",
        options: ["Kaikilla riistalajeilla, paitsi suojelluilla lajeilla", "Vain supikoiran ja minkin pyynnissä", "Vain villisian ja haitallisten vieraslajien pyynnissä", "Kaikilla suurriistalajeilla"],
        answer: "Vain villisian ja haitallisten vieraslajien pyynnissä"
    },
    {
        question: "Mitä välineitä saa käyttää haitallisten vieraslajien pyynnissä keinovalon lisäksi?",
        options: ["Kiikaritähtäimiä ja koneellisia äänenvahvistimia", "Pimeätähtäimiä ja ääntä tuottavia laitteita", "Vain keinovaloa ja äänenvahvistinta", "Kaikki lisälaitteet ovat sallittuja"],
        answer: "Pimeätähtäimiä ja ääntä tuottavia laitteita"
    },
    {
        question: "Milloin hyväksytty ampumakoe vaaditaan luotiaseella metsästettäessä?",
        options: ["Kaikkien riistaeläinten metsästyksessä", "Hirvieläinten, karhun ja villisian metsästyksessä", "Ainoastaan karhun metsästyksessä", "Jousella metsästettäessä"],
        answer: "Hirvieläinten, karhun ja villisian metsästyksessä"
    },
    {
        question: "Mitä riistaeläimiä metsästettäessä hyväksytty ampumakoe vaaditaan metsästysjousen käytölle?",
        options: ["Ainoastaan karhua", "Valkohäntäpeuraa, metsäkaurista ja villisikaa", "Pienriistaa", "Kettuja ja jäniksiä"],
        answer: "Valkohäntäpeuraa, metsäkaurista ja villisikaa"
    },
    {
        question: "Kuinka lähellä yleistä tietä tai asutusta metsästys on sallittua ilman erillistä lupaa?",
        options: ["50 metrin päässä", "100 metrin päässä", "150 metrin päässä", "200 metrin päässä"],
        answer: "150 metrin päässä"
    }
  ];
  
  function displayQuiz() {
    const quizContainer = document.getElementById("quiz-container");
    let output = "";
  
    questions.forEach((q, index) => {
        output += `
            <div class="question mb-4">
                <h5>${index + 1}. ${q.question}</h5>
                ${q.options.map(option => `
                    <div>
                        <input type="radio" name="question${index}" value="${option}">
                        <label>${option}</label>
                    </div>
                `).join("")}
            </div>
        `;
    });
  
    output += `<button class="btn btn-primary" onclick="submitQuiz()">Lähetä vastaukset</button>`;
    quizContainer.innerHTML = output;
  }
  
  function submitQuiz() {
    let score = 0;
  
    questions.forEach((q, index) => {
        const selectedOption = document.querySelector(`input[name="question${index}"]:checked`);
        if (selectedOption && selectedOption.value === q.answer) {
            score++;
        }
    });
  
    const quizContainer = document.getElementById("quiz-container");
    quizContainer.innerHTML = `<h3 class="text-center">Sait ${score} / ${questions.length} oikein!</h3>`;
  }
  
  displayQuiz();