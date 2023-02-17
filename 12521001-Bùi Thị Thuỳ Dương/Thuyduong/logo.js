const circle = document.getElementById('circle')
var ripple
circle.addEventListener('mouseenter', (e) => {
  ripple = document.createElement('div')
  ripple.classList.add('ripple')
  ripple.style.left = e.clientX - e.target.getBoundingClientRect().left + 'px'
  ripple.style.top = e.clientY - e.target.getBoundingClientRect().top + 'px'
  circle.insertAdjacentElement('afterbegin', ripple)
})
circle.addEventListener('mouseleave', (e) => {
  ripple.remove()
})
