let one = 1;
let num = +prompt("Введите число");
if (num == one){
    alert("1 Banana");
}else if (num > one){
   alert(num + " Bananas");
}else if (num < one){
   alert("Введите положительное число");
} 

 let number = +prompt("Введите число: ");

 if (number) {
  if (number % 2 === 0) {
    let result = 0;

    for (let i = 0; i < Infinity; i++) {
       number -= 2;

       result += number;

       console.log(number);

       if (number === 0) {
        break;
       }
     }

     alert(result);
   } else {
     alert("Данное число не является чётным");
   }
 }

let num1 = +prompt("Введите число желательно от 1 до 10 ")
let num2 = +prompt("Введите второе число пожалуйста не 0")
if(num2>0){
    num2 = num2;
}else if(num2<=0){
    num2 = 2;
}
if (num1>0){
 alert(num1**num2)
}else if(num1<=0){
    alert("Введите положительное число и не 0")
} 
