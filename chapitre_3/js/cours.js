var nombre = prompt("Entrez un nombre :");
if (nombre > 0) {
    console.log(nombre + " est positif");
} else if (nombre < 0) {
    console.log(nombre + " est négatif");
} else {
    console.log(nombre + " est nul");
}

if ((nombre >= 0) && (nombre <= 100)) {
    console.log(nombre + " est compris entre 0 et 100");
}

console.log(true && true); // Affiche true
console.log(true && false); // Affiche false
console.log(false && true); // Affiche false
console.log(false && false); // Affiche false

if ((nombre < 0) || (nombre > 100)) {
    console.log(nombre + " est en dehors de l'intervalle [0, 100]");
}

console.log(true || true); // Affiche true
console.log(true || false); // Affiche true
console.log(false || true); // Affiche true
console.log(false || false); // Affiche false

if (!(nombre > 100)) {
    console.log(nombre + " est inférieur ou égal à 100");
}

console.log(!true); // Affiche false
console.log(!false); // Affiche true

var meteo = prompt("Quel temps fait-il dehors ?");

if (meteo == "soleil") {
    console.log("Sortez en t-shirt.");
} else if (meteo == "vent") {
    console.log("Sortez en pull.");
} else if (meteo == "pluie") {
    console.log("Sortez en blouson.");
} else if (meteo == "neige") {
    console.log("Restez au chaud à la maison.");
} else {
    console.log("Je n'ai pas compris !");
}

switch (meteo) {
case "soleil":
    console.log("Sortez en t-shirt.");
    break;
case "vent":
    console.log("Sortez en pull.");
    break;
case "pluie":
    console.log("Sortez en blouson.");
    break;
case "neige":
    console.log("Restez au chaud à la maison.");
    break;
default:
    console.log("Je n'ai pas compris !");
}

var x = "abc";
switch (x) {
case "abc":
    console.log("x vaut abc");
    // pas de break : on passe au bloc suivant !
case "def":
    console.log("x vaut def");
    break;
}