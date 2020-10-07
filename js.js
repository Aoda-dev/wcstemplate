function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}




const bubble = createBubble()
const bubble2 = createBubble()
const bubble3 = createBubble()
const bubble4 = createBubble()

let velY = 700
let velX = getRandomInt(500, 800)
let velX2 = getRandomInt(100, 300)
let velX3 = getRandomInt(500, 700)
let velX4 = getRandomInt(700, 1000)



function initAnimation() {
  
  velY -= 2


  if (velY === 100) {
    bubble.style.opacity = '0'
    bubble2.style.opacity = '0'
    bubble3.style.opacity = '0'
    bubble4.style.opacity = '0'
    
    setTimeout(() => {
      velY = 700
      velX = Math.floor(Math.random() * (1 - 1100)) + 1100
      bubble.style.opacity = '1'
      bubble2.style.opacity = '1'
      bubble3.style.opacity = '1'
      bubble4.style.opacity = '1'
    }, 1000)
  }
  

  bubble.style.left = velX + 'px'
  bubble2.style.left = velX2 + 'px'
  bubble3.style.left = velX3 + 'px'
  bubble4.style.left = velX4 + 'px'

  bubble.style.transform = `translateY(${velY}px)`
  bubble2.style.transform = `translateY(${velY + 100}px)`
  bubble3.style.transform = `translateY(${velY + 200}px)`
  bubble4.style.transform = `translateY(${velY + 300}px)`


  requestAnimationFrame(initAnimation)
}

window.onload = initAnimation


