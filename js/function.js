// js/function.js
// {name: "", age: "", showInfo: "기능"}

// 1
function sayHello(msg, name) {   // sayHello에 기능 부여, name이라는 매개변수 부여
    console.log(msg + ", " + name + "!!");
}

sayHello("안녕하세요", "홍길동");   // 매개값(홍길동) 대입 함수 호출(call)
sayHello("반갑습니다", "김익수");

// 2
function sum(num1, num2) {
    let result = num1 + num2;
    return result;  // 함수를 호출한 영역으로 결과값을 반환(return). *sayHello는 반환 못함
}

let result = sum(10, 20);
console.log("결과: " + sum(result, 30));

// 3
let member = {
    memberId: "user1",
    memberName: "사용자1",
    memberAddr: "대구 중구"
}

function showInfo(obj) {    // 변수이름 obj
    console.log("회원아이디: " + obj.memberId + ", 회원이름: " + obj.memberName + ", 주소: " + obj.memberAddr);
}
showInfo(member);
showInfo({
    memberId: "user1",
    memberName: "사용자1",
    memberAddr: "대구 중구"
});

// 4
function makeList(obj) {
    // <ul><li>...</li></ul>
    let li = "<li>";
    li += "id: " + obj.memberId;
    li += "name: " + obj.memberName;
    li += "Addr: " + obj.memberAddr;
    li += "</li>";
    return li;
}

// 5
let memberAry = [{memberId:"user1",memberName:"사용자1",memberAddr:"대구 중구 100"},
                    {memberId:"user2",memberName:"사용자2",memberAddr:"대구 중구 200"},
                    {memberId:"user3",memberName:"사용자3",memberAddr:"대구 중구 300"},
                ]                
// document.write(str);
let str = "<ul>";
for (let i = 0; i < memberAry.length; i++) {
    str += makeList(memberAry[i]);
}
str += "</ul>"
document.write(str);