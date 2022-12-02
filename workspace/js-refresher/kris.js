const person = {
  name: "Kris",
};

export class Human {
  gender = "Male";

  printGender = () => {
    console.log(this.gender);
  };

  // Pre-ES7 / legacy format
  /* 
  constructor() {
    this.gender = "Male";
  }
  */
  /* 
  printGender() {
    console.log(this.gender);
  }
  */
}

export class Person extends Human {
  name = "Kris";
  gender = "Male";

  call = () => {};

  printMyName = () => {
    console.log(this.name);
  };

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
  /* 
  printMyName() {
    console.log(this.name);
  }
 */
}

export default person;
