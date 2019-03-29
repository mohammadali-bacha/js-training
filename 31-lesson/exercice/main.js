var userChoice; 

function changeColor(id) {
    userChoice = prompt('Are you sure you want to validate?  (yes or no)').toLowerCase();
    if(userChoice == "yes"){
        document.getElementById(id).style.backgroundColor = "#ff0000"; 
    } else{
        document.getElementById(id).style.backgroundColor = "#FFFFFF"; 
    }
}
function changeColorGreen(id) {
    userChoice = prompt('Are you sure you want to validate? (yes or no)').toLowerCase();
    if(userChoice == "yes"){
        document.getElementById(id).style.backgroundColor = "#009933"; 
    } else{
        document.getElementById(id).style.backgroundColor = "#FFFFFF"; 
    }
}