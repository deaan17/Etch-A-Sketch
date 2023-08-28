let color = "black"
let click = false ;
createBoard(16)


let btn_popup = document.querySelector('#popup');
btn_popup.addEventListener("click", function () {
  let size = getSize()
  createBoard(size)
})

function createBoard(size) {
  let container = document.querySelector(".container")

  container.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
  container.style.gridTemplateRows = `repeat(${size}, 1fr)`;

  let divs = size * size;
  for (let i = 0; i < divs; i++) {
    let div = document.createElement("div");
    div.addEventListener("mouseover", colorDiv)
    container.insertAdjacentElement("beforeend", div)
  }
}
function getSize() {
  let input = prompt("Enter the Size of the SketchPad");
  let message = document.querySelector("#message");
  if (input == "") {
    message.textContent = "Enter A Size"
  } else if (input < 0 || input > 100) {
    message.textContent = "Input only a number between 1 and 100"
  } else {
    message.textContent = "You can now Start Sketching!"
    return input;
  }
}
function colorDiv() {
  
  if (color == "random") {
    this.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`
  } else {
    this.style.backgroundColor = 'black'
  }
}


function setColor(colorChoice) {
  color = colorChoice;
}

function reset(){
  let allDivs = document.querySelectorAll("div")
  allDivs.forEach((div) => div.style.backgroundColor = "white")

  }



