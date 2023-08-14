const TruthyFalsy = (array) => {
  const truthy = array.filter((element) => {
    return element !== false && element !== null && element !== '';
  });
  const falsy = array.filter((element) => {
    return element === false || element === null || element === '';
  });

  return { truthy, falsy };
};

const array = [false, 1, 10, "", null, "abdulaziz", 1.13, 0];

const getTruthyFalsyResult =TruthyFalsy(array);
console.log(getTruthyFalsyResult);