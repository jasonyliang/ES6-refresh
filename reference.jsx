let num = 1;
const num2 = num;
console.log(num2);
num = 2;
console.log(num2);
// object doesn't copy, just serve as a pointer
const person = {
  name: "Johnny"
};

const person2 = person;
console.log(person2);
person.name = "Jason";
console.log(person2);

// actually copying the object and deem it immutable
const person22 = {
  ...person
};
person.name = "Jacob";
console.log(person22);
