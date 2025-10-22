interface Personne {
  readonly id: number;
  nom: string;
  age: number;
  adresse?: Adresse;
}

interface Adresse {
  rue: string;
  ville: string;
}

function afficherPersonneAvancee(personne: Personne): void {
  if (personne.adresse) {
    console.log(
      `Bonjour, je m'appelle ${personne.nom} (ID: ${personne.id}), j'ai ${personne.age} ans et j'habite au ${personne.adresse.rue}, ${personne.adresse.ville}.`
    );
  } else {
    console.log(
      `Bonjour, je m'appelle ${personne.nom} (ID: ${personne.id}) et j'ai ${personne.age} ans.`
    );
  }
}

const personne2: Personne = {
  id: 1,
  nom: "Ben",
  age: 22,
  adresse: {
    rue: "123 rue de la Paix",
    ville: "Paris"
  }
};

const personne3: Personne = {
  id: 2,
  nom: "Raph",
  age: 21
};

afficherPersonneAvancee(personne2);
afficherPersonneAvancee(personne3);
