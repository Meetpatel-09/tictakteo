const boxs = document.getElementsByClassName("grid-items");
const player1 = document.getElementById("player-1");
const player2 = document.getElementById("player-2");
const model = document.getElementById("model");
const inuptBox = document.getElementById("name");

let currentTurn = 1;
let totalTurns = 0;

let selectedPlayer = 0;

player1.addEventListener("click", () => {
    model.style.display = "block";
    selectedPlayer = 1;
});

player2.addEventListener("click", () => {
    model.style.display = "block";
    selectedPlayer = 2;
});

const formSubmit = (event) => {
    model.style.display = "none";
    const playerName = inuptBox.value;
    if (selectedPlayer == 1) {
        player1.innerHTML = playerName;
    } else {
        player2.innerHTML = playerName;
    }
    inuptBox.value = "";
    event.preventDefault();
};

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
    currentTurn == 1
        ? alert(`${player2.innerHTML} Won`)
        : alert(`${player1.innerHTML} Won`);
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
