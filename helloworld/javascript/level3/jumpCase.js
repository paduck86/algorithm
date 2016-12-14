function jumpCase(num) {
    var answer = 1;
    var n = num;
    var cntOfTwo = 0;
    var obj = {};
    while(n >= 0) {
        /*var arr = [];*/
        var str = '';
        if(n-2 >= 0) {
            cntOfTwo++;
            for (var i = 0; i < cntOfTwo; i++) {
                str += 2 + '';
                /*arr.push(2);*/
            }
            for (var i = 0; i < n-2; i++) {
                str += 1 + '';
                /*arr.push(1);*/
            }
            /*console.log('arr :::', arr);*/
            /*answer+= permutation(arr,0,arr.length,obj);*/
            answer+= permutation(str,0,str.length,obj);
        }

        n = n-2;
    }
    /*console.log('obj :::', obj);*/
    return Object.keys(obj).length + 1;
}

/*function permutation(arr,depth,k,obj) {*/
function permutation(str,depth,k,obj) {
    if(depth === k) {
        /*console.log('arr.join() :::', arr.join(''));*/
        /*if(!obj[arr.join('')]) {
            obj[arr.join('')] = true;
        }*/
        if(!obj[str]) {
            obj[str] = true;
        }
        return;
    }

    for (var i = depth; i < k; i++) {
        /*swap(arr,depth,i);
        permutation(arr,depth+1,k,obj);
        swap(arr,depth,i);*/
        /*str = ;*/
        permutation(swap(str,depth,i),depth+1,k,obj);
        /*str = swap(str,depth,i);*/
    }
}

/*function swap(arr,depth,i) {
    var tmpNumber = arr[depth];
    arr[depth] = arr[i];
    arr[i] = tmpNumber;
}*/

function swap(str,depth,i) {
    var tmpChar1 = str.charAt(depth);
    var tmpChar2 = str.charAt(i);
    if(tmpChar1 === tmpChar2) {
        return str;
    } else {
        str = str.substring(0, depth) + tmpChar2 + str.substring(depth+1,str.length);
        str = str.substring(0, i) + tmpChar1 + str.substring(i+1,str.length);
        return str;
    }
}

//아래는 테스트로 출력해 보기 위한 코드입니다.
console.log(jumpCase(12));

/*var str = '1234';
console.log(swap(str,0,1));*/































/*
 효진이는 멀리 뛰기를 연습하고 있습니다. 효진이는 한번에 1칸, 또는 2칸을 뛸 수 있습니다. 칸이 총 4개 있을 때, 효진이는
 (1칸, 1칸, 1칸, 1칸)
 (1칸, 2칸, 1칸)
 (1칸, 1칸, 2칸)
 (2칸, 1칸, 1칸)
 (2칸, 2칸)
 의 5가지 방법으로 맨 끝 칸에 도달할 수 있습니다. 멀리뛰기에 사용될 칸의 수 n이 주어질 때, 효진이가 끝에 도달하는 방법이 몇 가지인지 출력하는 jumpCase 함수를 완성하세요. 예를 들어 4가 입력된다면, 5를 반환해 주면 됩니다
 */