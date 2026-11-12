/*
------------------------1---------------------------

let a , b, c;
a = parseInt(prompt("Введите первое число", 0));
b = parseInt(prompt("Введите второе число", 0));
parseInt(c = a + b);
console.log(c);
alert("сумма равна " + c);

let d = confirm("Вы согласны с результатом?")

------------------------2---------------------------

let num1, num2, num3, max;
num1 = parseFloat(prompt("введите первое число"));
num2 = parseFloat(prompt("введите второе число"));
num3 = parseFloat(prompt("введите третье число"))

if (num1 >= num2 && num1 >= num3) {
    max = num1;
}
else if (num2 >= num1 && num2 >= num3) {
    max = num2;
}
else {
    max = num3;
}

max = num1;
if (num2 > max) {
    max = num2
}
if (num3 > max) {
    max = num3
}

alert("max = " + max);

------------------------3---------------------------

let num, min;

num = parseFloat(prompt("введите первое число"));
min = num;
while (num != 0) {
    num = parseFloat(prompt("введите следующее число"));
    if (num < min && num != 0) {
        min = num
    }
}

alert("min =  " + min);
*/