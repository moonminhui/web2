// object.js
// object => {name:"홍길동", age: 20, showInfo: function() {...}}
// 객체 : 속성(필드: 값), 메소드(기능)

const member = {
    memberId: "user1",
    memberName: "홍길동",
    memberInfo: function () {
        return `아이디: ${this.memberId}이고, 이름: ${this.memberName}`;
    }
}

console.log(member.memberId);
console.log(member["memberName"]);
console.log(member.memberInfo());   // 함수호출 메소드호출

// 객체의 속성을 반환하면서 반환 for..in..
// member.memberId, member["memberName"]
for(let prop in member) {
    console.log(prop, member[prop]);
    if(prop == 'memberInfo'){
        console.log(member[prop]());
    }
}

// for..of.. : 배열. for..in.. : 객체
const members = [
    {memId: "user1", memName: "홍길동", memPoint: 88},
    {memId: "user2", memName: "김민규", memPoint: 55},
    {memId: "user3", memName: "황석하", memPoint: 100}
];

// 배열
console.log(members);
console.clear();
// for..of
for (let member of members) { // 데이터 건수 반복
    if (member.memPoint > 80) {
        for (let prop in member) { // 속성 갯수 반복 (mamber의 각각 속성을 prop로)
            if (prop == 'memName') {
                console.log(`속성: ${prop}, 값: ${member[prop]}`);
            }
        }
        console.log(`====================`)
    }
}