// ATM Machine Game 💳

let balance = 10000;
let choice = prompt("Enter withdraw / check: ");

if(choice === "check") {
    console.log("Balance: ",balance);
}
else if(choice === "withdraw") {
    let amount = prompt("Enter amount: ");

    if(amount <= balance) {
        balance = balance - amount;
        console.log("Withdraw Successful");
        console.log("Remaining Balance: ", balance);
    } else {
        console.log("Insufficient Balance: ");
    }
}