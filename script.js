// const removeDuplicates = (arr) =>
//   arr.split().reduce((acc, x) => {
//     if (!acc.includes(x)) {
//       return [...acc, x];
//     } else {
//       return acc;
//     }
//   }, []);
//   console.log(removeDuplicates([1, 1, 1, 2, 3, 4, 4, 2, 2]));

(async () => {
  const response = await axios.get(
    "https://opentdb.com/api.php?amount=1&category=18&type=boolean"
  );
  const questions = response.data.results[0].question;
  //   console.log(typeof questions);

  const questionText = document.querySelector("#question");
  questionText.textContent = questions;
  //   console.log(typeof questions);

  const nextQuestion = document.querySelector("#next-question");
  nextQuestion.onclick = () => {
    // add logic to save question to arr ? ? ?
    document.location.reload();
  };

  const correctAnswer = response.data.results[0].correct_answer;

  const responseText = document.querySelector("#response-msg");

  const trueBtn = document.querySelector("#true");
  trueBtn.onclick = () => {
    if (correctAnswer === "True") {
      responseText.textContent = "Correct!";
    } else {
      responseText.textContent = "Sorry!";
    }
  };

  const falseBtn = document.querySelector("#false");
  falseBtn.onclick = () => {
    if (correctAnswer === "False") {
      responseText.textContent = "Correct!";
    } else {
      responseText.textContent = "Sorry!";
    }
  };

  console.log(response.data.results);
})();
