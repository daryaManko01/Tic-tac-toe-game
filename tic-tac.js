let main_button = document.querySelector('#main_button');
let block_one = document.getElementById('block_one');
let size_game = document.querySelector('#size_game');
const table = document.getElementById("table");
main_button.addEventListener('click', sizeTable);

function sizeTable() {

    block_one.classList.add('hidden');
    size_game.classList.remove('hidden');
};


let gameView = document.getElementById('gameView');
let buttonGameSize = document.getElementById('size_3');

buttonGameSize.addEventListener('click', gameStart);


let arr = []; //displays the current field state

function gameStart(count) {
    table.innerHTML = ""
    for (let x = 0; x < count; x++) {

        arr[x] = [];

        var tr = document.createElement('tr')
        for (let i = 0; i < count; i++) {

            arr[x].push('')

            var td = document.createElement('td');
            td.addEventListener('click', addElement); //field handler

            tr.appendChild(td);
        }

        table.appendChild(tr);
    }
    gameView.classList.remove('hidden');
    size_game.classList.add('hidden');
    gameFinish = false;
    isCross = true;
}

//create a function to find a free cell
//get all empty cells

function computerMove() {

    if (gameFinish) return;

    let freeCells = [];

    for (let row = 0; row < arr.length; row++) {
        for (let col = 0; col < arr.length; col++) {

            if (arr[row][col] === '') {
                freeCells.push({ row, col });
            }
        }
    }

    if (freeCells.length === 0) return;

    //random free cell
    let randomIndex = Math.floor(Math.random() * freeCells.length);
    let cell = freeCells[randomIndex];

    //update the array
    arr[cell.row][cell.col] = '0';

    //update the table
    table.rows[cell.row].cells[cell.col].classList.add('nullCell');

    isCross = true;

    winGame();
}


//functions for a 3x3 game size

let buttonGameSize3 = document.getElementById('size_3');
buttonGameSize3.addEventListener('click', gameStart3);

function gameStart3() {
    gameStart(3)
}


//functions for a 4x4 game size

let buttonGameSize4 = document.getElementById('size_4');
buttonGameSize4.addEventListener('click', gameStart4);

function gameStart4() {
    gameStart(4)
}

//functions for a 5x5 game size

let buttonGameSize5 = document.getElementById('size_5');
buttonGameSize5.addEventListener('click', gameStart5);

function gameStart5() {
    gameStart(5)
}

//functions for a 6x6 game size

let buttonGameSize6 = document.getElementById('size_6');
buttonGameSize6.addEventListener('click', gameStart6);

function gameStart6() {
    gameStart(6)
}

//functions for a 7x7 game size

let buttonGameSize7 = document.getElementById('size_7');
buttonGameSize7.addEventListener('click', gameStart7);

function gameStart7() {
    gameStart(7)
}


let button_cross = document.getElementById('button_cross');
button_cross.addEventListener('click', closePage);

function closePage() {

    block_one.classList.remove('hidden');
    gameView.classList.add('hidden');
}

//The tic tac toe function 

let isCross = true; //determines whether the next piece is an X
let checbox = document.getElementById('checkbox');

function addElement() {

    if (this.classList.contains('cross') || this.classList.contains('nullCell') || gameFinish) {
        return
    }
    else {

        const rowIndex = this.parentElement.rowIndex; //row index
        const colIndex = this.cellIndex;

        if (isCross) {

            this.classList.add('cross');
            arr[rowIndex][colIndex] = '+';
            isCross = false;

        } else {
            this.classList.add('nullCell');
            arr[rowIndex][colIndex] = '0';
            isCross = true;
        }
    }
    winGame()

    if (!checbox.checked) {
        computerMove()
    }
}

let gameFinish = false;
let modal = document.getElementById('modal');
let modalTwo = document.getElementById('modal_two');

let endWindowGame = document.getElementById("endWindowGame");
let endWindowGameTwo = document.getElementById('endWindowGame_two');

endWindowGameTwo.addEventListener("click", closeModalTwo);
endWindowGame.addEventListener("click", closeModal);

function closeModal() {
    modal.classList.remove("is-open");
    closePage()
}

function closeModalTwo() {
    modalTwo.classList.remove("is-open");
    closePage()
}



function winGame() { //checks whether the participant has won

    //left diagonal
    let allEqual = true;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i][i] !== arr[0][0])
            allEqual = false;
    }

    if (allEqual && arr[0][0] !== '') {

        if (!isCross) {
            modal.classList.add("is-open");
        } else {
            modalTwo.classList.add("is-open");
        }
        gameFinish = true;
        return
    }

    allEqual = true;
    for (let i = arr.length - 1; i >= 0; i--) {
        if (arr[arr.length - 1 - i][i] !== arr[0][arr.length - 1])
            allEqual = false;
    }

    if (allEqual && arr[0][arr.length - 1] !== '') {

        if (!isCross) {
            modal.classList.add("is-open");
        } else {
            modalTwo.classList.add("is-open");
        }
        gameFinish = true;
        return;
    }


    //check for equality across columns
    for (let sellIndex = 0; sellIndex < arr.length; sellIndex++) { //we iterate through the columns

        let allEqual = true;

        for (let rowIndex = 0; rowIndex < arr.length; rowIndex++) { //iterating through the lines

            if (arr[rowIndex][sellIndex] !== arr[0][sellIndex]) //we compare each element of the row with the first element in that column
            {
                allEqual = false;
            }
        }
        if (allEqual && arr[0][sellIndex] !== '') {

            if (!isCross) {
                modal.classList.add("is-open");
            } else {
                modalTwo.classList.add("is-open");
            }
            gameFinish = true;
            return
        }
    }


    let elemTry = true;
    for (let row of arr) { //loop through timeframes

        const allEqual = row.every(val => val === row[0]); //all elements are equal to the string

        if (allEqual && row[0] !== '') {

            if (!isCross) {
                modal.classList.add("is-open");
            } else {
                modalTwo.classList.add("is-open");
            }
            gameFinish = true;
            return
        }
    }
}

