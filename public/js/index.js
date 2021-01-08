// Making Connection
const socket = io.connect("http://localhost:3000");
socket.emit("join", "");

let canvas = document.getElementById("canvas");
canvas.width = document.documentElement.clientHeight * 0.9;
canvas.height = document.documentElement.clientHeight * 0.9;
let ctx = canvas.getContext("2d");

let redPieceImg = document.getElementById("red-piece");
let bluePieceImg = document.getElementById("blue-piece");

const side = canvas.width / 10;
const offset = 37.5;
let i = 0;
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
  }
}

document.getElementById("roll-button").addEventListener("click", rollDice);

function rollDice() {
  const number = Math.ceil(Math.random() * 6);
  document.getElementById("dice").src = `./images/dice/dice${number}.png`;
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

// Emit events
document.getElementById("start-btn").addEventListener("click", () => {
  socket.emit("join", {
    user: document.getElementById("name").value,
  });
});

// Listen for events
socket.on("join", function (data) {
  console.log(data);
  // document.querySelector("players-list").innerHTML = data;
});
