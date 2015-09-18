/*
Mini-jeu de rôle
*/

var perso1 = {
    nom: "Aurora",
    sante: 150,
    force: 25,
    xp: 0,

    // Renvoie la description du personnage
    decrire: function () {
        var description = this.nom + " a " + this.sante + " points de vie, " +
            this.force + " en force et " + this.xp + " points d'expérience";
        return description;
    }
};

console.log(perso1.decrire());

// Aurora est blessée par une flèche
perso1.sante = perso1.sante - 20;

// Aurora trouve un bracelet de force
perso1.force = perso1.force + 10;

// Aurora apprend une nouvelle compétence
perso1.xp = perso1.xp + 15;

console.log(perso1.decrire());