// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A) {
    // write your code in JavaScript (Node.js 6.4.0)
    if(A.length === 3) {
        return A[0] * A[1] * A[2];
    }
    A.sort(function(a,b){return b-a;});
    var length = A.length;
    var max = A[0]*A[1]*A[2];
    max = Math.max(max,A[length-1]*A[length-2]*A[length-3]);
    max = Math.max(max,A[0]*A[1]*A[length-1]);
    max = Math.max(max,A[0]*A[length-1]*A[length-2]);
    return max;
}