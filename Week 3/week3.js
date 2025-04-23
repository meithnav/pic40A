console.log("\nQUES 1");
// QUES 1: What’s the difference between `var`, `let`, and `const` when declaring a variable?

// SOLN:

// var:
// * Scope: Function-scoped, meaning it's accessible throughout the function in which it's declared, and also `globally` if declared `outside` of any function. [GLOBAL SCOPE WITHIN THE FUNCTION]
// * Reassignment: Variables declared with var can be reassigned.
// * Hoisting: var variables are hoisted, meaning they are implicitly declared at the top of the function or global scope, even if they are declared later in the code.

// let:
//  - Scope: Block-scoped, meaning it's accessible only within the block (e.g., inside curly braces) where it's declared.
// * Reassignment: Variables declared with let can be reassigned.
// * Hoisting: let variables are not hoisted. They are also subject to the "temporal dead zone," which means you cannot access them before their declaration.

// const:
// * Scope: Block-scoped, similar to let.
// * Reassignment: Variables declared with const cannot be reassigned.
// * Hoisting: const variables are not hoisted, and like let, they are also subject to the temporal dead zone.

// Both const and let were introduced in the latest ES6 version of JSX.



function foo() {
  if (true) {
    var x = 1;
    // let y = 2;
    // const z = 3;
  }
  console.log(x);
  // console.log(y);
  // console.log(z);
}
foo();









// OUTPUT:
// 1
// ReferenceError: y is not defined
// ReferenceError: z is not defined















// ####################### //

console.log("\nQUES 2");
//QUES 2: Guess the output:
var x = 5;
console.log(x);
x = 10;
console.log(x);

// OUTPUT:
// 5
// 10

const z = 3;
console.log(z);
// z = 4;
// console.log(z);

// OUTPUT:
// 3
// TypeError: Assignment to constant variable.
















// ####################### //

console.log("\nQUES 3");
// QUES 3: Guess the output:
var a = 1;

function test() {
  if (true) {
    console.log(a);
    var a = 2;
  }
}
test();

// OUTPUT: undefined
// Output is `undefined` because var a is hoisted within test but not yet assigned when console.log runs.

// equivalent to:
function test() {
  var a; // Declaration is hoisted to the top of the function
  if (true) {
    console.log(a); // Outputs: undefined
    a = 2; // Initialization happens here
  }
}
















// ####################### //

console.log("\nQUES 4");
// QUES 4: Write a function which random integer between 0 and N
function randomInt(N) {
  return Math.floor(Math.random() * N);
}

console.log(randomInt(10));
// OUTPUT: random integer between 0 and 10 [0, 10)












// ####################### //

console.log("\nQUES 5");
// QUES 5: Write a function that adds a and b and stores the `sum`. Then subtracts a `random integter` between a and b from the `sum` and returns the result. NOTE: a<=b.

function add(a, b) {
  let sum = a + b;
  let rand = randomInt(b - a) + a;
  sum -= rand;
  return sum;
}

console.log(add(5, 10));
// OUTPUT: random number between 0 and 15














// ####################### //

console.log("\nQUES 6");
// QUES 6: Write the following complex mathematical equation I:

// S = a(1 − rⁿ)/(1 − r) if r != 1
// S = a*n if r = 1

function geometricSum(a, r, n) {
  if (r === 1) {
    return a * n;
  } else {
    return (a * (1 - Math.pow(r, n))) / (1 - r);
  }
}

console.log(geometricSum(5, 2, 3));
// OUTPUT: 35


















// ####################### //

console.log("\nQUES 7");
// QUES 7: Write the following complex mathematical equation II

// m(a, b) = (2√a + √b) / (a + b + 1). Round off value to 3 decimal places.

function m(a, b) {
  var res = (2 * Math.sqrt(a) + Math.sqrt(b)) / (a + b + 1);
  return Math.round(res * 1000) / 1000;
}

console.log(m(4, 9));
// OUTPUT: 0.667














// ####################### //
console.log("\nQUES 8");
// QUES 8: Write a function that returns the product of its digits.
// Example: productDigits(123) should return 6 (1*2*3)

// traditional way:
function productDigits(num) {
  let product = 1;
  while (num > 0) {
    product *= num % 10;
    num = Math.floor(num / 10);
  }
  return product;
}

console.log(productDigits(123)); // OUTPUT: 6

// [EXTRA] using reduce
function productDigits(num) {
  return num
    .toString()
    .split("")
    .reduce((acc, digit) => acc * parseInt(digit), 1);
}

// MORE INFO on reduce:
//developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce

// STEP BY STEP EXPLANATION:
// num is 123, then num.toString() yields "123"
// "123".split("") results in ["1", "2", "3"]
// acc (Accumulator): Holds the ongoing product; digit: The current character from the array; parseInt(digit: Converts the character back to a number.
// So, Initial Value: 1, since multiplying by 1 doesn't change the product.
// First Iteration: acc = 1, digit = "1" → acc * parseInt("1") = 1 * 1 = 1
// Second Iteration: acc = 1, digit = "2" → 1 * 2 = 2
// Third Iteration: acc = 2, digit = "3" → 2 * 3 = 6

// ####################### //

https: console.log("\nQUES 9");
// [TRY IT YOURSELF] QUES 9: Write a single function convert(tempStr) that takes a string like "100C" or "212F" and returns the converted value with the opposite unit (e.g. "212F" → "100C"
// HINT: F = (C * 9) / 5 + 32 ; C = (F - 32) * 5) / 9

// traditional way:
function convert(tempStr) {
  const unit = tempStr.slice(-1);
  const value = parseFloat(tempStr);

  if (unit === "C") {
    return ((value * 9) / 5 + 32).toFixed(2) + "F";
  } else {
    return (((value - 32) * 5) / 9).toFixed(2) + "C";
  }
}

// TEST CASES:
console.log(convert("100C")); // OUTPUT: "212.00F"
console.log(convert("212F")); // OUTPUT: "100.00C"

// [EXTRA] using ternary operator
function convert(t_str) {
  const val = parseFloat(t_str);

  return t_str.endsWith("C")
    ? ((val * 9) / 5 + 32).toFixed(2) + "F"
    : (((val - 32) * 5) / 9).toFixed(2) + "C";
}








// ####################### //

console.log("\n\nQUES 10");
// QUES 10: Given a log in the form of a string "error:code=500;user=alice;msg=fail", parse it and return the extracted values in the form of an object { code: "500", user: "alice", msg: "fail"}.
// HINT: Observe a common separator `;`


function parseLog(log) {
  
  // First, split the log on ":" to remove the status form the log 

  const [, data] = log.split(":"); // discard "error", keep the rest

  const pairs = data.split(";");
  const result = {};

  for (let pair of pairs) {
    const [key, value] = pair.split("=");
    result[key] = value;
  }

  return result;
}

// TEST CASES:
console.log(parseLog("error:code=500;user=alice;msg=fail"));
// OUTPUT: { code: "500", user: "alice", msg: "fail" }











// ####################### //
console.log("\nQUES 11");
//QUES 11: Given a random string first remove the whitespaces from the edges. Then return no. of vowels, no. of consonants, no. of digits, no. of special characters in the string.
// reference doc: https://www.w3schools.com/js/js_regexp.asp

function analyzeString(str) {
  str = str.trim();
  const vowels = str.match(/[aeiou]/gi) || [];
  const consonants = str.match(/[bcdfghjklmnpqrstvwxyz]/gi) || [];
  const digits = str.match(/\d/g) || [];
  const specialChars = str.match(/[^a-zA-Z0-9]/g) || [];

  return {
    vowels: vowels.length,
    consonants: consonants.length,
    digits: digits.length,
    specialChars: specialChars.length,
  };
}

console.log(analyzeString("  Hello World! 1234 @#$% "));
// OUTPUT: { vowels: 3, consonants: 7, digits: 4, specialChars: 5 }


















// ####################### //
console.log("\n\nEXTRA");
//[EXTRA] QUES: Extract hashtags from "#foo #bar baz #qux"
// Example: extract("#foo #bar baz #qux") => ["#foo", "#bar", "#qux"]

function extractTags(s) {
  return s.match(/#\w+/g) || [];
}
console.log(extractTags("#foo #bar baz #qux"));
// OUTPUT: ["#foo", "#bar", "#qux"]



//[EXTRA] QUES:  Check if Matrix is Diagonal Matrix
// Example:
// [1, 0, 0], [0, 2, 0], [0, 0, 3] ]) = true
// [1, 0, 0], [0, 2, 3], [0, 0, 3] ]) = false



// [EXTRA] QUES: Write a code to swap two variables a and b without using a temporary third variable.

// HINT 1: [a, b] = [b, a];
// Alternative (arithmetic way)
// a = a + b;
// b = a - b;
// a = a - b;

// ####################### //
