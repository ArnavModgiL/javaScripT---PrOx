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

// Factorial using Prompt() -

let num = prompt("Enter a Number:: ");
let fact = 1;

for(let i = 1; i <= num ; i++){
    fact = fact * i;
}

console.log("Factorial:",fact);
