module.exports = function divisiblePerTwo(value) {
    try {
    var answer = false;
     var rest = value % 2;
        if (rest == 0) {
           answer = true; 
        }else{
           throw "the value is not divisible by 2";    
        }
        return answer;
    } catch (error) {
        console.log(error);   
    }
}
