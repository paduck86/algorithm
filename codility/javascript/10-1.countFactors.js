/*
 A positive integer D is a factor of a positive integer N if there exists an integer M such that N = D * M.

 For example, 6 is a factor of 24, because M = 4 satisfies the above condition (24 = 6 * 4).

 Write a function:

 function solution(N);

 that, given a positive integer N, returns the number of its factors.

 For example, given N = 24, the function should return 8, because 24 has 8 factors, namely 1, 2, 3, 4, 6, 8, 12, 24. There are no other factors of 24.

 Assume that:

 N is an integer within the range [1..2,147,483,647].
 Complexity:

 expected worst-case time complexity is O(sqrt(N));
 expected worst-case space complexity is O(1).
 */

function solution(N) {
    if(N<=2) {
        return N;
    }
    var cnt=0;
    var limit = Math.sqrt(N);
    for(var i=1; i<=limit; i++) {
        if(N%i === 0) {
            cnt +=2;
            if(i === limit) {
                cnt--;
            }
        }
    }
    return cnt;
}

//24 : 1,2,3,4,6,8,12,24
// 4 : 1,2,4
console.log(solution(24));