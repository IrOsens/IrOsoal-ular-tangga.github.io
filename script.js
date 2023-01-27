let answers = document.querySelectorAll(".answer");

for (let i = 0; i < answers.length; i++) {

  answers[i].addEventListener("click", function() {

    if (this.id === "answer-1") {

      this.classList.add("correct");

    } else {

      this.classList.add("incorrect");

    }

  });

}

