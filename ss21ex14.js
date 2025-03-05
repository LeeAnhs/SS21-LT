var chieuRong = parseInt(prompt("Nhập chiều rộng:"));
var chieuDai = parseInt(prompt("Nhập chiều dài:"));

for (let i = 1; i <= chieuDai; i++) {
    for (let j = 1; j <= chieuRong; j++) {
        if (i === 1 || i === chieuDai || j === 1 || j === chieuRong) {
            document.write("*");
        } else {
            document.write("&nbsp;&nbsp;");
        }
    }
    document.write("<br>");
}
