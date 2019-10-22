export class Grid {

  readonly rows = 25;
  readonly columns = 80;
  private readonly rowHeight = 16;
  private readonly columnWidth = 8;

  private readonly horizontalRooms = 3;
  private readonly verticalRooms = 3;
  private readonly CHANCE_OF_MISSING_ROOM = 0.08;
  private readonly minimumNumberOfRooms = 6;
  private readonly minRoomWidth = 4;
  private readonly maxRoomWidth = Math.floor(this.columns / this.horizontalRooms) - 2;
  private readonly minRoomHeight = 4;
  private readonly maxRoomHeight = Math.floor(this.rows / this.verticalRooms) - 2;

  cells: Array<Array<number>> = [];
  rooms: Array<Array<Room>> = [];

  constructor() {
    this.generateMap();
    (window as any).generateMap = this.generateMap.bind(this);
  }

  generateMap() {
    this.blankMap();
    this.generateRooms();
  }

  blankMap() {
    for(let x=0; x < this.columns; x++) {
      this.cells[x] = [];
      for(let y=0; y < this.rows; y++) {
        this.cells[x].push(0);
      }
    }
  }

  generateRooms() {
    for(let x=0; x<this.horizontalRooms; x++) {
      this.rooms[x] = [];
      for(let y=0; y<this.verticalRooms; y++) {
        this.rooms[x][y] = this.generateRoom(x, y);
      }
    }
  }

  generateRoom(roomGridX: number, roomGridY: number) : Room {
    const room = { x: 0, y: 0, height: 0, width: 0};
    this.setRoomSize(room);
    this.setRoomPosition(room, roomGridX, roomGridY);
    for(let x=0; x<room.width; x++) {
      for(let y=0; y<room.height; y++) {
        if(x === 0 || y === 0 || x === room.width - 1 || y === room.height - 1) {
          this.cells[x + room.x][y + room.y] = 2;
        } else {
          this.cells[x + room.x][y + room.y] = 1;
        }
      }
    }
    return room;
  }

  setRoomSize(room : Room) : void {
    room.width = Math.floor(Math.random() * (this.maxRoomWidth - this.minRoomWidth)) + this.minRoomWidth;
    room.height = Math.floor(Math.random() * (this.maxRoomHeight - this.minRoomHeight)) + this.minRoomHeight;
  }

  setRoomPosition(room: Room, roomGridX: number, roomGridY: number) {
    room.x = Math.floor(Math.random() * (this.maxRoomWidth - room.width)) + Math.floor(roomGridX * this.columns / this.horizontalRooms);
    room.y = Math.floor(Math.random() * (this.maxRoomHeight - room.height)) + Math.floor(roomGridY * this.rows / this.verticalRooms);
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

const cellColors = ['black', 'lightgrey', 'orange']

interface Room {
  x: number,
  y: number,
  height: number,
  width: number,
}