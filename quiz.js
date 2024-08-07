function submitQuiz() {
  var score = 0;
  var answers = {
    q1: "b",
    q2: "a",
    q3: "c",
    q4: "d",
    q5: "e",
  };

  for (var i = 1; i <= 5; i++) {
    var radios = document.getElementsByName('q' + i);
    for (var j = 0; j < radios.length; j++) {
      if (radios[j].checked) {
        if (radios[j].value === answers['q' + i]) {
          score++;
        }
        break;
      }
    }
  }
  document.getElementById('score-output').innerHTML = "Scorul tău este: " + score + "/5";
}
function restartQuiz() {
  for (var i = 1; i <= 6; i++) {
    var radios = document.getElementsByName('q' + i);
    for (var j = 0; j < radios.length; j++) {
    radios[j].checked = false;
    radios[j].parentElement.classList.remove('correct', 'incorrect');
  }
}
document.getElementById('score-output').innerHTML = "";
}