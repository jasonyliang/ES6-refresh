const numbers = [1, 2, 3];
const newNum = [...numbers, 4, 5, 6];
console.log(newNum);

// object
const Human = {
  name: "J",
  age: 18
};

const newPerson = {
  ...Human,
  gender: "male"
};

console.log(newPerson);

// functions
const filter = (...args) => {
  return args.filter(el => el === 1);
};

console.log(filter(1, 2, 3, 4, 5, 1));
