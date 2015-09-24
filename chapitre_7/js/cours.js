var stylo = {
    type: "bille",
    couleurEncre: "bleu",
    marque: "Bic"
};

console.log(stylo.type); // Affiche "bille"
console.log(stylo.couleurEncre); // Affiche "bleu"
console.log(stylo.marque); // Affiche "Bic"

console.log(stylo['type']); // Affiche "bille"
console.log(stylo['couleurEncre']); // Affiche "bleu"
console.log(stylo['marque']); // Affiche "Bic"

console.log("Mon stylo à " + stylo.type + " " + stylo.marque + " écrit en " + stylo.couleurEncre);

stylo.couleurEncre = "rouge"; // Modifie la couleur de l'encre du stylo

console.log("Mon stylo à " + stylo.type + " " + stylo.marque + " écrit en " + stylo.couleurEncre);

stylo.prix = 2.5; // Ajout de la propriété prix à l'objet stylo

console.log("Il coûte " + stylo.prix + " euros");