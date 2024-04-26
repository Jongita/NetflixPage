const plusDOM = document.getElementById("plus")
const answerDOM = document.getElementById("questionAnswer")
const questionDOM = document.getElementById("questionHeader")


answerDOM.style.display = "none";

questionDOM.onclick = () => {
    if (answerDOM.style.display == "none") {
        answerDOM.style.display = "block"
        plusDOM.classList.add("x");
        plusDOM.classList.remove("plus");
    } else {
        answerDOM.style.display = "none";
        plusDOM.classList.add("plus");
        plusDOM.classList.remove("x");
    }

}


