interface IAnimal {
  nom: string;
  seDeplacer(): void;
}

class Animall implements IAnimal {
  nom: string;

  constructor(nom: string) {
    this.nom = nom;
  }

  seDeplacer(): void {
    console.log(`L'animal ${this.nom} se déplace.`);
  }
}

class Chien extends Animall {
  seDeplacer(): void {
    console.log(`Le chien ${this.nom} court.`);
  }
}

class Chat extends Animall {
  seDeplacer(): void {
    console.log(`Le chat ${this.nom} saute.`);
  }
}

function faireSeDeplacer(animaux: IAnimal[]): void {
  for (const animal of animaux) {
    animal.seDeplacer();
  }
}

const rex = new Chien("Fink");
const minou = new Chat("Twiks");

const animaux: IAnimal[] = [rex, minou];
faireSeDeplacer(animaux);
