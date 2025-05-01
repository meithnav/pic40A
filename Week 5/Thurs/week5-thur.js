// ########################## //
// ########################## //

// PROTOTYPE: 

// - Prototype was introduced to the Object model to enable ""INHERITANCE"" in JS without using classes. 

// - When we `inherit` from parent classes, JS adds a [["Prototype"]]` attribute into the object that defines the default behaviour.

// - So, at its core, every object carries an internal link ""[[Prototype]]""  -> pointing to another object from which it borrows the properties and methods. 

// - Thus, every object type has a prototype in JS, even your pre-defined varaibles, links to the parent class it inherits its property from. If there's no parent then it links to empty "Object" classs which we saw in the previous discussion session. 

// - `__proto__` helps to access those methods in the [["Prototype"]]` attribute. So its just a getter or setter function for the methods. 

// - Remember: 
        // Function constructor ==> `prototype`
        // instance/object => `__proto__`


// - This “prototypal inheritance” lets you share behavior across many objects while still allowing individual objects to override or extend that behavior. 


// ########################## //

// Why Prototypes?
    // - Memory efficiency: Rather than "copying methods" onto each object instance, prototypes allow all instances to share a single method definition in memory.
    // - Dynamic behavior: You can "augment or modify" prototypes at "runtime", instantly updating behavior across all instances.
    // - Flexibility: Objects can inherit from any other object

// ########################## //

// - Setting or reading an object’s prototype can be done via Object.setPrototypeOf() and Object.getPrototypeOf(), or more historically via __proto__.
// - EXTRA: __proto__ is DEPRECATED!!
// - Use:
    // Object.getPrototypeOf();
    // Object.setPrototypeOf();

// - EXTRA: In JS object we can also see the `constructor` attribute. It only tells which parent it inherits its properties from. No other usecase.  


// ########################## //
// ########################## //


// Simple Example: 

function Person(name) {
    this.name = name;
  }
  Person.prototype.greet = function() {
    return `Hello, ${this.name}!`;
  };
  const alice = new Person('Alice');
  console.log(alice.greet()); // "Hello, Alice!"


// FLOW: 
    // - When you define function `Person(){}`, JS automatically gives Person a `prototype property` linking to `empty Object` containing the default constructor
    // - When you create an Instance using `new Person()`, the newly created object’s [[Prototype]] is set to `Person prototype` before the constructor runs

// Chain structure: ``alice → Person.prototype → Object.prototype → null`` 

// Shadowing: Typically in Inheritance, if alice had its own greet method, it would shadow Person.prototype.greet.





// ########################## //
// ########################## //

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


console.log("\n\n\n");



// ########################## //
// ########################## //
// QUES: 
    // 1. Define a `Person constructor` with its `greet` method.
    // 2. Define the `Student constructor`, inheriting from `Person` with this to set the name.
    // 3. Set Student.prototype = Object.create(Person.prototype).
    // 4. Remember to restore back the `constructor` of the Prototype back to Student.
    // 5. Add a new attribute `subject and a `method to the Student => `study` that displays message `Studying ${this.subject}`.



// 1. Base constructor
function Person(name) {
    this.name = name;
  }
  Person.prototype.greet = function() {
    return `Hello, ${this.name}!`;
  };
  
  // 2. Subclass constructor
  function Student(name, subject) {
    Person.call(this, name); // inherit Person
    this.subject = subject; // new property
  }
  
  // 3. Inherit prototype
  Student.prototype = Object.create(Person.prototype); // creates a prototype chain so instances of Student delegate to Person.prototype
  
  // 4. Correct constructor reference
  Student.prototype.constructor = Student; // Restoring the constructor to Student as its the parent creating it 
  
  // 5. Add new methods for Students. (Add-ons)
  Student.prototype.study = function() {
    return `Studying ${this.subject}`;
  };
  
  // Usage
  const bob = new Student('Bob', 'Math');
  console.log(bob.greet()); // "Hello, Bob!"
  console.log(bob.study()); // "Studying Math"
  


















