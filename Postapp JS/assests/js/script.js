var timer;
var isRunning = false;
var seconds = 0;
var minutes = 0;
var hours = 0;

function startStop() {
    if (isRunning) {
        clearInterval(timer);
        document.getElementById("startStop").textContent = "Start";
    } else {
        timer = setInterval(updateDisplay, 1000);
        document.getElementById("startStop").textContent = "Stop";
    }
    isRunning = !isRunning;
}

function reset() {
    clearInterval(timer);
    isRunning = false;
    seconds = 0;
    minutes = 0;
    hours = 0;
    updateDisplay();
    document.getElementById("startStop").textContent = "Start";
}

function updateDisplay() {
    seconds++;
    if (seconds === 60) {
        seconds = 0;
        minutes++;
        if (minutes === 60) {
            minutes = 0;
            hours++;
        }
    }

    const display = document.getElementById("display");
    display.textContent =
        (hours < 10 ? "0" : "") + hours + ":" +
        (minutes < 10 ? "0" : "") + minutes + ":" +
        (seconds < 10 ? "0" : "") + seconds;
}

reset(); // Initialize the display



let countdown;
let countdownInterval;

function startCountdown() {
    const input = document.getElementById("countdownInput").value;
    const parts = input.split(":");
    if (parts.length !== 3) {
        alert("Invalid input. Please use the format hh:mm:ss");
        return;
    }

    const [hours, minutes, seconds] = parts.map(Number);
    if (isNaN(hours) || isNaN(minutes) || isNaN(seconds)) {
        alert("Invalid input. Please use the format hh:mm:ss");
        return;
    }

    const totalTime = hours * 3600 + minutes * 60 + seconds;
    if (totalTime <= 0) {
        alert("Please enter a valid time greater than 0");
        return;
    }

    if (countdownInterval) {
        clearInterval(countdownInterval);
    }

    countdown = totalTime;
    updateCountdownDisplay();

    countdownInterval = setInterval(() => {
        countdown--;
        if (countdown <= 0) {
            clearInterval(countdownInterval);
        }
        updateCountdownDisplay();
    }, 1000);
}

function resetCountdown() {
    if (countdownInterval) {
        clearInterval(countdownInterval);
    }
    countdown = 0;
    document.getElementById("countdownInput").value = "";
    updateCountdownDisplay();
}

function updateCountdownDisplay() {
    const hours = Math.floor(countdown / 3600).toString().padStart(2, "0");
    const minutes = Math.floor((countdown % 3600) / 60).toString().padStart(2, "0");
    const seconds = (countdown % 60).toString().padStart(2, "0");
    document.getElementById("display").textContent = `${hours}:${minutes}:${seconds}`;
}


