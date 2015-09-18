/*
Exercice : objet chien
*/

var chien = {
    nom: "Crockdur",
    race: "mâtin de Naples",
    taille: 75,

    // Renvoie l'aboiement du chien
    aboyer: function () {
        return "Grr ! Grr !";
    }
};

console.log(chien.nom + " est un " + chien.race + " mesurant " + chien.taille + " cm");
console.log("Tiens, un chat ! " + chien.nom + " aboie : " + chien.aboyer());