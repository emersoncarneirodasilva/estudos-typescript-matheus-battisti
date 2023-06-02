interface Character {
  name: string;
}

interface Gum {
  type: string;
  caliber: number;
}

type HumnaWithGum = Character & Gum;

const arnold: HumnaWithGum = {
  name: "Arnold Schwarzenegger",
  type: "Shotgun",
  caliber: 12,
};

console.log(arnold);
