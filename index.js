let canvas = document.getElementById("gameArea");
canvas.width = window.innerHeight * 0.9;
canvas.height = window.innerHeight * 0.9;
let ctx = canvas.getContext("2d");

let img = new Image();
img.src = "board.png"

img.addEventListener("load",()=>{

    ctx.drawImage(img,0,0,canvas.width,canvas.height);

});