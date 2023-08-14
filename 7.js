const high = (numbers) => {
  const evenNumbers = numbers.filter((number) => number % 2 === 0);
  const oddNumbers = numbers.filter((number) => number % 2 === 1);

  return [evenNumbers, oddNumbers];
};

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const [evenNumbers, oddNumbers] = high(numbers);
console.log(evenNumbers);
console.log(oddNumbers);