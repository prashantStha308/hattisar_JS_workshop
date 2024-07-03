// Day 2 of 7
// JavaScript Workshop by Code for change and ITA.



const days = [ 'Sunday' , 'Monday' , 'Tuesday' , 'Wednesday' ];

console.log( days[2] );

// variable inside a class is called " Property "

// Function inside a function is called "Method"

// arr.lenght   , here, "length" is a property

// arr.push()   , here "push()" is a method

// push() inserts values at the last of the array

days.shift(); // deletes element from the head of array
days.unshift('Hello'); // inserts element at the head of array

console.log( days );


let slicedDays = days.slice(1,3);
console.log( slicedDays );

// slice deletes datas starting from an index till the element just before the end index.
// Splice returns a value. So, it must be stored in a variable


days.splice( 3,1,'bye' );

// splice deletes x number of items starting from an index "I" and replaces them with another value.
// Synyax: array.splice( I , x , 'Replace1':string , replace2 : number,.... );

console.log(days);

const data = [ 1,2,3,4,5,6 ];

data.splice( 1,3, 'hello','bye','world' );
console.log(data);

const vowels = [ 'm' , 'a' , 'n' , 'i' , 's' , 'h' ];

vowels.splice( 0,6, 13,1,14,9,19,8 );

console.log(vowels);

// Splice deletes datas and replaces them

const text = "I am Prashant Shrestha";
const splittedTest = text.split( " " ); //Splits text wherever " " exits

console.log( splittedTest );

const text2 = "I1am1Prashant1Shrestha";
const splittedTest2 = text2.split("1"); //Splits text wherever "1" exits

console.log(splittedTest2);

const language = [ 'Js', 'php' ,'i'];

language.splice(1,0,'html'); // Inserting an element at the desired location in an array

console.log(language);

// Object in JS


// const person = {
//     name : "Prashant",
//     nationality = 'Nepali',
//     address : "Dharan"
// };


const person = Object.freeze({  //Doesn't let the object be ediated later in code

    name : "Prashant",
    address : "Dharan"
});


console.log( person.address ); // using dot operator to access object's key

console.log( person['address'] ); // using brackets to access objec'ts key


console.log( Object.keys(person) ); //Displays the keys inside an object
console.log( Object.values(person) ); //Displays the values inside an object




const datas = {
    name : [ 'Manish' , 'Pranjal' ],
}; //Array inside an Object

datas.name.push('Sanjeev'); //inserting an element in an array inside an object

console.log(datas);

const test = [
    {
        name : "Manish"
    },
    {
        name: "Pranjal"
    }
]; // Array of Objects

test.push( { name : "Sanjeev" } ); // inserting object inside an array

// let newName = {name: "Sanjeev"};
// test.push(newName);

console.log( test );


const test2 = {
    name: [ 'Manish' , 'Pranjal', 'Sanjeev' ]
};

test2.name.splice(0,3,1,2,3);

console.log(test2);

// End of Day 2