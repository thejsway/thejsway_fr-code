// Elève un nombre à la puissance
function puissance(nombre, exposant) {
    var resultat = nombre;
    for (var i = 1; i < exposant; i++) {
        resultat = resultat * nombre;
    }
    return resultat;
}

console.log(puissance(2, 1)); // Affiche 2
console.log(puissance(2, 3)); // Affiche 8
console.log(puissance(3, 3)); // Affiche 27