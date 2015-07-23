function bonjour(prenom, nom) {
    var message = "Bonjour, " + prenom + " " + nom + " !";
    return message;
}

console.log(bonjour("Pablo", "Picasso")); // OK
console.log(bonjour("Van Gogh", "Vincent")); // Nom et prénoms inversés !

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