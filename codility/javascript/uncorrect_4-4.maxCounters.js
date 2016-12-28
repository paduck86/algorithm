/*
 You are given N counters, initially set to 0, and you have two possible operations on them:

 increase(X) − counter X is increased by 1,
 max counter − all counters are set to the maximum value of any counter.
 A non-empty zero-indexed array A of M integers is given. This array represents consecutive operations:

 if A[K] = X, such that 1 ≤ X ≤ N, then operation K is increase(X),
 if A[K] = N + 1 then operation K is max counter.
 For example, given integer N = 5 and array A such that:

 A[0] = 3
 A[1] = 4
 A[2] = 4
 A[3] = 6
 A[4] = 1
 A[5] = 4
 A[6] = 4
 the values of the counters after each consecutive operation will be:

 (0, 0, 1, 0, 0)
 (0, 0, 1, 1, 0)
 (0, 0, 1, 2, 0)
 (2, 2, 2, 2, 2)
 (3, 2, 2, 2, 2)
 (3, 2, 2, 3, 2)
 (3, 2, 2, 4, 2)
 The goal is to calculate the value of every counter after all operations.

 Write a function:

 class Solution { public int[] solution(int N, int[] A); }

 that, given an integer N and a non-empty zero-indexed array A consisting of M integers, returns a sequence of integers representing the values of the counters.

 The sequence should be returned as:

 a structure Results (in C), or
 a vector of integers (in C++), or
 a record Results (in Pascal), or
 an array of integers (in any other programming language).
 For example, given:

 A[0] = 3
 A[1] = 4
 A[2] = 4
 A[3] = 6
 A[4] = 1
 A[5] = 4
 A[6] = 4
 the function should return [3, 2, 2, 4, 2], as explained above.

 Assume that:

 N and M are integers within the range [1..100,000];
 each element of array A is an integer within the range [1..N + 1].
 Complexity:

 expected worst-case time complexity is O(N+M);
 expected worst-case space complexity is O(N), beyond input storage (not counting the storage required for input arguments).
 Elements of input arrays can be modified.
 */

/*function solution(N, A) {
    var counters = [];
    counters.length = N;
    counters.fill(0);
    var maxNum = 0;
    for(var K=0; K<A.length; K++) {
        if(1<=A[K] && A[K]<=N) {
            counters[A[K]-1] += 1;
            maxNum = Math.max(maxNum, counters[A[K]-1]);
        } else if(A[K] === N+1) {
            counters.fill(maxNum);
        }
    }
    return counters;

}*/

/*
    correctness : 100%
    performance : 60%
 */

function solution(N, A) {
    var counters = [];
    counters.length = N;
    counters.fill(0);
    var max = 0;
    var preMax = 0;
    for(var K=0; K<A.length; K++) {
        if(A[K]<=N) {
            if(counters[A[K]-1] >= preMax) {
                counters[A[K]-1] += 1;
            } else {
                counters[A[K]-1] = preMax + 1;
            }
            max = Math.max(max, counters[A[K]-1]);
        } else {
            preMax = max;
        }
    }

    for(var i=0; i<counters.length; i++) {
        if(counters[i] < preMax) {
            counters[i] = preMax;
        }
    }
    return counters;

}

var util = require('./util');

util.logP2(solution,5,[3,4,4,6,1,4,4]);
/*util.logP2(solution,1,[1]);
util.logP2(solution,10,[1]);
util.logP2(solution,1,[1,2,2,1,1]);*/

/*util.logP2(solution,9999,util.makeArray(99999,1,100000));*/



/*
 // you can also use imports, for example:
 // import java.util.*;
 import java.util.Arrays;

 // you can write to stdout for debugging purposes, e.g.
 // System.out.println("this is a debug message");

 class Solution {
 public int[] solution(int N, int[] A) {
 // write your code in Java SE 8
 int[] counters = new int[N];
 int maxNum = 0;
 for(int K=0; K<A.length; K++) {
 if(1<=A[K] && A[K]<=N) {
 counters[A[K]-1] += 1;
 maxNum = Math.max(maxNum, counters[A[K]-1]);
 } else if(A[K] == N+1) {
 Arrays.fill(counters, maxNum);
 }
 }
 return counters;
 }
 }
 */