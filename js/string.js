// string.js

let str = "Hello, World"; // string => String

// substring()
console.log(str.length); // 공백도 포함
console.log(str.substring(5));

// indexOf(값) => 문자의 index값을 반환
console.log(str.indexOf("Wor")); // 대소문자 구분
console.log("Hello, World. Nice World".lastIndexOf("World")); // 마지막 문자 위치

// split(구분자) => 배열로 변환
let temp = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa est laudantium quae? Sit ipsam, dicta eos eius quinesciunt impedit fuga quod, incidunt culpa a, repellendus magnam cum nobis animi.";
let strAry = temp.split(" ");
for (let word of strAry) {  // word <= strAry를 담아내는 변수
    if(word.indexOf("m") != -1) {
        console.log(word)
    }
}
// console.log(strAry);

// chartAt(인덱스)
console.log(str.charAt(5));

console.clear();
// 찾을 이름을 입력하면 나이를 반환
let persons = [{name: "홍길동",age: 20},
                {name: "박혜진",age: 21},
                {name: "문민희",age: 22},
                {name: "이가영",age: 23}
                ]
// name에 해당하는 age 속성을 반환
function findPerson(name) {
    for (let person of persons) {
        if (person.name.indexOf(name) != -1) {
            return person.age;
        }
    }
    console.log("찾는 이름이 없습니다.")
}
let findName = prompt("이름을 입력하세요: ")
let result = findPerson(findName);
console.log(result);