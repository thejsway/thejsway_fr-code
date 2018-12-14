// Maximum d'un tableau

const valeurs = [3, 11, 7, 2, 9, 10];

// On initialise la maximum avec le 1er élément du tableau
let max = valeurs[0];

// On commence la recherche au second élément (indice 1)
for (let i = 1; i < valeurs.length; i++) {
  // Si la valeur courante est supérieure au maximum actuel...
  if (valeurs[i] > max) {
    // ... Elle devient le nouveau maximum
    max = valeurs[i];
  }
}

console.log(max);
