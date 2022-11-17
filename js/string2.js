// string2js

// trim(), trimStart(), trimEnd() : 공백제거
let str = "     Hello, World     ";
let result = str.trim();
console.log(result);

// 대문자, 소문자 : toUpperCase, toLowerCase
result = str.toUpperCase().trim(); // 반환값이 문자열
console.log(result);

// 앞 대문자, 뒤 그대로
result = str.trim()
            .substring(0, 5)
            .toUpperCase() + 
         str.trim()
            .substring(5)
console.log(result);

// 앞 그대로, 뒤 소문자
// 문자열을 대체(replace)
result = str.replace("World","world").trim();
console.log(result);

// 김씨만 찾기 - 방법 다양
str = ["김기훈", "김근연", "이소라", "오수현", "박김희"]
function findKim() {
    for (let kim of str) {
        if (kim.startsWith("김")) { 
        console.log(kim);
        }
    }
}
findKim();

// substring => slice(시작인덱스, 종료인덱스)
str = "Hello, World"; // 12자
result = str.slice(-5, -1); // slice(-5, -1) == slice(12-5, 12-1)
console.log(result);

// 주민번호(960325-1234567)
function checkGender(jumin) {
    if (jumin.slice(7, 8) == "1" || jumin.slice(7, 8) == "3") {
        return "남자";
    } else if (jumin.slice(7, 8) == "2" || jumin.slice(7,8) == "4") {
        return "여자";
    } else {
        return "잘못된 번호입니다";
    }
    // return "남자" || "여자"
}

// function checkGender(jumin) {
//     if (jumin.slice(7, 8) == 1) {
//         return "남자";
//     } else if (jumin.slice(7, 8) == 3) {
//         return "남자";
//     } else {
//         return "여자";
//     }
// }

result = checkGender("960325-1234567");
console.log(result);
result = checkGender("960325-2234567");
console.log(result);
result = checkGender("960325-3234567");
console.log(result);
result = checkGender("960325-4234567");
console.log(result);