// Day 3 of 7
// JavaScript Workshop by Code for change and ITA.

const isRaining = true;

if( isRaining ){
    console.log( "Carry Umbrella" );
}else{
    console.log( "Don't carry Umbrella" );
}

const age = 21;

if ( age > 18 ){
    console.log( "Can vote" );
}else{
    console.log("Can't vote");
}

const age2 = "21";

if( age == 21 ){
    console.log( "age is 21" );
}else if( age === 21 ){ // Strict equals to operator, checks values as well as data type
    console.log( "age is not 21" );
}

// Ternary operator

const result = isRaining ? "Carry Umbrella" : "Don't carry Umbrella";

// const var = ( Condition) ? "True Statuement" : "False Statement"

console.log( result );



isRaining && console.log( "Carry Umbrella" ); // Short Circuit

// if && bhanda aagadi  ko true xa bhnae run hunxa, else hunna

// statement && expression

const temprature = 27;

if( temprature > 30 ){
    console.log("Hot");
}else if( temprature > 20 ){
    console.log( "Moderate" );
}else{
    console.log( "Cool" );
}


const grade = 78;

if( grade >= 80 ){
    console.log( "A" );
}else if( grade >= 70 ){
    console.log( "B+" );
}else if( grade >= 60 ){
    console.log( "B" );
}else{
    console.log("Fail");
}

const days = [ 'Sunday' , 'Monday' , 'Tuesday' , 'Wednesday' , 'Thursday' , 'Friday' , 'Saturday' ];

for( let i = 0 ; i < days.length ; i++ ){

    console.log( days[i] );

}
console.log( "For of loop below:" );

for( let day of days ){
    console.log(day);
}
// for of loop le jaba samman array ma element xa, taba samman variable ma value assign garxa

const data = {
    name : "Prashant",
    age : 20,
    address : "dharan",
};

console.log( "For in loop below" );

for( let xyz in data ){
    console.log( xyz + " is " + data[xyz] );
}

// Above is for in loop which is used to loop inside an object. Here,use of brackets is necesssary to access the data of the keys


// function Section

function add(a,b){  //regular function
    return a+b;
}

console.log( add( 1,2 ) );

const add2 = function( a,b ){ //named regular function
    console.log(a+b)
}

add2(2,6);


const add3 = (a,b) => {
    console.log(a+b);
}

add3(32,7);

()=>{
    console.log("This is an anonmyous function");
}


// function name(x,y) here x and y are parameters
// name(a,b) here a and b are arguements

const numbers = [ 1,2,3,4,5 ];

function printNumbers( number ){

    for( let i of number ){
        console.log(i);
    }

}

printNumbers(numbers);

function makeSquare( number ){
    for( let i of number ){
        console.log( i*i );
    }
}

console.log("Squared array");

makeSquare(numbers);

const userData = {
    status : 200,
    message : "Code found",
    code : [{
        _id : "668510da18d90581711b6292",
        text : "test\n",
        userId : "f959757",
        title : "test",
        ipAddress : "49.244.110.12",
        createdAt : "2024-07-03T08:50:34.704Z" 
    }]
};

// The above object contains and array of Object

function accessObject(userData , type){
    console.log( type + " " + userData );
}

accessObject( userData.code[0].userId , "UserId");
accessObject( userData.code[0].title , "title");
accessObject( userData.code[0].ipAddress , "IP Address");

