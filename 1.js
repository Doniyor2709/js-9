const getNames = (grade, students) => {
  const studentsWithGrade = students.map((student) => {
    const studentGrade = getGrade(student.percent);
    return {
      name: student.name,
      grade: studentGrade,
    };
  });

  return studentsWithGrade.filter((student) => student.grade === grade);
};

const getGrade = (percent) => {
  if (percent >= 85 && percent <= 100) {
    return 5;
  } else if (percent >= 70 && percent <= 85) {
    return 4;
  } else if (percent >= 60 && percent <= 70) {
    return 3;
  } else {
    return null;
  }
};

const students = [
  { name: "Quincy", percent: 96 },
  { name: "Jason", percent: 84 },
  { name: "Alexis", percent: 100 },
  { name: "Sam", percent: 65 },
  { name: "Katie", percent: 90 },
  { name: "Anna", percent: 75 },
];

const namesWithGrade5 = getNames(5, students);
console.log(namesWithGrade5);