const showButton = document.querySelector("#show-button")
const dialog = document.querySelector("dialog")
dialog.showModal()
const container = document.querySelector('#container');
container.classList.add('grid-container')
const sizeButton = document.querySelector('#change-size')
createGrid(3)
let player1 = ""
player1 = document.createElement('label')
player1.setAttribute('playerOrder', 'player1')
let player2 = ""
player2 = document.createElement('label')
player2.setAttribute('playerOrder', 'player2')
var player = ""
const array = [["0", "1", "2"], ["3", "4", "5"], ["6", "7", "8"]]
function handlePosition(value,XO) {
  switch (value) {
    case 0:
      array[0][0]=XO
      console.log(array)
      // checkWin(array)
      break
      case 1:
        array[0][1]=XO
        console.log(array)
        // checkWin(array)
        break
        case 2:
      array[0][2]=XO
      console.log(array)
      // checkWin(array)
      break
      case 3:
      array[1][0]=XO
      console.log(array)
      // checkWin(array)
      break
      case 4:
      array[1][1]=XO
      console.log(array)
      // checkWin(array)
      break
      case 5:
      array[1][2]=XO
      console.log(array)
      // checkWin(array)
      break
      case 6:
      array[2][0]=XO
      console.log(array)
      // checkWin(array)
      break
      case 7:
      array[2][1]=XO
      console.log(array)
      // checkWin(array)
      break
      case 8:
      array[2][2]=XO  
      console.log(array)
      // checkWin(array)
      break
    default:
    // code block
  }
}
console.log(array[0][1])
console.log(array)
function createGrid(itemNum) {
  container.style.gridTemplateColumns = `repeat(${itemNum},1fr)`;
  container.style.gridTemplateRows = `repeat(${itemNum},1fr)`;
  const cellSize = 30 / itemNum + "rem"
  for (let i = 0; i < (itemNum * itemNum); i++) {
    const gridItem = document.createElement('div')
    gridItem.value = i
    gridItem.setAttribute("id", "grid-item")
    gridItem.classList.add('color-dark-blue')
    gridItem.style.width = cellSize
    gridItem.style.height = cellSize
    container.appendChild(gridItem)
    colorMode(gridItem)
  }
}

function createUser(p1, p2) {
  return { p1, p2 };
}
// gameBoard()
// function gameBoard() {
//   container.addEventListener("click", function (e) {
//     console.log(e.target.value)
//     array.splice(e.target.value, 1,)
//   })
//   return { array }
// }

function checkWin(array) {
  if (array[0][0] == "x" && array[1][1] == "x" && array[2][2] == "x") {
    console.log("winner")
    console.log(array)
    console.log('1')
  }
  else if (array[0][0] == "x" && array[1][0] == "x" && array[2][0] == "x") {
    console.log("winner")
    console.log(array)
    console.log('2')
  }
  else if (array[0][2] == "x" && array[1][2] == "x" && array[2][2] == "x") {
    console.log("winner")
    console.log(array)
    console.log('3')
  }
  else if (array[0][0] == "x" && array[0][1] == "x" && array[0][2] == "x") {
    console.log("winner")
    console.log(array)
    console.log('4')
  }
  else if (array[2][0] == "x" && array[2][1] == "x" && array[2][2] == "x") {
    console.log("winner")
    console.log(array)
    console.log('5')
  }
  else if (array[0][0] == "o" && array[1][1] == "o" && array[2][2] == "o") {
    console.log("winner")
    console.log(array)
    console.log('1')
  }
  else if (array[0][0] == "o" && array[1][0] == "o" && array[2][0] == "o") {
    console.log("winner")
    console.log(array)
    console.log('2')
  }
  else if (array[0][2] == "o" && array[1][2] == "o" && array[2][2] == "o") {
    console.log("winner")
    console.log(array)
    console.log('3')
  }
  else if (array[0][0] == "o" && array[0][1] == "o" && array[0][2] == "o") {
    console.log("winner")
    console.log(array)
    console.log('4')
  }
  else if (array[2][0] == "o" && array[2][1] == "o" && array[2][2] == "o") {
    console.log("winner")
    console.log(array)
    console.log('5')
  }

}
handlePlayerName()
function handlePlayerName() {
  submit.addEventListener("click", (event) => {
    event.preventDefault(); // We don't want to submit this fake form
    player1 = document.querySelector("#player-1")
    player1 = player1.value
    player2 = document.querySelector("#player-2")
    player2 = player2.value
    createUser(player1, player2)
    dialog.close(dialog.value); // Have to send the select box value here
  });
}
function doStuff() {
  console.log(array)

}
setInterval(doStuff, 3000);


function resetGameBoard() {
  gridItems = document.querySelectorAll('#grid-item')
  gridItems.forEach((gridItem) => {
    gridItem.style.removeProperty('background-color')
    gridItem.classList.add('color-dark-blue')
  })
}

function colorMode(gridItem) {
  gridItem.addEventListener('click', () => {
    gridItem.style.removeProperty('background-color');
    gridItem.classList.remove('color-dark-blue')
    gridItem.classList.add('color-sky-blue');

  });

}
handleTurns()
function handleTurns() {
  var person1 = "person1"
  var person2 = "person2"
  var person = ""
  person = person1
  container.addEventListener('click', function (e) {
    if (person == person1) {
      handlePosition(e.target.value,"x")
      console.log("player1 is playing")
      e.target.innerHTML = '<span>X</span>';
      person = person2
      return "X"
    }
    else if (person == person2) {
      console.log("player2 is playing")
      handlePosition(e.target.value,"o")
      e.target.innerHTML = '<span>O</span>';
      person = person1
      return "O"
    }

  });
}
