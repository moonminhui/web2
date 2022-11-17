// lastExample.js

let person1 = {
    name: "홍길동",
    point: (Math.random() * 10).toFixed(1)
}
let person2 = {
    name: "김길동",
    point: (Math.random() * 10).toFixed(1)
}
// 1)두 사람중 포인트 높은 사람의 이름 출력
if (person1.point > person2.point) {
    console.log(person1.name)
}else if (person1.point < person2.point) {
    console.log(person2.name)
}
console.log(person1.point)
console.log(person2.point)
console.log('end of while');

let person3 = {
    name: "박길동",
    point: (Math.random() * 10).toFixed(1)
}
// 2)세 사람중 포인트 높은 사람의 이름 출력
if (person1.point > person2.point) {
    result = person1.point
    console.log()
}

// 3)세 사람중 점수를 기준으로 정렬(5.6, 6.5, 7.7)
