const openNav = document.getElementById("botaoOpen")
const myNav = document.getElementById("myNav")

openNav.addEventListener('click', () => {
    myNav.style.width = "100%"
 })
 
 myNav.addEventListener('click', () => {
     myNav.style.width = "0"
 })