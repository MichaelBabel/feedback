let oneEl = document.getElementById("one"),
twoEl = document.getElementById("two"),
threeEl = document.getElementById("three"),
fourEl = document.getElementById("four"),
fiveEl = document.getElementById("five"),
sixEl = document.getElementById("six"),
sevenEl = document.getElementById("seven"),
eightEl = document.getElementById("eight"),
nineEl = document.getElementById("nine"),
tenEl = document.getElementById("ten");
let feedbackEl = document.getElementById("feedback");
let btnEl = document.getElementById("send");
let paragraphEl = document.getElementById("feedback-paragraph");

let arrayEl = [oneEl, twoEl, threeEl, fourEl, fiveEl, sixEl, sevenEl, eightEl, nineEl, tenEl];

for (let i = 0; i < arrayEl.length; i++) {
    arrayEl[i].addEventListener("click", function(event) {
    feedbackEl.textContent = arrayEl[i].textContent;
    btnEl.disabled = false;
    paragraphEl.style.opacity = 1;
});
}