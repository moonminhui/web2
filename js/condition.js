// condition.js

let score = parseInt(Math.random() * 60) + 40; // 60 ~ 100 임의 정수값

// *1
if(score >= 60) {
    console.log("합격");
} else {
    console.log("불합격");
}

// *2
let pass = ""; // 리턴(?)
if(score >= 60) {
    pass = "합격";
} else {
    pass = "불합격";
}

// *3
pass = (score >= 60) ? "합격" : "불합격";

// *4 코드가 너무 길다
if (score >= 90) {
    pass = "A";
} else { // 90보다 작은값
    if (score >= 80) {
        pass = "B";
    } else { // 80보다 작은값
        if (score >= 70) {
            pass = "C";
        } else { // 70보다 작은값
            pass = "D";
        }
    }
}

// *5
// if조건문이 하나이고 4개의 조건으로 한번만 실행
if (score >= 90) {
    pass = "A";
} else if (score >= 80) {
    pass = "B";
} else if (score >= 70) {
    pass = "C";
} else {
    pass = "D";
} // 값이 "B"

// *6
// score = 80;
if (score >= 90) {
    pass = "A";
} 
if (score >= 80) {
    pass = "B";
} 
if (score >= 70) {
    pass = "C";
} 
if (score < 70) {
    pass = "D";
} // 값이 "C"

// *7
// score = 80;
// 조건문의 순서
if (score >= 70) {
    pass = "C";
} else if (score >= 80) {
    pass = "B";
} else if (score >= 90) {
    pass = "A";
} else {
    pass = "D";
} // 값이 "C"

// *8
// 95, 85, 75 => A+, B+, C+
if (score >= 95) {
    pass = "A+";
} else if (score >= 90) {
    pass = "A";
} else if (score >= 85) {
    pass = "B+";
} else if (score >= 80) {
    pass = "B";
} else if (score >= 75) {
    pass = "C";
} else if (score >= 70) {
    pass = "C";
} else {
    pass = "D";
} 
console.log(pass);
