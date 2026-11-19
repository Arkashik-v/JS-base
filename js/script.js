let title_1 = document.getElementById("title-menu")
console.log(title_1)

const h1 = document.querySelector("h1")
console.log(h1)

const links = document.querySelector("a")
console.log(links)

console.log(h1.textContent)
console.log(h1.innerHTML)
console.log(h1.innerText)
console.log(h1.outerHTML)
console.log(h1.outerText)

h1.innerHTML = 'Новый заголовок <img src="img/emoji1l.svg" alt="">'

title1.classList.add("large")
title1.classList.add("red")

//console.log(title1.classList.)
let menu = document.querySelector(".menu")
menu.style.background = "cyan"
menu.style.borderBottom = "2 px solid blue"

const line = document.querySelector("hr")
line.width = "50%"
line.removeAttribute("color")

const block = document.getElementById("block")
