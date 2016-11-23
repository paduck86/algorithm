function adder(a, b){
    var small, big, result = 0;
    if(a === b) {
        return a;
    } else if ( a < b) {
        small = a;
        big = b;
    } else {
        small = b;
        big = a;
    }
    for (var i = small; i <= big; i++) {
        result += i;
    }

    return result;
}


// 아래는 테스트로 출력해 보기 위한 코드입니다.
console.log( adder(3, 5) )