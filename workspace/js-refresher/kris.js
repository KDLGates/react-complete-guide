const person = {
  name: "Kris",
};

export class Human {
  constructor() {
    this.gender = "Male";
  }

  printGender() {
    console.log(this.gender);
  }
}

export class Person extends Human {
  call = () => {};

  /* 
  // No constructor, no object?
  constructor() {
    // Calling super constructor via super() is required for a derived class!
    super();
    this.name = "Kris";
    this.gender = "Male";
    // this.gender = super.gender;
  }
 */

  name = "Kris";
  gender = "Male";

  /* 
  printMyName() {
    console.log(this.name);
  }
 */

  printMyName = () => {
    console.log(this.name);
  };
}

export default person;
