function average(array){
    //함수를 완성하세요
    var sum = array.reduce(function(a,b){return a+b;});
    return sum / array.length;
}


// 아래는 테스트로 출력해 보기 위한 코드입니다.
var testArray = [5,3,4]
console.log("평균값 : " + average(testArray));