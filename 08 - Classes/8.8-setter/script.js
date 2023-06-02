"use strict";
class Coords {
    set fillX(x) {
        if (x === 0) {
            return;
        }
        this.x = x;
    }
    set fillY(y) {
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
