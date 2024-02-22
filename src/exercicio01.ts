class Pessoa {
    nome: string;
    email: string;
    telefone: string;
    dataDeNascimento: Date;
    endereco: string;
    CPF: string;
    matricula: string;
    genero?: string;
    constructor(nome: string, email: string, telefone: string, dataDeNascimento: Date, endereco: string, CPF: string,matricula: string, genero?: string ) {
        this.nome = nome;
        this.email = email;
        this.telefone = telefone;
        this.dataDeNascimento = dataDeNascimento;
        this.endereco = endereco;
        this.CPF = CPF;
        this.matricula = matricula; 
    }
    dadosPessoas() {
        
        console.log(`Nome: ${this.nome}`)
        console.log(`E-mail: ${this.email}`)
        console.log(`Telefone: ${this.telefone}`)
        console.log(`Data de Nascimento: ${this.dataDeNascimento.toLocaleDateString()}`)
        console.log(`Enderço: ${this.endereco}`)
        console.log(`CPF: ${this.CPF}`)
        console.log(`Matricula: ${this.matricula}`);

    if(this.genero) {
        console.log(`Genero: ${this.genero}`)
    }
}
}


class Funcionarios extends Pessoa{
    matricula: string;
    cargo: string;

    constructor(cargo: string, matricula: string, nome: string, email: string, telefone: string, dataDeNascimento: Date, endereco: string, CPF: string, genero?: string) {
       super(nome, email, telefone, dataDeNascimento, endereco, CPF, matricula);
        this.matricula = matricula;
        this.cargo = cargo;
    }
    mostrarDados() {
        console.log('---------------Dados do funcionario---------------');
        super.dadosPessoas()
        console.log(`Cargo: ${this.cargo}`);
        console.log(`Matricula: ${this.matricula}`);
    }   
}
const funcionario1 = new Funcionarios('David Gomes', 'david.henrique4560@gmail.com', '84987047031', new Date('2002.12.10'), 'Nova Natal', '70197231446','pediatra', '002.488.064', 'Masculino');
funcionario1.mostrarDados();



/*class Pacientes extends Pessoa{
   
    constructor(nome: string, email: string, telefone: string, dataDeNascimento: Date, endereco: string[], CPF: string, genero?: string) {
       super(nome, email, telefone, dataDeNascimento, genero, endereco, CPF)
        
    }
    DadosPaciente() {
        console.log('---------------Dados do Paciente---------------');
        console.log(`Nome do paciente: ${this.nomePacientes}`);
        console.log(`Contato do Paciente: ${this.contatoPaciente}`);
        console.log(`CPF: ${this.cpf}`);
    }
}
const paciente1 = new Pacientes('David', '84987047031', '701.972.314-46');
console.log(paciente1.DadosPaciente());

class consultas {

    medico: Funcionarios;
    tipoDeConsulta: string;
    dataDeConsultas: Date;
    paciente: Pacientes;
    constructor(tipoDeConsulta: string, dataDeConsultas: Date, medico: Funcionarios, paciente: Pacientes) {
        this.tipoDeConsulta = tipoDeConsulta;
        this.dataDeConsultas = dataDeConsultas;
        this.paciente = paciente;
        this.medico = medico;
    }
    DadosConsulta() {
        console.log('---------------Dados da Consulta---------------');
        console.log(`Area da Consulta: ${this.tipoDeConsulta}`);
        console.log(`Medico: ${funcionario1.nomeFuncionario}`);
        console.log(`Data da Consulta: ${this.dataDeConsultas.toLocaleDateString()}`);
        console.log(`Paciente: ${paciente1.nomePacientes}`);
    }
}
const consulta1 = new consultas('Pediatra', new Date('2023.03.25'), funcionario1, paciente1);
console.log(consulta1.DadosConsulta()); */