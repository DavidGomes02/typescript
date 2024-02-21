
class Usuario {
    nome: string;
    endereco: string;
    telefone: string;

    constructor(nome: string, endereco: string, telefone: string) {
        this.nome = nome;
        this.endereco = endereco;
        this.telefone = telefone;
    }
}

const usuario1 = new Usuario('David', 'Av industrial', '84987047031');

class Livro {
    titulo: string;
    autor: string;
    editora: string;
    categoria: string;

    constructor(titulo: string, autor: string, editora: string, categoria: string) {
        this.titulo = titulo;
        this.autor = autor;
        this.editora = editora;
        this.categoria = categoria;

    }
}

const livro1 = new Livro('Dom Casmurro', 'Machado de Assis', 'Principis', 'Romance, ficção, memórias, Realismo literário');

class Emprestimo {
    dataEmprestimo: Date;
    dataDevolucao: Date;
    infoUsuario: Usuario;
    infoLivro: Livro;
    constructor(dataEmprestimo: Date, dataDevolucao: Date, infoUsuario: Usuario, infoLivro: Livro) {
        this.dataEmprestimo = dataEmprestimo;
        this.dataDevolucao = dataDevolucao;
        this.infoUsuario = infoUsuario;
        this.infoLivro = infoLivro
    }
}
const emprestimo1 = new Emprestimo(new Date('2024.02.21'), new Date('2024.03.21'), usuario1, livro1);
console.log(emprestimo1);