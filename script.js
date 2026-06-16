const button = document.getElementById("darkModeBtn");

button.addEventListener("click", function () {

    document.body.classList.toggle("dark-mode");

});
const topBtn = document.getElementById("topBtn");

topBtn.addEventListener("click", function () {

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

});
const quizBtn = document.getElementById("quizBtn");
const quizResult = document.getElementById("quizResult");

quizBtn.addEventListener("click", function () {

    quizResult.textContent =
        "Correct! Responsible AI is very important.";

});
