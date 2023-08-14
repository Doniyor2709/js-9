const high = (numbers) => {
  return numbers.map((number) => number * number);
};

const numbers = [1, 2, 3, 4, 5];

const squares = high(numbers);
console.log(squares);