/*

 Task description
 Two positive integers N and M are given. Integer N represents the number of chocolates arranged in a circle, numbered from 0 to N − 1.

 You start to eat the chocolates. After eating a chocolate you leave only a wrapper.

 You begin with eating chocolate number 0. Then you omit the next M − 1 chocolates or wrappers on the circle, and eat the following one.

 More precisely, if you ate chocolate number X, then you will next eat the chocolate with number (X + M) modulo N (remainder of division).

 You stop eating when you encounter an empty wrapper.

 For example, given integers N = 10 and M = 4. You will eat the following chocolates: 0, 4, 8, 2, 6.

 The goal is to count the number of chocolates that you will eat, following the above rules.

 Write a function:

 function solution(N, M);
 that, given two positive integers N and M, returns the number of chocolates that you will eat.

 For example, given integers N = 10 and M = 4. the function should return 5, as explained above.

 Assume that:

 N and M are integers within the range [1..1,000,000,000].
 Complexity:

 expected worst-case time complexity is O(log(N+M));
 expected worst-case space complexity is O(log(N+M)).
 */

/*function solution(N, M) {
    // write your code in JavaScript (Node.js 6.4.0)
    var arr = [];
    for (var i=0; i<N; i++) {
        arr.push(i);
    }

    arr[0] = -1;
    var cnt = 1;
    var moduleNum = M%N;
    var i = moduleNum;

    while(arr[i] > -1) {
        cnt++;
        arr[i] = -1;
        i = (i+moduleNum)%N;
    }

    return cnt;
}*/

/*
correctness : 100%
performance : 25%
 */

function solution(N,M) {
    var gcdNum = gcd(M,N);
    var result = Math.floor(N / gcdNum);
    console.log('gcd :::', gcdNum);
    console.log('result :::', result);
    return result;
}

// 최대공약수 구하는 방법!!!
function gcd(a,b) {
    if(a%b === 0) {
        return b;
    } else {
        return gcd(b, a%b);
    }
}

console.log(solution(10,7));