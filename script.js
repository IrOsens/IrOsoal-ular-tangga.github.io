for (let i = 1; i <= 50; i++) {
    document.getElementById(`answer-${i}`).addEventListener("click", function() {
        window.location.href = `soal/soal-${i}.html`;
    });
  }
//let answers = document.querySelectorAll(".answer");

//for (let i = 0; i < answers.length; i++) {

 //answers[i].addEventListener("click", function() {

    //if (this.id === "answer-1") {

      //his.classList.add("correct");

    //} else {

      //this.classList.add("incorrect");

    //}

  //});

//}

