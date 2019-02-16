let trivia = [
  {
    question:
      "What is the name of the character played by Johnny Depp in the 'Pirates of the Caribbean' film series?",
    answerOne: "Hector Barbossa",
    answerTwo: "Davy Jones",
    answerThree: "Will Turner",
    correctAnswer: "Jack Sparrow",
    correctAnswerImg: "./Images/jacksparrow.jpg",
    wrongAnswerImg: "./Images/jackWrong.jpg"
  },
  {
    question:
      "Which actor played Freddie Mercury in the 2018 film 'Bohemian Rhapsody'?",
    answerOne: "Brian May",
    answerTwo: "Ben Hardy",
    answerThree: "Bruno Mars",
    correctAnswer: "Rami Malek",
    correctAnswerImg: "../Images/rami",
    wrongAnswerImg: "../Images/ramiWrong.jpg"
  },
  {
    question:
      "What’s the last thing Jack ever says before he dies in the movie 'A star is born'?",
    answerOne: "Come here",
    answerTwo: "Sorry",
    answerThree: "I will always love you",
    correctAnswer: "I just want to take another look at you",
    correctAnswerImg: "../Images/star.jpg",
    wrongAnswerImg: "../Images/starWrong.jpg"
  },
  {
    question: "Which of Daenerys Targaryen's three dragons are the largest?",
    answerOne: "Viserion",
    answerTwo: "Viserys",
    answerThree: "Rhaegal",
    correctAnswer: "Drogon",
    correctAnswerImg: "../Images/drogon.jpg",
    wrongAnswerImg: "../Images/drogonWrong.jpg"
  },
  {
    question: "What was wrong with the couch Ross returned to the store?",
    answerOne: "The colour was wrong",
    answerTwo: "It had a stain",
    answerThree: "It was torn",
    correctAnswer: "It was cut in half",
    correctAnswerImg: "../Images/couch.jpg",
    wrongAnswerImg: "../Images/couchWrong.jpg"
  },
  {
    question: "'The Stranger Things' is a _____ original.",
    answerOne: "CW",
    answerTwo: "HBO",
    answerThree: "HULU",
    correctAnswer: "Netflix",
    correctAnswerImg: "../Images/netflix.jpg",
    wrongAnswerImg: "../Images/narniaWrong.jpg"
  },
  {
    question:
      "In which action movie of 2018 major events were happening at Wakanda?",
    answerOne: "Avengers: Infinity War",
    answerTwo: "Venom",
    answerThree: "Aquaman",
    correctAnswer: "Black Panther",
    correctAnswerImg: "../Images/wakanda.jpg",
    wrongAnswerImg: "../Images/wakandaWrong.jpg"
  },
  {
    question: "What is the name of Hagrid’s big dog?",
    answerOne: "Crookshanks",
    answerTwo: "Scabbers",
    answerThree: "Hedwig",
    correctAnswer: "Fang",
    correctAnswerImg: "../Images/fang.jpg",
    wrongAnswerImg: "../Images/fangWrong.jpg"
  },
  {
    question:
      "Who is the first person to discover the wardrobe at 'Chronicles of Narnia'?",
    answerOne: "Peter",
    answerTwo: "Edmund",
    answerThree: "Susan",
    correctAnswer: "Lucy",
    correctAnswerImg: "../Images/narnia.jpg",
    wrongAnswerImg: "../Images/narniaWrong.jpg"
  },
  {
    question:
      "What is the name of the pizza company that delivers the pizzas to Kevin and his family?",
    answerOne: "Domino's",
    answerTwo: "Little Ceasars",
    answerThree: "Pizza Hut",
    correctAnswer: "Little Nero's ",
    correctAnswerImg: "../Images/pizza.jpg",
    wrongAnswerImg: "../Images/pizzaWrong.jpg"
  }
];

let btn = document.getElementById("start");
let content = document.getElementById("content");
let initialContent = document.getElementById("start-the-game");
let timeOutput = document.getElementById("time");
let seconds;
let setTimer;
let clockRunning = false;
let time = 16;
let questionContent = document.getElementById("question");
let answerChoices = document.getElementById("answerChoices");
let arrNumb = [];
let index = 0;
let triviaStarted = false;
let showQuestion;
let correctAnswersCount = 0;
let wrongAnswersCount = 0;
let displayAfterEachQuestion = document.getElementById("afterEachQuestion");

btn.addEventListener("click", value => {
  initialContent.classList.add("hidden");
  initialContent.removeAttribute("id", "start-the-game");
  content.classList.remove("hidden");
  startTheGame();
});

function startTheGame() {
  if (!triviaStarted) {
    showQuestion = setInterval(nextQuestion, 5000);
    triviaStarted = true;
  }
}

function stopTheGame() {
  clearInterval(showQuestion);
}

function nextQuestion() {
  shuffleAnswers(arrNumb);
  start();
  let displayedQuestion = document.getElementById("h3");
  displayedQuestion.innerHTML = trivia[index].question;

  let choiceOne = document.getElementById("p1");
  choiceOne.innerHTML = trivia[index].answerOne;
  let choiceTwo = document.getElementById("p2");
  choiceTwo.innerHTML = trivia[index].answerTwo;
  let choiceThree = document.getElementById("p3");
  choiceThree.innerHTML = trivia[index].answerThree;
  let choiceFour = document.getElementById("p4");
  choiceFour.innerHTML = trivia[index].correctAnswer;
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
    console.log(answerChoices);
    index++;
    if (index === trivia.length - 1) {
      index = 0;
      stopTheGame();
    }
  });
  checkTheAnswer(choiceFour);
}

function checkTheAnswer(correct) {
  answerChoices.addEventListener("click", event => {
    let choice = event.target;
    if (choice.innerHTML === correct.innerHTML) {
      stop();
      displayAfterEachQuestion.classList.remove("hidden");
      console.log("You won");
    } else {
      stop();
      console.log("You lost");
    }
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
