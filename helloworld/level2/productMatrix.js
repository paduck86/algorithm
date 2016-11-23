
function productMatrix(A, B) {
    var answer = [];
    for (var i = 0; i < A.length; i++) {
        var sub_arr=[];
        for (var j = 0; j < B[0].length; j++) {
            var n=0;
            for (var k = 0; k < A[0].length; k++) {
                console.log('[',i,']','[',k,']', ' * ', '[',k,']','[',j,']');
                console.log(A[i][k], '*', B[k][j]);
                n +=A[i][k]*B[k][j];
            }
            sub_arr.push(n);
        }
        answer.push(sub_arr);
    }
    console.log('answer[0] :::', answer[0]);
    console.log('answer[1] :::', answer[1]);

    return answer;
}

// 아래는 테스트로 출력해 보기 위한 코드입니다.
var a = [ [1,2],[4,5] ];
var b = [ [1,2],[4,5] ];
console.log("결과 : " + productMatrix(a, b));