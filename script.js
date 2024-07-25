document.addEventListener("DOMContentLoaded", function() {
    // Load saved scores
    document.getElementById('p1').textContent = localStorage.getItem('p1') || 0;
    document.getElementById('p2').textContent = localStorage.getItem('p2') || 0;
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

function confirmResetScores() {
    if (confirm("Are you sure you want to reset the scores?")) {
        resetScores();
    }
}

function resetScores() {
    document.getElementById('p1').textContent = 0;
    document.getElementById('p2').textContent = 0;
    localStorage.setItem('p1', 0);
    localStorage.setItem('p2', 0);
}
