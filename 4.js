const posNumber = (numbers) => {
  const positiveNumbers = numbers.filter((number) => number > 0);
  return positiveNumbers.reduce((acc, number) => acc + number, 0);
};

const numbers = [1, -4, 12, 0, -3, 29, -150];

const sumOfPositiveNumbers = posNumber(numbers);
console.log(sumOfPositiveNumbers);