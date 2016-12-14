function alpha_string46(s){
    if(s.length === 4 || s.length === 6) {
        for (var i = 0; i < s.length; i++) {
            if(Number.isNaN(Number(s.charAt(i)))) {
                return false;
            }
        }
        return true;
    } else {
        return false;
    }

}


// 아래는 테스트로 출력해 보기 위한 코드입니다.
console.log( alpha_string46("191944") );