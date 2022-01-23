var startButton = document.querySelector("#startBtn");
var timerEl = document.querySelector("#timer");
var questionsAnwersEl = document.querySelector("#questions-answers");
var answersEl = document.querySelector("#answers");
var endQuizEl = document.querySelector("#quiz-end");
var correctIncorrectEl = document.querySelector("#correctIncorrect");
var initialsEl = document.querySelector("#initals");
var scoreEl = document.querySelector("#score")
var highscoresPageEl = document.querySelector("#highscoresPage")
var submitButton = document.querySelector("#submit")
var questions = [
    {
        question: "Where is the best place to insert a JavaScript?",
        answers: [
            "<body>", 
            "<main>", 
            "<header>",
            "<section>"
        ],
        correct: "<body>"
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
var highscoreButton = document.querySelector("#highscorebtn")

var timeLeft = 90;
var timeInterval;

// start button event listner
startButton.addEventListener('click', startQuiz)

// start quiz function
function startQuiz(){
    var startEl = document.getElementById("start-home");
    // hide start page
    startEl.setAttribute("class","hidden");
    currentQuestionIndex = 0;
    // display questions section
    questionsAnwersEl.removeAttribute("class", "hidden");

    // TIMER
    timeInterval = setInterval(function () {
        if (timeLeft > 1) {
        timerEl.innerHTML = timeLeft;
        timeLeft--;
        }
        else {
        timerEl.innerHTML = '';
        clearInterval(timeInterval);
        endQuiz();
        }
    }, 1000);
    // call questions
    viewQuestions();
};

// question function to view questions
function viewQuestions(){
    var currentQuestion = questions[currentQuestionIndex];

    var questionEl = document.getElementById("question");
    questionEl.textContent = currentQuestion.question;

    // clear previous answers
    answersEl.innerHTML = "";

    currentQuestion.answers.forEach(function(answer, i) {
        // create buttons for answers
        var selectAnswer = document.createElement("button");
        selectAnswer.setAttribute("class", "btn");
        selectAnswer.setAttribute("value", answer);
        
        // display answers
        selectAnswer.textContent = answer;
    
        selectAnswer.addEventListener("click", selectAnswers)

        answersEl.appendChild(selectAnswer)    
    });

};

// display answers
function selectAnswers(){
    if (questions[currentQuestionIndex].correct !== this.value) {
        timeLeft -= 5
   // correct or Incorrect styling and text
        correctIncorrectEl.textContent = "Incorrect!";
        correctIncorrectEl.style.color = "red";
        correctIncorrectEl.style.fontSize = "32px";
    } else {
        correctIncorrectEl.textContent = "Correct!";
        correctIncorrectEl.style.color = "#42f042";
        correctIncorrectEl.style.fontSize = "32px";
    }

    // display correct or incorrect
    correctIncorrectEl.setAttribute("class", "correctIncorrect");
    setTimeout(function() {
    correctIncorrectEl.setAttribute("class", "correctIncorrect hidden");
    }, 1000);

    // go to next question
    currentQuestionIndex++;

    if (currentQuestionIndex === questions.length) {
    endQuiz();
    } else {
    viewQuestions();
    }
};

// end of quiz
function endQuiz(){
    // stop timer
    clearInterval(timeInterval)
    // if there's time left that becomes the score
    if (timeLeft > 1) {
        scoreEl.textContent = timeLeft
    // if there's no time left they get a score of 0
    } else {
        scoreEl.textContent = 0
    }
    questionsAnwersEl.setAttribute("class","hidden");
    endQuizEl.removeAttribute("class", "hidden");
    submitButton.addEventListener("click", saveScores)

    
};

// save scores to localStoarge
function saveScores() {

}

// event listener for highscores element
highscoreButton.addEventListener("click", highscoresPage)

function highscoresPage () {
    var startEl = document.getElementById("start-home");
    // hide start, questions and end pages
    startEl.setAttribute("class","hidden");
    endQuizEl.setAttribute("class","hidden");
    questionsAnwersEl.setAttribute("class","hidden")
    //display highscores page
    highscoresPageEl.removeAttribute("class", "hidden");
    // pull from localStorage


    // homepage return button
    var homeButton = document.querySelector(".home")
    homeButton.addEventListener("click",home)
};

function home() {
    highscoresPageEl.setAttribute("class","hidden")
    // ^hide highscore and display homepage
    var startEl = document.getElementById("start-home");
    startEl.removeAttribute("class","hidden");

}

