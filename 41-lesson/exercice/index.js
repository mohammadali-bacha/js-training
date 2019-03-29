exports.handler =  (event,context, callabck) => {

  // const isPalindrome = (string) => {
    const string = event.string;
    const reverse = string.split('').reverse().join('');
    const isPalindrome = (string === reverse);
      
    const result = isPalindrome ? `${string} is a Palindrome` : `${string} is not a Palindrome`;
      
     callabck(result, null);
  };
  
  // function plusGrandeValeurTableau(tableau) {
  //     var miseSurEtagere = tableau[0];
  //     for (var index = 0; index < tableau.length; index++) {
  //         if (miseSurEtagere < tableau[index]) {
  //             miseSurEtagere = tableau[index];
  //         }
  //     }
  //     return console.log(miseSurEtagere);
  // };
  // var tableau = event.string;
  
  // var resultat = plusGrandeValeurTableau(tableau);
  
  // callabck(result, null);
  // };
  
  // exports.handler = (event, context, callback) => {
      
  // var tableau = event.string;
  
  // var length = tableau.length;
  
  // console.log('la taille est du tableau est de  '+ length);
  
  // callaback(null,result);
  
  // // callback(error, response);
  // };