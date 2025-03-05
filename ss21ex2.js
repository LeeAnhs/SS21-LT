let emptyodd=" "
let emptyeven=" "
for(var i=0;i<5;i++){
    var a =parseInt(prompt("Enter a number "));
    if (a%2===0){
        emptyeven+= a+" ";
    }else{
        emptyodd+= a+" ";
    }
    
}  
document.write("Có :"+emptyeven+"số chẵn,số lẻ:"+emptyodd);
    




