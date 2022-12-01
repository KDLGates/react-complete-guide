const arrowFn = () => {

}
/* 
function printMyName(name) {
  console.log(name)
}
 */
/* 
const printMyName = (name) => {
  console.log(name);
}
 */

// Parents are optional IFF 1 argument
// Even 0 args req's parens >.<
const printMyName = name => {
  console.log(name);
}

/* 
const multiply = n => {
  return n*2;
}
 */

// N.B.: When omitting braces for function body,
// you likewise omit the `return` keyword.
const multiply = n => n * 2;

printMyName("Krissus");
console.log(multiply(2));