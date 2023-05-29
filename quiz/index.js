const form = document.querySelector(".quiz-form");
const correctAnswers = ["D", "B", "C", "B", "D"];
const result = document.querySelector(".result");

form.addEventListener("submit", event => {
    event.preventDefault();
    
    let score = 0;
    const userAnswers = [form.q1.value, form.q2.value, form.q3.value, form.q4.value, form.q5.value]
    
    console.log(userAnswers);

    userAnswers.forEach((answer, index) => {
        if (answer === correctAnswers[index]) {
            score += 1;
            form.children[index].classList.add("correct");
        }
        else {
            form.children[index].classList.add("wrong");
        }
    })

    scrollTo(0, 0);
    result.classList.remove("hide");
    result.firstElementChild.textContent = `You scored ${score}/5!`;

})