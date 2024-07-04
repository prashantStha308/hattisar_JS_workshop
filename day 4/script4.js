
// Day 3 of 7
// JavaScript Workshop by Code for change and ITA.

// Higher order functions and call back function
// getSomething( function(){ 
// } );
 //Callback function is passed to a function as an arguement. Here getSomething is a Higher order function

// getSomething( ()=>{ // getSomething is a higherorder function
// } );


// Some Higher order functions are below  

// forEach
// map
// filter
// reduce

const fruits = [ 'Apple' , 'Orange' , 'Orange' ];
// For each works only on array and doesn't work on objects
// fruits.forEach(function_name);


fruits.forEach(function(fruit){
    console.log(fruit); // prints each elemets of the fruits array
});

const nums = [1,2,3,4,5];
let newNum = [];

nums.forEach( (number)=>{ // as an arrow function
    newNum.push(number * number);
} );

console.log(newNum);

const data = [
    {
        firstName : "Manish",
        lastName : "Bashnet",
        address : "Itahari"
    },
    {
        firstName : "Jasmine",
        lastName : "Chhetry",
        address : "Dharan"
    },
    {
        firstName : "Prashant",
        lastName : "Shrestha",
        address : "Dharan",
    }
];

data.forEach( function(key){

    console.log( key.firstName + " " + key.lastName );

} );

// End of forEach

// Beginning of Map
// map can return the value of the array of an iteration

const num2 = [ 2,4,6,8 ];

const squaredNum2 = num2.map( (num)=>{ // as an arrow function. Returned data is stored in squaredNum2 in form of an array
    return num * num;
} );

console.log(squaredNum2);
//  The data returned by the map function is returned in an array form.
// The original data is not effected by map

const data2 = [
    {
        firstName : "Manish",
        lastName : "Bashnet",
        address : "Itahari"
    },
    {
        firstName : "Jasmine",
        lastName : "Chhetry",
        address : "Dharan"
    },
    {
        firstName : "Prashant",
        lastName : "Shrestha",
        address : "Dharan",
    }
];


const fullname =  data2.map((key)=>{
    return {
        fullname : key.firstName + " " + key.lastName,
    }
});

//  The above function returns the combinationof two object key values
console.log(fullname);

const number = [1,2,3,4,5];


const newObject = number.map( (nums)=>{
    return{
        text : 'A',
        number : nums
    }
} );
console.log(newObject);

const data3 = [
    {
        firstName : "Manish",
        lastName : "Bashnet",
        address : "Itahari"
    },
    {
        firstName : "Jasmine",
        lastName : "Chhetry",
        address : "Dharan"
    },
    {
        firstName : "Prashant",
        lastName : "Shrestha",
        address : "Dharan",
    }
];

const newArray = data3.map( (key)=>{
    return{
        ...key,  // ... is called spread operator
        fullname : key.firstName + " " + key.lastName
    }
} );

// Spread operator copies all the values of an array or an object

console.log(newArray);

// End of Maps


// Beginning of Filter
const numbers1 = [1,2,3,4,5,6,7,8,9,10]

const odds = numbers1.filter((num)=>{
    return num%2!==0
});
console.log(odds)

const greaterThan5 = numbers1.filter((num)=>{
    return num > 5
});
console.log(greaterThan5)


const books = [
    {
        title : "You can win",
        author : 'shiv khera',
        publishedAt : 2001
    },
    {
        title : "Think like a monk",
        author : 'Jay shetty',
        publishedAt : 2022
    },
    {
        title : "Cashflow quadrant",
        author : 'Robert T. Kiyosaki',
        publishedAt : 1909
    },
    {
        title : "You can win2",
        author : 'shiv khera',
        publishedAt : 1990
    },
    {
        title : "Think like a monk2",
        author : 'Jay shetty',
        publishedAt : 1999
    },
    {
        title : "Cashflow quadrant2",
        author : 'Robert T. Kiyosaki',
        publishedAt : 2010
    }
]

const laterThan2000 = books.filter( (key)=>{
    return key = key.publishedAt >2000;
} );

console.log(laterThan2000);

const file = [ "index.html", "app.js", "app.java" , "style.css" , "test.js" ];

const js = file.filter( (file)=>{
    return file.includes(".js");
} );
console.log(js);


const lastTask = [ 1,2,null,undefined,"Manish","haha", "hehe"];

const hasVal = lastTask.filter( (val)=>{
    return val != null && val != undefined;
} );

console.log(hasVal);



const lastData = [
    {
        name : "Manish",
        marks : 800,
        status : "pass"
    },
    {
        name : "Jasmine",
        marks : 999,
        status : "pass"
    },
    {
        name : "Prashant",
        marks : 650,
        status : "fail"
    },
    {
        name: "Anish",
        marks : 500,
        status : "fail"
    },
    {
        name : "Pranjal",
        marks : 900,
        status : "pass"
    },
    {
        name : "Bob",
        marks : 100,
        status : "fail"
    },
    {
        name : "Hari",
        marks : "550",
        status : "fail"
    },
    {
        name : "Shyam",
        marks : 600,
        status: "pass"
    },
    {
        name : "laxman",
        marks : 300,
        status : "fail"
    }
]

const newObject2 = lastData.filter( (key)=>{
    return key.marks > 500 && key.name.endsWith("sh") && key.status == "pass";
} );

console.log(newObject2);


// End of day 4