// Day 1 of 7
// JavaScript Workshop by Code for change and ITA.

console.log( "Hello World!!" ); // Equivalent to printf()

var friend1 = 'Jasmine'; // Variables can be redeclared, and values can be changed
let friend2 = 'Titi'; // Variables CAN'T be redeclared, and values can be changed
const friend3 = 'Pilli'; // Variables CAN'T be redeclared, and values CAN'T be changed

// It is recommended to use "const" for declaring variables

// Array is a collection of datas.
// JS array can store values of different data structures

const friends = [ 'Jasmine' , 'Titi' , 3.14 , 12 , true , { Name: "Prashant" , Age: 20 , Hobby: "ARTTT"} ]; 
// Above is an array having multiple data structures


const name = "Prashant";
const age = 20;
const address = "Dharan";
// Above datas can be linked to a person/can be grouped. In this scene, we can use "OBJECT"

// Object

// Objects have key values pair.

const Me = {
    Name : "Prashant",
    age : 20,
    address : "Dharan"
}
// "Me" is an Object

console.log( Me.Name ); // Accessing a value of the "Name" key form "Me" object
