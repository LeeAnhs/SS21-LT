var n = parseInt(prompt("Nhập số n:"));
if (isNaN(n) || n <= 0) {
    alert("Dữ liệu không hợp lệ");
} else {
    var count = 0;
    var num = 2;
    while (count < n) {
        let isPrime = 1;
        for (let i = 2; i <= Math.sqrt(num); i++) {
            if (num % i === 0) {
                isPrime = 0;
                break;
            }
        }
        if (isPrime) {
            document.write(num + " ");
            count++;
        }
        num++;
    }
}
