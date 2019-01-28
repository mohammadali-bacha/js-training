var userChoice; 

function changeColor(id) {
    userChoice = prompt('Etes vous sur de valider ? (oui ou non)').toLowerCase();
    if(userChoice == "oui"){
        document.getElementById(id).style.backgroundColor = "#ff0000"; 
    } else{
        document.getElementById(id).style.backgroundColor = "#FFFFFF"; 
    }
}
function changeColorGreen(id) {
    userChoice = prompt('Etes vous sur de valider ? (oui ou non)').toLowerCase();
    if(userChoice == "oui"){
        document.getElementById(id).style.backgroundColor = "#009933"; 
    } else{
        document.getElementById(id).style.backgroundColor = "#FFFFFF"; 
    }
}