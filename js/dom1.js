// dom1.js

console.log('dom 실행');

let show = document.querySelector('#show'); // <div id='show'></div>

let pTag = document.createElement('p'); // <p>Hello</p>
pTag.innerText = 'Hello';
show.appendChild(pTag); // show > pTag

let btn = document.createElement('button'); // <button id='btn'></button>
btn.innerText = "클릭";
btn.onclick = function() {
    console.log('클릭되었습니다.');
}
btn.setAttribute('id', 'btn'); // 속성지정
show.appendChild(btn);

let fruits = ['apple', 'banana', 'cherry'];
let ul = document.createElement('ul'); // <ul><li></li><li></li></ul>
for (let fruit of fruits) {
    let li = document.createElement('li');
    li.innerText = fruit;
    ul.appendChild(li);
}
show.appendChild(ul);

let sendp = document.querySelector('#show>p:nth-of-type(2)');
sendp.remove();
console.log(sendp);


// querySelector(선택자)
// createElement(요소)
// 부모.appendChild(자식)
// remove()

// <p>내가 좋아하는 과일</p><ol><li>복숭아</li><li>사과</li><li>포도</li></ol>
// 1
// let pTag2 = document.createElement('p');
// pTag2.innerText = '내가 좋아하는 과일';
// show.appendChild(pTag2);

// let favs = ['복숭아', '사과', '포도'];
// let ol = document.createElement('ol');
// for (let fav of favs) {
//     li = document.createElement('li');
//     li.innerText = fav;
//     ol.appendChild(li);
// }
// show.appendChild(ol);

// 2
let favs = ['복숭아', '사과', '포도'];
let ol = document.createElement('ol');
// ol.innerText = '내가 좋아하는 과일';
let txt = document.createTextNode('내가 좋아하는 과일')
show.appendChild(ol);
for (let fav of favs) {
    li = document.createElement('li');
    li.innerText = fav;
    ol.appendChild(li);
}
ol.appendChild(txt);
show.appendChild(ol);

