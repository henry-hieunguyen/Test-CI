let string1 = prompt("Enter first strings");
let string2 = prompt("Enter second strings");
let merge2string = "";

let tem1 = string1.split("");
let tem2 = string2.split("");

for ( let i = 0; i < tem1.length && i < tem2.length; i++) {
    merge2string += tem1[i] + tem2[i]
}

console.log(merge2string);
alert(merge2string);