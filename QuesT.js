// Some BasiC LogIc BuiD Questions : 


// Reverse a number :

function reverseNumber(num){
    let rev = 0;

    while(num != 0){
        let digit = num % 10;
        rev = rev * 10 + digit;
        num = Math.floor(num / 10);
    }
    return rev;
}

console.log(reverseNumber(12345));

// OuTPUT : 54321

// Check Palindrome Number : - :

let num = prompt("Enter the Number: ");
let original = num;
let rev = 0;

while( num > 0){
    let digit = num % 10;
    rev = rev * 10 + digit;
    num = Math.floor(num / 10);
}

if(original === rev){
    return "Palindrome";
} else {
    return "Not Palindrome";
}

// Factorial using Prompt() - corrected 

let num = prompt("Enter a Number:: ");
let fact = 1;

for(let i = 1; i <= num ; i++){
    fact = fact * i;
}

console.log("Factorial:",fact);


// Prime Number : Corrected 

let num = prompt("Enter the Number");
let prime = true;

if( num <= 1) {
    prime = false;
} else {
    for(let i = 2; i < num; i++) {
        if(num % i === 0) {
            prime = false;
            break;
        }
    }
}
if(prime) {
    console.log("Prime Number");
} else {
    console.log("Not Prime");
}


// Sum of digits using prompt() 

let num = prompt("Enter a number: ");
let sum = 0;
while(num > 0) {
    let digit = num % 10;
    sum = sum + digit;
    num = Math.floor(num / 10);
}

console.log("Sum of digits:" , sum);

// Largest of THree Numbers using Prompt() 

let a = prompt("Enter first number: ");
let b = prompt("Enter second number: ");
let c = prompt("Enter Third number: ");

let largest = a;

if(b > largest) {
    largest = b;
}
if(c > largest){
    largest = c;
}
console.log("Largest Number",largest);


// Fibonacci Series using prompt()

let n = prompt("enter the number");
let a = 0;
let b = 1;
for(let i = 1; i <= n ; i++) {
    console.log(a);
    let temp = a + b;
    a = b;
    b = temp;
}
