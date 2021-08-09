function decodeHtml(html) {
  var txt = document.createElement("textarea");
  txt.innerHTML = html;
  return txt.value;
}

window.onload = async () => {
  const responseText = document.querySelector("#response-msg");
  const trueBtn = document.querySelector("#true");
  const questionText = document.querySelector("#question");
  const nextQuestion = document.querySelector("#next-question");
  const falseBtn = document.querySelector("#false");

  const putNewQuestionOnPage = async (totalCounter, correctCounter) => {
    const response = await axios.get(
      "https://opentdb.com/api.php?amount=1&category=18&type=boolean"
    );
    console.log("totalCounter", totalCounter, "correctCounter", correctCounter);

    const question = response.data.results[0].question;
    questionText.textContent = decodeHtml(question);

    const correctAnswer = response.data.results[0].correct_answer;

    trueBtn.onclick = () => {
      if (correctAnswer === "True") {
        nextQuestion.onclick = async () => {
          await putNewQuestionOnPage(totalCounter + 1, correctCounter + 1);
        };
        responseText.textContent = "Correct!";
      } else {
        nextQuestion.onclick = async () => {
          await putNewQuestionOnPage(totalCounter + 1, correctCounter);
        };
        responseText.textContent = "Sorry!";
      }
    };

    falseBtn.onclick = () => {
      if (correctAnswer === "False") {
        nextQuestion.onclick = async () => {
          await putNewQuestionOnPage(totalCounter + 1, correctCounter + 1);
        };
        responseText.textContent = "Correct!";
      } else {
        nextQuestion.onclick = async () => {
          await putNewQuestionOnPage(totalCounter + 1, correctCounter);
        };
        responseText.textContent = "Sorry!";
      }
    };

    nextQuestion.onclick = async () => {
      await putNewQuestionOnPage(totalCounter + 1, correctCounter);
    };
  };
  await putNewQuestionOnPage(1, 0);
};
