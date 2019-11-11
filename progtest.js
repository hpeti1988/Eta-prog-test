// 1. Adattípusok

// let a = 5; number
// let b = 'hello'; String
// let c = true; Boolean
// let d = [1,2,3]; Array
// let e = [[1,2,3], [4,5,6]] matrix
// let f = {
//   name: 'Peti',   object
//   age: 31,
//    }

// 2. Referencia szerinti átadásnál egy memóriabeli cím másolódik pl. tömbök.
//    Érték átadás: let a = 2, let b = a; Itt konkrétan a deklarált érték másolódik.

// 3. Összeadás tétel

const arrSum = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let sum = 0;

for (let i = 0; i < arrSum.length; i++) {
  sum = sum + arrSum[i];
}

console.log(sum);
console.log();

// 4. Megszámlálás tétel

const arrCount = [1, 1, 2, 6, 7, 5, 1];

let counter = 0;

for (let i = 0; i < arrCount.length; i++) {
  if (arrCount[i] === 1) { counter++; }
}

console.log(counter);
console.log();

// 5. Switch

let a = 1;

const switchFunc = (param) => {
  switch (a) {
    case 0:
      a = 0;
      console.log('Yes.');
      break;
    case 1:
      a = 1;
      console.log('No.');
  }
};

switchFunc(a);
console.log();

// 6. Metszet tétel

const array = [1, 12, 35, 3, 7, 243, 45, 2];
const array2 = [12, 2, 63, 34, 243];
const array3 = [];

for (let i = 0; i < array.length; i++) {
  let j = 0;
  while (j < array2.length && array2[j] !== array[i]) { j++; }
  if (j < array2.length) { array3.push(array[i]); }
}

console.log(array3);
console.log();

// 7. Számológép
const calculator = require('./aritmetics');
const firstNum = 15;
const secondNum = 3;

calculator.addFunc(firstNum, secondNum);
calculator.negateFunc(firstNum, secondNum);
calculator.divideFunc(firstNum, secondNum);
calculator.multiplyFunc(firstNum, secondNum);

console.log();

// 8. Matrix
const readLine = require('readline-sync');
const outerArray = readLine.questionInt('Kérlek adj meg egy számot: ');
const innerArray = readLine.questionInt('Kérlek adj meg még egy számot: ');

const matrix = [];
for (let i = 0; i < outerArray; i++) {
  matrix[i] = [];
  for (let j = 0; j < innerArray; j++) {
    matrix[i][j] = (Math.pow(2, 2));
  }
}

console.log(matrix);
for (let i = 0; i < 10; i++) {
  console.log(Math.pow(2, i));
}
