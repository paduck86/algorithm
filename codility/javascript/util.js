module.exports = {
    log: log,
    makeArray: makeArray,
    makePermArray: makePermArray
};

function log(func, input) {
    console.log('-------------[Start]--------------');
    var start = new Date().getTime();
    console.log('input  :::', input);
    console.log('result :::', func(input));
    var end = new Date().getTime();
    console.log('time   :::', (end-start)+'ms');
    console.log('-------------[End]--------------');
}

function makeArray(length, min, max) {
    var arr = [];
    for(var i=0; i<length; i++) {
        arr.push(Math.floor(Math.random() * (max-min+1) + min));
    }
    return arr;
}

function makePermArray(length, min, max) {
    var arr = [];
    for(var i=min; i<=max; i++) {
        arr.push(i);
    }
    return arr;
}