// normal function
function printMyName(name) {
  console.log(name);
}
printMyName("JJJ");

// arrow function
// (eliminate the parentheses around the parameter only when there's one parameter)
const PrintMyName = name => {
  console.log(name);
};
PrintMyName("Jason");

// no arguments
const PrintMyName2 = () => {
  console.log("JasonL");
};
PrintMyName2();

// multiple arguments
const PrintMyName3 = (name, age) => {
  console.log(name, age);
};
PrintMyName3("JasonL", 280);

// return functions
// just a return statement and nothing more
const multiply = num => {
  return num * 2;
};
// or you can do
const Multiply = num => num * 2;
console.log(multiply(4));
console.log(Multiply(4));
