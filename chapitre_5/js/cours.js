/*function bonjour(prenom) {
    var message = "Bonjour, " + prenom + " !";
    return message;
}

console.log(bonjour("Baptiste"));
console.log(bonjour("Sophie"));*/

function alpha() {
    console.log("Alpha");
    beta();
}

function beta() {
    console.log("Beta");
    gamma();
}

function gamma() {
    console.log("Gamma");
}

alpha();

/*function presentation(prenom, age) {
    console.log("Tu t'appelles " + prenom + " et tu as " + age + " ans");
}

presentation("Garance", 7); // OK
presentation(3, "Prosper"); // Erreur : inversion !

/*console.log(Math.min(4.5, 5)); // Affiche 4.5
console.log(Math.min(19, 9)); // Affiche 19
console.log(Math.min(1, 1)); // Affiche 1

console.log(Math.random()); // Affiche un nombre aléatoire entre 0 et 1*/