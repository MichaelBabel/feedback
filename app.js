let oneEl = document.getElementById("one"),
twoEl = document.getElementById("two"),
threeEl = document.getElementById("three"),
fourEl = document.getElementById("four"),
fiveEl = document.getElementById("five"),
sixEl = document.getElementById("six"),
sevenEl = document.getElementById("seven"),
eightEl = document.getElementById("eight"),
nineEl = document.getElementById("nine"),
tenEl = document.getElementById("ten"),
feedbackEl = document.getElementById("feedback"),
btnEl = document.getElementById("send"),
paragraphEl = document.getElementById("feedback-paragraph"),
popup = document.getElementById("popup"),
container = document.getElementById("container"),
closeEl = document.getElementById("close-popup");

let arrayEl = [oneEl, twoEl, threeEl, fourEl, fiveEl, sixEl, sevenEl, eightEl, nineEl, tenEl];

for (let i = 0; i < arrayEl.length; i++) {
    arrayEl[i].addEventListener("click", function(event) {
    feedbackEl.textContent = arrayEl[i].textContent;
    btnEl.disabled = false;
    paragraphEl.style.opacity = 1;
    })
}

btnEl.addEventListener("click", () => {
    openPopup();
})

closeEl.addEventListener("click", () => {
    closePopup();
})

function openPopup() {
    popup.classList.add("open-popup");
    container.style.opacity = 0;
}

function closePopup() {
    popup.classList.remove("open-popup");
}