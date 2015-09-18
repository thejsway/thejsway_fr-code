/*
 Exercice : analyse d'un mot
*/

function compterNbVoyelles(mot) {
    var nbVoyelles = 0;
    for (var i = 0; i < mot.length; i++) {
        var lettre = mot[i].toLowerCase();
        if ((lettre === 'a') || (lettre === 'e') || (lettre === 'i') ||
            (lettre === 'o') || (lettre === 'u') || (lettre === 'y')) {
            nbVoyelles++;
        }
    }
    return nbVoyelles;
}

function inverser(mot) {
    var motInverse = "";

    // Solution 1 : ajouter chaque lettre au début du mot inversé
    for (var i = 0; i < mot.length; i++) {
        motInverse = mot[i] + motInverse;
    }

    // Solution 2 : parcourir le mot de la fin vers le début
    /*for (var i = mot.length - 1; i >= 0; i--) {
        motInverse = motInverse + mot[i];
    }*/

    return motInverse;
}

var motSaisi = prompt("Entrez un mot :");

var longueurMot = motSaisi.length;
console.log("Le mot " + motSaisi + " contient " + longueurMot + " caractère(s)");
console.log("Il s'écrit en minuscules " + motSaisi.toLowerCase());
console.log("Il s'écrit en majuscules " + motSaisi.toUpperCase());

var nbVoyelles = compterNbVoyelles(motSaisi);
console.log("Il contient " + nbVoyelles + " voyelle(s) et " + (longueurMot - nbVoyelles) + " consonne(s)");

var motInverse = inverser(motSaisi);
console.log("Il s'écrit à l'envers " + inverser(motSaisi));

if (motInverse.toLowerCase() === motSaisi.toLowerCase()) {
    console.log("C'est un palindrome");
} else {
    console.log("Ce n'est pas un palindrome");
}