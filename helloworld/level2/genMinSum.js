function getMinSum(A,B){
    var result = 0;
    A.sort(function(a,b){return a>b});
    B.sort(function(a,b){return a<b});

    for (var i = 0, length = A.length; i < length; i++) {
        result += A[i]*B[i];
    }
    return result;
}

//아래 코드는 테스트를 위한 출력 코드 입니다.
getMinSum([1676,1983,2772,30,45,4824,5863,6353,6987,7023],[9131,8900,8509,8472,7902,6356,6096,4972,2764,2408]);