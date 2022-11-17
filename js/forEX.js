// forEX.js

// #1
let str = "<table border=1><tr>";
for (let i = 1; i <= 25; i++) {
    str += "<td>" + i + "</td>";
    if (i % 5 == 0) {
        str += "</tr><tr>";
    }
}
str += "</tr></table>"
document.write(str);

// #2
str = "<table border=1><tr>";
let cnt = 1;
let num = 1;
for (let i = 1; i <= 25; i++) {
    str += "<td>" + num + "</td>";
    num = num + 5;
    if (i % 5 == 0) {
        num = ++cnt; // 1을 먼저 증가시키고 대입
        str += "</tr><tr>"
    }
}
str += "</tr></table>"
document.write(str);

// #2-1  중첩 for
str = "<table border=1><tr>";

for (let j = 1; j <= 5; j++) {
    for (let i = j; i <= 25; i += 5) { // 시작값을 변수(j)로 지정
        str += "<td>" + i + "</td>";
    }
    str += "</tr><tr>"
}
str += "</tr></table>"
document.write(str);

// #3
cnt = 1;
str = "<table border=1>";

for (let j = 1; j <= 5; j++) {
    str += "<tr>";
    for (let i = 1; i <= 5; i++) {
        if (i <= j) { // i와 j의 값을 비교해서 보일 경우, 안보일 경우 처리 
            str += "<td>" + cnt + "</td>";
        } else {
            str += '<td></td>';
        }
        cnt++;
    }
    str += "</tr>";
}
str += "</tr></table>"
document.write(str);