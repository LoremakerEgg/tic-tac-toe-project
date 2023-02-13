const game = [0, 0, 0, 0, 0, 0, 0, 0, 0];

const square1 = document.getElementById("1");
const square2 = document.getElementById("2");
const square3 = document.getElementById("3");
const square4 = document.getElementById("4");
const square5 = document.getElementById("5");
const square6 = document.getElementById("6");
const square7 = document.getElementById("7");
const square8 = document.getElementById("8");
const square9 = document.getElementById("9");

const squares = [
  square1,
  square2,
  square3,
  square4,
  square5,
  square6,
  square7,
  square8,
  square9,
];

let currentPlayer = 1;

squares.forEach((el, index) => {
  el.addEventListener("click", () => {
    if (currentPlayer % 2 == 1 && !game[index]) {
      const imgCircle = document.createElement("img");
      imgCircle.setAttribute("src", "/images/circle.svg");
      el.appendChild(imgCircle);
      game[index] = 1;
      currentPlayer++;
      checkIfWin("O");
    } else if (currentPlayer % 2 == 0 && !game[index]) {
      const imgCross = document.createElement("img");
      imgCross.setAttribute("src", "/images/x-lg.svg");
      el.appendChild(imgCross);
      game[index] = 2;
      currentPlayer++;
      checkIfWin("X");
    }
    console.log(game);
  });
});

function checkIfWin(player) {
  if (
    (game[0] == 1 && game[1] == 1 && game[2] == 1) ||
    (game[0] == 2 && game[1] == 2 && game[2] == 2)
  ) {
    console.log(`Player ${player} wins!`);
  }
  if (
    (game[3] == 1 && game[4] == 1 && game[5] == 1) ||
    (game[3] == 2 && game[4] == 2 && game[5] == 2)
  ) {
    console.log(`Player ${player} wins!`);
  }
  if (
    (game[6] == 1 && game[7] == 1 && game[8] == 1) ||
    (game[6] == 2 && game[7] == 2 && game[8] == 2)
  ) {
    console.log(`Player ${player} wins!`);
  }
  if (
    (game[0] == 1 && game[3] == 1 && game[6] == 1) ||
    (game[0] == 2 && game[3] == 2 && game[6] == 2)
  ) {
    console.log(`Player ${player} wins!`);
  }
  if (
    (game[1] == 1 && game[4] == 1 && game[7] == 1) ||
    (game[1] == 2 && game[4] == 2 && game[7] == 2)
  ) {
    console.log(`Player ${player} wins!`);
  }
  if (
    (game[2] == 1 && game[5] == 1 && game[8] == 1) ||
    (game[2] == 2 && game[5] == 2 && game[8] == 2)
  ) {
    console.log(`Player ${player} wins!`);
  }
  if (
    (game[0] == 1 && game[4] == 1 && game[8] == 1) ||
    (game[0] == 2 && game[4] == 2 && game[8] == 2)
  ) {
    console.log(`Player ${player} wins!`);
  }
  if (
    (game[2] == 1 && game[4] == 1 && game[6] == 1) ||
    (game[2] == 2 && game[4] == 2 && game[6] == 2)
  ) {
    console.log(`Player ${player} wins!`);
  }
  if (game.every((el) => el >= 1)) {
    console.log(`It's a draw!`);
  }
}
const winConditions = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];
// function checkIfWin(player)
// [player, player, player]
// [0, 0, 0]
// [0, 0, 0]

// [0, 0, 0]
// [player, player, player]
// [0, 0, 0]

// [0, 0, 0]
// [0, 0, 0]
// [player, player, player]

// [player, 0, 0]
// [player, 0, 0]
// [player, 0, 0]

// [player, 0, 0]
// [0, player, 0]
// [0, 0, player]

// [0, player, 0]
// [0, player, 0]
// [0, player, 0]

// [0, 0, player]
// [0, player, 0]
// [player, 0, 0]

// [0, 0, player]
// [0, 0, player]
// [0, 0, player]
