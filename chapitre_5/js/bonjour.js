/* 
Exercice : fonction bonjour avec saisies utilisateur
*/

// Renvoie un message de bienvenue
function direBonjour(prenom, nom) {
    var message = "Bonjour, " + prenom + " " + nom + " !";
    return message;
}

var p = prompt("Entrez votre prénom :");
var n = prompt("Entrez votre nom :");
console.log(direBonjour(p, n));