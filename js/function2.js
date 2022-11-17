// function2.js

let numAry = [20, 25, 11, 34, 27, 52];

// 1
let sum = 0;
for (let i = 0; i < numAry.length; i++) {
    if(numAry[i] % 2 == 0) {
    sum += numAry[i];
}
    console.log(`sum: ${sum}, numAry: ${numAry[i]}`);
}
console.log(`짝수 합계값은 ${sum}`);

// 2 ... 1번과 같은 코드
sum = 0;
for (let num of numAry) {
    if(num % 2 == 1) {
    sum += num;
    }
}
console.log(`홀수 합계값은 ${sum}`);

let numAry2 = [11, 22, 33];

// 배열의 요소들의 합을 반환
function sumArray(ary) {
    let sum = 0;
    for(let i=0; i<ary.length; i++) {
        sum += ary[i];
    }
    return sum;
}
let result = sumArray(numAry2);
console.log(`numAry2의 합계: ${result}`);

// 3
function evenSum(ary) {
    // 배열요소중에 짝수값의 합
    let sum = 0;
    for (let num of ary) {
        if(num % 2 == 0) {
        sum += num;
        }
    }
    return sum;
}
result = evenSum(numAry);
console.log(`numAry의 짝수 합계: ${result}`);

// 4
function maxVal(first, mid, last) {
    //매개값중에서 큰값을 반환
    let max;
    if(first >= last) {
        if(first >= mid) {
            max = first;
    } else {
        max = mid;
    }
    } else {
    if (last >= mid) {
        max = last;
    } else {
        max = mid;
    }
}
    return max;
}

result = maxVal(99, 100, 77);
console.log(`세 수중에서 큰 값은 ${result}`);