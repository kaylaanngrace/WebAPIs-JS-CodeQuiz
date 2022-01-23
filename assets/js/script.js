var startButton = document.querySelector("#startBtn");
var timerEl = document.querySelector("#timer");
var questionsAnwersEl = document.querySelector("#questions-answers");
var answersEl = document.querySelector("#answers");
var endQuizEl = document.querySelector("#quiz-end");
var correctIncorrectEl = document.querySelector("#correctIncorrect");
var initialsEl = document.querySelector("#initals");

var questions = [
    {
        question: "Where is the best place to insert a JavaScript?",
        answers: [
            "<body>", 
            "<main>", 
            "<header>",
            "<section>"
        ],
        correct: "body"
    },
    
    {
        question: "What is the proper tag thr JavaScript file goes in at attach it to the to an HTML file?",
        answers: [
            "<img href=''>",
            "<script src=''></script>",
            "<link href=''>",
            "<script sgv=''></script>",
        ],
        correct: "<script src=''></script>"
    },

    {
        question: "How do you create a function in JavaScript?",
        answers: [
            "function createFunct()", 
            "function = createFunct()", 
            "function createFunct[]",
            "function createFunct{}"
        ],
        correct: "function createFunct()"
    },

    {
        question: "How do you call a function?",
        answers: [
            "functionName()", "functionName=call", 
            "for(functionName()=== true)", "functionName[]"
        ],
        correct: "functionName()"
    },

    {
        question:"localStorage can store objects.",
        answers:[
            "True, localStorage can store any type of data", 
            "False, localStorage can only store strings", 
            "True, localStorage stores objects and strings",
            "False, localStorages only stores integers."
        ],
        correct: "False, localStorage can only store strings"
    },

    {
        question: "How do you turn an object into a string?",
        answers: [
            "JSON.stringify()", 
            "JSON.parse()", 
            "JavaScript.stringify()", 
            "object.string()"
        ],
        correct: "JSON.stringify()"
    },

    {    
        question: "JavaScript is case sensitive.",
        answers: [
            "True, meaning javaScript and javascript are different.", 
            "False, meaning javaScript and javescript are the same.", 
            "False, meaning JavaScript can only contain lowercase letters.",
            "False, meaning JavaScript can only contain uppercase letters."
        ],
        correct: "True, meaning javeScript and javascript are different."
    },

    {
        question: "arrays are inclosed in...",
        answers: [
            "curly brackets: {}",
            "parentheses: ()",
            "quotes: '' ",
            "square brackets: []",
        ],
        correct: "square brackets: []"
    },

    {
        question: "Boolean operators that can be used in JavaScript include:",
        answers: [
            "'And' Operator &&",
            "'Or' Operator ||",
            "'Not' Operator !",
            "All the above"
            ],
        correct: "All the above"
    },

    {
        question: "Which is a looping structure in JavaScript?",
        answers: [
            "for", 
            "while", 
            "do-while loops",
            "all of the above"
        ],
        correct: "all of the above"
    }
]


var countdown = function () {
    var timeLeft = 90;
    var timeInterval = setInterval(function () {
      if (timeLeft > 1) {
        timerEl.innerHTML = timeLeft;
        timeLeft--;
      } else {
        timerEl.innerHTML = '';
        clearInterval(timeInterval);
        endQuiz();
      }
    }, 1000);
};

startButton.addEventListener('click', startQuiz)
function startQuiz(){
    var startEl = document.getElementById("start-home");
    startEl.setAttribute("class","hidden");
    currentQuestionIndex = 0;
    questionsAnwersEl.removeAttribute("class", "hidden");

    countdown();
    viewQuestions();
};

function viewQuestions(){
    var currentQuestion = questions[currentQuestionIndex];

    var questionEl = document.getElementById("question");
    questionEl.textContent = currentQuestion.question;
    answersEl.innerHTML = "";

    currentQuestion.answers.forEach(function(answer, i) {
        // create buttons for answers
        var selectAnswer = document.createElement("button");
        selectAnswer.setAttribute("class", "btn");
        selectAnswer.setAttribute("value", answer);
    
        selectAnswer.textContent = answer;
    
        selectAnswer.addEventListener("click", selectAnswers)

        answersEl.appendChild(selectAnswer);
        
    });

};

function selectAnswers(){
    if (this !== questions[currentQuestionIndex].correct) {

   // correct or Incorrect 
    correctIncorrectEl.textContent = "Incorrect!";
    correctIncorrectEl.style.color = "red";
    correctIncorrectEl.style.fontSize = "32px";
    } else {
    correctIncorrectEl.textContent = "Correct!";
    correctIncorrectEl.style.color = "#42f042";
    correctIncorrectEl.style.fontSize = "32px";
    }

    correctIncorrectEl.setAttribute("class", "correctIncorrect");
    setTimeout(function() {
    correctIncorrectEl.setAttribute("class", "correctIncorrect hidden");
    }, 1000);

    // next question
    currentQuestionIndex++;

    if (currentQuestionIndex === questions.length) {
    endQuiz();
    } else {
    viewQuestions();
    }
};

function endQuiz(){
    questionsAnwersEl.setAttribute("class", "hidden");
    endQuizEl.removeAttribute("class", "hidden");
    saveScores();
};

function saveScores() {

};
