
function blinkEyes() {
    const eyes = document.querySelectorAll('.eye')
    eyes.forEach(eye => {
        eye.classList.add('blink')
    })

    setTimeout(() => eyes.forEach(eye => eye.classList.remove('blink')), 1800)
}

async function loadBear() {
    const bear = await fetch('../images/bear.svg').then(response => response.text())
    
    const bearContainer = document.createElement('div')
    bearContainer.className = 'bear-container'
    bearContainer.innerHTML = bear

    document.querySelector('#bear_layer').appendChild(bearContainer)

    const createRandomNumber = () => Math.floor(Math.random() * 100) % 2

    setInterval(function randomBearRelatedEvents() {
        const shouldBlinkEyes = createRandomNumber() % 5 
        const shouldWiggleEars = createRandomNumber() % 7 
        const shouldShakeTail = createRandomNumber() % 11

        if (shouldBlinkEyes) {
            console.log("should blink eyes")
            blinkEyes()
        }
    }, 1000);
}

loadBear()