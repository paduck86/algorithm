function toWeirdCase(s){
    var idx = 0;
    var arr = s.split('');
    for (var i = 0; i < arr.length; i++) {
        idx++;
        if(arr[i] === ' ') {
            idx = 0;
            continue;
        } else {
            arr[i] = idx%2 === 0 ? arr[i].toLowerCase() : arr[i].toUpperCase();
        }
    }
    return arr.join('');
}


// 아래는 테스트로 출력해 보기 위한 코드입니다.
console.log("결과 : " + toWeirdCase("try hello world"));
