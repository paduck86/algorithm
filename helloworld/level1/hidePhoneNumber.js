function hide_numbers(s) {
    var result = "";
    var arr = s.split('');
    for (var i = 0, length = arr.length; i < length; i++) {
        if(i < (length - 4)) {
            arr[i] = '*';
        }
    }
    result = arr.join('');
    return result;
}

console.log("결과 : " + hide_numbers('01033334444'));