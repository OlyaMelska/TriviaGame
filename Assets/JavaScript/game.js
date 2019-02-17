let trivia = [
  {
    question:
      "What is the name of the character played by Johnny Depp in the 'Pirates of the Caribbean' film series?",
    answerOne: "Hector Barbossa",
    answerTwo: "Davy Jones",
    answerThree: "Will Turner",
    correctAnswer: "Jack Sparrow",
    correctAnswerImg: "./Assets/Images/jacksparrow.jpg",
    wrongAnswerImg: "./Assets/Images/jackWrong.jpg"
  },
  {
    question:
      "Which actor played Freddie Mercury in the 2018 film 'Bohemian Rhapsody'?",
    answerOne: "Brian May",
    answerTwo: "Ben Hardy",
    answerThree: "Bruno Mars",
    correctAnswer: "Rami Malek",
    correctAnswerImg: "./Assets/Images/rami",
    wrongAnswerImg: "./Assets/Images/ramiWrong.jpg"
  },
  {
    question:
      "What’s the last thing Jack ever says before he dies in the movie 'A star is born'?",
    answerOne: "Come here",
    answerTwo: "Sorry",
    answerThree: "I will always love you",
    correctAnswer: "I just want to take another look at you",
    correctAnswerImg: "./Assets/Images/star.jpg",
    wrongAnswerImg: "./Assets/Images/starWrong.jpg"
  },
  {
    question: "Which of Daenerys Targaryen's three dragons are the largest?",
    answerOne: "Viserion",
    answerTwo: "Viserys",
    answerThree: "Rhaegal",
    correctAnswer: "Drogon",
    correctAnswerImg: "./Assets/Images/drogon.jpg",
    wrongAnswerImg: "./Assets/Images/drogonWrong.jpg"
  },
  {
    question: "What was wrong with the couch Ross returned to the store?",
    answerOne: "The colour was wrong",
    answerTwo: "It had a stain",
    answerThree: "It was torn",
    correctAnswer: "It was cut in half",
    correctAnswerImg: "./Assets/Images/couch.jpg",
    wrongAnswerImg: "./Assets/Images/couchWrong.jpg"
  },
  {
    question: "'The Stranger Things' is a _____ original.",
    answerOne: "CW",
    answerTwo: "HBO",
    answerThree: "HULU",
    correctAnswer: "Netflix",
    correctAnswerImg: "./Assets/Images/netflix.jpg",
    wrongAnswerImg: "./Assets/Images/narniaWrong.jpg"
  },
  {
    question:
      "In which action movie of 2018 major events were happening at Wakanda?",
    answerOne: "Avengers: Infinity War",
    answerTwo: "Venom",
    answerThree: "Aquaman",
    correctAnswer: "Black Panther",
    correctAnswerImg: "./Assets/Images/wakanda.jpg",
    wrongAnswerImg: "./Assets/Images/wakandaWrong.jpg"
  },
  {
    question: "What is the name of Hagrid’s big dog?",
    answerOne: "Crookshanks",
    answerTwo: "Scabbers",
    answerThree: "Hedwig",
    correctAnswer: "Fang",
    correctAnswerImg: "./Assets/Images/fang.jpg",
    wrongAnswerImg: "./Assets/Images/fangWrong.jpg"
  },
  {
    question:
      "Who is the first person to discover the wardrobe at 'Chronicles of Narnia'?",
    answerOne: "Peter",
    answerTwo: "Edmund",
    answerThree: "Susan",
    correctAnswer: "Lucy",
    correctAnswerImg: "./Assets/Images/narnia.jpg",
    wrongAnswerImg: "./Assets/Images/narniaWrong.jpg"
  },
  {
    question:
      "What is the name of the pizza company that delivers the pizzas to Kevin and his family?",
    answerOne: "Domino's",
    answerTwo: "Little Ceasars",
    answerThree: "Pizza Hut",
    correctAnswer: "Little Nero's ",
    correctAnswerImg: "./Assets/Images/pizza.jpg",
    wrongAnswerImg: "./Assets/Images/pizzaWrong.jpg"
  }
];

let btn = document.getElementById("start");
let content = document.getElementById("content");
let initialContent = document.getElementById("start-the-game");
let timeOutput = document.getElementById("time");
let displayAfterEachQuestion = document.getElementById("afterEachQuestion");
let displayedQuestion = document.getElementById("h3");
let choiceOne = document.getElementById("p1");
let choiceTwo = document.getElementById("p2");
let choiceThree = document.getElementById("p3");
let choiceFour = document.getElementById("p4");
let result = document.getElementById("result");
let resultImage = document.getElementById("resultImage");
let displayCorrectAnswers = document.getElementById("correctAnswers");
let displayWrongAnswers = document.getElementById("wrongAnswers");
let resultOfTheGame = document.getElementById("gameResult");
let gameResultOutput = document.getElementById("gameResultOutput");
let startOver = document.getElementById("startOver");
let answerChoices = document.getElementById("answerChoices");

let correctImg, wrongImg;
let seconds;
let setTimer;
let clockRunning = false;
let time = 16;
let arrNumb = [];
let index = 0;
let triviaStarted = false;
let showQuestion;
let correctAnswersCount = 0;
let wrongAnswersCount = 0;
let unansweredCount = 0;
console.log(trivia.length);

btn.addEventListener("click", gameStarted);

function gameStarted() {
  initialContent.classList.add("hidden");
  initialContent.removeAttribute("id", "start-the-game");
  content.classList.remove("hidden");
  nextQuestion();
  startTheGame();
}

function startTheGame() {
  if (!triviaStarted) {
    showQuestion = setInterval(nextQuestion, 3000);
    triviaStarted = true;
  }
}

function stopTheGame() {
  clearInterval(showQuestion);
}

function nextQuestion() {
  if (index === trivia.length) {
    index = 0;
    stop();
    stopTheGame();
    gameResult();
  } else {
    content.classList.remove("hidden");
    displayAfterEachQuestion.classList.add("hidden");
    shuffleAnswers(arrNumb);
    start();
    displayedQuestion.innerHTML = trivia[index].question;
    choiceOne.innerHTML = trivia[index].answerOne;
    choiceTwo.innerHTML = trivia[index].answerTwo;
    choiceThree.innerHTML = trivia[index].answerThree;
    choiceFour.innerHTML = trivia[index].correctAnswer;
    correctImg = trivia[index].correctAnswerImg;
    wrongImg = trivia[index].wrongAnswerImg;

    arrNumb.forEach(element => {
      if (element === 1) {
        answerChoices.appendChild(choiceOne);
      } else if (element === 2) {
        answerChoices.appendChild(choiceTwo);
      } else if (element === 3) {
        answerChoices.appendChild(choiceThree);
      } else if (element === 4) {
        answerChoices.appendChild(choiceFour);
      }
    });
    checkTheAnswer(choiceFour, correctImg, wrongImg);
    index++;
  }
}

function checkTheAnswer(correct, img1, img2) {
  console.log("Index of Trivia array is " + index);
  answerChoices.addEventListener("click", () => {
    console.log("Answer Choices " + answerChoices.innerHTML);
    let choice = event.target;
    console.log("choice is " + choice);
    content.classList.add("hidden");
    displayAfterEachQuestion.classList.remove("hidden");
    if (choice.innerHTML === correct.innerHTML) {
      console.log("chioce " + choice.innerHTML);
      console.log("correct Choice " + correct.innerHTML);
      stop();
      correctAnswersCount++;
      result.innerHTML = "<h3>Correct! Congrats!</h3>";
      resultImage.src = img1;
      console.log("correct answers in iF " + correctAnswersCount);
    } else if (choice.innerHTML !== correct.innerHTML) {
      stop();
      wrongAnswersCount++;
      result.innerHTML =
        "<h3>Wrong</h3><p>Correct answer was: " + correct.innerHTML + "</p>";
      resultImage.src = img2;
    } else {
      stop();
      unansweredCount++;
      result.innerHTML = "<h3>You ran out of time!</h3>";
      resultImage.src = "./Assets/Images/ranoutoftime.gif";
    }
    displayCorrectAnswers.innerHTML = "Correct answers: " + correctAnswersCount;
    displayWrongAnswers.innerHTML = "Wrong answers: " + wrongAnswersCount;
  });
  startTheGame();
}

function gameResult() {
  displayAfterEachQuestion.classList.add("hidden");
  resultOfTheGame.classList.remove("hidden");
  gameResultOutput.innerHTML =
    "<p>Correct answers: " +
    correctAnswersCount +
    "</p><p>Wrong answers: " +
    wrongAnswersCount +
    "</p><p>Unanswered: " +
    unansweredCount +
    "</p>";
  startOver.addEventListener("click", value => {
    resultOfTheGame.classList.add("hidden");
    displayAfterEachQuestion.classList.add("hidden");
    content.classList.remove("hidden");
    index = 0;
    gameStarted();
  });
}

function shuffleAnswers(arr) {
  if (arr.length >= 4) return;
  let number = Math.floor(Math.random() * 4 + 1);
  if (arr.indexOf(number) < 0) {
    arr.push(number);
  }
  shuffleAnswers(arr);
}

function start() {
  time = 16;
  if (!clockRunning) {
    seconds = setInterval(count, 1000);
    clockRunning = true;
  }
}
function stop() {
  clearInterval(seconds);
  clockRunning = false;
}

function count() {
  time--;
  let result = timeConverter(time);
  timeOutput.innerHTML = result;
}

function timeConverter(t) {
  var minutes = Math.floor(t / 60);
  var seconds = t - minutes * 60;

  if (seconds < 10) {
    seconds = "0" + seconds;
  }

  if (minutes === 0) {
    minutes = "00";
  } else if (minutes < 10) {
    minutes = "0" + minutes;
  }

  return minutes + ":" + seconds;
}
