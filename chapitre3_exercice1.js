// Jour suivant

const jourActuel = "lundi";
let jourSuivant = "";

// Solution avec un if
if (jourActuel === "lundi") {
  jourSuivant = "mardi";
} else if (jourActuel === "mardi") {
  jourSuivant = "mercredi";
} else if (jourActuel === "mercredi") {
  jourSuivant = "jeudi";
} else if (jourActuel === "jeudi") {
  jourSuivant = "vendredi";
} else if (jourActuel === "vendredi") {
  jourSuivant = "samedi";
} else if (jourActuel === "samedi") {
  jourSuivant = "dimanche";
} else if (jourActuel === "dimanche") {
  jourSuivant = "lundi";
} else {
  console.log("Erreur : jour non reconnu !");
}

// Solution alternative avec un switch
/* switch (jourActuel) {
  case "lundi":
    jourSuivant = "mardi";
    break;
  case "mardi":
    jourSuivant = "mercredi";
    break;
  case "mercredi":
    jourSuivant = "jeudi";
    break;
  case "jeudi":
    jourSuivant = "vendredi";
    break;
  case "vendredi":
    jourSuivant = "samedi";
    break;
  case "samedi":
    jourSuivant = "dimanche";
    break;
  case "dimanche":
    jourSuivant = "lundi";
    break;
  default:
    console.log("Erreur : jour non reconnu !");
} */

if (jourSuivant !== "") {
  console.log(`Demain, nous serons ${jourSuivant}`);
}
