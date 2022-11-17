// array3.js

const beasts = ['ant', 'bison', 'camel', 'duck', 'bison'];

// indexOf(값)
let result = beasts.lastIndexOf('bison');
console.log(`bison의 위치인덱스값: ${result}`);

// includes(값) => boolean
if (beasts.includes('bison')) {
    console.log(`bison이 존재`);
} else {
    console.log(`bison이 없음`);
}

// function 안에 return은 종료이므로, if..else.. 외에 다른 걸 추가해야함
function includes(name) { // 있으면 ture, 없으면 false 반환
    let isChencked = false;
    for (let beast of beasts) {
        if (beast == name) {
            return true;
        }
        isChecked = true;
    }
    if (isChecked) {
        return false;
    }
}
result = includes('duck');
console.log(result);

// join(구분자) : 배열 -> 문자
result = beasts.join("-");
console.log(result);

// slice(시작인덱스, 종료인덱스)
result = beasts.slice(0, 3);
console.log(result);

console.clear();

console.log(beasts);
// splice(위치인덱스, 대체할 요소크기, 대체값) : 추가:push, unshift, 제거: pop, shift
beasts.splice(0, 2, 'bison', 'ant');
console.log(beasts);