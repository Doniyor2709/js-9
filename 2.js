const high = (animals) => {
  const wordCounts = animals.reduce((acc, word) => {
    const currentCount = acc.get(word) || 0;
    acc.set(word, currentCount + 1);
    return acc;
  }, new Map());

  return wordCounts;
};

const animals = ['dog', 'chicken', 'cat', 'dog', 'chicken', 'chicken', 'rabbit'];

const wordCounts = high(animals);
console.log(wordCounts);