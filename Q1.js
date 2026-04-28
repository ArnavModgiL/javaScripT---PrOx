// Password Checker 🔐

let password = "arnav@125";
let userPass;

while(userPass != password) {
    userPass = prompt("Enter Password: ");

    if( userPass != password) {
        console.log("Wrong Password! ");
    } else {
        console.log("Access Granted ✅");
    }
}
