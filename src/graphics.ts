import { Map } from "./objects/map.js";

import { Pair } from "./datastructures/pair.js";

export class GameCanvas {
    private canvas: HTMLCanvasElement;
    private ctx: CanvasRenderingContext2D;

    private MIN_SCALE = 0.25;
    private MAX_SCALE = 5;

    private scale: number = 1;
    private cellWidth: number = 50;
    private cellHeight: number = 50;

    private originX: number = 0;
    private originY: number = 0;

    private isDragging: boolean = false;
    private dragStartX: number = 0;
    private dragStartY: number = 0;

    private world: Map;

    private _lookingForSelect : Boolean = false;
    private _selectedCell : Pair | null = null;

    constructor(map: Map) {
        this.canvas = document.getElementById("game-window") as HTMLCanvasElement;
        this.ctx = this.canvas.getContext('2d') as CanvasRenderingContext2D;

        this.world = map;

        this.setupEventListeners();
        this.displayMap();
    }

    private setupEventListeners() {
        this.canvas.addEventListener('wheel', (e) => this.handleZoom(e));
        this.canvas.addEventListener('mousedown', (e) => this.handleMouseDown(e));
        this.canvas.addEventListener('mousemove', (e) => this.handleMouseMove(e));
        this.canvas.addEventListener('mouseup', () => this.isDragging = false);
        this.canvas.addEventListener('mouseleave', () => this.isDragging = false);
        this.canvas.addEventListener('click', (e) => this.handleClick(e));
        window.addEventListener('resize', () => this.handleResize());
    }

    private handleZoom(e: WheelEvent) {
        e.preventDefault();
        const zoom = e.deltaY < 0 ? 1.1 : 0.9;
        const mouseX = e.offsetX;
        const mouseY = e.offsetY;

        const wx = (mouseX - this.originX) / this.scale;
        const wy = (mouseY - this.originY) / this.scale;

        const newScale = this.scale * zoom;
        if (newScale < this.MIN_SCALE || newScale > this.MAX_SCALE) return;

        this.scale = newScale;
        this.originX = mouseX - wx * this.scale;
        this.originY = mouseY - wy * this.scale;

        this.draw();
    }

    private handleMouseDown(e: MouseEvent) {
        this.isDragging = true;
        this.dragStartX = e.clientX - this.originX;
        this.dragStartY = e.clientY - this.originY;
    }

    private handleMouseMove(e: MouseEvent) {
        if (this.isDragging) {
            const newOriginX = e.clientX - this.dragStartX;
            const newOriginY = e.clientY - this.dragStartY;

            const totalWidth = this.world.mapSizeY * this.cellWidth * this.scale;
            const totalHeight = this.world.mapSizeX * this.cellHeight * this.scale;

            const maxX = this.canvas.width / 2 + totalWidth / 2;
            const minX = this.canvas.width / 2 - totalWidth / 2;

            const maxY = this.canvas.height / 2 + totalHeight / 2;
            const minY = this.canvas.height / 2 - totalHeight / 2;

            this.originX = this.clamp(newOriginX, minX, maxX);
            this.originY = this.clamp(newOriginY, minY, maxY);

            this.draw();
        }
    }

    private handleResize() {
        this.canvas.width = window.innerWidth;
        this.canvas.height = window.innerHeight;
        this.draw();
    }

    private clamp(value: number, min: number, max: number): number {
        return Math.max(min, Math.min(max, value));
    }

    private displayMap(): void {
        this.canvas.width = window.innerWidth;
        this.canvas.height = window.innerHeight;

        this.originX = this.canvas.width / 2;
        this.originY = this.canvas.height / 2;

        this.draw();
    }

    private draw(): void {
        this.ctx.setTransform(this.scale, 0, 0, this.scale, this.originX, this.originY);
        this.ctx.clearRect(-this.originX / this.scale, -this.originY / this.scale, this.canvas.width / this.scale, this.canvas.height / this.scale);

        this.ctx.strokeStyle = '#000000';

        const rows = this.world.mapSizeX;
        const cols = this.world.mapSizeY;

        const totalWidth = cols * this.cellWidth;
        const totalHeight = rows * this.cellHeight;

        // Vertical lines
        for (let x = 0; x <= cols; x++) {
            const posX = x * this.cellWidth - totalWidth / 2;
            this.ctx.beginPath();
            this.ctx.moveTo(posX, -totalHeight / 2);
            this.ctx.lineTo(posX, totalHeight / 2);
            this.ctx.stroke();
        }

        // Horizontal lines
        for (let y = 0; y <= rows; y++) {
            const posY = y * this.cellHeight - totalHeight / 2;
            this.ctx.beginPath();
            this.ctx.moveTo(-totalWidth / 2, posY);
            this.ctx.lineTo(totalWidth / 2, posY);
            this.ctx.stroke();
        }
        
        if(this._selectedCell !== null){
            let posX : number = this._selectedCell.key * this.cellWidth - totalWidth / 2;
            let posY : number = this._selectedCell.val * this.cellHeight - totalHeight / 2;

            this.ctx.fillStyle = 'rgba(0, 128, 255, 0.3)';
            this.ctx.fillRect(posX, posY, this.cellWidth, this.cellHeight);
        }
    }

    private handleClick(e: MouseEvent) {
        if(this._lookingForSelect){
            const canvasRect = this.canvas.getBoundingClientRect();
            const mouseX = e.clientX - canvasRect.left;
            const mouseY = e.clientY - canvasRect.top;

            const worldX = (mouseX - this.originX) / this.scale;
            const worldY = (mouseY - this.originY) / this.scale;

            const cols = this.world.mapSizeY;
            const rows = this.world.mapSizeX;
            const totalWidth = cols * this.cellWidth;
            const totalHeight = rows * this.cellHeight;

            const gridX = Math.floor((worldX + totalWidth / 2) / this.cellWidth);
            const gridY = Math.floor((worldY + totalHeight / 2) / this.cellHeight);

            if (gridX >= 0 && gridX < cols && gridY >= 0 && gridY < rows) {
                this._selectedCell = new Pair(gridX, gridY);
                this.draw();
            }
        }
    }

    public get selectedCell() : Pair | null{
        return this._selectedCell;
    }

    public set selectedCell(cell : Pair | null) {
        this._selectedCell = cell;
    }

    public get lookingForSelect() : Boolean {
        return this._lookingForSelect;
    }

    public set lookingForSelect(select : Boolean) {
        this._lookingForSelect = select;
    }

}
