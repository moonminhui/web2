// whileloop.js
// while 반복문 = 조건이 만족되면 계속 반복하겠다

let i = 0;
while (i < 10) {

    console.log(i);
    i++;
}

let isOK = true;
while (isOK) {
    let randomVal = parseInt(Math.random() * 10);
    console.log(randomVal);
    if(randomVal % 2 == 0) {
        break; // 반복문을 종료
    }
}

let sum = 0;
while(isOK) {
    sum += parseInt(Math.random() * 10);
    console.log(sum);
    if (sum > 100) { // 누적값이 100을 넘어서면 반복문 종료
        break;
    }
}
console.clear();

// while (true) {
//     let msg = prompt("문자입력하세요: ");
//     console.log(msg);
//     if (msg == "stop") {
//         break;
//     }
// }

// Math.random => 0 ~ 100까지의 임의 수 생성. => randomval;
// prompt("숫자를 입력: ") => inputval;
// 입력한값이 임의의값 큽니다

let randomVal1 = parseInt(Math.random() * 100);
while (true) {
    let inputval = prompt("0 ~ 100 사이의 숫자를 입력하세요: ");
    if (randomVal1 > inputval) {
        console.log("입력한값이 임의의값보다 작습니다");
    }else if (randomVal1 < inputval) {
        console.log("입력한값이 임의의값보다 큽니다");
    }else {
        break;
    }
}

console.log('end of while');