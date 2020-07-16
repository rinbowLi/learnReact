function add(num1, num2) {
  return num1 + num2;
}


function curry(add) {
 var arr = [];
 
 return function reply() {
   var arg = [...arguments];
   arr = arr.concat(arg);
   
   // 递归结束
    if (arg.length === 0) { 
        return arr.reduce(function(p, c) {
            return p = add(p, c);
        }, 0)
    } else {
        return reply;
    }
}
}
var sum = curry(add, 4);