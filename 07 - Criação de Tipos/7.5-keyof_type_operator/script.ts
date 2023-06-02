type Character = {
  name: string;
  age: number;
  hasDriveLicense: boolean;
};

type K = keyof Character;

function showCharName(user: Character, key: K): string {
  return `${user[key]}`;
}

const myChar: Character = {
  name: "Emerson",
  age: 35,
  hasDriveLicense: false,
};

console.log(showCharName(myChar, "name"));
console.log(showCharName(myChar, "age"));
console.log(showCharName(myChar, "hasDriveLicense"));
