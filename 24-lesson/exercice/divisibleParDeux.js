module.exports = function valueDivisibleValuePerTwo(value) {
    try {
    var answer = false;
     var rest = value % 2;
        if (rest == 0) {
           answer = true; 
        }else{
           throw "the value is not divisible by 2";    
        }
        return reply;
    } catch (error) {
        console.log(error);   
    }
}
