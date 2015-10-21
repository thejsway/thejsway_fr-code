/* 
Exercice : afficher le jour suivant
*/

var jour = prompt("Entrez un jour de la semaine :");

// Solution avec un if
if (jour === "lundi") {
    console.log("Demain, nous serons mardi");
} else if (jour === "mardi") {
    console.log("Demain, nous serons mercredi");
} else if (jour === "mercredi") {
    console.log("Demain, nous serons jeudi");
} else if (jour === "jeudi") {
    console.log("Demain, nous serons vendredi");
} else if (jour === "vendredi") {
    console.log("Demain, nous serons samedi");
} else if (jour === "samedi") {
    console.log("Demain, nous serons dimanche");
} else if (jour === "dimanche") {
    console.log("Demain, nous serons lundi");
} else {
    console.log("Jour non reconnu !");
}
