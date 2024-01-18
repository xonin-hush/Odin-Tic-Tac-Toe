let player1 = ""
let player2 = ""
var player = ""
const showButton = document.querySelector("#show-button")
const dialog = document.querySelector("dialog")
const sizeButton = document.querySelector('#change-size')
container.classList.add('grid-container')
player1 = document.createElement('label')
player2 = document.createElement('label')
dialog.showModal()
createGrid(3)
handleTurns()
handlePlayerName()
const array = [["0", "1", "2"], ["3", "4", "5"], ["6", "7", "8"]]

function gameBoard(value, XO) {
  switch (value) {
    case 0:
      array[0][0] = XO

      checkWin(array)
      break
    case 1:
      array[0][1] = XO

      checkWin(array)
      break
    case 2:
      array[0][2] = XO

      checkWin(array)
      break
    case 3:
      array[1][0] = XO

      checkWin(array)
      break
    case 4:
      array[1][1] = XO

      checkWin(array)
      break
    case 5:
      array[1][2] = XO

      checkWin(array)
      break
    case 6:
      array[2][0] = XO

      checkWin(array)
      break
    case 7:
      array[2][1] = XO

      checkWin(array)
      break
    case 8:
      array[2][2] = XO

      checkWin(array)
      break
  }
}

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

function checkWin(array) {
  if (array[0][0] == "x" && array[1][1] == "x" && array[2][2] == "x") {



  }
  else if (array[0][0] == "x" && array[1][0] == "x" && array[2][0] == "x") {



  }
  else if (array[0][2] == "x" && array[1][2] == "x" && array[2][2] == "x") {



  }
  else if (array[0][0] == "x" && array[0][1] == "x" && array[0][2] == "x") {



  }
  else if (array[2][0] == "x" && array[2][1] == "x" && array[2][2] == "x") {



  }
  else if (array[0][0] == "o" && array[1][1] == "o" && array[2][2] == "o") {



  }
  else if (array[0][0] == "o" && array[1][0] == "o" && array[2][0] == "o") {



  }
  else if (array[0][2] == "o" && array[1][2] == "o" && array[2][2] == "o") {



  }
  else if (array[0][0] == "o" && array[0][1] == "o" && array[0][2] == "o") {



  }
  else if (array[2][0] == "o" && array[2][1] == "o" && array[2][2] == "o") {


  }

}

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

function handleTurns() {
  var person1 = "person1"
  var person2 = "person2"
  var person = ""
  person = person1
  container.addEventListener('click', function (e) {
    if (person == person1) {
      gameBoard(e.target.value, "x")
      console.log("player1 is playing")
      e.target.innerHTML = '<span>X</span>';
      person = person2
      return "X"
    }
    else if (person == person2) {
      console.log("player2 is playing")
      gameBoard(e.target.value, "o")
      e.target.innerHTML = '<span>O</span>';
      person = person1
      return "O"
    }

  });
}
