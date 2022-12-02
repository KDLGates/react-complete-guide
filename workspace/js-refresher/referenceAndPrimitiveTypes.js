// Number, String and Boolean primitives are pass-by-value
// Objects and Arrays are pass-by-reference
let o1 = {
  a: 'a'
}

// Spread operator is great for copying objects
let o2a = {
  ...o1
}

// Object references can be destructive!
let o2b = o1;
o2b.a = 'b';

console.log(o1.a);
console.log(o2a.a);
console.log(o2b.a);