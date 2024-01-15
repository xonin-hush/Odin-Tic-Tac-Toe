const showButton = document.querySelector("#show-button")
const dialog = document.querySelector("dialog")
dialog.showModal()


function createUser(player1, player2) {
  return { player1, player2 };
}
console.log(createUser("ahmed", "xonin"))
function gameBoard() {
  const array = [["o", "o", "o"], ["o", "o", "o"], ["o", "o", "o"]]
  return { array }
}

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
    var player1 = document.querySelector("#player-1")
    player1 = player1.value
    var player2 = document.querySelector("#player-2")
    player2 = player2.value
    console.log({player1,player2})
    dialog.close(dialog.value); // Have to send the select box value here.
  });
}

const container = document.querySelector('#container');
container.classList.add('grid-container')
const sizeButton = document.querySelector('#change-size')
createGrid(3)

function createGrid(itemNum) {
  container.style.gridTemplateColumns = `repeat(${itemNum},1fr)`;
  container.style.gridTemplateRows = `repeat(${itemNum},1fr)`;
  const cellSize = 40 / itemNum + "rem"
  for (let i = 0; i < (itemNum * itemNum); i++) {
    const gridItem = document.createElement('div')
    gridItem.setAttribute("id", "grid-item")
    gridItem.classList.add('color-dark-blue')
    gridItem.style.width = cellSize
    gridItem.style.height = cellSize
    container.appendChild(gridItem)
    colorMode(gridItem)

  }
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

