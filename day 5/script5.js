// Day 3 of 7
// JavaScript Workshop by Code for change and ITA.

// Redude Higher order function
// Reduce is used to perform calculation in numeric datas

const num = [ 1,2,3,4,5 ];

// reduce takes in two values. First one is called accumulator and the second one is the value we want to pass

 const sum = num.reduce( ( accumulator , num )=>{ 

    return num + accumulator;

},0 );


console.log(sum);

const products = [
    {
        product : 'A',
        price : 200,
        qty : 2
    },
    {
        product : 'B',
        price : 300,
        qty : 7
    },
    {
        product : 'A',
        price : 1100,
        qty : 8
    },
]

const totalPrice = products.reduce( ( acc , key )=>{
    acc.totalPrice = key.price * key.qty + acc.totalPrice;
    acc.totalQty = key.qty + acc.totalQty;
    return acc;
}, {totalPrice: 0, totalQty : 0});

console.log(totalPrice);

const reviews = [
    {
        rating : 2
    },
    {
        rating : 4
    },
    {
        rating : 5
    },
]

const calcAvg = function( reviews ){
    const totalRating = reviews.reduce( ( acc , key )=>{
        return key.rating + acc;
    },0 );
    const average = totalRating/reviews.length;
    console.log(average);
}
calcAvg(reviews);


// DOM = Document Object Model

