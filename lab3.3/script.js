var a,b,c;

function myFunc() {
a = document.querySelector('#key').value;
b = document.querySelector('#key1').value;
c = document.querySelector('#key2').value;
a = parseInt(a);
c = parseInt(c);
if (b == "+"){
console.log("сложение");
console.log(a+c);
document.querySelector('#key3').value = a+c;
}
if (b == "-"){
console.log("вычитание");
console.log(a-c);
document.querySelector('#key3').value = a-c;
}
if (b == "*"){
console.log("умножение");
console.log(a*c);
document.querySelector('#key3').value = a*c;
}
if (b == "/"){
console.log("деление");
console.log(a/c);
document.querySelector('#key3').value = a/c;
}
}