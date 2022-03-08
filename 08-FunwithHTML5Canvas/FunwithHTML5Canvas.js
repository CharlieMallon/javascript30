const canvas = document.querySelector('#draw');
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
ctx.strokeStyle = '#ff007f' //colour
ctx.lineJoin = 'round'; // end of line
ctx.lineCap = 'round';
ctx.lineWidth = 100;


let isDrawing = false;
let lastX = 0
let lastY = 0
// https://mothereffinghsl.com/ - changing the hue changes the colour!
let hue = 0
let direction = true;

function draw(e){
    if(!isDrawing) return; // stops from drawing if mouse is not down
    ctx.strokeStyle = `hsl(${hue}, 100%, 50%)`;
    ctx.beginPath();
    // start from
    ctx.moveTo(lastX, lastY);
    // go to
    ctx.lineTo(e.offsetX, e.offsetY);
    // draw line
    ctx.stroke()
    // update last x & y
    lastX = e.offsetX
    lastY = e.offsetY

    // increment hue when hits 360 reset to 0
    hue++
    if (hue >= 360){
        hue = 0;
    }

    // changes the line width
    if( ctx.lineWidth >= 100 || ctx.lineWidth <= 1){
        direction = !direction
    }
    if(direction){
        ctx.lineWidth++;
    } else {
        ctx.lineWidth--;
    }
}

canvas.addEventListener('mousemove', draw);
canvas.addEventListener('mousedown', (e) => {
    isDrawing = true;
    // update last x & y to mouse location
    lastX = e.offsetX
    lastY = e.offsetY
});

canvas.addEventListener('mouseup', () => isDrawing = false);
canvas.addEventListener('mouseout', () => isDrawing = false);


