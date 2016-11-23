function is_pair(s){
    var obj = {
        '(': 0,
        ')': 0
    };

    for (var i = 0; i < s.length; i++) {
        if (obj['('] < obj[')']) {
            console.log('1');
            return false;
        }

        var c = s.charAt(i);
        if(c === '(' || c === ')') {
            obj[c]++;
        }
    }

    return obj['('] === obj[')'];
}

// 아래는 테스트로 출력해 보기 위한 코드입니다.
console.log( is_pair("(()())"));
console.log(is_pair("(())((()())())"));