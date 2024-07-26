class SavingAccount extends Possession {
    constructor(possesseur, type, libelle, solde = 0){
        super(possesseur, type, libelle);
        this.solde = solde;
    }

    depotSavingAcccount(argent){
        this.solde += argent;
    }

    compteEpargneSansInterêt(dateFuture) {
        let salaire = this.possesseur.salaireTotalApres(dateFuture) * 20 / 100;
        return salaire;
    }

    calculateSaveAccountValueWithAnnualAdditions(dateFuture) {
        const P = this.compteEpargneSansInterêt(dateFuture);
        const t = (new Date(dateFuture).getFullYear() - new Date().getFullYear());
        const r = 5 / 100; 

        let futureValue = 0;

        for (let i = 0; i < t; i++) {
            futureValue += P * Math.pow((1 + r), (1 + i));
        }

        return futureValue;
    }
}
