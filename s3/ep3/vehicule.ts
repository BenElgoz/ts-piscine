interface Vehicule {
  marque: string;
  annee: number;
}

function isVehicule(obj: any): obj is Vehicule {
  return (
    typeof obj === "object" &&
    obj !== null &&
    typeof obj.marque === "string" &&
    typeof obj.annee === "number"
  );
}

function afficherVehicule(obj: any): void {
  if (isVehicule(obj)) {
    console.log(
      `Le véhicule ${obj.marque} de l'année ${obj.annee} est valide.`
    );
  } else {
    console.log("Objet invalide pour un véhicule.");
  }
}

const voitureValide = { marque: "Hyundai", annee: 2019 };
const objetInvalide = { marque: 123, couleur: "blanc" };

afficherVehicule(voitureValide);
afficherVehicule(objetInvalide);
