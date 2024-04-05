/** @format */

// classes are a template for creating objects

// constructor(): method is a special method for creating and initializing objects created within a class
class Car {
  constructor(brand) {
    this.carname = brand;
  }
}
mycar = new Car("Ford");
console.log(mycar);

// extends: keyword is used to create a child class of another class (parent)
class Bike {
  constructor(brand) {
    this.bikename = brand;
  }
  present() {
    return "I have a " + this.bikename;
  }
}

class Model extends Bike {
  constructor(brand, mod) {
    super(brand);
    this.model = mod;
  }
  show() {
    return this.present() + ", it is a " + this.model;
  }
}

mycar1 = new Model("Ford", "Mustang");
console.log(mycar1);

// static: keyword defines static methods for classes
class Cycle {
  constructor(brand) {
    this.cyclename = brand;
  }
  static hello() {
    // static method
    return "Hello!!";
  }
}

mycar2 = new Cycle("Ford");
console.log(mycar2);

// super: The super keyword is used to call the constructor of its parent class to access the parent's properties and methods
class Nau {
  constructor(brand) {
    this.nauname = brand;
  }
  present() {
    return "I have a " + this.nauname;
  }
}

class Modell extends Nau {
  constructor(brand, mod) {
    super(brand);
    this.model = mod;
  }
  show() {
    return this.present() + ", it is a " + this.model;
  }
}

mycar3 = new Modell("Ford", "Mustang");
console.log(mycar3);
