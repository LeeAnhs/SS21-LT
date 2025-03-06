var password = "Leanh123";
let passwordInput = prompt("Enter your password");
do {
  if(passwordInput === password) {
    alert("Correct password");
  }else {
    alert("Incorrect password");
    break 
  }
} while (passwordInput !== password);
