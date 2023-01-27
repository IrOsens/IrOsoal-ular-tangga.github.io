var checkAnswersBtn = document.getElementById("check-answers-btn");

checkAnswersBtn.addEventListener("click", function() {

  var questionCards = document.querySelectorAll(".question-card");

  for (var i = 0; i < questionCards.length; i++) {

    var correctAnswer = questionCards[i].querySelector(".correct-answer");

    if (correctAnswer) {

      correctAnswer.style.backgroundColor = "green";

    }

  }

});

