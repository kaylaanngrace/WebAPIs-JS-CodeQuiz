var startButton = document.querySelector("#startBtn")
var timerEl = document.querySelector("#timer")

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

var currentQuestion = 0;
var time = questions.lenght * 9;
var timerId;

function countdown(){

};

startButton.addEventListener('click', startQuiz)
function startQuiz(){
    var startEl = document.getElementById("start-home");
    startEl.setAttribute("class","hidden");
    
};

function viewQuestions(){

};

function selectAnswer(){

};


function saveScores() {

}
