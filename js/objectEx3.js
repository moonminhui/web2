// objectEx3.js

let students = [];  // let : 변수 선언
const std1 = {      // const : 상수 선언
    std_no: '1-001',
    std_name: '홍길동',
    std_math: 80,
    std_eng: 85
}
const std2 = {      // const : 상수 선언
    std_no: '1-002',
    std_name: '김현식',
    std_math: 70,
    std_eng: 75
}
const std3 = {      // const : 상수 선언
    std_no: '1-003',
    std_name: '김익수',
    std_math: 90,
    std_eng: 70
}

students.push(std1);
students.push(std2);
students.push(std3);


// 수학 점수 80점 넘는 학생 출력
// function getStudents(mathScore) {
//     // 새로운 배열을 선언
//     let overMath = [];
//     for(let std of students) {
//         if(std.std_math >= mathScore) {
//             overMath.push(std);
//         }
//     }
//     return overMath;
// }

// let result = getStudents(80);
// console.log(result);


// 수학+영어 점수 150점 넘는 학생 출력
// function getStudents(totalScore) {
//     // 새로운 배열을 선언
//     let overTotal = [];
//     for(let std of students) {
//         if(std.std_math + std.std_eng >= totalScore) {
//             overTotal.push(std);
//         }
//     }
//     return overTotal;
// }

// let result = getStudents(150);
// console.log(result);


// 영어 점수가 제일 큰 사람만 반환
function getMaxStudents() {
    // 새로운 변수를 선언
    let temp = 0;   // 85, 75, 70
    let student = {};

    for (let std of students) {
        if (temp < std.std_eng) {
            temp = std.std_eng;
            student = std;
        }
    }
    return student;
}

result = getMaxStudents();
console.log(result);