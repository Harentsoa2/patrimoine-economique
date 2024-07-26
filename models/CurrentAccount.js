const Possession = require("./Possession");
const TrainDeVie = require("./TrainDeVie");

class CurrentAccount extends Possession {
    constructor(possesseur, type, libelle, solde = 0){
        super(possesseur, type, libelle);
        this.solde = solde;
    }

    depotCurrentAcccount(argent){
        this.solde += argent;
    }

    compteCourantTotalSanstraindeVie(dateFuture) {
        let salaire = this.possesseur.salaireTotalApres(dateFuture) * 80 / 100;
        return salaire;
    }

    compteCourantAvecTrainDeVie(dateFuture, trainDeVie){
        let salaireSansTraindeVie = this.compteCourantTotalSanstraindeVie(dateFuture);
        let depensesTotal = trainDeVie.calculerDepensesTotal(dateFuture);
        let soldeApresDepenses = salaireSansTraindeVie - depensesTotal;
        return soldeApresDepenses;
    }
}

module.exports = CurrentAccount;