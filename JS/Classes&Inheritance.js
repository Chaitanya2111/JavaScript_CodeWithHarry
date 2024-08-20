console.log("this is Tutorial31.js");

class Employee {
    constructor(givenName, givenExperience, givenDivision) {
        this.name = givenName;
        this.experience = givenExperience;
        this.division = givenDivision;
    }

    slogan(){
        return `I am ${this.name} and this company is the best`;
    }

    joiningYear(){
        return 2020 - this.experience;
    }

    static add(a, b){
        return a + b;
    }
}

class Programmer extends Employee{
    constructor(givenName, givenExperience, givenDivision, language, github){
        super(givenName, givenExperience, givenDivision);
        this.language = language;
        this.github = github;
    }

    favoriteLanguage(){
        if (this.language == 'python'){
            return 'Python';
        }
        else{
            return 'JavaScript';
        }
    }

    static multiply(a, b){
        return a * b;
    }
}

// harry = new Employee("Harry", 56, "Division");
// console.log(harry.joiningYear());
// console.log(Employee.add(34, 5))
rohan = new Programmer("Rohan", 3, "Lays", "Go", "Rohan420")
console.log(rohan)
console.log(rohan.favoriteLanguage())
console.log(Programmer.multiply(5, 7));






/* 
What are the ES6 Classes?
class SimpleDate {
  constructor(year, month, day) {
    this._year = year;
    this._month = month;
    this._day = day;
  }
  addMonth(nMonths) {
  }
  getMonth() {
    return this.month;
  }
}



Constructors:-
constructor(year, month, day) {
    this._year = year;
    this._month = month;
    this._day = day;
  }




  Defining Methods:-
  class Car {
 constructor(name,year ) {
        this.name = name;
        this.year = year; 
}
greet() {
        return `${this.name} says hello.`;
}}

const car1 = new Car('Audi', 2018);




Inheritance:-
Extending a Class:-
//new class from the parent
class Bike extends Car {
 constructor(name,year,speed) {
        //constructor with super
        super(name, year);
        // Adding new property
        this.speed = speed;
}}

const bike1 = new Bike(' Trek', 2019,200);








*/