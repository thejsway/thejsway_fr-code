/*
Exercice : objet cercle
*/

var r = prompt("Entrez le rayon d'un cercle :");
var cercle = {
    rayon: r,

    // Renvoie le périmètre du cercle
    perimetre: function () {
        return 2 * this.rayon * Math.PI;
    },
    // Renvoie l'aire du cercle
    aire: function () {
        return Math.pow(this.rayon, 2) * Math.PI;
    }
};

console.log("Son périmètre vaut " + cercle.perimetre());
console.log("Son aire vaut " + cercle.aire());