var password = "Leanh123";
do {
  let passwordInput = prompt("Enter your password");
  if(passwordInput === password) {
    alert("Correct password");
  }else {
    alert("Incorrect password");
  }
} while (passwordInput !== password);
