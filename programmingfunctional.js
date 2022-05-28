var acc = 0;
for (var i = 1; i <= 10; ++i)
    acc += i;
console.log(acc); // prints 55


function sumRange(start,end,acc){
    if(start>end)
        return acc;
     return sumRange(start+1,end,acc+start)    
}
console.log(sumRange(1,10,0)); // 55

var numbers = [1,5,10,15];
var doubles = numbers.map(function(x){
    return x * 2 ;
});
// doubles is now [2,10,20,30]
// numbers is still [1,5,10,15]
console.log(doubles);

var numbers2 = [1,4,9];
var roots= numbers2.map(function(num){
    return Math.sqrt(num);
});
console.log(roots);

const words = ['spray','limit','elite','exuberant','destruction','present']
const result = words.filter(word => word.length > 6);
console.log(result);
var total = [0,1,2,3].reduce(function(a,b){
    return a+b;
});
console.log(total);