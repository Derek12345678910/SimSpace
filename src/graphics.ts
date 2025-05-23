import { Map } from "./objects/map.js";

const canvas = document.getElementById("game-window") as HTMLCanvasElement;
const ctx = canvas.getContext('2d') as CanvasRenderingContext2D;

const MIN_SCALE = 0.25; // Max zoom out scale
const MAX_SCALE = 5; // Max zoom in scale

let scale : number = 1; // zoom in scale
let cellWidth : number;
let cellHeight : number;

let originX : number = 0;
let originY : number = 0;

let isDragging : boolean = false;
let dragStartX : number, dragStartY : number;

let world : Map = new Map(50, 50);

/**
 * Display the inputted map
 * @param map map of to be displayed
 */
function displayMap(map : Map) : void {
    let rows : number = map.mapSizeX;
    let cols : number = map.mapSizeY;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    cellWidth = 50
    cellHeight = 50

    originX = canvas.width / 2;
    originY = canvas.height / 2;

    draw(map);

}

function draw(map: Map) {
    ctx.setTransform(scale, 0, 0, scale, originX, originY);
    ctx.clearRect(-originX / scale, -originY / scale, canvas.width / scale, canvas.height / scale);

    ctx.strokeStyle = '#000000';

    let rows = map.mapSizeX;
    let cols = map.mapSizeY;

    let totalWidth : number = cols * cellWidth;
    let totalHeight : number = rows * cellHeight;

    // Draw vertical lines
    for (let x = 0; x <= cols; x++) {
        const posX = x * cellWidth - totalWidth / 2;
        ctx.beginPath();
        ctx.moveTo(posX, -totalHeight / 2);
        ctx.lineTo(posX, totalHeight / 2);
        ctx.stroke();
    }

    // Draw horizontal lines
    for (let y = 0; y <= rows; y++) {
        const posY = y * cellHeight - totalHeight / 2;
        ctx.beginPath();
        ctx.moveTo(-totalWidth / 2, posY);
        ctx.lineTo(totalWidth / 2, posY);
        ctx.stroke();
    }
}


canvas.addEventListener('wheel', (e) => {
  e.preventDefault();
  const zoom = e.deltaY < 0 ? 1.1 : 0.9;
  const mouseX = e.offsetX;
  const mouseY = e.offsetY;

  const wx = (mouseX - originX) / scale;
  const wy = (mouseY - originY) / scale;

  const newScale = scale * zoom;

  if (newScale < MIN_SCALE || newScale > MAX_SCALE) return;

  scale = newScale;
  originX = mouseX - wx * scale;
  originY = mouseY - wy * scale;

  draw(world);
});

canvas.addEventListener('mousedown', (e) => {
    isDragging = true;
    dragStartX = e.clientX - originX;
    dragStartY = e.clientY - originY;
});

canvas.addEventListener('mousemove', (e) => {
    if (isDragging) {
        let newOriginX = e.clientX - dragStartX;
        let newOriginY = e.clientY - dragStartY;

        const totalWidth = world.mapSizeY * cellWidth * scale;
        const totalHeight = world.mapSizeX * cellHeight * scale;

        const maxX = canvas.width / 2 + totalWidth / 2;
        const minX = canvas.width / 2 - totalWidth / 2;

        const maxY = canvas.height / 2 + totalHeight / 2;
        const minY = canvas.height / 2 - totalHeight / 2;

        originX = clamp(newOriginX, minX, maxX);
        originY = clamp(newOriginY, minY, maxY);

        draw(world);
    }
});

canvas.addEventListener('mouseup', () => isDragging = false);
canvas.addEventListener('mouseleave', () => isDragging = false);

window.addEventListener('resize', () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    draw(world);
});

function clamp(value: number, min: number, max: number): number {
    return Math.max(min, Math.min(max, value));
}

displayMap(world);
