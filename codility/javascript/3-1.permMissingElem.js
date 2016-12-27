/*
 A zero-indexed array A consisting of N different integers is given. The array contains integers in the range [1..(N + 1)], which means that exactly one element is missing.

 Your goal is to find that missing element.

 Write a function:

 function solution(A);

 that, given a zero-indexed array A, returns the value of the missing element.

 For example, given array A such that:

 A[0] = 2
 A[1] = 3
 A[2] = 1
 A[3] = 5
 the function should return 4, as it is the missing element.

 Assume that:

 N is an integer within the range [0..100,000];
 the elements of A are all distinct;
 each element of array A is an integer within the range [1..(N + 1)].
 Complexity:

 expected worst-case time complexity is O(N);
 expected worst-case space complexity is O(1), beyond input storage (not counting the storage required for input arguments).
 Elements of input arrays can be modified.
 */

function solution(A) {
    if(A.length === 0) {
        return 1;
    }
    var expectedSum = (1 + (A.length+1)) * Math.floor((A.length+1)/2);
    if((A.length+1)%2 === 1) {
        expectedSum += Math.ceil((A.length+1)/2);
    }

    var realSum = 0;
    for(var i=0; i<A.length; i++) {
        realSum += A[i];
    }

    return expectedSum - realSum;
}

console.log(solution([1,2,3,4,5,7,8,9,10]));
console.log(solution([1]));
console.log(solution([1,2]));