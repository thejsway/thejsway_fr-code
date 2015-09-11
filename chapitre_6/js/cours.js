console.log("ABC".length); // Affiche 3
console.log("Je suis une chaîne".length); // Affiche 18

var mot = "Kangourou";
var longueurMot = mot.length; // longueurMot contient la valeur 9
console.log(longueurMot); // Affiche 9

var chaine = "azerty";
console.log(chaine === "azerty"); // Affiche true
console.log(chaine === "qwerty"); // Affiche false

console.log("Azerty" === "azerty"); // Affiche false à cause du A majuscule

var motInitial = "Bora-Bora";
var motEnMinuscules = motInitial.toLowerCase();
console.log(motEnMinuscules); // Affiche "bora-bora"
var motEnMajuscules = motInitial.toUpperCase();
console.log(motEnMajuscules); // Affiche "BORA-BORA"

var valeurSaisie = "Quitter";
console.log(valeurSaisie === "quitter"); // Affiche false à cause du Q majuscule
console.log(valeurSaisie.toLowerCase() === "quitter"); // Affiche true

var sport = "Tennis-ballon"; // 13 caractères
console.log(sport.charAt(0)); // Affiche "T"
console.log(sport[0]); // Affiche "T"
console.log(sport.charAt(6)); // Affiche "-"
console.log(sport[6]); // Affiche "-"

var longueurSport = sport.length;
console.log(sport[longueurSport - 1]); // Affiche "n"
console.log(sport[longueurSport]); // Affiche undefined : longueur dépassée !

var prenom = "Odile"; // 5 caractères
console.log(prenom[0]);
console.log(prenom[1]);
console.log(prenom[2]);
console.log(prenom[3]);
console.log(prenom[4]);

for (var i = 0; i < prenom.length; i++) {
    console.log(prenom[i]);
}

var album = "Boys don't cry";
console.log(album.indexOf("y")); // Affiche 2
console.log(album.indexOf("cry")); // Affiche 11
console.log(album.indexOf("dry")); // Affiche -1 : aucun résultat trouvé