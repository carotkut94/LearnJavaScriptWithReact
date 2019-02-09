// var are scoped to function
// let are scoped to block only
// const are used to define constant and are block scoped

function sayHello() {
  for (let i = 0; i < 5; i++) {
    console.log(i);
  }
}
sayHello();

// Here we can see the x is constant and cannot be re assigned
// const x = 1
// x = 2

const person = {
  name: "Sidhant Rajora",
  walk: function() {
    console.log(this); // here this is not the same as 'this' in the java or c#
  }, // one way to create method in the object
  talk() {} // another way to do so
};

// one way to access object member
console.log(person.name);
// another way to achieve the same
console.log(person["name"]);

const targetMember = "name";
// this is how we can also do the same thing
console.log(person[targetMember]);

person.walk(); // calling this method from person
// in the above case you will see the expected result like getting the current onject in
// this.

// now lets create a constant and assign the reference of walk() method
const w = person.walk;
// and call it.
w();
// but by that way you will be getting the global window object inside 'this'

// we can always fix this problem

// every function in javascript is a object\

// by using bind we can solve the issue of dynamic nature of this, and will always
// return to binding method/object
const walk = person.walk.bind(person);
walk();

// Arrow function

// the normal way to calculate square of a number
const square = function(num) {
  return num * num;
};

console.log(square(12));

// using arrow function, same function becomes like this
const square2 = number => number * number;
console.log(square2(20));

// Another example use case of the same
const jobs = [
  { id: 1, isActive: true },
  { id: 2, isActive: false },
  { id: 3, isActive: true }
];

const activeJobs = jobs.filter(function(job) {
  return job.isActive;
});

console.log(activeJobs);

// less boiler plate in the code because of the =>
const acJobs = jobs.filter(job => job.isActive);
console.log(acJobs);

// Arrow function and this

const man = {
  talk() {
    setTimeout(function() {
      // here this will return the window object
      console.log("this", this);
    }, 2000);
  }
};

man.talk();

const man2 = {
  talk() {
    setTimeout(() => {
      // here this will return the this object with respect to man2 object
      // because of the binding of (arrow function) => with the current contextual object
      // rather then the global window
      console.log("this", this);
    }, 2000);
  }
};

man2.talk();

const colors = ["red", "green", "blue"];

// use of map function
// it looks ugly when we use + to concatenate the string
const colorItems = colors.map(color => "<li>" + color + "</li>");

// Another way to string interpolation using template literal
const colorLiteralItems = colors.map(color => `<li>${color}</li>`);
console.log(colors);
console.log(colorItems);
console.log(colorLiteralItems);

// Object destructuring

const address = {
  street: "Kumbha Marg",
  city: "Jaipur",
  country: "India"
};

// now suppose we have to assign the address members to separate variable
// then we will use the . operator, like -->

// var street = address.street;
// var city = address.city;
// var country = address.country;

// console.log(street, city, country);

// Another way around this

var { street, city, country } = address;
console.log(street, city, country);
