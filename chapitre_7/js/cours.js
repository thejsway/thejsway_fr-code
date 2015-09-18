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