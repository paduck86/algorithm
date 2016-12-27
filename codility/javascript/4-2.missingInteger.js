/*
 Write a function:

 function solution(A);
 that, given a non-empty zero-indexed array A of N integers, returns the minimal positive integer (greater than 0) that does not occur in A.

 For example, given:

 A[0] = 1
 A[1] = 3
 A[2] = 6
 A[3] = 4
 A[4] = 1
 A[5] = 2
 the function should return 5.

 Assume that:

 N is an integer within the range [1..100,000];
 each element of array A is an integer within the range [−2,147,483,648..2,147,483,647].
 Complexity:

 expected worst-case time complexity is O(N);
 expected worst-case space complexity is O(N), beyond input storage (not counting the storage required for input arguments).
 Elements of input arrays can be modified.
 */

function solution(A) {
    var arr=[];
    for(var i=0; i<A.length; i++) {
        if(A[i]>0 && !arr[A[i]]){
            arr[A[i]]=true;
        }
    }

    for(var i=1; i<arr.length; i++) {
        if(!arr[i]) {
            return i;
        }
    }
    if(arr.length > 0) {
        return arr.length;
    } else {
        return 1;
    }

}

var util = require('./util');
util.log(solution,[0]);
util.log(solution,[-1,-2]);
util.log(solution,[1]);
util.log(solution,[1,3]);
util.log(solution,[1,3,6,4,1,2]);
util.log(solution,[1,2,3,4,5,6]);

/*
util.log(solution,util.makeArray(600,1,648));*/
