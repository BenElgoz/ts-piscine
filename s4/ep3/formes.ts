abstract class Forme {
  abstract calculerSurface(): number;
}

class Rectanglee extends Forme {
  largeur: number;
  hauteur: number;

  constructor(largeur: number, hauteur: number) {
    super();
    this.largeur = largeur;
    this.hauteur = hauteur;
  }

  calculerSurface(): number {
    return this.largeur * this.hauteur;
  }
}

class Cerclee extends Forme {
  rayon: number;

  constructor(rayon: number) {
    super();
    this.rayon = rayon;
  }

  calculerSurface(): number {
    return Math.PI * this.rayon * this.rayon;
  }
}

// 4. Tests
const monRectanglee = new Rectanglee(10, 5);
const monCerclee = new Cerclee(3);

console.log(`Surface du rectangle : ${monRectanglee.calculerSurface()}`);
console.log(`Surface du cercle : ${monCerclee.calculerSurface()}`);
