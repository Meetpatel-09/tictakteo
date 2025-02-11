const boxs = document.getElementsByClassName("grid-items");

let currentTurn = 1;
let totalTurns = 0;

let values = ["", "", "", "", "", "", "", "", ""];
let winCases = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
];

const afterWin = () => {
    currentTurn == 1 ? alert("Player 2 Won") : alert("Player 1 Won");
    values = ["", "", "", "", "", "", "", "", ""];
    for (let i = 0; i < 9; i++) {
        boxs[i].innerHTML = "";
    }
    totalTurns = 0;
    currentTurn = 1;
};

const checkWin = () => {
    for (let win of winCases) {
        if (values[win[0]] !== "") {
            if (values[win[0]] === "O") {
                if (values[win[1]] === "O" && values[win[2]] === "O") {
                    afterWin();
                }
            } else {
                if (values[win[1]] === "X" && values[win[2]] === "X") {
                    afterWin();
                }
            }
        }
    }
};

for (let i = 0; i < 9; i++) {
    boxs[i].addEventListener("click", (event) => {
        if (event.target.innerHTML.length === 0 && totalTurns !== 9) {
            event.target.innerHTML = currentTurn == 1 ? "O" : "X";
            values[i] = currentTurn == 1 ? "O" : "X";
            currentTurn = !currentTurn;
            totalTurns++;
            checkWin();
            if (totalTurns == 9) {
                alert("Match Draw");
            }
        }
    });
}
