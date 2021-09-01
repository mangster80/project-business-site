// A function that adds and remove the class "active" on the section you click on.
// We haven't really talked about ´this´ yet, but we will... ;)
// console.log(this) to see how it works

const d = new Date();
document.getElementById('year').innerHTML = d.getFullYear();

function toggle() {
  this.classList.toggle('active');
}

// Selects an HTML element, and calls a function which will be executed when the element is clicked.
document.getElementById('section1').onclick = toggle;

const date = new Date();
console.log(date);
document.getElementById('year').innerHTML = date.getFullYear();
