let player1 = ""
let player2 = ""
var player = ""
const showButton = document.querySelector("#show-button")
const dialog = document.querySelector("dialog")
const sizeButton = document.querySelector('#change-size')
const currentStatus1 = document.querySelector('#status1')
const currentStatus2 = document.querySelector('#status1')
const playing1 = document.createElement('div');
const playing2 = document.createElement('div');
container.classList.add('grid-container')
player1 = document.createElement('label')
player2 = document.createElement('label')
displayBar = document.querySelector('#display-bar')
dialog.showModal()
createGrid(3)

handlePlayerName()
const array = [["0", "1", "2"], ["3", "4", "5"], ["6", "7", "8"]]

function gameBoard(value, XO) {
  switch (value) {
    case 0:
      if ((array[0][0] != "x") && (array[0][0] != "o")) {
        array[0][0] = XO
      }
      checkWin(array)
      break
    case 1:
      if ((array[0][1] != "x") && (array[0][1] != "o")) {
        array[0][1] = XO
      }


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
createUser()
function createUser() {
  if (player1 != "") {
    playing2.classList.remove("selected")
    playing1.textContent = `${player1} playing-X`
    playing1.classList.add("selected")
    currentStatus1.appendChild(playing1)
    playing2.textContent = `${player2} playing-O`
    currentStatus2.appendChild(playing2)
  }
}

function checkWin(array) {
  if (array[0][0] == "x" && array[1][1] == "x" && array[2][2] == "x") {
    winner = document.createElement("div")
    winner.textContent = `Yaaay ${player1} Won`
    winner.style.fontSize = "larger"
    winner.style.fontWeight = "bold"
    displayBar.appendChild(winner)


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
    handleTurns(player1, player2)
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

function handleTurns(person1, person2) {

  var person1 = person1
  var person2 = person2
  var person = ""
  person = person1
  container.addEventListener('click', function (e) {
    if ((e.target.textContent != "X") && (e.target.textContent != "O")) {

      if (person == person1) {
        playing2.classList.remove("selected")
        playing1.textContent = `${person1} playing-X`
        playing1.classList.add("selected")
        currentStatus1.appendChild(playing1)
        playing2.textContent = `${person2} playing-O`
        currentStatus2.appendChild(playing2)
        gameBoard(e.target.value, "x")
        e.target.textContent = "X";
        e.target.style.fontSize = "10rem"
        e.target.style.display = "flex"
        e.target.style.justifyContent = "center"
        e.target.style.alignItems = "center"
        person = person2
        //players
      }
    }
    if ((e.target.textContent != "X") && (e.target.textContent != "O")) {
      if (person == person2) {
        playing1.textContent = `${person1} playing-X`
        playing1.classList.remove("selected")
        currentStatus1.appendChild(playing1)
        playing2.textContent = `${person2} playing-O`
        playing2.classList.add("selected")
        currentStatus2.appendChild(playing2)
        gameBoard(e.target.value, "o")
        e.target.textContent = "O";
        e.target.style.fontSize = "10rem"
        e.target.style.display = "flex"
        e.target.style.justifyContent = "center"
        e.target.style.alignItems = "center"
        person = person1
      }
    }
  });

}