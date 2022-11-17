// array1.js

let ary = [10, 20];
ary.push(30); // 추가
ary.push(40);

ary.pop(); // 마지막위치 제거
ary.shift(); // 첫번째위치 제거
ary.unshift(5); // 첫번째위치 추가

console.log(ary);

console.clear();

// #1
// let names = [];
// while(true) {
//     let value = prompt("이름을 입력: ");
//     if (value == "stop") {
//         break;
//     }
//     names.push(value);
// }
// console.log(names);

// for.
for (let i = 0; i < names.length; i++) {
    console.log(names[i]);
}