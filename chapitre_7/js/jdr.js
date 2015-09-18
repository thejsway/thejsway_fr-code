var perso1 = {
    nom: "Aurora",
    sante: 150,
    force: 25,

    // Renvoie la description du personnage
    decrire: function () {
        var description = this.nom + " a " + this.sante + " points de vie et " +
            this.force + " en force";
        return description;
    }
};

console.log(perso1.decrire());

// Aurora est blessée par une flèche
perso1.sante = perso1.sante - 20;

// Aurora trouve un bracelet de force
perso1.force = perso1.force + 10;

console.log(perso1.decrire());