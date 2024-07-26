class TrainDeVie {
    constructor(possesseur, depensesParMois){
        this.possesseur = possesseur;
        this.depensesParMois = depensesParMois; // Liste des dépenses mensuelles
    }

    calculerDepensesTotal(dateFuture){
        let totalDepenses = this.depensesParMois.reduce((total, depense) => total + depense, 0);
        const dateDonnee = new Date(dateFuture);
        const dateActuelle = new Date();
        const moisDiff = (dateDonnee.getFullYear() - dateActuelle.getFullYear()) * 12 + (dateDonnee.getMonth() - dateActuelle.getMonth());

        return totalDepenses * moisDiff;
    }
}

module.exports = TrainDeVie;