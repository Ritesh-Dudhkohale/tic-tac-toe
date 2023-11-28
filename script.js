
let chance = 'X'
function getNumber(num) {
    if (chance == 'X') {
        document.getElementsByTagName("button")[num].innerHTML = `<img src="Images/x.png" class="player-sign">`
        document.getElementsByTagName("button")[num].disabled = true
        winComb[num] = chance
        getWinner()
        chance = 'O';
    } else {
        document.getElementsByTagName("button")[num].innerHTML = `<img src="Images/o.png" class="player-sign">`
        document.getElementsByTagName("button")[num].disabled = true
        winComb[num] = chance
        getWinner()
        chance = 'X';
    }
}
let winComb = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i']
let winner = false
function getWinner() {
    const winPatterns = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8], // Rows
        [0, 3, 6], [1, 4, 7], [2, 5, 8], // Columns
        [0, 4, 8], [2, 4, 6]              // Diagonals
    ];

    for (const pattern of winPatterns) {
        const [a, b, c] = pattern

        if (winComb[a] === winComb[b] && winComb[b] === winComb[c]) {
            console.log("success");
            winner = true
        }
    }

    if (winner) {
        document.querySelector('div>h1').innerHTML = `<h1>Winner is : ${chance}</h1>`
        let btns = document.getElementsByTagName('button')
        for (let btn of btns) {
            btn.disabled = true;
        }
    }
}