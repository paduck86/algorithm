function waterMelon(n){
    var result = "";
    for (var i = 0; i < n; i++) {
        result += i%2 === 0 ? '수' : '박';
    }
    return result;
}

// 실행을 위한 테스트코드입니다.
console.log("n이 3인 경우: "+ waterMelon(3))
console.log("n이 4인 경우: "+ waterMelon(4))