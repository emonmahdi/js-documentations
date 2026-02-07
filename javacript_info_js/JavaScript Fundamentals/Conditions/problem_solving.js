// 🟢 Problem 1: Even / Odd

let num = 10;

const result = num % 2 === 0 ? 'Even' : "Odd"
console.log(result)

// 🟢 Problem 2: Max of 3 numbers
let a = 15;
let b = 13;
let c = 2;

if(a>b && b>c){
    console.log('a is grater than')
}else if(b>c){
    console.log('b is grater than')
}else{
    console.log('c is grater than')
}

// 🟢 Problem 3: Grade Calculator
let marks = 60;

if(marks >= 80){
    console.log('A+')
}else if(marks >= 70){
    console.log('A')
}else if(marks >= 60){
    console.log('A-')
}else if(marks >= 33){
    console.log('PASS')
}else{
    console.log('Fail')
}

// 🟢 Problem 4: Password Validation

let password = '123456'

if(password.length > 6){
    console.log('Strong Pass')
}else{
    console.log('Week Pass')
}

// 🟢 Problem 5: Role Based Access
let role='admin'

if(role === 'user'){
    console.log('Limited Access')
}else if(role === 'admin'){
    console.log('Full Access')
}else{
    console.log('No Access')
}