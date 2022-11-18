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


function makeThead() {
    let title = ['이름','나이','생일','삭제']
    let thead = document.createElement('thead');
    let tr = document.createElement('tr');
    for (let head of title) {
        let th = document.createElement('th');
        th.innerText = head;
        tr.append(th);
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
    for (let prop in member) { 
        // 반복
        let td = document.createElement('td');
        let txt = document.createTextNode(member[prop]);
        td.append(txt);
        tr.append(td);
    }
}