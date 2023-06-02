"use strict";
function showCoord(coord) {
    const { x, y, z } = coord;
    return `Coordenadas: X = ${x}, Y = ${y}, Z = ${z}`;
}
const coords = { x: 10, y: 52, z: 78 };
console.log(showCoord(coords));
