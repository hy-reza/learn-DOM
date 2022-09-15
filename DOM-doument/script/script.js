// Finding HTML Elements
const byID = document.getElementById('demo')
const byClass = document.getElementsByClassName("demo")
const byName = document.getElementsByTagName("div")
const byQuery = document.querySelector(".demo")
const byQueryAll = document.querySelectorAll("div")

console.info({byID, byClass, byName, byQuery, byQueryAll})

// Changing HTML Elements
byID.align = "center"
byID.style.background = "lightblue"
byID.style.height = "100px"
byQueryAll.forEach(e => e.setAttribute("style", "background:lightblue; height:100px; margin:5px"))

// Adding and Deleting Elements
const newElement = document.createElement("div")
byID.appendChild(newElement).setAttribute("style", "background:lightgreen; height:100px; margin:15px")
byID.children[0].setAttribute("id", "child")
// byID.removeChild(document.getElementById('child'))

// Adding Events Handlers
const button = document.createElement("button")
document.querySelector('#child').appendChild(button).setAttribute('id', 'btn-child')
document.querySelector('#btn-child').setAttribute('type', 'button')
document.querySelector('#btn-child').innerHTML = 'click'
document.querySelector('#btn-child').onclick = () => {
  alert('clicked')
}
