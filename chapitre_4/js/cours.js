console.log(1);
console.log(2);
console.log(3);
console.log(4);
console.log(5);

var nombre = 1;
while (nombre <= 5) {
    console.log(nombre);
    nombre++;
}

for (var compteur = 1; compteur <= 5; compteur++) {
    console.log(compteur);
}

//Boucle infinie!
/*var nombre = 1;
while (nombre <= 5) {
    console.log(nombre);
    // La variable n'est plus modifiée : la condition sera toujours vraie
}*/

for (var compteur = 1; compteur <= 5; compteur++) {
    console.log(compteur);
    compteur++; // La variable est modifiée dans le corps de la boucle
}

var lettre = "";
while (lettre !== "X") {
    lettre = prompt("Tapez une lettre ou X pour sortir :");
    console.log(lettre);
}

lettre = "";
for (; lettre !== "X";) {
    lettre = prompt("Tapez une lettre ou X pour sortir :");
    console.log(lettre);
}

console.log(10 % 2); // Affiche 0 car 10 = 5 * 2 + 0
console.log(11 % 2); // Affiche 1 car 11 = 5 * 2 + 1

console.log(18 % 3); // Affiche 0 car 18 = 3 * 6 + 0
console.log(19 % 3); // Affiche 1 car 19 = 3 * 6 + 1
console.log(20 % 3); // Affiche 2 car 20 = 3 * 6 + 2