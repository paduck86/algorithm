function findLargestSquare(board) {
    var answer = 0;
    var obj = {area : 0};
    for (var i = 0; i < board.length; i++) {
        for (var j = 0; j < board[0].length; j++) {
            findSquare(board, i, j, 1, obj);
            answer = Math.max(answer,obj.area);
        }
    }
    return answer;
}

function findSquare(board, i, j, depth, obj) {
    console.log('start ::: i :: ' + i + ' j :: ' + j);
    /*console.log('start ::: depth :: ' + depth);
    console.log('start ::: i+depth :: ' + (i+depth) + ' j+depth :: ' + (j+depth));*/
    if((i+depth) > board.length || (j+depth) > board.length) {
        console.log('end ::: i :: ' + i + ' j :: ' + j);
        /*console.log('end ::: depth :: ' + depth);
        console.log('end ::: i+depth :: ' + (i+depth) + ' j+depth :: ' + (j+depth));*/
        console.log('end area :::', obj.area);
        return;
    }
    if(board[i][j] === 'X') {
        obj.area = 0;
    } else {
        var is_square = false;
        for (var k = i; k < (i+depth); k++) {
            for (var l = j; l < (j+depth); l++) {
                console.log('i :::', k + '  ' + 'j :::', l + ' board[i][j] :::', board[k][l]);
                if(board[k][l]==='O') {
                    is_square = true;
                } else {
                    is_square = false;
                    break;
                }
            }
            if(is_square === false) {
                break;
            }
        }
        if (is_square === true) {
            obj.area = depth * depth;
            console.log('obj.area :::', obj.area);
            findSquare(board, i, j, depth+1, obj);
        } else {
            console.log('return area :::', obj.area);
            return;
        }
    }
}

//아래 코드는 테스트를 위한 출력 코드 입니다.
//var testBoard = [['X','O','O','O','X'],['X','O','O','O','O'],['X','X','O','O','O'],['X','X','O','O','O'],['X','X','X','X','X']];
var testBoard = [['X','O','O','O','X'],['O','O','O','O','O'],['O','O','O','O','O'],['O','O','O','X','O'],['O','O','O','O','O']];
console.log(findLargestSquare(testBoard));