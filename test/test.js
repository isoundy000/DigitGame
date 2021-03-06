var Promise = require('quick-pomelo').Promise;
var fs = require("fs");

//方法Promise化
var readFileAsync = Promise.promisify(fs.readFile);

//链式调用断开
var pp = Promise.resolve()
.then(function(){
	console.log(1);
})
.then(function(){
	console.log(2);
	return 555;
});

pp.then(function(x){
	console.log(x);
	return 666;
})
.delay(1000)
.then(function(x){
	console.log(x);
});

// 调用then函数中调用Promise方法,返回单个Promise对象，会等待调用完成
/*
Promise.resolve()
.then(function () {
return readFileAsync('1.txt', 'utf-8');// , readFileAsync('2.txt', 'utf-8'),readFileAsync('3.txt', 'utf-8')];
 })
.then(function (s) {
 console.log("all:" + s) 
 });
-*/

// 调用then函数中调用Promise方法,返回多个Promise对象，不会等待调用完成
/*
Promise.resolve()
.then(function () {
return [readFileAsync('1.txt', 'utf-8') , readFileAsync('2.txt', 'utf-8'),readFileAsync('3.txt', 'utf-8')];
})
.all()
.then(function (array) {
 console.log("all:" + array);
 });
 */
 
