console.log('-------');

var test0 = function(){
    return 200;
};

console.log(test0());

var [a,b,c] = [1,56,6];

(function(x,y,z){

x += 2;
y += 4;
z += 6;

})(a,b,c);

console.log('a :'+ a);
console.log('b :'+ b);
console.log('c :'+ c);
