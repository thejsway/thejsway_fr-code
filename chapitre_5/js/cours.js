function direBonjour(prenom) {
    var message = "Bonjour, " + prenom + " !";
    return message;
}

console.log(direBonjour("Baptiste"));
console.log(direBonjour("Sophie"));

function presentation(prenom, age) {
    console.log("Tu t'appelles " + prenom + " et tu as " + age + " ans");
}

presentation("Garance", 7); // OK
presentation(3, "Prosper"); // Erreur : inversion !

console.log(Math.min(4.5, 5)); // Affiche 4.5
console.log(Math.min(19, 9)); // Affiche 9
console.log(Math.min(1, 1)); // Affiche 1

console.log(Math.random()); // Affiche un nombre aléatoire entre 0 et 1