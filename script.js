let timerInterval;
let remainingTime = 6 * 60; // 6 minutes in seconds
const timerElement = document.getElementById('timer');

function incrementNumber(elementId) {
    let element = document.getElementById(elementId);
    let currentNumber = parseInt(element.textContent, 10);
    currentNumber += 1;
    element.textContent = currentNumber;
}

function decrementNumber(elementId) {
    let element = document.getElementById(elementId);
    let currentNumber = parseInt(element.textContent, 10);
    currentNumber -= 1;
    element.textContent = currentNumber;
}

function startTimer() {
    if (timerInterval) {
        clearInterval(timerInterval);
    }
    timerInterval = setInterval(updateTimer, 1000);
}

function pauseTimer() {
    if (timerInterval) {
        clearInterval(timerInterval);
    }
}

function confirmResetTimer() {
    if (confirm("Are you sure you want to reset the timer?")) {
        resetTimer();
    }
}

function resetTimer() {
    if (timerInterval) {
        clearInterval(timerInterval);
    }
    remainingTime = 6 * 60; // Reset to 6 minutes
    updateTimerDisplay();
}

function updateTimer() {
    if (remainingTime <= 0) {
        clearInterval(timerInterval);
        return;
    }
    remainingTime -= 1;
    updateTimerDisplay();
}

function updateTimerDisplay() {
    const minutes = Math.floor(remainingTime / 60);
    const seconds = remainingTime % 60;
    timerElement.textContent = `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
}

// Initialize timer display
updateTimerDisplay();

function confirmResetScores() {
    if (confirm("Are you sure you want to reset the scores?")) {
        resetScores();
    }
}

function resetScores() {
    document.getElementById('p1').textContent = 0;
    document.getElementById('p2').textContent = 0;
    document.getElementById('p3').textContent = 0;
}
