// Spread (...) essentilaly 'unpacks' (spreads out, I suppose) the elements of an array or object.

const arr1 = [1, 2, 3];
console.log([...arr1, 4, 5]);

const Person = {
  firstName: "Kris",
}

export function sortArgs(...args) {
    return args.sort();
}

console.log({...Person, lastName: "Gates"});
let veggies = (sortArgs(["Cabbage", "Apple", "Bacon"]));
console.log(veggies);

/// === := <type AND value equality>
const filter = (...filter) => filter.filter(el => el === 1);
console.log(...filter(1,2,3));