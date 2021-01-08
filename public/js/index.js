const socket = io.connect("http://localhost:3000");

const sleep = (milliseconds) => {
  return new Promise((resolve) => setTimeout(resolve, milliseconds));
};

const COMP1 = 0;
const COMP2 = 1;
let playerPos = 0;
let compPos = 0;
let turn = COMP1;

let canvas = document.getElementById("canvas");
canvas.width = document.documentElement.clientHeight * 0.9;
canvas.height = document.documentElement.clientHeight * 0.9;
let ctx = canvas.getContext("2d");

let redPieceImg = document.getElementById("red-piece");
let bluePieceImg = document.getElementById("blue-piece");

const side = canvas.width / 10;
const offsetX = 37.5;
const offsetY = 50;
// let i = 0;
let interval;

const ladders = [
  [2, 23],
  [4, 68],
  [6, 45],
  [20, 59],
  [30, 96],
  [52, 72],
  [57, 96],
  [71, 92],
];

const snakes = [
  [98, 40],
  [84, 58],
  [87, 49],
  [73, 15],
  [56, 8],
  [50, 5],
  [43, 17],
];

var imgs = document.images,
  len = imgs.length,
  counter = 0;

[].forEach.call(imgs, function (img) {
  if (img.complete) incrementCounter();
  else img.addEventListener("load", incrementCounter, false);
});

function incrementCounter() {
  counter++;
  if (counter === len) {
    console.log("All images loaded!");
    // interval = setInterval(game, 1000);
    // ctx.drawImage(bluePieceImg,40,canvas.height-50,30,40);
    drawPin(redPieceImg, playerPos);
    drawPin(bluePieceImg, compPos);
    interval = setInterval(game, 3000);
  }
}

document.getElementById("roll-button").addEventListener("click", () => {
  rollDice();
  // turn = COMP;
});

function rollDice() {
  const number = Math.ceil(Math.random() * 6);
  document.getElementById("dice").src = `./images/dice/dice${number}.png`;
  return number;
}

function game() {
  if (playerPos == 99 || compPos == 99) {
    clearInterval(interval);
  }

  // while (playerPos != 99 && compPos != 99) {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  let num = rollDice();
  if (turn == COMP1) {
    drawPin(redPieceImg, (playerPos += num));
    drawPin(bluePieceImg, compPos);
    turn = COMP2;
  } else if (turn == COMP2) {
    drawPin(redPieceImg, playerPos);
    drawPin(bluePieceImg, (compPos += num));
    turn = COMP1;
  }
  // }
}

function drawPin(img, pos) {
  let xPos =
    Math.floor(pos / 10) % 2 == 0
      ? (pos % 10) * side - 15 + offsetX
      : canvas.width - ((pos % 10) * side - 15 + offsetX);
  let yPos = canvas.height - (Math.floor(pos / 10) * side + offsetY);

  ctx.drawImage(img, xPos, yPos, 30, 40);
}

// function game() {
//   if (i == 9) {
//     clearInterval(interval);
//   }

//   ctx.clearRect(0, 0, canvas.width, canvas.height);
//   ctx.drawImage(
//     redPieceImg,
//     offset + i * side - 15,
//     canvas.height - 50,
//     30,
//     40
//   );
//   i++;
// }
