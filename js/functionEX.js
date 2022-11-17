// functionEX.js

let memberAry = [{memberId:"user1",memberName:"사용자1",memberAddr:"대구 중구 100"},
                    {memberId:"user2",memberName:"사용자2",memberAddr:"대구 중구 200"},
                    {memberId:"user3",memberName:"사용자3",memberAddr:"대구 중구 300"},
                ]                

// 자바스크립트문자열: " ", ' ', ` `
function makeTr(memberObj) {    // memberObj => memberAry를 받아오는 매개변수
    // <tr><td>
    // tr 태그를 만들어서 반환
    let tr = `<tr><td>${memberObj.memberId}</td><td>${memberObj.memberName}</td><td>${memberObj.memberAddr}</td></tr>`
    // let tr = `<tr><td>` + memberObj.memberId + '</td>;
    // tr += '<td>' + memberObj.memberAddr + '</td>';
    // tr += '<td>' + memberObj.memberAddr + '</td></tr>';
    return tr;
}

function makeHead() {
    let titles = [`회원아이디`, `회원이름`, `회원주소`];
    // tr => th, th, th : 회원아이디, 회원이름, 회원주소
    // let tr = `<tr><th>회원아이디</th><th>회원이름</th><th>회원주소</th></tr>`;
    let tr = '<tr>';
    for (let i=0; i<titles.length; i++) {
        tr += `<th>${titles[i]}</th>`
    }
    
    return tr;
}

let str = "<table>";
str += makeHead();
for(let i=0; i<memberAry.length; i++){
    str += makeTr(memberAry[i]);    // {memberId, memberName, memberAddr}   
}
str += "</table>";
document.write(str);