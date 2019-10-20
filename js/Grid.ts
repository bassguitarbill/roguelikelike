export class Grid {

  readonly rows = 50;
  readonly columns = 80;
  private readonly rowHeight = 8;
  private readonly columnWidth = 8;

  cells : Array<Array<number>> = [];

  constructor() {
    this.generateMap();
  }

  generateMap() {
    this.forEachCell(() => Math.floor(Math.random() * 2));
  }

  forEachCell(callback : Function) {
    for(let x=0; x<this.columns; x++) {
      if(!this.cells[x]) this.cells.push([]);
      for(let y=0; y<this.rows; y++) {
        if(!this.cells[x][y]) this.cells[x].push([]);
        this.cells[x][y] = callback(x,y);
      }
    }
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
    return this.cells[x][y];
  }
}

const cellColors = ['black', 'lightgrey']