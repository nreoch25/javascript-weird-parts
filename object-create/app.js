// Object.create pollyfill
if(!Object.create) {
  Object.create = function(o) {
    if(arguments.length > 1) {
      throw new Error("Object.create implementation only accepts the first parameter");
    }
    function F() {
      F.prototype = o;
      return new F();
    }
  }
}

var person = {
  firstname: "Default",
  lastname: "Default",
  greet: function() {
    return "Hi " + this.firstname;
  }
};

// object.create creates the object with the argument as the prototype
// This is prototypal inheritance. Create a new object with another objects prototype
var john = Object.create(person);
john.firstname = "John";
john.lastname = "Doe";
if(john.hasOwnProperty("firstname")) {
  console.log("HEY");
}
console.log(john);
