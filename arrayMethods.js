//  Part I

// ----------------------------
// write your own forEach() function that takes an array and a function
// ----------------------------

function forEach(array, callback){
    for (var i = 0; i < array.length; i++){
        callback(array[i])
    }
}

// tests
// ---
var total = 1
forEach([1, 2, 3, 4], function(a){ total *= a; })
console.assert(total === 24)

// ----------------------------
// write your own reduce()
// that takes an array and a function
// ----------------------------

function reduce(array, callback){
    var accumulator = array[0] 
    for(var i = 1; i < array.length; i++){
        accumulator = callback(accumulator,array[i])
    }
    return accumulator
}

// tests
// ---
console.assert(
    reduce([1, 2, 3, 4], function(accumulator, element){ return accumulator * element }) === 24
)
console.assert(
    reduce([1, 2, 3, 4], function(accumulator, element){ return accumulator + element }) === 10
)



// ----------------------------
// write your own map()
// that takes an array and a function
// ----------------------------

function map(array, callback){
    // YOUR CODE HERE
    var mapArr = []
    for(var i = 0; i < array.length; i++){
        mapArr.push(callback(array[i]))
    }
    return mapArr
}

// tests
// ---
var squares = map([1, 2, 3, 4], function(v){ return v*v })
console.assert(squares[0] === 1)
console.assert(squares[1] === 4)
console.assert(squares[2] === 9)
console.assert(squares[3] === 16)

// ----------------------------
// write your own filter()
// that takes an array and a function
// ----------------------------

function filter(array, callback){
    var filterArr =[]
    for(var i = 0; i < array.length; i++){
        if(callback(array[i]))
        filterArr.push(array[i])
    }
    return filterArr
}

// tests
// ---
var evens = filter([1, 2, 3, 4], function(v){ return v%2 === 0 })
console.assert(evens[0] === 2)
console.assert(evens[1] === 4)


// ----------------------------
// using Array.sort(), sort the following array
// of people by name
// ----------------------------

var people = [
    {name:"Matt", alma_mater:"Univ of Texas - Austin"},
    {name:"Brian", alma_mater:"Texas A&M"},
    {name:"Jesse", alma_mater:"Univ of Texas - Austin"},
    {name:"Justin", alma_mater:"Univ of Florida"}
]

people.sort(function(a, b){
    if(a.name > b.name){
       return 1
   }
   if (a.name < b.name){
       return -1
   }
   
    return 0
    
})

// tests
// ---
console.assert(people[0].name === "Brian")
console.assert(people[1].name === "Jesse")
console.assert(people[2].name === "Justin")

// ----------------------------
// Using Array.map(), Array.filter(), and Array.sort() on the
// array below:
// - filter for customers whose first-names start with 'J',
// - map to their fullnames,
// - and then sort the items alphabetically by fullname
// ----------------------------

var customers = [
    { first: 'Joe', last: 'Blogs'},
    { first: 'John', last: 'Smith'},
    { first: 'Dave', last: 'Jones'},
    { first: 'Jack', last: 'White'}
]

var results = customers.filter(function(customer){
    return customer.first.substr(0,1) === 'J'
    })
    .map(function(customer){
    customer['fullname'] = customer.first + " " + customer.last
    return customer
    })
    .sort(function(a,b){
        if (a.fullname > b.fullname){ return 1}
        if (a.fullname < b.fullname){return -1}
        return 0
    })

// tests
// ---
console.assert(results[0].fullname === "Jack White")
console.assert(results[2].fullname === "John Smith")
