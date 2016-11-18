function ceasar(s,n) {
    var arr = [];
    var lower_arr = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
    var upper_arr = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
    for (var i = 0, length = s.length; i < length; i++) {
        var c = s.charAt(i);

        if(c !== ' ') {
            if(c == c.toLowerCase()) {
                arr.push(lower_arr[(lower_arr.indexOf(s.charAt(i)) + n) % 26]);
            } else if (c == c.toUpperCase()) {
                arr.push(upper_arr[(upper_arr.indexOf(s.charAt(i)) + n) % 26]);
            }
        }else{
            arr.push(' ');
        }

    }
    return arr.join('');
}

console.log(ceasar('aB z',4));