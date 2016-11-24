/*
 앞뒤를 뒤집어도 똑같은 문자열을 palindrome이라고 합니다.
 longest_palindrom함수는 문자열 s를 매개변수로 입력받습니다.
 s의 부분문자열중 가장 긴 palindrom의 길이를 리턴하는 함수를 완성하세요.
 예를들어 s가 "토마토맛토마토"이면 7을 리턴하고 "토마토맛있어"이면 3을 리턴합니다.
 */
function longest_palindrom(s){
    var result = 0;
    for (var i = 0; i < s.length; i++) {
        for (var j = s.length; j > i; j--) {
            console.log('i ::: ' + i + ' // j ::: ' + j);
            console.log('str ::: ', s.substring(i, j));
            var tmpCnt = is_palindrom(s.substring(i, j));
            console.log(result);
            if(result < tmpCnt) {
                result = tmpCnt;
            }
        }
    }

    return result;
}

function is_palindrom(s) {
    for (var i = 0; i < s.length / 2; i++) {
        if(s.charAt(i) !== s.charAt(s.length-1-i)) {
            return 0;
        }
    }
    return s.length;
}

// 아래는 테스트로 출력해 보기 위한 코드입니다.
console.log(longest_palindrom("이늦은밤다들잠들다자꾸만꿈만꾸자") )
console.log(longest_palindrom("abcde") )

/*
console.log(is_palindrom('토마토'));
console.log(is_palindrom('토마토맛토마토'));
console.log(is_palindrom('토마토토'));*/
