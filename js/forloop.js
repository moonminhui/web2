// forloop.js

// 초기값, 조건식, 증감치 (i = i +1)
for (let i = 1; i <= 10; i += 2) { // i => 1, i=3, 5, 7, 9
    // console.log(i);
}

for (let i = 10; i >= 0;) {
    // console.log(i);
    i -= 2;
}

// for : 1~10
for (let i = 1; i <= 10; i++) {
    // console.log(i)
}

// for : 1, 3, 5, 7, 9
for (let i = 1; i <= 10; i += 2) {
    // console.log(i)
}

// for : 2, 4, 6, 8, 10
// for (let i = 1; i <= 10; i++) {
//     if (i % 2 == 0) {
//         console.log(i)
//     }
// }

// 1 ~ 10까지 더하기
let sum = 0; // sum 값을 0으로 초기화
// for (let i = 1; i <= 10; i++) {
//     sum += i;
// }
// console.log(sum);

// for (let i = 1; i <= 10; i++) {
//     if (i % 2 == 0) {
//     sum += i;
//     }
// }
// console.log(sum);

// for (let num = 1; num <= 9; num++) {
//     console.log("3 * " + num + " = " + (3 * num));
// }

// let dan = 4;
// for (let num = 1; num <= 9; num++) {
//     console.log(dan + " * " + num + " = " + (dan * num));
// }

// for (let k = 2; k <= 9; k++) {
//     let dan = k;
// for (let num = 1; num <= 9; num++) {
//     console.log(dan + " * " + num + " = " + (dan * num));
//      }
// }

document.write('<table border=1>');
// for (let k = 2; k <= 5; k++) { // 주석 풀려면 dan = k로 지정
    let dan = 5;
for (let num = 1; num <= 9; num++) {
    document.write('<tr>');
    console.log(dan + " * " + num + " = " + (dan * num));
    document.write('<td>' + dan + '</td><td> * </td><td>' + num + '</td><td> = </td><td>' + (dan*num) + '</td>');
    document.write('</tr>');
    }
// }
document.write('</table>');

let fruits = [{fname: "Apple", price: 1000},       // index: 0
                {fname: "Banana", price: 1500},    // index: 1
                {fname: "Cherry", price: 2000},    // index: 2
                {fname: "Melon", price: 1700},     // index: 3
                {fname: "Tomato", price: 1200},    // index: 4
                {fname: "Mango", price: 1900},     // index: 5
                {fname: "Blueberry", price: 2200}] // index: 6

document.write('<table>');
document.write('<thead><tr><th>과일</th><th>가격</th></tr></thead>');
// tbody 작성1
// document.write('<tbody>');
// for (let i = 0; i < 7; i++) {
//     document.write('<tr><td>' + fruits[i].fname + '</td><td>' + fruits[i].price + '</td></tr>')
// }
// document.write('</tbody>');
// document.write('</table>');

// tbody 작성2
sum = 0;
document.write('<tbody>');
for (let i = 0; i < 7; i++) {
    document.write('<tr><td>' + fruits[i].fname + '</td><td>' + fruits[i].price + '</td></tr>')
    sum += fruits[i].price;
}
document.write('<tr><td>합계</td><td>' + sum + '</td></tr>')

document.write('</tbody>');
document.write('</table>');

// 확장 for
for (let fruit of fruits) {
    // fruit => {fname: 'Apple', price: 1000}
    console.log("과일: " + fruit.fname + ", 가격: " + fruit.price);
}