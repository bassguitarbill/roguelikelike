export class Grid {

  readonly rows = 15;
  readonly columns = 20;
  private readonly rowHeight = 32;
  private readonly columnWidth = 32;

  cells : Array<Array<number>> = [];

  constructor() {
    this.generateMap();
  }

  generateMap() {
    this.cells = [
      [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
      [0,1,1,1,1,1,1,0,0,0,1,1,1,1,1,1,1,1,1,0],
      [0,1,1,1,1,1,1,0,0,0,1,1,1,1,1,1,1,1,1,0],
      [0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0],
      [0,1,1,1,1,1,1,0,0,0,1,1,1,1,1,1,1,1,1,0],
      [0,1,1,1,1,1,1,0,0,0,1,1,1,1,1,1,1,1,1,0],
      [0,0,0,1,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,0],
      [0,0,0,1,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0],
      [0,0,1,1,1,1,0,0,0,0,0,0,0,0,1,0,0,0,0,0],
      [0,0,1,1,1,1,0,0,0,0,0,0,0,0,1,1,0,0,0,0],
      [0,0,1,1,1,1,0,0,0,0,0,0,0,0,0,1,0,0,0,0],
      [0,0,1,1,1,1,0,0,0,0,0,0,0,0,0,1,0,0,0,0],
      [0,0,1,1,1,1,0,0,0,0,0,0,1,1,1,1,1,1,0,0],
      [0,0,1,1,1,1,0,0,0,0,0,0,1,1,1,1,1,1,0,0],
      [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    ];
  }

  draw(ctx : CanvasRenderingContext2D) {
    for(let x=0; x < this.columns; x++) {
      for(let y=0; y < this.rows; y++) {
        const cell = this.getCellAt(x, y);
        ctx.fillStyle = cellColors[cell];
        ctx.fillRect(x * this.columnWidth, y * this.rowHeight, this.columnWidth, this.rowHeight);
      }
    }
  }

  getCellAt(x: number, y: number) {
    return this.cells[y][x];
  }
}

const cellColors = ['black', 'lightgrey']