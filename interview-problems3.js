console.log([] + []); // ""

console.log({} + []) // [object object]


function myFunc(){
    console.log(arguments)
    return "Bangladesh"
}

const string = myFunc `hello`;   // function er samne ei vabe template string deye kisu dele seta argument hisabe function er moddhe jay and function call hoy jay.
console.log(string)


// what is the output code below
/* function b(){
    console.log(`this length is ${this.length}`)
}

let a = {
    length: 10,
    method: function(b){
        arguments[0]();
    }
}

a.method(b, 5)
 */

const a = "constructor"
console.log(a[a](10))

console.log(0.1 + 0.2) // 0.300000000000 because js e floating number point converstion e ektu problem hoy simple vabe korte pare na. tai output eta normally asbe na. 

console.log(("Bangladesh").__proto__.__proto__.__proto__)


// Make a function that sorts its arguments without using loop
const myFunction = function (){ 
    const sortingArray = [].slice.call(arguments).sort();
    return sortingArray
}

console.log(myFunction(1,2,5,3,4,6,7))
