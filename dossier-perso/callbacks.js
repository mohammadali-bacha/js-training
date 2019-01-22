function malade(nbDeJours){
    return console.log("Vous avez été malade  " + nbDeJours + " jours");
}

function input(callback) {
    var nbDeJours = 2;
    return callback(nbDeJours);
}

input(malade);



// function quelAge(age,prenom){
//     return  console.log(prenom + " a " + age + " ans");
//   }
  
//   function calculAge(callback){
//       var age = 2019 - anneeDeNaissance;
//       var prenom = "M-ALI";
//     return  callback(age, prenom);
//   }
  
//   var anneeDeNaissance = 1997;
  
//   var resultat = calculAge(quelAge);