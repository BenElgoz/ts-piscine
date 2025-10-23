function getProperty<T, K extends keyof T>(obj: T, key: K): T[K] {
  return obj[key];
}

interface Voiture {
  marque: string;
  modele: string;
  annee: number;
}

const maVoiture: Voiture = {
  marque: "Toyota",
  modele: "Corolla",
  annee: 2022
};

const marque = getProperty(maVoiture, "marque");
const annee = getProperty(maVoiture, "annee");

console.log("Marque :", marque);
console.log("Année :", annee);
