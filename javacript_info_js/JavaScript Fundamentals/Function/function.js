// 1. Function Declaration

function add (a, b){
    return a + b
}

console.log(add(3,5))

// Function Expression

const add = function(a, b){
    return a + b;
  };

//   3. Arrow Function (🔥 Modern JS)

const add = (a, b) => a + b

// 4. Anonymous Function

setTimeout(function (){
    console.log('Anonymous function')
}, 1000)