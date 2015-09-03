/* 
Exercice : fonction calculatrice
*/

// Renvoie le résultat d'un calcul
function calcul(operandeGauche, operation, operandeDroite) {
    var resultat;
    switch (operation) {
    case "+":
        resultat = operandeGauche + operandeDroite;
        break;
    case "-":
        resultat = operandeGauche - operandeDroite;
        break;
    case "*":
        resultat = operandeGauche * operandeDroite;
        break;
    case "/":
        resultat = operandeGauche / operandeDroite;
        break;
    }
    return resultat;
}

console.log(calcul(4, "+", 6)); // Doit afficher 10
console.log(calcul(4, "-", 6)); // Doit afficher -2
console.log(calcul(2, "*", 0)); // Doit afficher 0
console.log(calcul(12, "/", 0)); // Doit afficher Infinity