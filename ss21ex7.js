var tienBanDau = parseFloat(prompt("Nhập số tiền ban đầu:"));
var laiSuat = parseFloat(prompt("Nhập lãi suất (%):")) / 100;
var soThang = parseInt(prompt("Nhập số tháng gửi:"));
var tienLai = 0;
var tienGoc = tienBanDau;
for (let thang = 1; thang <= soThang; thang++) {
    var laiThang = tienGoc * laiSuat;
    tienGoc = tienGoc + laiThang;
    tienLai += laiThang;
}
var tongTien = tienBanDau + tienLai;
alert("Tiền lãi: " + tienLai.toFixed(3) + "\n" +"Tiền nhận được: " + tongTien.toFixed(3));
