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

for (let i = 0; i < trivia.length; i++) {
  console.log(trivia[i].question);
  console.log(trivia[i].answerOne);
  console.log(trivia[i].answerTwo);
  console.log(trivia[i].answerThree);
  console.log(trivia[i].correctAnswer);
  console.log(trivia[i].correctAnswerImg);
  console.log(trivia[i].wrongAnswerImg);
}
