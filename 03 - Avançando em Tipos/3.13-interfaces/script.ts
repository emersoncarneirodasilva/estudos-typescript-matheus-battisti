interface Point {
  x: number;
  y: number;
  z: number;
}

function showCoord(coord: Point) {
  const { x, y, z } = coord;

  return `Coordenadas: X = ${x}, Y = ${y}, Z = ${z}`;
}

const coords: Point = { x: 10, y: 52, z: 78 };

console.log(showCoord(coords));
