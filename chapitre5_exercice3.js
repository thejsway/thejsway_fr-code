// Calculatrice

// Effectue les 4 opérations arithmétiques de base
function calculer(nbGauche, operation, nbDroite) {
  let resultat;
  switch (operation) {
    case "+":
      resultat = nbGauche + nbDroite;
      break;
    case "-":
      resultat = nbGauche - nbDroite;
      break;
    case "*":
      resultat = nbGauche * nbDroite;
      break;
    case "/":
      resultat = nbGauche / nbDroite;
      break;
  }
  return resultat;
}

console.log(calculer(4, "+", 6)); // 10
console.log(calculer(4, "-", 6)); // -2
console.log(calculer(2, "*", 0)); // 0
console.log(calculer(12, "/", 0)); // Infinity
