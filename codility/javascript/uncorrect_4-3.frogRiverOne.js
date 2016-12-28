/*
 A small frog wants to get to the other side of a river. The frog is initially located on one bank of the river (position 0) and wants to get to the opposite bank (position X+1). Leaves fall from a tree onto the surface of the river.

 You are given a zero-indexed array A consisting of N integers representing the falling leaves. A[K] represents the position where one leaf falls at time K, measured in seconds.

 The goal is to find the earliest time when the frog can jump to the other side of the river. The frog can cross only when leaves appear at every position across the river from 1 to X (that is, we want to find the earliest moment when all the positions from 1 to X are covered by leaves). You may assume that the speed of the current in the river is negligibly small, i.e. the leaves do not change their positions once they fall in the river.

 For example, you are given integer X = 5 and array A such that:

 A[0] = 1
 A[1] = 3
 A[2] = 1
 A[3] = 4
 A[4] = 2
 A[5] = 3
 A[6] = 5
 A[7] = 4
 In second 6, a leaf falls into position 5. This is the earliest time when leaves appear in every position across the river.

 Write a function:

 function solution(X, A);

 that, given a non-empty zero-indexed array A consisting of N integers and integer X, returns the earliest time when the frog can jump to the other side of the river.

 If the frog is never able to jump to the other side of the river, the function should return −1.

 For example, given X = 5 and array A such that:

 A[0] = 1
 A[1] = 3
 A[2] = 1
 A[3] = 4
 A[4] = 2
 A[5] = 3
 A[6] = 5
 A[7] = 4
 the function should return 6, as explained above.

 Assume that:

 N and X are integers within the range [1..100,000];
 each element of array A is an integer within the range [1..X].
 Complexity:

 expected worst-case time complexity is O(N);
 expected worst-case space complexity is O(X), beyond input storage (not counting the storage required for input arguments).
 Elements of input arrays can be modified.
 */

/*function solution(X, A) {
    var obj = {};
    var sum = X * Math.floor((X+1)/2);
    for(var i=1; i<=X; i++) {
        obj[i] = true;
    }
    for(var i=0; i<A.length; i++) {
        if(obj[A[i]]){
            delete obj[A[i]];
        }
        if(Object.keys(obj).length === 0) {
            return i;
        }
    }

    return -1;

}*/

/*
    correctness : 100%
    performance : 0%
    -> time complexity : O(n**2)
 */

function solution(X, A) {
    var arr = [];
    arr.length = X;
    arr.fill(false);

    var sum = (1 + X) * Math.floor(X/2);
    if(X%2 === 1) {
        sum += Math.ceil(X/2);
    }

    var idx = -1;
    for(var i=0; i<A.length; i++) {
        if(A[i]<=X && !arr[A[i]-1]) {
            arr[A[i]-1] = true;
            sum -= A[i];
            if(arr.indexOf(false) === -1 && sum === 0) {
                return i;
            }
        }
    }

    return -1;

}



/*
correctness : 100%
performance : 60%
large_permutation : 5.27sec - TIMEOUT ERROR
 */

function solution(X,A) {
    var availableLeaves = [];
    availableLeaves.length = X+1;
    availableLeaves.fill(-1);

    for (var i = 0; i< A.length; ++i){
        if(availableLeaves[A[i]] === -1){
            availableLeaves[A[i]] = i;//store the time leave appears
        };
    }

    availableLeaves.sort(function(a,b){return a-b});
    if(availableLeaves[1] === -1){
        return -1;
    }

    return availableLeaves.pop();
}


var util = require('./util');
/*util.logP2(solution,5,[1,3,1,4,2,3,5,4]);
 util.logP2(solution,1,[1]);
 util.logP2(solution,2,[2,2,2,2,2]);
 util.logP2(solution,1,[2,3]);*/


//util.logP2(solution,999,util.makeArray(99999,1,99999));
util.logP2(solution,999,util.makePermArray(99999,1,99999));