function expressions(num) {
    var answer = 0;
    var numberOfelem = 2;
    var limitNum = num;

    while(numberOfelem < num) {
        if(numberOfelem > limitNum) {
            break;
        }
        for (var i = limitNum-1; i > 0; i--) {
            var tmpNum = 0;
            console.log('numberOfElem :::', numberOfelem);

            for (var j = 0; j < numberOfelem; j++) {
                console.log('i :::', i - j);

                if ((i-j) <= 0) {
                    break;
                }
                tmpNum += i - j;
            }

            console.log('tmpNum :::', tmpNum);
            if(tmpNum === num) {
                answer++;
                limitNum = i;
                break;
            }
        }
        numberOfelem++;
    }
    return answer + 1;
}

// 아래는 테스트로 출력해 보기 위한 코드입니다.
console.log(expressions(15));