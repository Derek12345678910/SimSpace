const canvas = document.getElementById("game-window") as HTMLCanvasElement;
const ctx = canvas.getContext('2d') as CanvasRenderingContext2D;

const rows = 50;
const cols = 50;
const cellWidth = canvas.width / cols;
const cellHeight = canvas.height / rows;

// Draw vertical lines
for (let x = 0; x <= canvas.width; x += cellWidth) {
    ctx.beginPath();
    ctx.moveTo(x, 0);
    ctx.lineTo(x, canvas.height);
    ctx.strokeStyle = "#ccc";
    ctx.stroke();
}

// Draw horizontal lines
for (let y = 0; y <= canvas.height; y += cellHeight) {
    ctx.beginPath();
    ctx.moveTo(0, y);
    ctx.lineTo(canvas.width, y);
    ctx.strokeStyle = "#ccc";
    ctx.stroke();
}