for (let i = 1; i <= 50; i++) {
    document.getElementById(`answer-${i}`).addEventListener("click", function() {
        window.location.href = `soal/soal-${i}.html`;
    });
  }
var dice = document.getElementById("dice-img");
var result = document.getElementById("result");
dice.onclick = function() {
  var randomNumber = Math.floor(Math.random() * 6) + 1;
  dice.src = "dadu/dice" + randomNumber + ".png";
  dice.classList.add("rotate");
  result.innerHTML = randomNumber;
  setTimeout(function(){
   dice.classList.remove("rotate");
  },500);
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

