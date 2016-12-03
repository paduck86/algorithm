function chooseCity(n, city) {
    var answer = [];
    var arr = [];
    for (var i = 0; i < n; i++) {
        var distance = 0;
        for (var j = 0; j < n; j++) {
            if(i!=j) {
                distance += Math.abs((city[j][0] - city[i][0]) * city[j][1]);
            }
        }
        arr.push([city[i][0], distance]);
    }

    answer = arr.reduce(function(a,b) {
        if (a[1] !== b[1]) {
            return a[1] < b[1] ? a : b;
        } else if (a[1] === b[1]) {
            return a[0] < b[0] ? a : b;
        }

    });
    return answer[0];
}

//var tA = 3;
//var tCity = [[1,5],[2,2],[3,3]];
var tA = 10;
var tCity = [[1,5],[2,2],[3,3],[-4,7],[6,8],[-2,12],[-9,8],[-5,1],[5,2],[7,3]];

console.log(chooseCity(tA, tCity));
