// dom3. js

let members = [{name:'홍길동', age:22, birth:'2000-03-02'}
                ,{name:'김민수', age:21, birth:'2001-08-23'}
                ,{name:'박희선', age:25, birth:'1998-07-02'}
];
window.onload = loadCallback;


function loadCallback() {
    // 최초 리스트 출력
    let table = document.getElementById('list');
    table.setAttribute('border','1');
    table.append(makeThead()); // <thead>.....</thaed>
    table.append(makeTbody());

    // 추가 기능
    document.getElementById('btn').addEventListener('click', addFunc); // Id값으로 요소를 가져오겠다. addEventListener(이벤트타입, 실행함수)
    document.getElementById('delBtn').addEventListener('click', deleteFnc);
    document.getElementById('modBtn').addEventListener('click', modFnc);
    // mouseover, mouseout 이벤트
//     let trs = document.querySelectorAll('tbody>tr'); // tbody의 tr만 가져오겠다
//     for (let tr of trs) {
//         tr.addEventListener('mouseover', function() {tr.style.backgroundColor = 'yellow'});
//         tr.addEventListener('mouseout', function() {tr.style.backgroundColor = ''});
//     }
//     console.log(trs);
}


//
function modFnc() {
    let name = document.getElementById('name').value;
    let age = document.getElementById('age').value;

    let targetTr = document.querySelectorAll('tbody tr'); // 대상이 되는tr선택
    for (let tr of targetTr) {
        if (tr.children[0].innerText == name) {
            tr.children[1].innerText == age;
        }
    }
}

function deleteFnc() {
    let allChk = document.querySelectorAll('tbody input[type="checkbox"]:checked'); // tbody에 해당하는 것만
    console.log(allChk);
    for(let chk of allChk) {
        chk.parentElement.parentElement.remove();
    }
}


function addFunc() {
    let name = document.querySelector('#name').value;
    let age = document.getElementById('age').value;
    let birth = document.querySelector('#birth').value;
    let props = {name: name, age: age, birth: birth}; // [name, age, birth];
    // 반복
    document.querySelector('#list>tbody').append(makeRow(props));
    document.createElement('tr');
    }
    

function makeThead() {
    let title = ['이름','나이','생일','삭제']
    let thead = document.createElement('thead');
    let tr = document.createElement('tr');
    for (let head of title) {
        let th = document.createElement('th');
        th.innerText = head;
        tr.append(th);
    }

    // 전체선택
    td = document.createElement('td');
    let check = document.createElement('input');
    check.addEventListener('click', allcheckFnc);
    check.setAttribute('type','checkbox');
    td.append(check);
    tr.append(td);

    thead.append(tr);
    return thead;
}

function allcheckFnc() {
    let allChk = document.querySelectorAll('tbody input[type="checkbox"]'); // 체크박스전체를 선택
    // 전체체크박스를 대상으로 타이틀에 있는 체크박스를
    for (let chk of allChk) {
        console.log(this)
        chk.checked = this.checked; 
    }
}


function makeTbody() {
// <tbody><tr><td>값</td><td>값</td><td>값</td></tr></tbody>
    let tbody = document.createElement('tbody');
    for (let member of members) {
        let tr = makeRow(member);
        tbody.append(tr);
    }
    return tbody;
}


function makeRow(member={}) { // 이름,나이,생일 넣어주면 => tr생성 함수
    // 반복
    let tr = document.createElement('tr');
    tr.addEventListener('mouseover', mouseOverFnc);
    tr.addEventListener('mouseout', function() {tr.style.backgroundColor=''});
    tr.addEventListener('click', clickFnc, true); // false:버블링, true:캡쳐링
    for (let prop in member) { 
        // 반복
        let td = document.createElement('td');
        let txt = document.createTextNode(member[prop]);
        td.append(txt);
        tr.append(td);
    }

    // <td>값</td> => <td><button>삭제</button></td>
    let td = document.createElement('td');
    let btn = document.createElement('button');
    btn.addEventListener('click', function() {
        console.log('button click')
        event.stopPropagation(); // 상/하위 요소로 이벤트 전파 차단
        tr.remove();
    }, false);
    btn.innerText = '삭제';
    td.append(btn);
    tr.append(td);
    
    // 선택:체크박스
    td = document.createElement('td');
    let check = document.createElement('input');
    check.setAttribute('type','checkbox');
    td.append(check);
    tr.append(td);

    console.log(tr);
    return tr;
}


function mouseOverFnc() {
    // let tr = this; => event대상 객체
    console.log(this.style.backgroundColor = 'yellow'); // this : 객체 자신을 가리킴 (tr) => 함수를 외부로 빼게 되면 인식을 못하기 때문
    console.log(this.children[0].innerText);
    console.log(this.children[1].innerText);
    console.log(this.children[2].innerText);
    document.getElementById('name').value=this.children[0].innerText;
    document.getElementById('age').value=this.children[1].innerText;
    document.getElementById('birth').value=this.children[2].innerText;
}


function clickFnc() {
    console.log('tr click')
    tr = this; //event 대상 객체
    document.getElementById('name').value=tr.children[0].innerText;
    document.getElementById('age').value=tr.children[1].innerText;
    document.getElementById('birth').value=tr.children[2].innerText;
    event.stopPropagation();
}
