class Heroi {
  constructor(nome, idade, tipo) {
    this.nome = nome;
    this.idade = idade;
    this.tipo = tipo;
  }
  atacar() {
    const armas = {
      mago: "magia",
      guerreiro: "espada",
      monge: "artes marciais",
      ninja: "shuriken",
    };
    console.log(`O ${this.tipo} atacou usando ${armas[this.tipo]}`);
  }
}

const mago = new Heroi("Fulano", "90", "mago");
mago.atacar();

const guerreiro = new Heroi("Sicrano", "20", "guerreiro");
guerreiro.atacar();
