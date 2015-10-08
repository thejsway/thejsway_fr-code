/*
Exercice : gestion d'un chenil
*/

var Chien = {
    // initialise le chien
    init: function (nom, race, taille) {
        this.nom = nom;
        this.race = race;
        this.taille = taille;
    },
    // Renvoie l'aboiement du chien
    aboyer: function () {
        var aboiement = "Whoua ! Whoua !";
        if (this.taille < 25) {
            aboiement = "Kaii ! Kaii !";
        } else if (this.taille > 60) {
            aboiement = "Grrr ! Grrr !";
        }
        return aboiement;
    }
};

var crokdur = Object.create(Chien);
crokdur.init("Crokdur", "mâtin de Naples", 75);
var pupuce = Object.create(Chien);
pupuce.init("Pupuce", "bichon", 22);
var medor = Object.create(Chien);
medor.init("Médor", "labrador", 58);

var chenil = [];
chenil.push(crokdur);
chenil.push(pupuce);
chenil.push(medor);

console.log("Le chenil hégerge " + chenil.length + " chien(s) :");
chenil.forEach(function (chien) {
    console.log(chien.nom + " est un " + chien.race + " mesurant " + chien.taille + " cm. " +
        "Il aboie : " + chien.aboyer());
});