var mois = prompt("Entrez le numéro d'un mois :");

// Solution avec des if
if (mois == 1 || mois == 3 || mois == 5 || mois == 7 || mois == 8 ||
    mois == 10 || mois == 12) {
    console.log("Ce mois comporte 31 jours.");
} else if (mois == 4 || mois == 6 || mois == 9 || mois == 11) {
    console.log("Ce mois comporte 30 jours.");
} else if (mois == 2) {
    console.log("Ce mois comporte 28 jours.");
} else {
    console.log("Mois non reconnu !");
}