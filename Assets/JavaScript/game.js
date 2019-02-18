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
    wrongAnswerImg: "./Assets/Images/netflixWrong.jpg"
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
let correctAnswersCount = 0;
let wrongAnswersCount = 0;
let unansweredCount = 0;

btn.addEventListener("click", gameStarted);
answerChoices.addEventListener("click", checkTheAnswer);

function gameStarted() {
  initialContent.classList.add("hidden");
  initialContent.removeAttribute("id", "start-the-game");
  content.classList.remove("hidden");
  displayQuestion();
}

function nextQuestion() {
  index++;
  if (index === trivia.length) {
    index = 0;
    stop();
    setTimeout(gameResult, 3000);
  } else {
    displayQuestion();
  }
}

function displayQuestion() {
  content.classList.remove("hidden");
  displayAfterEachQuestion.classList.add("hidden");
  arrNumb = [];
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
}

function checkTheAnswer() {
  let choice = event.target;
  content.classList.add("hidden");
  displayAfterEachQuestion.classList.remove("hidden");
  if (choice.innerHTML === choiceFour.innerHTML) {
    stop();
    correctAnswersCount++;
    result.innerHTML = "<h3 class='red'>Correct! Congrats!</h3>";
    resultImage.src = correctImg;
    console.log("correct answers in iF " + correctAnswersCount);
  } else {
    stop();
    wrongAnswersCount++;
    result.innerHTML =
      "<h3 class='red'>Wrong</h3><p>Correct answer was: " +
      choiceFour.innerHTML +
      "</p>";
    resultImage.src = wrongImg;
  }
  displayCorrectAnswers.innerHTML = "Correct answers: " + correctAnswersCount;
  displayWrongAnswers.innerHTML = "Wrong answers: " + wrongAnswersCount;
  setTimeout(nextQuestion, 3000);
}

function gameResult() {
  content.classList.add("hidden");
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
    correctAnswersCount = 0;
    wrongAnswersCount = 0;
    unansweredCount = 0;
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
    console.log(time);
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
  let convertedTime = timeConverter(time);
  timeOutput.innerHTML = convertedTime;
  if (time === 0) {
    stop();
    content.classList.add("hidden");
    displayAfterEachQuestion.classList.remove("hidden");
    unansweredCount++;
    result.innerHTML = "<h3>You ran out of time!</h3>";
    resultImage.src = "./Assets/Images/ranoutoftime.gif";
    setTimeout(nextQuestion, 3000);
  }
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
