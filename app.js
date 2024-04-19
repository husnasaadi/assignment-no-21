var counterValue = 0;
var counterElement = document.getElementById("counter");

function updateCounter() {
    counterElement.textContent = counterValue;
}

function increaseCounter() {
    counterValue++;
    updateCounter();
}

function decreaseCounter() {
    counterValue--;
    updateCounter();
}

updateCounter()