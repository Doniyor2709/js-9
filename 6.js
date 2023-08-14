const high = (people) => {
  const sortedPeople = people.sort((a, b) => a.age - b.age);
  const youngest = sortedPeople[0];
  const oldest = sortedPeople[sortedPeople.length - 1];
  return oldest.age - youngest.age;
};

const people = [
  { name: 'John', age: 13 },
  { name: 'Mark', age: 56 },
  { name: 'Rachel', age: 45 },
  { name: 'Nate', age: 67 },
  { name: 'Jeniffer', age: 65 }
];

const ageDifference = high(people);
console.log(ageDifference); // 54