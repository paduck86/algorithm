function printReversedTriangle(num) {
    var result = '';
    for (var i = num; i > 0; i--) {
        result += '*'.repeat(i) + '\n';
    }
    return result;
}


// 아래는 테스트로 출력해 보기 위한 코드입니다.
console.log("결과 : " +'\n'+ printReversedTriangle(3));