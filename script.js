let startGame = document.getElementById('startGame');
let start = 0;
let click = 0;
let hashivX = 0;
let hashivO = 0;
startGame.onclick = () => {
    if (start == 0) {
        startGame.innerHTML = 'New Game';
        let player = document.getElementById('player1');
        let turn = document.getElementById('turn');
        turn.innerHTML = `${player.value} it's your turn`;
        turn.style.display = 'flex';
        turn.style.justifyContent = 'center';
        turn.style.alignItems = 'center';
        let hashiv = document.getElementById('hashiv');
        hashiv.style.display = 'flex';

        let tableDisplay = document.getElementById('tableSection');
        tableDisplay.style.display = 'block';
        let playerX = document.getElementById('player1');
        if (playerX.value == '') {
            playerX.value = 'Player-X';
        }
        let playerO = document.getElementById('player2');
        if (playerO.value == '') {
            playerO.value = 'Player-O';
        }
        let table = document.createElement('table');
        table.style.margin = '50px auto';
        for (let i = 0; i < 3; i++) {
            let tr = document.createElement('tr');
            for (let j = 0; j < 3; j++) {
                let td = document.createElement('td');
                td.setAttribute('class', 'td');
                td.style.border = '2px solid black';
                td.style.width = '100px';
                td.style.height = '100px';
                td.style.textAlign = 'center';
                td.style.fontSize = '30px';
                tr.appendChild(td);
                td.onclick = () => {
                    if (td.innerHTML == '') {
                        if (click % 2 == 0) {
                            td.innerHTML = 'X';
                            let player2 = document.getElementById('player2');
                            document.getElementById('turn').innerHTML = `${player2.value} It's your turn `;
                        } else {
                            td.innerHTML = 'O';
                            document.getElementById('turn').innerHTML = `${player.value} It's your turn `;

                        }
                        click++;
                        win();
                    }
                }
                table.appendChild(tr);
                let tableSection = document.getElementById('tableSection');
                tableSection.append(table);
            }
        }
        start++;
    } else {
        ret();
        document.getElementById('hashivPlayer1').innerHTML = '';
        document.getElementById('hashivPlayer2').innerHTML = '';
        hashivX = 0;
        hashivO = 0;

    }
}
function ret() {
    let td = document.getElementsByClassName('td');
    for (let i = 0; i < td.length; i++) {
        td[i].innerHTML = '';
        document.getElementById('winner').style.display = 'none';
    }
    let turn = document.getElementById('turn');
    let player = document.getElementById('player1');
    turn.innerHTML = `${player.value} It's your turn `;
    click = 0;
}

function win() {
    const comb = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ]

    let Jiro = false;
    let td = document.getElementsByClassName('td');
    for (let i = 0; i < comb.length; i++) {
        if (td[comb[i][0]].innerHTML == 'X' && td[comb[i][1]].innerHTML == 'X' && td[comb[i][2]].innerHTML == 'X') {
            hashivX++;
            let hashivPlayer1 = document.getElementById('hashivPlayer1');
            hashivPlayer1.style.textAlign = 'center';
            hashivPlayer1.style.color = 'black';
            hashivPlayer1.innerHTML = hashivX;
            Jiro = true;
            let x = setTimeout(() => {
                let player1 = document.getElementById('player1');
                document.getElementById('winner').style.display = 'block';
                document.getElementById('winner').innerHTML = `${player1.value} is Win`;

            }, 300);
            function stop() {
                clearInterval(x)
                ret();
            }
            setTimeout(stop, 3000);
            break;
        }
        if (td[comb[i][0]].innerHTML == 'O' && td[comb[i][1]].innerHTML == 'O' && td[comb[i][2]].innerHTML == 'O') {
            hashivO++;
            let hashivPlayer2 = document.getElementById('hashivPlayer2');
            hashivPlayer2.style.textAlign = 'center';
            hashivPlayer2.style.color = 'black';
            hashivPlayer2.innerHTML = hashivO;
            Jiro = true;
            let x = setTimeout(() => {
                let player2 = document.getElementById('player2');
                document.getElementById('winner').style.display = 'block';
                document.getElementById('winner').innerHTML = `${player2.value} is Win`;
            }, 300);
            function stop() {
                clearInterval(x)
                ret();
            }
            setTimeout(stop, 3000);
            break;
        }
    }
    if (click == 9 && Jiro == false) {
        let x = setTimeout(() => {
            document.getElementById('winner').style.display = 'block';
            document.getElementById('winner').innerHTML = `No one is the Winner`;
        }, 300);
        function stop() {
            clearInterval(x)
            ret();
        }
        setTimeout(stop, 3000);
    }
}

