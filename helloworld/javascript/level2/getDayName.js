function getDayName(a,b){
var dayNames = ["FRI","SAT","SUN","MON","TUE","WED","THU"];
var months = [31,29,31,30,31,30,31,31,30,31,30,31];
var days = 0;
for (var i = 0; i < a-1; i++) {
    days += months[i];
}
days += b;
return dayNames[days%7 === 0 ? 6 : days%7 - 1];
}

//아래 코드는 테스트를 위한 코드입니다.
console.log(getDayName(5,24));
console.log(getDayName(2,11)); //목
console.log(getDayName(3,24)); //목