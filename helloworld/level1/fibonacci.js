var memoization = [];
function fibonacci(num) {
    if(memoization[num]) {
        return memoization[num];
    } else {
        if(num === 0) {
            memoization[num] = 0;
        } else if (num === 1) {
            memoization[num] = 1;
        } else {
            memoization[num] = fibonacci(num-1) + fibonacci(num-2);
        }
        return memoization[num];
    }
}

// 아래는 테스트로 출력해 보기 위한 코드입니다.
console.log(fibonacci(3));
console.log(fibonacci(4));
console.log(fibonacci(1350));