let a=Number(prompt("Nhập số a: "));
let b=Number(prompt("Nhập số b: "));
let c=Number(prompt("Nhập số c: "));
let delta=b*b-4*a*c;
if (delta < 0) {
    document.write("Phương trình vô nghiệm.");
} else if (delta === 0) {
    let x = -b / (2 * a);
    document.write("phương trình có nghiệm kép x1=x2= " + x);
} else {
    let x1 = (-b + Math.sqrt(delta)) / (2 * a);
    let x2 = (-b - Math.sqrt(delta)) / (2 * a);
    document.write(`phương trình có hai nghiệm phân biệt: x1 = ${x1}, x2 = ${x2}`);
}