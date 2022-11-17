// dom2. js

let pTag = document.createElement('p'); // <p>Hello</p>
let txt = document.createTextNode('Hello');
pTag.appendChild(txt); // pTag 안에 txt를 넣음

// #1
// window.alert("경고창!"); 
// console.log(window);

// on ~ : 이벤트와 관련된 속성
// #2
// window.onclick = function() {
//     console.log('윈도우 클릭');
// }

window.onload = function () {
    document.querySelector('.show').appendChild(pTag);

    // 버튼선택 > 클릭이벤트 등록
    let btn = document.querySelector('#btn');
    btn.onclick = function () {
        // 이름값을 가져오는 부분
        let name = document.querySelector('#name').value;
        let age = document.querySelector('input[name="age"]').value;
        if(!name || !age) { // name에 값이 없거나 age에 값이 없으면
            window.alert("값을 입력하세요!!");
            return;
        }

        // li생성. text: name, age => ul자식등록
        let liTag = document.createElement('li');
        let txt = document.createTextNode(name + ', ' + age);
        liTag.append(txt);
        document.getElementById('list').append(liTag);

        // 초기화
        document.querySelector('#name').value = "";
        document.querySelector('#age').value = "";
    }
}








