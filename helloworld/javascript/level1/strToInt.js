function strToInt(str){
    if(typeof str === 'number') {
        return str;
    }
    var result = 0;
    var sign = 1;
    //함수를 완성하세요
    for (var i = 0, length = str.length; i < length; i++) {
        if(i == 0 && str.charAt(i) === '-') {
            sign = -1;
            continue;
        }
        result += str.charAt(i) * Math.pow(10,length-1-i);
    }

    return result * sign;
}


// 아래는 테스트로 출력해 보기 위한 코드입니다.
//console.log(strToInt("1234"));
console.log(strToInt(11));