// forEX2.js

let str = "<table border=1>";

// 3단
let dan = 3;
for(let i=1; i<=9; i++) {
    str += `<tr><td> ${dan} </td><td> * </td><td> ${i} </td><td> = </td><td> ${3*i} </td>`
}
str += "</table>";
document.write(str);

// 구구단
str = "<table border=1><tr>";

for (let j = 2; j <= 9; j++) {
    for (let i = 2; i <= 9; i++) {
        str += `<td> ${i} </td><td> * </td><td> ${j} </td><td> = </td><td> ${i*j} </td><td></td>`
    }
    str += "</tr><tr>"
}
str += "</tr></table>";
document.write(str);