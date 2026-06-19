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

function gameStart(count) {
    table.innerHTML = ""
    for (let x = 0; x < count; x++) {
        var tr = document.createElement('tr')
        for (let i = 0; i < count; i++) {
            var td = document.createElement('td');
            td.addEventListener('click', addElement);

            tr.appendChild(td);
        }
        table.appendChild(tr);
    }

    gameView.classList.remove('hidden');
    size_game.classList.add('hidden');
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

let isCross = true;

function addElement() {

    if (this.classList.contains('cross') || this.classList.contains('nullCell')) {
        return
    }
    else {

        if (isCross) {
            this.classList.add('cross');
            isCross = false;

        } else {
            this.classList.add('nullCell');
            isCross = true;
        }
    }

}
