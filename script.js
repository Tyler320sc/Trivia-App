(async () => {
  const response = await axios.get(
    "https://opentdb.com/api.php?amount=10&category=18&type=boolean"
  );
  const questions = response.data.results[0].question;

  const questionText = document.querySelector("#question");

  questionText.textContent = questions;

  console.log(response.data.results[0].question);
})();
