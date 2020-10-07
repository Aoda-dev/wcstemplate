function createBubble() {
  const bubble = document.createElement('div')

  bubble.classList.add('bubble')  
  document.body.appendChild(bubble)

  return bubble
}