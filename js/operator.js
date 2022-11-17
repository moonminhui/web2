// operator.js
// +, -, *, /, %(나머지 연산)

// let num1 = 10; let num2 = 10;
let num1 = num2 = 10;

let result = num1 + num2;
console.log("결과값 " + result);
console.log("결과값 " + num1 + num2); // 첫번째열 기준으로 인식
console.log("결과값 " + (num1 + num2));
console.log(num1 + num2);

console.log("결과값 " + num1 - num2); // 결과값10 - 10 => Not a Number
console.log("결과값 " + (num1 - num2));
console.log("10" - num1); // 숫자타입으로 인식

console.log(num1 / num2);
console.log(num1 % 3);

Math.random(); // 0 ~ 1 사이의 임의 난수. 0.3456789123, 0.12212
Math.random() * 30; // 0 ~ 30 사이의 임의 난수

num1 = parseInt(Math.random() * 30); // 0 ~ 30 사이의 임의 '정수'
console.log(num1);
// num2 => 1 ~ 50 까지의 임의 수를 생성해서 할당
num2 = parseInt(Math.random() * 50) + 1;
// result = num1 + num2 : 합이 60 이상 "60보다 큰수입니다."
result = num1 + num2
if(result >= 60) {
    console.log("60보다 큰수입니다.")
}

// 누적연산
let sum = 0;
sum = sum + num1;
sum = sum + num1;
sum = sum + num1;
sum += num1;

sum = sum - num1;
sum -= num1;

sum *= num1; // sum = sum * num1;
sum /= num1; // sum = sum / num1;
sum %= num1; // sum = sum % num1;

sum = "";
sum += "<p>Hello</p>"; // "" + "Hello"
sum += "<p> World</p>"; // "" + "Hello" + " World"

console.log(sum);
document.write(sum);

let fruits = [{fname: "Apple", price: 1000},
                {fname: "Banana", price: 1500},
                {fname: "Cherry", price: 2000}]

sum = "<table border=1><tbody>"; // 덮어씌우기
if (fruits[0].price >= 1500) { // 1500원 이상이면 출력
sum += "<tr><td>" + fruits[0].fname + "</td>";
sum += "<td>" + fruits[0].price + "</td></tr>";
}
if (fruits[1].price >= 1500) {
sum += "<tr><td>" + fruits[1].fname + "</td>";
sum += "<td>" + fruits[1].price + "</td></tr>";
}
if (fruits[2].price >= 1500) {
sum += "<tr><td>" + fruits[2].fname + "</td>";
sum += "<td>" + fruits[2].price + "</td></tr>";
}
sum += "</tbody></table>";
document.write(sum);