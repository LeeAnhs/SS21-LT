var number=parseInt(prompt("Nhập một số nguyên bất kỳ"));
for (var i = 1; i <= number; i++) {
    if (number % i == 0) {
        document.write(i+"<br>")
        }
}