function solve() {
  let questions = Array.from(document.getElementsByTagName("section"));
  let totalCorrectAnswers = 0;
  let correctAnswers = {
    1: "onclick",
    2: "JSON.stringify()",
    3: "A programming API for HTML and XML documents",
  };
  let answerKey = 1;

  questions[0].classList.remove("hidden");

  let [firstAnswerBtn, secondAnswerBtn] = questions[0].getElementsByClassName("answer-wrap");
  let [firstAnswer, secondAnswer] = questions[0].getElementsByClassName("answer-text");
  firstAnswerBtn.addEventListener("click", checkAnswer(firstAnswer.textContent));
  secondAnswerBtn.addEventListener("click", checkAnswer(secondAnswer.textContent));

  function checkAnswer(answer) {
    if (answer === correctAnswers[answerKey]) {
      totalCorrectAnswers += 1;
      answerKey += 1;
      console.log(answerKey)
      console.log(totalCorrectAnswers)
    }
  }

  
}
