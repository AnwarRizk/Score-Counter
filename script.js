let timerInterval;
let remainingTime = localStorage.getItem('remainingTime') ? parseInt(localStorage.getItem('remainingTime'), 10) : 6 * 60;
const timerElement = document.getElementById('timer');

document.addEventListener("DOMContentLoaded", function() {
    // Load saved scores
    document.getElementById('p1').textContent = localStorage.getItem('p1') || 0;
    document.getElementById('p2').textContent = localStorage.getItem('p2') || 0;
    document.getElementById('p3').textContent = localStorage.getItem('p3') || 0;
    
    // Initialize timer display
    updateTimerDisplay();
});

function incrementNumber(elementId) {
    let element = document.getElementById(elementId);
    let currentNumber = parseInt(element.textContent, 10);
    currentNumber += 1;
    element.textContent = currentNumber;
    localStorage.setItem(elementId, currentNumber);
}

function decrementNumber(elementId) {
    let element = document.getElementById(elementId);
    let currentNumber = parseInt(element.textContent, 10);
    currentNumber -= 1;
    element.textContent = currentNumber;
    localStorage.setItem(elementId, currentNumber);
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
    localStorage.setItem('remainingTime', remainingTime);
    updateTimerDisplay();
}

function updateTimer() {
    if (remainingTime <= 0) {
        clearInterval(timerInterval);
        return;
    }
    remainingTime -= 1;
    localStorage.setItem('remainingTime', remainingTime);
    updateTimerDisplay();
}

function updateTimerDisplay() {
    const minutes = Math.floor(remainingTime / 60);
    const seconds = remainingTime % 60;
    timerElement.textContent = `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
}

function confirmResetScores() {
    if (confirm("Are you sure you want to reset the scores?")) {
        resetScores();
    }
}

function resetScores() {
    document.getElementById('p1').textContent = 0;
    document.getElementById('p2').textContent = 0;
    document.getElementById('p3').textContent = 0;
    localStorage.setItem('p1', 0);
    localStorage.setItem('p2', 0);
    localStorage.setItem('p3', 0);
}
