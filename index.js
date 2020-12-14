let canvas = document.getElementById("gameArea");
canvas.width = window.innerHeight * 0.9;
canvas.height = window.innerHeight * 0.9;
let ctx = canvas.getContext("2d");

let img = new Image();
img.src = "board.png";

img.addEventListener("load", () => {
  ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
});

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

const side = canvas.width / 10;