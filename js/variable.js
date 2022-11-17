        // 변수 선언
        console.log("Hello, World"); // 콘솔탭에 출력
        let name; // 변수선언
        name = "문민희"; // 변수에 값을 할당 => string타입
        console.log(name);
        let age = 20; // number타입
        console.log("이름은 " + name + "이고, 예전 나이는 " + age + "입니다.")

        let marriage = true; // boolean타입
        console.log("결혼여부는 " + true);
        marriage = false;

        console.log(typeof name);
        name = true;
        console.log(typeof name);


        // 상수선언
        const gender = "Women";
        // gender = "Men";

        // 변수 : name1 <= 이름, height : 키, weight : 몸무게
        // 이름은 ???이고, 키는 ??.? 이고, 몸무게는 ??.? 입니다
        let name1 = "홍길동";
        let height = 180.1;
        let weight = 63.1;
        console.log("이름은 " + name1 + "이고, 키는 " + height + "이고, 몸무게는 " + weight + "입니다.")

        // 조건식
        let averageHeight = 165;
        if (height > 165) { //false
            console.log(name1 + "의 키가 " + averageHeight + "보다 큽니다.");
        }

        // 연산식 (+, -, *, /)
        let weight1 = 66.3;
        let weight2 = 60.4;
        let weight3 = 64.2;
        let averageWeight = (weight1 + weight2 + weight3) / 3;
        console.log(averageWeight.toFixed(2))
        // 홍길동의 몸무게는 평균 63.6보다 적습니다.
        console.log(name1 + "의 몸무게는 평균" + averageWeight.toFixed(2) + "보다 적습니다.")