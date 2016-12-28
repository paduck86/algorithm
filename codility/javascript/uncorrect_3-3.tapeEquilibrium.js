/*
 A non-empty zero-indexed array A consisting of N integers is given. Array A represents numbers on a tape.

 Any integer P, such that 0 < P < N, splits this tape into two non-empty parts: A[0], A[1], ..., A[P − 1] and A[P], A[P + 1], ..., A[N − 1].

 The difference between the two parts is the value of: |(A[0] + A[1] + ... + A[P − 1]) − (A[P] + A[P + 1] + ... + A[N − 1])|

 In other words, it is the absolute difference between the sum of the first part and the sum of the second part.

 For example, consider array A such that:

 A[0] = 3
 A[1] = 1
 A[2] = 2
 A[3] = 4
 A[4] = 3
 We can split this tape in four places:

 P = 1, difference = |3 − 10| = 7
 P = 2, difference = |4 − 9| = 5
 P = 3, difference = |6 − 7| = 1
 P = 4, difference = |10 − 3| = 7
 Write a function:

 function solution(A);

 that, given a non-empty zero-indexed array A of N integers, returns the minimal difference that can be achieved.

 For example, given:

 A[0] = 3
 A[1] = 1
 A[2] = 2
 A[3] = 4
 A[4] = 3
 the function should return 1, as explained above.

 Assume that:

 N is an integer within the range [2..100,000];
 each element of array A is an integer within the range [−1,000..1,000].
 Complexity:

 expected worst-case time complexity is O(N);
 expected worst-case space complexity is O(N), beyond input storage (not counting the storage required for input arguments).
 Elements of input arrays can be modified.
 */

/*function solution(A) {
    /!* P = 1 ~ A.length-1
    * leftSum , rightSum
     *!/
    var P = 1;
    var minValue = 0;
    while(P <= A.length-1) {
        var leftSum = 0
          , rightSum = 0;
        for(var i=0; i<A.length; i++){
            if(i<P) {
                leftSum += A[i];
            }else {
                rightSum += A[i];
            }
        }
        if(P === 1) {
            minValue = Math.abs(leftSum - rightSum);
        } else {
            minValue = Math.min(minValue, Math.abs(leftSum - rightSum));
        }
        P++;
    }
    return minValue;
}*/

/*
 correctness : 100%
 performance : 33%
 */



function solution(A) {
    var rightSum = A.reduce(function(x,y){return x+y;});
    var leftSum = 0;
    var minDiff = 100000;
    for(var P=1; P<A.length; P++) {
        leftSum += A[P-1];
        rightSum -= A[P-1];
        minDiff = Math.min(minDiff, Math.abs(leftSum - rightSum));
    }

    return minDiff;
}

/*
    correctness : 100%
    performance : 100%
 */
var util = require('./util');
/*util.log(solution,[3,1,2,4,3]);
util.log(solution,[1,-2]);
util.log(solution,[-1,2]);
util.log(solution,[-1,-2]);
util.log(solution,[1,2]);*/

util.log(solution,util.makeArray(99999,-1000,1000));