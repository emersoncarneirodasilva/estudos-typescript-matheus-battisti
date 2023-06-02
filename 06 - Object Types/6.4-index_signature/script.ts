interface CoordObject {
  [index: string]: number;
}

let coords: CoordObject = {
  x: 10,
};

coords.y = 15;
// coords.y = 'teste'

console.log(coords);

/*-----------------------------------------*/

interface OnlyNumberArray {
  [index: number]: number;
}

const arr1: OnlyNumberArray = [1, 2, 3];
// const arr2: OnlyNumberArray = ['1', '2', '3']

console.log(arr1);
