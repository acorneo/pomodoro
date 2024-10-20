const time = document.querySelector('#time')
let timeValue = 1500
let isWorking = false

function updateTimer() {
    timeValue--
    const minutes = Math.floor(timeValue/60)
    const seconds = timeValue % 60
    const formattedMinutes = String(minutes).padStart(2, '0')
    const formattedSeconds = String(seconds).padStart(2, '0')
    time.innerText = `${formattedMinutes}:${formattedSeconds}`
    
    if (timeValue === 0) {
        clearInterval(timer1)
        isWorking = false
    }
}

let timer1

function startTimer() {
    if (!isWorking) {
        isWorking = true
        timer1 = setInterval(updateTimer, 1000); 
    }
}

function reset() {
    isWorking = false
    clearInterval(timer1)
    timeValue = 1500
}