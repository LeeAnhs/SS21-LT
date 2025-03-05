for (let i = 1; i <= 100; i++) {
    let empty = "";
    if (i % 3 === 0){
        empty += "Fizz" +"<br>";
    }
    if (i % 5 === 0) {
        empty += "Buzz" + "<br>";
    }
    if( i % 3 === 0 && i % 5 === 0) {
        empty += "FizzBuzz" + "<br>";
    }
    document.write(empty || i + "<br>");
}
