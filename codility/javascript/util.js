module.exports = {
    log: log,
    logP2: logP2,
    logP3: logP3,
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

function logP2(func, input1, input2) {
    console.log('-------------[Start]--------------');
    var start = new Date().getTime();
    console.log('input  :::', input1, input2);
    console.log('result :::', func(input1, input2));
    var end = new Date().getTime();
    console.log('time   :::', (end-start)+'ms');
    console.log('-------------[End]--------------');
}

function logP3(func, input1, input2, input3) {
    console.log('-------------[Start]--------------');
    var start = new Date().getTime();
    console.log('input  :::', input1, input2, input3);
    console.log('result :::', func(input1, input2, input3));
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