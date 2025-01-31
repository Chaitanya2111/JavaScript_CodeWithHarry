console.log("This is tutorial 30");

const proto = {
    slogan: function () {
        return `This company is the best`;
    },
    changeName: function (newName) {
        this.name = newName
    }
}

// This creates harry object
let harry = Object.create(proto);
harry.name = "harry";
harry.role = "Programmer";
// harry.changeName("Harry2")
// console.log(harry)

// This also creates harry object
const harry1 = Object.create(proto, {
    name: { value: "harry", writable: true },
    role: { value: "Programmer" },
});
harry1.changeName("Harry2")
// console.log(harry1)


// Employee constructor
function Employee(name, salary, experience) {
    this.name = name;
    this.salary = salary;
    this.experience = experience;
}

// Slogan
Employee.prototype.slogan = function () {
    return `This company is the best. Regards, ${this.name}`;
}

// Create an object from this constructor now
let harryObj = new Employee("Harry", 345099, 87);
console.log(harryObj.slogan())

// Programmer
function Programmer(name, salary, experience, language) {
    Employee.call(this, name, salary, experience);
    this.language = language;
}

// Inherit the prototype
Programmer.prototype = Object.create(Employee.prototype);

// Manually set the constructor
Programmer.prototype.constructor = Programmer;

let rohan = new Programmer("Rohan", 2, 0, "Javascript");
console.log(rohan);














/*
// 1) Object.create():-
Object.create(proto, [propertiesObject])

const myDetail= {
  isHuman: true,
  printIntro: function() {
  console.log(`My name is ${this.name}. Am I human? ${this.isHuman}`);
}};
const myself = Object.create(myDetail);
myself.name = 'Harry'; // "name" is a property set on "me", but not on "person"
myself.printIntro();
// expected output: "My name is Harry. Am I human? true"


2) Using call to chain constructors for an object:-
function Factory (name, location) {
  this.name = name;
  this.location = location;
}
function Food(name, location) {
 Factory.call(this, name, location);
 this.category = 'food';
}
const myFood = new Food('Nestle', 'UK' );



3)Manually set the constructor:-
function Factory() { 

}
Factory.prototype.FactoryMethod = function FactoryMethod() {}
function Product1() {
   Factory.call(this) 
}
Product1.prototype.constructor = Product1

*/