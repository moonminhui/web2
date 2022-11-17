// object2.js
// 객체 : 복잡한 형태의 데이터구조
// {name: "홍길동", age: 20, showInfo: function() {...}}

// 학생번호, 학생이름, 전화번호, 혈액형, 점수
class Student {     // class 선언시 대문자로 선언
    constructor(stdNo, stdName, phone, bloodType, score) {     // 생성자
        this.stdNo = stdNo;     // this => stdNo을 가리킴
        this.stdName = stdName;
        this.phone = phone;
        this.bloodType = bloodType;
        this.score = score;
    }
    showInfo() {
        return `학번은 ${this.stdNo}, 이름은 ${this.stdName} 입니다.`
    }
    showBloodType() {
        return `${this.stdName}의 혈액형은 ${this.bloodType} 입니다.`
    }
    setScore(score) {
        this.score = score;
    }
    getScore() {
        return `${this.stdName}의 점수는 ${this.score} 입니다.`;
    }
    setPhone(phone) {    // 값을 지정(변경): set
        this.phone = phone;
    }
} 

let std1 = new Student('1-001', '홍길동', '111-111', 'A', 80);
let std2 = new Student('1-002', '홍영찬', '222-222', 'B', 77);
let std3 = new Student('1-003', '박희수', '333-333', 'O', 87);

console.log(std1.showBloodType());
std1.setScore(82);
console.log(std1.getScore());

let students = [];    // new Array();
students.push(std1);
students.push(std2);
students.push(std3);

for (let student of students) {
    console.log(student.showInfo());     // showInfo는 메소드라서 ()가 있어야 실행됨
}


// 삼각형을 정의하는 클래스
class Triangle {
    // 속성: 밑변, 높이(width, height)
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }
    getArea() {
        return this.width * this.height / 2;
    }
    // 밑변,
    setWidth(width) {
        this.width = width;
    }
    // 높이,
    setHeight(height) {
        this.height = height;
    }  
}

let trian1 = new Triangle(10, 6);
trian1.setWidth(20);
trian1.setHeight(10);

console.log(`삼각형의 너비는 ${trian1.getArea()}입니다.`)