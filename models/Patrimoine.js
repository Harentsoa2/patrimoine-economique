import BienMateriel from './possessions/BienMateriel.js';
import Possession from './possessions/Possession.js';
import Flux from './possessions/Flux.js';
import Personne from './Personne.js';

export default class Patrimoine {
  constructor(possesseur, possessions) {
    this.possesseur = possesseur;
    this.possessions = possessions.map(p => {
      if (p instanceof Flux || p instanceof BienMateriel) {
        return p; // Ajout direct si déjà un Flux ou BienMateriel
      } else if (p.jour || p.valeur === 0) {
        return this.createFlux(p);
      } else {
        return this.createBienMateriel(p);
      }
    });
  }


 createFlux(data) {
    return new Flux(
      data.id,
      data.possesseur,
      data.libelle,
      data.valeurConstante,
      new Date(data.dateDebut),
      data.dateFin ? new Date(data.dateFin) : null,
      data.tauxAmortissement,
      data.jour
    )
  }

  createBienMateriel(data) {
    return new BienMateriel(
      data.id,
      data.possesseur,
      data.libelle,
      data.valeur,
      new Date(data.dateDebut),
      data.dateFin ? new Date(data.dateFin) : null,
      data.tauxAmortissement
    );
  }

  getValeur(date) {
    let result = 0;
    for (const item of this.possessions) {
      result += item.getValeur(date);
    }
    return result;
  }

  addPossession(possession) {
    if (!(possession instanceof BienMateriel)) {
      console.error("The possession must be an instance of BienMateriel.");
      return;
    }
    if (possession.possesseur !== this.possesseur) {
      console.log(`${possession.libelle} n'appartient pas à ${this.possesseur}`);
    } else {
      this.possessions.push(possession);
    }
  }

  removePossession(possession) {
    this.possessions = this.possessions.filter(
      (p) => p.libelle !== possession.libelle,
    );
  }
}

let John = new Personne("John Doe");
let m1 = new BienMateriel(2, John, "Tablette", 850000, new Date("2024-09-1"), null, 10);
let m2 = new BienMateriel(3, John, "Phone", 5000, new Date("2024-08-27"), null, 10);
let m3 = new BienMateriel(4, John, "MacBook", 2000, new Date("2024-08-30"), null, 10);
let power = new Flux(1, John, "Alernance", 500000, new Date("2024-09-03"), null, 0, 1);


console.log(m1.getValeur(new Date("2027-09-03")));
console.log(m2.getValeur(new Date("2027-09-03")));
console.log(m3.getValeur(new Date("2027-09-03")));
console.log(power.getValeur(new Date("2027-09-03")));

let total = new Patrimoine(John, [m1, m2, m3, power]);
console.log(total.getValeur(new Date("2027-09-03")));
