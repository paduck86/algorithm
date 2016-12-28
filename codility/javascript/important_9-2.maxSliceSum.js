/*
 A non-empty zero-indexed array A consisting of N integers is given. A pair of integers (P, Q), such that 0 ≤ P ≤ Q < N, is called a slice of array A. The sum of a slice (P, Q) is the total of A[P] + A[P+1] + ... + A[Q].

 Write a function:

 int solution(int A[], int N);
 that, given an array A consisting of N integers, returns the maximum sum of any slice of A.

 For example, given array A such that:

 A[0] = 3  A[1] = 2  A[2] = -6
 A[3] = 4  A[4] = 0
 the function should return 5 because:

 (3, 4) is a slice of A that has sum 4,
 (2, 2) is a slice of A that has sum −6,
 (0, 1) is a slice of A that has sum 5,
 no other slice of A has sum greater than (0, 1).
 Assume that:

 N is an integer within the range [1..1,000,000];
 each element of array A is an integer within the range [−1,000,000..1,000,000];
 the result will be an integer within the range [−2,147,483,648..2,147,483,647].
 Complexity:

 expected worst-case time complexity is O(N);
 expected worst-case space complexity is O(N), beyond input storage (not counting the storage required for input arguments).
 Elements of input arrays can be modified.
 */
function solution(A) {
    var maxSum = -2147483648;
    var tempSum = 0;
    for(var i = 0; i < A.length; i++) {
        if (tempSum + A[i] < 0) {
            tempSum = A[i];
        } else {
            if (tempSum + A[i] > A[i]) {
                tempSum += A[i];
            } else {
                tempSum = A[i];
            }
        }

        console.log('A[i] :::', A[i]);
        console.log('tempSum :::', tempSum);

        if (tempSum > maxSum) {
            maxSum = tempSum;
        }
        console.log('maxSum :::', maxSum);
    }
    return maxSum;
}

/*console.log(solution([5,3,-4,6,4]));*/
/*
console.log(solution([3,2,-6,4,0]));*/
console.log(solution([-5,-2,-1,-3,-4]));

// 음수일때는 최대값
//