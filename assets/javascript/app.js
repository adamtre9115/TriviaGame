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
var correct; // amount of correct responses
var incorrect; // amount of incorrect responses

$(document).ready(function () {
    var countDown = setInterval(function () {
        qTimer()
    }, 1000);

    function qTimer() {
        time--;
        $(".here").html("<p>There are " + time + " seconds remaining</p>");
    }

})