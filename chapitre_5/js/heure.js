function heure(nombreMinutes) {
    var heures = Math.floor(nombreMinutes / 60);
    var minutes = nombreMinutes - (heures * 60);
    return heures + "h" + minutes;
}

console.log(heure(45)); // Doit afficher 0h45
console.log(heure(126)); // Doit afficher 2h6