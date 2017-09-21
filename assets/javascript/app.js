// quiz questions
var questions = [{
        question: "Who was Naruto's teacher at the academy?",
        answers: {
            a: "Kakashi",
            b: "Jiraiya ",
            c: "Iruka",
            d: "Sarutobi"
        },
        correctAnswer: "c"
    },
    {
        question: "What village is Naruto from?",
        answers: {
            a: "Sunagakure",
            b: "Konohagakure",
            c: "Amegakure",
            d: "Yukigakure"
        },
        correctAnswer: "b"
    },
    {
        question: "Who is defeated to end the fourth great ninja war?",
        answers: {
            a: "Kaguya",
            b: "Pain",
            c: "Sasuke",
            d: "Momoshiki"
        },
        correctAnswer: "a"
    },
    {
        question: "Who is the second hokage of Konoha?",
        answers: {
            a: "Tobirama Senju",
            b: "Hiruzen Sarutobi",
            c: "Hashirama Senju",
            d: "Minato Namikaze"
        },
        correctAnswer: "a"
    },
    {
        question: "What village is Gaara from?",
        answers: {
            a: "The Hidden Rain Village",
            b: "The Hidden Leaf Village",
            c: "The Hidden Stone Village",
            d: "The Hidden Sand Village"
        },
        correctAnswer: "d"
    },
]
var time = 5; //time allowed for each question
var correct; // amount of correct responses
var incorrect; // amount of incorrect responses
var countDown;
var questionNum = 0;
var answers = [];

$(document).ready(function () {

    $("#gamebtn").on("click", function(){
        $("#gamebtn").remove();
        $("#game").removeClass("text-center");
        $("#game").addClass("gameBg");
        countDown = setInterval(qTimer, 1000);
      
        
        // renderQuestion();
        // qChange();
    })
    function qTimer() {
        time--;
        $("#timeDisplay").html("<p>There are " + time + " seconds remaining</p>");
        renderQuestion();
        if (time === 0) {
            console.log("entered");
            clearInterval(countDown);
            
        }
    }
    
    // function qChange() {
    //     var questionOutput = [];
    //     questions.forEach(function (currentQuestion, questionNumber) {
    //         var answers = [];
    //         for (letter in currentQuestion.answers) {
    //             answers.push(
    //                 `<label class="form-check-label">
    //                 <input type="radio" class="form-check-input" name="question${questionNumber}" value="${letter}">
    //                 ${letter} :
    //                 ${currentQuestion.answers[letter]}
    //               </label>`
    //             );
    //         }
    //         // add this question and its answers to the output
    //         questionOutput.push(
    //             `<div class="question"> ${currentQuestion.question} </div>
    //             <div class="answers"> ${answers.join('')} </div>`
    //         );
    //         //   console.log(questionOutput);
    //     })
    //     $("#quiz").html(questionOutput);
    // }
    // qChange();
    function renderQuestion (){
        
        $("#quiz").html(questions[questionNum].question);

        if (time === 0){
            questionNum++;
            $("#quiz").empty();
            $("#quiz").html(questions[questionNum].question);
            time = 5;
            qTimer();
            
        } else if (questionNum === questions.length && timer === 0){
            clearInterval(countDown);
        }
    }
    
 
    
    
})