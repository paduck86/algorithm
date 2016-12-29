/*function solution(N) {
    var i = 2;
    var isPrime = true;
    var arr = [];
    while (i<=N) {
        isPrime = true;

        for(var n = 2; n < i; n++) {
            if(i % n === 0) {
                isPrime = false;
                break;
            }
            continue;
        }

        if(isPrime === true) {
            arr.push(i)
        }
        i++;
    }
    return arr;
}*/

/*
9는 3의 배수이다. 3은 소수이다.
10은 2의 배수, 5의 배수이다. 2와 5는 소수이다.
14는 2의 배수, 7의 배수이다. 2와 7은 소수이다.

다 나누어 볼 필요 없이, 입력받은 수보다 작은 수의 소수들만 나누어 보면 된다.??

  87ms

 */

/*function solution(N) {
    var arr = [];
    arr.push(2);

    for(var i=2; i<=N; i++) {
        for(var j=0; j<arr.length; j++) {
            if(i%arr[j] === 0) break; // 소수가 아닌 경우 패스~

            if(j === arr.length - 1) { // arr 의 마지막까지 통과했을 때, 소수일 경우
                arr.push(i);
            }
        }
    }
    return arr;
}*/


/*
    에라토스테네스의 체 (Sieve of Eratosthenes)

    120까지의 모든 소수를 구한다고 해보자
    2부터 120까지 배열에 모두 넣으 후,
    소수가 아닌 것들을 모두 체크해버리는 것이다.

    2를 제외한 모든 2의 배수를 체크,
    3을 제외한 모든 3의 배수를 체크,
    4는 아까 체크 당했으므로 소수아님,
    5를 제외한 모든 5의 배수 체크

    -> 체크가 안된 수들이 소수이다.

    이 알고리즘을 이용하면, 최악과 최선의 프로그램을 만들 수 있다.
 */

/*
function solution(N) {
    var arr = [];

    for(var i = 2; i <= N; i++) {
        arr[i] = i;
    }

    for(var i = 2; i <= N; i++) {
        for(var j = 2; j <= N; j++) {
            if(arr[j] != i && arr[j]%i == 0) {
                arr[j] = 0;
            }
        }
    }

    return arr;
}

// 최악 : 19508ms
*/

/*
    최적의 방법 :
        체크할 때, 모든 수를 다 돌면서 체크할 필요없이,
        체크 할 배수만큼만 반복문을 돌게 하는 것!!

         그리고, 이미 0으로 체크되어버린 수의 배수는 확인하지 않는다.

 */
function getSemiPrimes(N) {
    var arr = [];
    for (var i = 2; i <= N; i++) {
        arr[i] = i;
    }

    for (var i = 2; i <= Math.sqrt(N); i++) {
        if (arr[i] === 0) { // 이미 체크된 수의 배수는 확인하지 않는다
            continue;
        }
        for(var j = i*2; j <= N; j += i) { // i를 제외한 i의 배수들은 0으로 체크
            arr[j] = 0;
        }
    }
    var primes = [];
    for(var i = 0; i < arr.length; i++) {
        if(arr[i] > 0) {
            primes.push(arr[i]);
        }
    }
    var semiPrimes = [];
    for(var i = 0; i < primes.length; i++) {
        for(var j = 0; j < primes.length; j++) {
            var tmpNum = primes[i]*primes[j];
            if(semiPrimes.indexOf(tmpNum) === -1) {
                semiPrimes.push(tmpNum);
            }
        }
    }

    return semiPrimes.sort(function(a,b) {return a-b;});
}
/*
    36ms
 */

function solution(N, P, Q) {
    var semiPrimes = getSemiPrimes(N);
    var arr = [];
    for(var i = 0; i < P.length; i++) {
        var cnt = 0;
        for (var j = 0; j < semiPrimes.length; j++) {
            if(Q[i] < semiPrimes[j]) {
                break;
            }
            if(P[i] <= semiPrimes[j] && Q[i] >= semiPrimes[j]) {
                cnt++;
            }
        }
        arr.push(cnt);
    }
    return arr;
}

var util = require('./util');

util.logP3(solution,26,[1,4,16],[26,10,20]);