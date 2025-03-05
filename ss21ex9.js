var number = parseInt(prompt("Nhập số cần kiểm tra:"));
if (isNaN(number) || number <= 1) {
  alert("Dữ liệu không hợp lệ");
} else {
  let prime = 1;
  for (let i = 2; i <= Math.sqrt(number); i++) {
    if (number % i === 0) {
      prime = 0;
      break;
    }
  }
  if (prime) {
    document.write("Là số nguyên tố");
  } else {
    document.write("Không phải là số nguyên tố");
  }
}