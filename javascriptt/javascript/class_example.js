// Orientação a objetos em JavaScript, usando classes
class Pessoa {
    constructor(nome) {
        this.nome = nome; // Inicializamos o nome
    }

    saudacao() {
        console.log("Olá, meu nome é " + this.nome); // Apresentação do objeto
    }
}

const pessoa = new Pessoa("Carlos"); // Criamos um novo objeto
pessoa.saudacao(); // Chamamos o método saudacao
