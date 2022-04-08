console.log("hola")
var canvas = document.querySelector("#pintar");

var ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

ctx.strokeStyle = '#BADA55';
ctx.lineJoin = 'round';
ctx.lineCap = 'round';
ctx.lineWidth = 100;

let pintar = false;
let ejeX = 0;
let ejeY = 0;
let hue = 0;
let direction = true;


function pintado(e) {
    if (!pintar) {
        return;
    }
    console.log(e);
    ctx.strokeStyle = `hsl(${hue}, 100%, 50%)`;
    ctx.beginPath();
    ctx.moveTo(ejeX, ejeY);
    ctx.lineTo(e.offsetX, e.offsetY),
        ctx.stroke();
    [ejeX, ejeY] = [e.offsetX, e.offsetY];
    hue++;
    if (hue >= 360) {
        hue = 0;
    }
    if (ctx.lineWidth >= 100 || ctx.lineWidth <= 1) {
        direction = !direction;
    }

    if (direction) {
        ctx.lineWidth++;
    } else {
        ctx.lineWidth--;
    }
};
canvas.addEventListener("mousedown", (e) => {
    pintar = true;
    [ejeX, ejeY] = [e.offsetX, e.offsetY]

});

canvas.addEventListener("mousemove", pintado);
canvas.addEventListener("mouseup", () => pintar = false);
canvas.addEventListener("mouseout", () => pintar = false);
