// Alterando estilos
// ClassList
element.classList.add('active')
element.classList.remove('active')

const title = document.querySelector('.title')
title.addEventListener('click', move)

title.style.cursor = 'pointer'

function move() {
  title.style.color = 'blue'
}
