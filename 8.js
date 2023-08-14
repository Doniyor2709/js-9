const high = (array) => {
  const seen = new Set();
  return array.reduce((acc, element) => {
    if (!seen.has(element)) {
      seen.add(element);
      acc.push(element);
    }
    return acc;
  }, []);
};

const array = [1, 1, 2, 3, 3, 4, 5, 5, 6];

const uniqueArray = high(array);
console.log(uniqueArray);