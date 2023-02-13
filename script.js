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
    } else if (currentPlayer % 2 == 0 && !game[index]) {
      const imgCross = document.createElement("img");
      imgCross.setAttribute("src", "/images/x-lg.svg");
      el.appendChild(imgCross);
      game[index] = 2;
      currentPlayer++;
    }
    console.log(game);
  });
});

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
