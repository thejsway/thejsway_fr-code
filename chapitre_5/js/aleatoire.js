/* 
Exercice : fonction aléatoire
*/

// Génère un nombre aléatoire entre 0 et 10
function aleatoire() {
    // Math.random() génère un nombre aléatoire entre 0 et 1
    // On multiplie ce nombre par 10 pour avoir un résultat entre 0 et 10
    return Math.random() * 10;
}

// On appelle 10 fois la fonction aleatoire()
for (var i = 1; i <= 10; i++) {
    console.log(aleatoire());
}