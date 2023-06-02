class Coords {
  x!: number;
  y!: number;

  set fillX(x: number) {
    if (x === 0) {
      return;
    }

    this.x = x;
  }

  set fillY(y: number) {
    if (y === 0) {
      return;
    }

    this.y = y;
  }
}

const myCoors = new Coords();

myCoors.fillX = 12;
myCoors.fillY = 0;
myCoors.fillY = 3;

console.log(myCoors);
