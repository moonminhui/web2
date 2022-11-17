// function3.js

// #1
let obj = {
    name: "홍길동",
    age: 20,
    score: 88
}

function sum(num1 = 0, num2 = 0) { // 초기값을 주겠다
    return num1 + num2;
}
console.log(sum(10));

function printObj(args = {name:"init", age:0}) {
    for (let arg in args) { // 들어올 값이 객체인 경우 : for..in..
        console.log(arg, args[arg]);
    }
}
printObj(obj);

// #2
let numAry = [10,20,30]
function printAry(ary = []) {
    for(let num of ary) {
        console.log(num);
    }
}
printAry(numAry);

// #3
function sum(a, b) {
    return a+b;
}

function minus(a, b) {
    return a-b;
}

function printFunc(fnc) { // 함수를 매개값으로 받는 게 자바스크립트에서는 가능
    let result = fnc(10,5);
    console.log(result);
}
printFunc(minus);