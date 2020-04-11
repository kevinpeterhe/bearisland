let direction = 1;
const createRandomNumber = () => Math.floor(Math.random() * 100)

function blinkEyes() {
    const eyes = document.querySelectorAll('.eye')
    eyes.forEach(eye => {
        eye.classList.add('blink')
    })

    setTimeout(() => eyes.forEach(eye => eye.classList.remove('blink')), 1800)
}

function walkSteps() {
    const X = createRandomNumber() * direction
    const Y = createRandomNumber() 
    const bear = document.querySelector('#bear')
    bear.style.transform = `translateX(${X}%) ${direction > 0 ? '' : 'scaleX(-1)'}`

    const legs = document.querySelectorAll('.leg')
    legs.forEach(leg => {
        leg.classList.add('walking')
    })
    setTimeout(() => legs.forEach(leg => leg.classList.remove('walking')), 2000)

    direction = direction * -1
}

async function loadBear() {
    const bear = await fetch('../images/bear.svg').then(response => response.text())
    
    const bearContainer = document.createElement('div')
    bearContainer.className = 'bear-container'
    bearContainer.innerHTML = bear

    document.querySelector('#bear_layer').appendChild(bearContainer)

    setInterval(function randomBearRelatedEvents() {
        const shouldWalk = !(createRandomNumber() % 3);
        const shouldBlinkEyes = createRandomNumber() % 13 
        // const shouldWiggleEars = createRandomNumber() % 7 
        // const shouldShakeTail = createRandomNumber() % 11

        shouldBlinkEyes && blinkEyes()
        shouldWalk && walkSteps();
    }, 1000);
}

loadBear()