function numPY(s){
    var pCnt=0,yCnt=0;
    for (var i = 0, length = s.length; i < length; i++) {
        if(s.charAt(i).toLowerCase() === 'p') {
            pCnt++;
        } else if (s.charAt(i).toLowerCase() === 'y') {
            yCnt++;
        }
    }

    return pCnt === yCnt;
}


// 아래는 테스트로 출력해 보기 위한 코드입니다.
console.log( numPY("pPoooyY") );
console.log( numPY("Pyy") );


function numPY_best(s) {
    return s.match(/p/ig).length === s.match(/y/ig).length;
}