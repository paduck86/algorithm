function mysolution(n1, n2) {
    var big, small;
    if (n1 === n2) {
        return [n1,n2];
    } else if (n1 < n2 ) {
        big = n2;
        small = n1;
    } else if (n1 > n2) {
        big = n1;
        small = n2;
    }

    //최대공약수
    var arr = [];
    for (var i = big; i > 0 ; i--) {
        if(i <= small) {
            if (big%i === 0 && small%i === 0) {
                arr.push(i);
                break;
            }
        }
    }

    for (var i = 1; i <= big*small; i++) {
        if((big*i)%small === 0) {
            arr.push(big*i);
            break;
        }
    }
    return arr;
}

console.log(mysolution(3,12));
console.log(mysolution(8,12));


function greatestCommonDivisor(a, b) {return b ? greatestCommonDivisor(b, a % b) : Math.abs(a);}
function leastCommonMultipleOfTwo(a, b) {return (a * b) / greatestCommonDivisor(a, b);}
function bestsolution(a, b) {
    return [greatestCommonDivisor(a, b),leastCommonMultipleOfTwo(a, b)];
}

// 아래는 테스트로 출력해 보기 위한 코드입니다.
console.log(bestsolution(3,12));
console.log(bestsolution(8,12));
console.log(greatestCommonDivisor(8,12));