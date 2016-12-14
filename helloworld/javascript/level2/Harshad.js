function Harshad(n){
    return n%n.toString().split('').reduce(function(a,b){return Number(a)+Number(b);}) === 0;
}

// 아래는 테스트로 출력해 보기 위한 코드입니다.
console.log(Harshad(18));
console.log(Harshad(12));
console.log(Harshad(11));