/*
Exercice : périmètre et aire d'un cercle
*/

// Renvoie le périmètre d'un cercle
function perimetre(rayon) {
    return 2 * rayon * Math.PI;
}

// Renvoie l'aire d'un cercle
function aire(rayon) {
    return Math.pow(rayon, 2) * Math.PI;
}

var r = prompt("Entrez le rayon d'un cercle :");
console.log("Son périmètre vaut " + perimetre(r));
console.log("Son aire vaut " + aire(r));