// array4.js

let names = ["김도협", "채동윤", "민성인"];
names.push("권근희");
names.splice(names.length, 0, '김동견');
names.splice(names.length, 0, '이재현');
names.splice(names.length, 0, '이정용');
names.splice(0, 0, '김기훈');
names.splice(0, 0, '이소라');
names.splice(0, 0, '오수현');

console.log(names);

// 1) prompt("이름입력: ") 2) 이름1,이름2,이름3... stop입력

// 1)
let inval = prompt('이름입력: ')

// if (inval) {
//     removeName(inval);
// }

// function removeName(name) {
//     names.splice(0, 1, inval)
//     console.log(names);
// }

// 2)
inval = prompt('이름입력: ')

if (inval) {
    removeName(inval);
}

function removeName(name) {
    names.splice(0, 1, inval)
    console.log(names);
}
