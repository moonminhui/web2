// objectEx2.js

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

students[0] = std1;
students.push(std2);    // Array.push(값) : 배열의 마지막 위치에 추가
students.push(std3);

// console.log(students.length);

function getStudent(name) {
    // 이름을 매개값으로 배열(students)의 요소에서 학생의 이름이 매개값과 같은 학생을 반환
    // students 반복
    for(let std of students) {
        if(std.std_name == name) {   // 찾고 싶은 값이 29째줄.name에 들어옴
            return std;     // 함수에서의 return : 끝
        }
    }
}

let result = getStudent("김익수");
console.log(result);
