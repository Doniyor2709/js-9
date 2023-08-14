const firstPeople = (string) => {
  const words = string.split(' ');
  const firstLetters = words.map((word) => word[0]);
  return firstLetters.join('');
};

const string = 'George Raymond Richard Martin';

const firstLetters = firstPeople(string);
console.log(firstLetters);