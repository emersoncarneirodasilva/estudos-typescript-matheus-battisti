type fiveNumbers = [number, number, number, number, number];

const myNumberArray: fiveNumbers = [1, 2, 3, 4, 5];
// const myNumberArray2: fiveNumbers = [1, 2, 3, 4, 5, 6];
// const mixedArray: fiveNumbers = ["teste", 1];

/*-------------------------------------------*/

type nameAndAge = [string, number];

const anotherUser: nameAndAge = ["Mersio", 35];

anotherUser[0] = "Emerson";

console.log(anotherUser);
