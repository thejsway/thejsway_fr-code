var films = ["Le loup de Wall Street", "Vice-Versa", "Babysitting"];

var tab = ["Bonjour", 7, true];

console.log(films.length); // Affiche 3

var t = []; // Création d'un tableau vide

console.log(t.length); // Affiche 0

console.log(films[0]); // Affiche "Le loup de Wall Street"
console.log(films[1]); // Affiche "Vice-Versa"
console.log(films[2]); // Affiche "Babysitting"

console.log(films[3]); // Affiche undefined

films.push("Les Bronzés");

console.log(films[3]); // Affiche "Les Bronzés"