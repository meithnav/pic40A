<!-- 

### Motivation: Limitations of HTML & JavaScript ### 

- Web pages built solely with HTML are `static` and cannot interact with `databases` without reloading the entire page. 
- JavaScript adds `client‑side interactivity` but cannot securely access server resources or perform database operations directly in the browser  


- PHP simplifies the creation of `dynamic web content` -> track visitors on his personal site, and connect easily to databases—all features that HTML and JavaScript alone couldn’t provide

### Key Features of PHP ###
- Embedded in HTML: PHP code can be mixed directly with HTML markup, making it easy to generate dynamic page content
- Wide Database Support: Built‑in extensions for MySQL, PostgreSQL, SQLite, and more
- Server‑Side Execution: Code runs on the server, producing HTML sent to the client—enhancing security and performance
- Open Source & Cross‑Platform: Free to use on Linux, Windows, macOS
- PHP is a Loosely Typed Language: we don not need to specify the data-type of the variables


### INSTALLATION ###

The official PHP website (PHP.net) has installation instructions for PHP:
https://www.php.net/manual/en/install.php


For simplicity we use online editor: 
https://www.w3schools.com/php/phptryit.asp?filename=tryphp_compiler



### SYNTAX ###
A PHP script can be placed anywhere in the document and must be wrapped within: 

<?php
    // PHP code goes here
?>

- PHP statements end with a semicolon (;).

-->


<!DOCTYPE html>
<html>
<body>
 
<!-- 
PRINT STATEMENT: 
    - echo: Faster, can output multiple comma‑separated items.
    - print: Returns 1 (useful in expressions).
    - echo is faster than print

-->
<?php
echo "Hello, World!";         // Basic output
print "<p>PHP is fun!</p>";   // Can include HTML tags
?>


<!-- 
VARIABLES 
    - Variables start with `$`
    - PHP Case Sensitivity: $color, $COLOR, and $coLOR are all different variables. 
-->
<?php 
$x = 5;
$z = 10; 
$a = $x + $z;

$y = "John";

echo "I love $txt!"; // interpolation -> use a single string with the variable included
echo "My name is" . $txt . "!"; // concatenation -> use 2 different strings with `.` to concate 

// EXTRA: 
// - When using double quotes, variables can be inserted to the string as in the example above.
// - When using single quotes, variables have to be inserted using the . operator, like this:


// STRING METOHDS: 

// Length of string
echo strlen("Hello world!");

// word count 
echo str_word_count("Hello world!");

// searches for a specific text within a string
echo strpos("Hello world!", "world");

// reverses the string 
echo strrev($y);

// Split the string into an array.
$x = "Hello World!";
$y = explode(" ", $x); // splits on whitespace 

// concatenate using `.`
$x = "Hello";
$y = "World";
$z = $x . $y;
// $z = "$x$y"; // same thing

echo $z;
?>

<!-- 
TYPE-CASTING: 
 - String
 - Integer
 - Float
 - Boolean
 - Array
 - Object
 - NULL
-->

<?php 
$a = 5;       // Integer
$b = 5.34;    // Float
$c = 0;       // Integer
$d = -1;      // Integer
$e = 0.1;     // Float
$f = "hello"; // String
$g = "";      // String
$h = true;    // Boolean
$i = NULL;    // NULL



$b_int = (int) $b;
$a_float = (float) $a;
$a_arr = (array) $a;

// To cast to NULL, use the `unset` statement
$a = (unset) $a;
?>



<!-- 
CONDITIONAL STATEMENTS:
- Write a snippet that first stores the `age` of the user and displays Baby (0-10), Teen (12-17) and Adult(>18). 
-->
<?php 
// write code here.
$age = 10; 

if ($age >= 0 && $age <= 10) {
    echo "Baby";
  } elseif ($age >= 12 && $age <= 17) {
    echo "Teen";
  } else {
    echo "Adult";
  }


// Improved version:
if ($age >= 0 && $age <= 10) {
    echo "Baby";
  } elseif ($age < 18) {
    echo "Teen";
  } else {
    echo "Adult";
  }
?>



<!-- 
LOOPS 
-->
<?php 

// 1) for loop: print numbers 0-4
  for ($i = 0; $i < 5; $i++) {
    echo $i;<
  }


// 2) while loop
$i = 0;
while ($i < 5) {
  echo $i++;
}

// 3) foreach loop (arrays)
$colors = ["red", "green", "blue"];
foreach ($colors as $c) {
  echo $c;
}


// QUES: Write a `for` loop to print the aggregated sum of numbers 1 through 5 on separate lines

//CODE HERE: 
$sum = 0;
for ($i = 1; $i <= 5; $i++) {
  $sum += $i;
  echo "Sum after adding $i: $sum<br>";
}

// QUES: Stop, and jump to the next iteration if $i is 3:
// CODE HERE:
$i = 0;
while ($i < 6) {
  $i++;
  if ($i == 3) continue;
  echo $i;
}
?>



<!-- 
FUNCTIONS:
-->
<?php 
function greet($name) {
    return "Hello, $name!";
}
echo greet("Meith");  // Outputs: Hello, Meith!


// Variable Number of Arguments
// By using the `...` (spread) operator in front of the function parameter, the function accepts an unknown number of arguments.

function sumMyNumbers(...$args) {
    $n = 0;
    $len = count($args);
    for($i = 0; $i < $len; $i++) {
      $n += $args[$i];
    }
    return $n;
  }
  
  $a = sumMyNumbers(5, 2, 6, 2, 7, 7);
  echo $a;


  // QUES: Write a function where a person can enter its first name and multiple last name. 

  function myFamily($lastname, ...$firstnames) {
    $txt = "";
    foreach ($firstnames as $fname) {
      $txt .= "Hi, $fname $lastname.<br>";
    }
    return $txt;
  }
  
  $a = myFamily("Meith", "Nav", "Navlakha", "Bruin");
  echo $a;


//   NOTE:   function myFamily(...$firstname, $lastname) is wrong. Why??


// QUES: Write a PHP function that takes a paragraph of text and returns the longest word.

//CODE HERE
function findLongestWord($para) {
  
    // Split paragraph into words using whitespace
    // preg_split: https://www.php.net/manual/en/function.preg-split.php
    $words = preg_split('/\s+/', $para);
  
    $longest = '';
    foreach ($words as $word) {
      if (strlen($word) > strlen($longest)) {
        $longest = $word;
      }
    }
    return $longest;
  }

?>


<!-- NEXT CLASS HTML forms with PHP -->


</body>
</html>