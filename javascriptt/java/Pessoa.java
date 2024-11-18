// Um exemplo simples de orientação a objetos em Java
public class Pessoa {
    String nome;

    // Construtor para inicializar o nome
    public Pessoa(String nome) {
        this.nome = nome;
    }

    // Método para apresentar uma saudação
    public void saudacao() {
        System.out.println("Olá, meu nome é " + nome);
    }

    public static void main(String[] args) {
        Pessoa pessoa = new Pessoa("Carlos"); // Criamos um objeto da classe Pessoa
        pessoa.saudacao(); // Chamamos o método saudacao
    }
}
