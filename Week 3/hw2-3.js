// The function testAccuracy is a helper function, do not modify
function testAccuracy(a,b) {
  return Math.round(Math.abs(a-b) * 100) / 100;
}

// Functions to be defined below.


/**
Returns a + s*b following the formula detailed in the instructions.

@return {number} a + s*b
*/
function computation1(a, b) {
  const u1 = 1 - Math.random(); // Do not modify, random number 1
  const u2 = Math.random(); // Do not modify, random number 2
  // fill in
  return;
}

/**
Returns d * exp(computation1(e,f)) as detailed in the instructions.

@return {number} d * exp(computation1(e,f))
*/
function computation2(a,b,c,d) {
  // fill in
  return;
}


/**
Returns \frac{exp(-a \cdot c)}{n} \sum_{i=0}^{n-1} \max(r_i -K,0) as detailed in the instructions

@return {number} 0 if d is less or equal to 0 and \frac{exp(-a \cdot c)}{n} \
sum_{i=0}^{n-1} \max(r_i -K,0) else
*/
function computation3(a,b,c,d,K,n) {
  // fill in
  return;
}



a = 0.03
b = 0.14
c = 1
d= 30
K= 30
n = 1000000
console.log(testAccuracy(computation3(a,b,c,d,K,n),2.1304))
// should print something very close or equal to 0

a = 0.99
b = 0.3
c = 4
d= -11
K= 18
n = 15643
console.log(testAccuracy(computation3(a,b,c,d,K,n),32))
// should print 32

a = 0.05
b = 0.18
c = 1.5
d= 60
K= 30
n = 10000000
console.log(testAccuracy(computation3(a,b,c,d,K,n),32.1683))
// should print should print something very close or equal to 0




/**
This function extracts from a given cookie
the 'value' corresponding to the 'name' "username".

For example, both of the following function calls return "bur=nett":
. extract_username("first_name=Sarah; last_name=Burnett; username=bur=nett");
. extract_username("username=bur=nett; first_name=Sarah; last_name=Burnett");

If the given cookie has no 'name' called "username",
then the function returns the empty string.

For example, we have
. extract_username("common_error=Sara; " + 
                   "another_one=Burnet; another=Sarah_Brunette") === "";

@param  {string} cookie : The cookie to extract information from.
@return {string} The 'value' corresponding to the 'name' "username";
                 the empty string if "username" is not a 'name'.
*/
function extract_username(cookie) {
  // fill in
}

console.log(extract_username("username=bur=nett; first_name=Sarah; last_name=Burnett"));


/**
 This function validates a username.
 A string should be printed to the console after the username is evaluated.
 It'll be determined acceptable or relavent username errors will be printed.
 String formatting details are outlined in hw2.pdf.

 @param  {string} username : The username to validate.
 */

function validate_username(username) {
  // fill in
}

validate_username(", ,=");
validate_username("Saraé"); 






// Do not modify after this line
module.exports = {
  computation3, extract_username, validate_username
}
