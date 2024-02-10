const questionTitle = document.getElementById("question");
const questions = [
  {
    question: "Quelle est la capitale de la France ?",
    choices: ["Londres", "Berlin", "Paris", "Madrid"],
    correctAnswer: "Paris",
  },
  {
    question: "Comment dit-on mardi en anglais ?",
    choices: ["friday", "wednesday", "sunday", "tuesday"],
    correctAnswer: "tuesday",
  },
  {
    question: "Quel est l'animal le plus rapide au monde ?",
    choices: ["dauphin", "guepard", "aigle", "cheval"],
    correctAnswer: "guepard",
  },
];

let currentQuestion = 0;
let score = 0;

function displayQuestion() {
  const q = questions[currentQuestion];
  questionTitle.textContent = q.question;
  choices.innerHTML = "";

  q.choices.forEach((choice) => {
    const li = document.createElement("li");
    document.getElementById("choices").appendChild(li);
    li.textContent = choice;

    li.addEventListener("click", () => {
      if (choice === q.correctAnswer) {
        score++;
        document.getElementById("score").innerHTML = `Score : ${score}`;
      }
      currentQuestion++;

      if (currentQuestion < questions.length) {
        displayQuestion();
      } else {
        endQuizz();
      }
    });
  });
  function endQuizz() {
    document.getElementById(
      "quiz"
    ).innerHTML = `<h2>Votre score est de ${score} / 3</h2>`;
  }
}
displayQuestion();
