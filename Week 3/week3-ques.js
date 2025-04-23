


console.log("\nQUES 1");
// QUES 1: What’s the difference between `var`, `let`, and `const` when declaring a variable?

// SOLN:??




function foo() {
  if (true) {
    var x = 1;
    let y = 2;
    const z = 3;
  }
  console.log(x);
  console.log(y);
  console.log(z);
}
foo();

// OUTPUT: ??



// ####################### //
console.log("\nQUES 2");
//QUES 2: Guess the output:
var x = 5;
console.log(x);
x = 10;
console.log(x);

// OUTPUT: ??

const z = 3;
console.log(z);
z = 4;
console.log(z);

// OUTPUT: ??



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

// OUTPUT: ??



// ####################### //

console.log("\nQUES 4");
// QUES 4: Write a function which random integer between 0 and N
function randomInt(N) {
  // logic
}

console.log(randomInt(10));
// OUTPUT: random integer between 0 and 10 [0, 10)



// ####################### //

console.log("\nQUES 5");
// QUES 5: Write a function that adds a and b and stores the `sum`. Then subtracts a `random integter` between a and b from the `sum` and returns the result. NOTE: a<=b.

function add(a, b) {
  // logic
}

console.log(add(5, 10));
// OUTPUT: random number between 0 and 15



// ####################### //

console.log("\nQUES 6");
// QUES 6: Write the following complex mathematical equation I:

// S = a(1 − rⁿ)/(1 − r) if r != 1
// S = a*n if r = 1

function geometricSum(a, r, n) {
  //logic
}

console.log(geometricSum(5, 2, 3));
// OUTPUT: 35



// ####################### //

console.log("\nQUES 7");
// QUES 7: Write the following complex mathematical equation II

// m(a, b) = (2√a + √b) / (a + b + 1). Round off value to 3 decimal places.

function m(a, b) {
  //logic
}

console.log(m(4, 9));
// OUTPUT: 0.667



// ####################### //
console.log("\nQUES 8");
// QUES 8: Write a function that returns the product of its digits.
// Example: productDigits(123) should return 6 (1*2*3)

// traditional way:
function productDigits(num) {
  //logic
}


console.log(productDigits(123)); // OUTPUT: 6








// [EXTRA] using reduce
function productDigits(num) {
  return num
    .toString()
    .split("")
    .reduce((acc, digit) => acc * parseInt(digit), 1);
}


// reduce(function, initaliser)


// ####################### //

console.log("\nQUES 9");
// QUES 9: Write a single function convert(tempStr) that takes a string like "100C" or "212F" and returns the converted value with the opposite unit (e.g. "212F" → "100C"
// HINT: F = (C * 9) / 5 + 32 ; C = (F - 32) * 5) / 9

// traditional way:
function convert(tempStr) {
  // logic
}

// TEST CASES:
console.log(convert("100C")); // OUTPUT: "212.00F"
console.log(convert("212F")); // OUTPUT: "100.00C"

// [EXTRA] using ternary operator






// ####################### //

console.log("\n\nQUES 10");
// QUES 10: Given a log in the form of a string "error:code=500;user=alice;msg=fail", parse it and return the extracted values in the form of an object { code: "500", user: "alice", msg: "fail"}.
// HINT: Observe a common separator `;`

function parseLog(log) {
  //logic
}

// TEST CASES:
console.log(parseLog("error:code=500;user=alice;msg=fail"));
// OUTPUT: { code: "500", user: "alice", msg: "fail" }




// ####################### //
console.log("\nQUES 11");
//QUES 11: Given a random string first remove the whitespaces from the edges. Then return no. of vowels, no. of consonants, no. of digits, no. of special characters in the string.
// reference doc: https://www.w3schools.com/js/js_regexp.asp

function analyzeString(str) {
  //logic
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
