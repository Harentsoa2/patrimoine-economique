class Possession {
  constructor(possesseur, type, libelle, valeur, dureeDeVie) {
    this.possesseur = possesseur;
    this.type = type;
    this.libelle = libelle;
    this.valeur = valeur;
    this.dureeDeVie = dureeDeVie; // Durée de vie en années
    this.dateAcquisition = new Date();
  }

  getValeur(date) {
    const dateActuelle = new Date(date);
    const anneesDifference = dateActuelle.getFullYear() - this.dateAcquisition.getFullYear();

    if (anneesDifference >= this.dureeDeVie) {
      return 0; // Bien totalement déprécié
    } else {
      const tauxDeDepreciation = anneesDifference / this.dureeDeVie;
      return this.valeur * (1 - tauxDeDepreciation);
    }
  }

}

module.exports = Possession;



