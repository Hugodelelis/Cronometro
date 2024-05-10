let sec = 0
let min = 0
let hour = 0
let interval
let time = document.querySelector('#time')

function twoDigits(digit) {
    return digit < 10 ? '0' + digit : digit
}

function start() {
    interval = setInterval(counter, 1000)
    time.style.color = 'black'
}

function pause() {
    clearInterval(interval)
    time.style.color = 'red'
}

function stop() {
    clearInterval(interval)
    sec = 0
    min = 0
    hour = 0
    time.innerHTML = `00:00:00`
    time.style.color = 'black'
}

function counter () {
    sec++
    if (sec === 60) {
        min++
        sec = 0
    }

    if (min == 60) {
        hour++
        min = 0
    }
    return time.innerHTML = `${twoDigits(hour)}:${twoDigits(min)}:${twoDigits(sec)}`
}