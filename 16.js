const containsOnlyLetters = (string) => {
  const letters = string.split('');
  return letters.every((letter) => {
    return letter.match(/[a-zA-Z]/);
  });
};

const string = 'This is a string with only letters';

const containsOnlyLettersResult = containsOnlyLetters(string);
console.log(containsOnlyLettersResult); // true

const stringWithNumbers = 'This is a string with numbers 12345';

const containsOnlyLettersResultWithNumbers = containsOnlyLetters(stringWithNumbers);
console.log(containsOnlyLettersResultWithNumbers); 