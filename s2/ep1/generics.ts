function premierElement<T>(tableau: T[]): T {
  return tableau[0];
}

const nombres = [10, 20, 30, 40];
const chaines = ["Ben", "Raph", "Hugo"];
const objets = [
  { nom: "Ben", age: 22 },
  { nom: "Raph", age: 21 },
];

console.log("Premier nombre :", premierElement(nombres));
console.log("Première chaîne :", premierElement(chaines));
console.log("Premier objet :", premierElement(objets));
