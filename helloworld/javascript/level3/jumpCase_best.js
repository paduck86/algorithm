var memoization = [];
function jumpCase(num) {
    if (memoization[num]) {
        return memoization[num];
    } else {
        if (num === 1) {
            memoization[num] = 1;
        } else if (num === 2) {
            memoization[num] = 2;
        } else {
            memoization[num] = jumpCase(num-1) + jumpCase(num-2);
        }
        return memoization[num];
    }
}

//아래는 테스트로 출력해 보기 위한 코드입니다.
console.log(jumpCase(4));
