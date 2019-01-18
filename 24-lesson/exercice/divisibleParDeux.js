module.exports = function valeurDivisibleParDeux(valeur) {
    try {
    var reponse = false;
     var reste =  valeur % 2;
        if (reste == 0) {
           reponse = true; 
        }else{
           throw "la valeur n'est pas divisble par 2";    
        }
        return reponse;
    } catch (error) {
        console.log(error);   
    }
}
