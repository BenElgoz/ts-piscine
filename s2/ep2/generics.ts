interface AvecLongueur {
  length: number;
}

function premierElementt<T extends AvecLongueur>(tableau: T): any {
  if (tableau.length > 0) {
    return (tableau as any)[0];
  } else {
    console.error("Erreur : le tableau est vide !");
    return undefined;
  }
}

const nombress = [10, 20, 30];
const vide: number[] = [];
const texte = "TypeScript";

console.log("Premier nombre :", premierElementt(nombress)); 
console.log("Premier caractère :", premierElementt(texte)); 
console.log("Tableau vide :", premierElementt(vide)); 
