const sqs = document.querySelectorAll('.square')
const mole = document.querySelector('.mole')
const time_left = document.querySelector('#time-left')
const score = document.querySelector('#score')

let result = 0
let hitposition
let currentTime = 10
let timeId = null
let countDownTimeId = null
score.textContent = 0 + ' points'

function randomSquare() {
    sqs.forEach(square => {
        square.classList.remove('mole')
        
    })


    let randomSquare = sqs[Math.floor(Math.random() * 9)]
    //console.log(randomPosition)
    randomSquare.classList.add('mole')
    hitposition = randomSquare.id
    

    let totalCount = 12;
    let num = Math.floor(Math.random() * totalCount);
    //style = mole.currentStyle || window.getComputedStyle(mole, false)
    let rand_image = 'url(./picsForGame/200-200_' + num + '.jpg)';
    document.getElementsByClassName("mole")[0].style.backgroundImage = rand_image
}

sqs.forEach(square => {
    square.addEventListener('mousedown', () => {
        if (square.id == hitposition) {
            result++
            console.log(result)
            score.textContent = result + ' points'
            hitposition = null
        }
    })
})

function moveMole() {
    currentTime = 60
    timeId = setInterval(randomSquare, 800)
    countDownTimeId = setInterval(countDown, 1000)
}

function countDown() {
    currentTime--
    time_left.textContent = currentTime + ' s'

    if (currentTime == 0) {
        clearInterval(countDownTimeId)
        clearInterval(timeId)
        alert('Your Score ' + result)
        result = 0
        score.textContent = result + ' points'
    }
}
