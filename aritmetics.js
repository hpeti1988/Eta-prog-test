const addFunc = (num1, num2) => {
  const result = num1 + num2;
  console.log('A két szám összeg: ', result);
};

const negateFunc = (num1, num2) => {
  const result = num1 - num2;
  console.log('A két szám maradéka: ', result);
};

const multiplyFunc = (num1, num2) => {
  const result = num1 * num2;
  console.log('A két szám szorzata: ', result);
};

const divideFunc = (num1, num2) => {
  const result = num1 / num2;
  console.log('A két szám hányadosa: ', result);
};

module.exports = {
  addFunc: addFunc,
  negateFunc: negateFunc,
  multiplyFunc: multiplyFunc,
  divideFunc: divideFunc
};
