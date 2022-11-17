// array2.js

let names = ["윤성현","김준혁","서승민","이정용"];
names.length;
names.push("김기훈");

// forEach
names.forEach(function(val, idx, ary) { // 매개함수(값, 인덱스값, names배열)
    console.log("for 반복문");
    console.log(idx, ary);
}); // for반복문
