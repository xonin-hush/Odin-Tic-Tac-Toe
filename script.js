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
checkWin(gameBoard().array)