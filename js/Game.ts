import { Grid } from './Grid.js';

export class Game {
  grid: Grid;
  constructor(readonly ctx: CanvasRenderingContext2D) {
    this.grid = new Grid();
  }

  tick(timestamp : number) {
    this.draw()
  }

  draw() {
    this.ctx.clearRect(0, 0, this.ctx.canvas.width, this.ctx.canvas.height);
    this.grid.draw(this.ctx);
  }
}