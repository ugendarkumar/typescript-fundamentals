let apples: number = 5;

let speed: string = 'Velocity';

let hasName: boolean = true;

let hasNothingMuch: null = null;

let nothing: undefined = undefined;

// build in objects

let now: Date = new Date();

// arrays

let color: string[] = ['red', 'blue', 'orange'];

let numberData: number[] = [1, 2, 3];

let doesExist: boolean[] = [true, false, true];

// object literal

let point: { x: number; y: number } = {
  x: 1,
  y: 3,
};

// functions

let logInfo: (i: number) => void = (i: number) => {
  console.log(i);
};

//when to use annotations

// 1) Function that returns the ''any' type

const json = '{"x":10,"y":20}';

const coordinates: { x: number; y: number } = JSON.parse(json);

console.log(coordinates.x);

// 2) when we declare variable at one line and intialize it later

let words = ['red', 'green', 'blue'];

//let doesWordMatch = false; (this is one way recomended)

let doesWordMatch: boolean;

for (let i = 0; i < words.length; i++) {
  if (words[i] === 'green') {
    doesWordMatch = true;
  }
}

// 3) Variable whose type cannot be inferred correctly

let numbers = [-10, -1, 12];

let numberAboveZero: boolean | number = false;

for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] > 0) {
    numberAboveZero = numbers[i];
  }
}
