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
var time = 30; //time allowed for each question
var correct = 0; // amount of correct responses
var incorrect; // amount of incorrect responses
var countDown;
var questionNum = 0;
var answers = [];

$(document).ready(function () {

    $("#gamebtn").on("click", function () {
        $("#gamebtn").remove();
        $("#game").removeClass("text-center");
        countDown = setInterval(qTimer, 1000);
        qdisplay();
    })

    function qTimer() {
        time--;
        // $("#timeDisplay").html("<p>There are " + time + " seconds remaining</p>");

        if (time !== 0) {
            $("#timeDisplay").html("<p>There are " + time + " seconds remaining</p>");
            console.log("going");
        } else {
            $("#timeDisplay").html("<p>Time's Up!</p>");
            console.log("stopped");
            showResults();
            clearInterval(countDown);
        }
    }

    function qdisplay() {
        $("#game").addClass("gameBg");

        var questionOutput = [];
        questions.forEach(function (currentQuestion, questionNumber) {
            var answers = [];
            for (letter in currentQuestion.answers) {
                answers.push(
                    `<label class="form-check-label">
                    <input type="radio" class="form-check-input" name="question${questionNumber}" value="${letter}">
                    ${letter} :
                    ${currentQuestion.answers[letter]}
                  </label><br>`
                );
            }
            // add this question and its answers to the output
            questionOutput.push(
                `<div class="question"> ${currentQuestion.question} </div>
                <div class="answers"> ${answers.join('')} </div>`
            );
            //   console.log(questionOutput);
        })
        $("#quiz").html(questionOutput);
        $("#submit").removeClass("hide");
    }

    function showResults() {
        clearInterval(countDown);
        // gather answer containers from our quiz
        var answerContainers = quiz.querySelectorAll('.answers');

        // for each question...
        questions.forEach(function (currentQuestion, questionNumber) {

            // find selected answer
            var answerContainer = answerContainers[questionNumber];
            var selector = 'input[name=question' + questionNumber + ']:checked';
            var userAnswer = (answerContainer.querySelector(selector) || {}).value;

            // if answer is correct
            if (userAnswer === currentQuestion.correctAnswer) {
                // add to the number of correct answers
                correct++;

            }
            // if answer is wrong or blank
            else {
                incorrect++;
            }
        });

        // show number of correct answers out of total
        $("#quiz").html("You got " + correct + " out of " + questions.length + " correct.");
    }
    $("#submit").on("click", showResults);

})