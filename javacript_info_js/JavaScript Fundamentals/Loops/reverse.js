
let num = 1234567890
let rev = 0

while(num > 0){
    rev = rev * 10 + (num % 10)
    // console.log(rev)
    num = Math.floor(num / 10)
    // console.log(num)
}

console.log(rev)