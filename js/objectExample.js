// web/js/objectExample.js

// 복습
const objArray = [{
    name: "홍길동",
    age: 20
}, {
    name: "김민수",
    age: 22
}, {
    name: "박시혁",
    age: 25
}];

let str = "<ul>";
for(let i = 0; i < objArray.length; i++){
    str += "";
    str += "<li>" + "이름: " + objArray[i].name + ", 나이: " + objArray[i]["age"] + "</li>";
    // console.log("이름: " + objArray[i].name + ", 나이: " + objArray[i]["age"]);
}
str += "</ul>";
document.write(str);