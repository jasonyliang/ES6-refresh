class Human {
  constructor() {
    this.species = "Human";
  }
  findSpecies() {
    console.log("This is a", this.species);
  }
}
class Person extends Human {
  constructor() {
    super(); // if extends from a different class
    this.name = "Jason";
  }

  callSomeone(name) {
    return this.name + " said hi to " + name;
  }
}
const MyPerson = new Person();
console.log(MyPerson.name);
console.log(MyPerson.callSomeone("John"));
MyPerson.findSpecies();
