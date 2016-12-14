function sumMatrix(A,B) {
    var answer = [];
    for (var i = 0; i < A.length; i++) {
        var sub_arr = [];
        for (var j = 0; j < A[0].length; j++) {
            sub_arr.push(A[i][j] + B[i][j]);
        }
        answer.push(sub_arr);
    }

    return answer;
}

// 아래는 테스트로 출력해 보기 위한 코드입니다.
console.log(sumMatrix([[1,2], [2,3]], [[3,4],[5,6]]));