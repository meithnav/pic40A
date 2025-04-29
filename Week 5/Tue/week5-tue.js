// Object Oriented JS => REFERENCE: https://www.youtube.com/watch?v=4l3bTDlT6ZI&list=PL4cUxeGkcC9i5yvDkJgt60vNVWffpblB7


// ######################### //
// ########################## //
// JS decalares `objects`. We have seen classes and objects in C++ and Python. Consider class as a container/blueprint that wraps data variables and methods together. Objects are instantiation of those classes (which on a higher level is like any variable declaration). 


// IN JSX, all the variables are objects(generally). If you have noticed, all the variables come with built-in functions, what are these? Methods of the variables which was defined in their class wrappers under the hood. 

// Let's see how we can make normal objects for pre-defined classes. 

var arr = new Array(); //instantiated object 
arr[0] = 10; // initialisation of values
arr[1] = "Meith"; 



// Making objects in JS: 
var custCar = new Object(); // made a blank object that has no class variables and methods. Need to add it manually!!

// then add attributes manually
custCar.maxSpeed = 100;
custCar.brand = "16A";
custCar.accelerate = function (boost) {
    custCar.maxSpeed += boost;
    console.log("New Spped : ", this.maxSpeed, ", Car: ", this.brand );
};

// Try to access these features of the object now. 
custCar.accelerate(10);




// Altenatively, shorthand notation 
var arr2 = []; //instantiated object 

var custCar2 = {
    maxSpeed: 10, 
    brand : "PIC", 
    accelerate : function (boost) {
    this.maxSpeed += boost;
    console.log("New Spped : ", this.maxSpeed, ", Car: ", this.brand );}
};

custCar2.accelerate(50);

// ########################### //
// ########################### //

// What is `this` ? Why is it used ?

// `this` refers to the current `object` that we are referring to. It has benefits, especially when we see the object-orientied approach. 


// For simplicity, if I were to copy my same object of CustCar2 to make a new object CustCar3, then I will have to manually make all the changes and replace CustCar2 -> custCar3 everywhere. What if its a huge class!!

// var custCar2 = {
//     maxSpeed: 10, 
//     brand : "PIC", 
//     accelerate : function (boost) {
//         custCar2.maxSpeed += boost;
//         console.log("New Spped : ", custCar2.maxSpeed);}
// };


// var custCar3 = {
//     maxSpeed: 50, 
//     brand : "PIC", 
//     accelerate : function (boost) {
//         custCar3.maxSpeed += boost;
//         console.log("New Spped : ", custCar2.maxSpeed);}
// };

// See i forgot to replace it at the console and I am getting unexpected results. Good luck debugging it :) 

// Thus, `this` helps sort these issues where this will directly refer to the current object and its entire context we are considering. 



// Also, is this efficient way of writing objects? Aren't we repeating same code everytime? Consider you are Instagram and you have billions of users. Will you manually create each user object like this? 

// How to optimise? 






// We have seen class in CPP and Python. Something of that sort. In JSX, we have Constructor functions. 


var arr3 = new Array(); // here we are instantiating Array object by calling its constructor function. 


// Similarly we will make our constructor function to be able to make objects like the Array.  

// var custCar3 = new Car(); // first need to define Car constructor function.

var CustCar = function(maxSpeed, brand){
    this.maxSpeed = maxSpeed;
    this.brand = brand;
    
    this.accelerate = function (boost) {
        this.maxSpeed += boost;
        console.log("New Speed : ", this.maxSpeed, ", Car: ", this.brand );
    }

};


// Same thing. This structure aligns to other programming languages. 
// function CustCar(maxSpeed, brand){
//     this.maxSpeed = maxSpeed;
//     this.brand = brand;
//     this.accelerate = function (boost) {
//     this.maxSpeed += boost;
//     console.log("New Spped : ", this.maxSpeed, ", Car: ", this.brand );}

// };


var car1 = new CustCar(10, "10A");
var car2 = new CustCar(100, "40A");
car1.accelerate(30);
car2.accelerate(0); 


console.log("\n\n\n");


// ########################## //
// ########################## //

// JS CLASSES: Later in ES6 => we have class but internally it still employs prototype of JS. We will see proto later... 

class User{
    constructor(n, email, age){
        this.name = n;
        this.email=email;
        this.age=age;
    }

    welcome(){
        console.log("Hii ", this.name);
    }

    logout(){
        console.log("Logging out.. \nBye ", this.name)
    }
   
}

var meith = new User("Meith", "mnav@pic.edu", 35);
var jacob = new User("Jacob", "j@pic.edu", 22);

meith.welcome();
jacob.welcome();
jacob.logout();
meith.logout();



// Inheritance: 
// Lets extend to have 2 types of user Admin and User. We want some extra functionality for the admin. 

class Admin extends User{ // it copies all the properties of User 

    // new functionalities: 
    announcement(){
        console.log("Hello All...");
    }

    retrieveUser(userID){
        console.log("Can do any opersation on this user!!", userID);
    }
}


var adrien = new Admin("Adrien", "ad@pic.edu", 30);

adrien.announcement();
// meith.announcement(); // error 



// This still has a problem?? Any idea? 



// See it solves the basic problem of repetitive code. We only have 1 function that creates all the object. But here, when we instantiate object everytime, we also associate the methods again to each object. Its repetitive. 

// We should have a common area for all the methods of the same class, which again makes sense because we call class as a blueprint!! Thats why we have prototype concept.

console.log("\n\n\n");
// ########################## //
// ########################## //

// PROTOTYPE: 

// Every object type has a prototype in JS, even your pre-defined varaibles. 
// All the methods are present within the __proto__ wrapper. So that the methods are not repeated again and again. 

// Benefits seen in Inheritance. When we inherit from parent classes, JS adds a [["Prototype"]]` attribute into the object that defines the default behaviour. 
// `__proto__` helps to access those methods in the [["Prototype"]]` attribute. So its just a getter or setter function for the methods. 

// Prototype should be considered more like `link to join two objects`


// EXTRA: In JS object we can also see the `constructor` attribute. It only tells which psarent it inherits its properties from. No other usecase.  


// Remember: 
    // Function constructor ==> `prototype` property
    // instance => `__proto__`


    function User2(n, email, age){
        this.name = n;
        this.email=email;
        this.age=age;
    }
    
    
    User2.prototype.welcome = function(){
        console.log("Hii ", this.name);
    }
    
    User2.prototype.logout = function(){
    console.log("Logging out.. \nBye ", this.name)
    }
    
    
    var meith2 = new User2("Meith", "mnav@pic.edu", 35);
    var jacob2 = new User2("Jacob", "j@pic.edu", 22);
    
    meith2.welcome();
    jacob2.welcome();
    jacob2.logout();
    meith2.logout();
    
    
// Now let's have our admin: 
function Admin2(...args){ // ...args is called destructuring. We will take the exact argument we get during the function call and store it in the array. 

    // console.log(args); // check how it looks => [n, email, age]
    // User2.apply(this, args);
    User2.call(this); // same thing. 

     
}

Admin2.prototype = Object.create(User2.prototype); // inherit the user prototype. `create` helps to link the Admin2 with User2. 

// add-on functionalities:
Admin2.prototype.announcement = function(){
    console.log("Hello All...");
}

Admin2.prototype.retrieveUser = function(userID){
    console.log("Can do any opersation on this user!!", userID);
}


var adrien2 = new Admin2("adrien", "ad@pic.edu", 30);


console.log("\n Class Prototype === obj's __proto__", Admin2.prototype === adrien2.__proto__);

// console.log("\n Admin Class: \n", Admin2.prototype);
// console.log("\n Adrien proto object: \n", adrien2.__proto__);

console.log("\n\n\n");


// EXTRA: __proto__ is DEPRECATED!!
// Use:
    // Object.getPrototypeOf();
    // Object.setPrototypeOf();



