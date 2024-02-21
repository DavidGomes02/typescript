class Funcionarios {
    email: string;
    nomeFuncionario: string;
    cargo: string;
    telefone: string;
    dataNasciment: Date;

    constructor(email: string, nomeFuncionario: string, cargo: string, telefone: string, dataNasciment: Date) {
        this.email = email;
        this.nomeFuncionario = nomeFuncionario;
        this.cargo = cargo;
        this.telefone = telefone;
        this.dataNasciment = dataNasciment;
    }
    mostrarDados(){
        console.log('---------------Dados do funcionario---------------');
        console.log(`Nome do funcionario: ${this.nomeFuncionario}`);
        console.log(`E-mail: ${this.email}`);
        console.log(`telefone: ${this.telefone}`);
        console.log(`Cargo: ${this.cargo}`);
        console.log(`Data de nascimento: ${this.dataNasciment.toLocaleDateString()}`);
    }
}
const funcionario1 = new Funcionarios('david.henrique4560@gmail.com', 'David Gomes', 'pediatra', '84987047031',new Date('2002-12-10'));
console.log(funcionario1.mostrarDados());



class Pacientes {
    nomePacientes: string;
    contatoPaciente: string;
    cpf: string;
    constructor(nomePacientes: string, contatoPaciente: string, cpf: string) {
        this.nomePacientes = nomePacientes;
        this.contatoPaciente = contatoPaciente;
        this.cpf = cpf;
    }
    DadosPaciente(){
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
    DadosConsulta(){
        console.log('---------------Dados da Consulta---------------');
        console.log(`Area da Consulta: ${this.tipoDeConsulta}`);
        console.log(`Medico: ${funcionario1.nomeFuncionario}`);
        console.log(`Data da Consulta: ${this.dataDeConsultas.toLocaleDateString()}`);
        console.log(`Paciente: ${paciente1.nomePacientes}`);
}
}
const consulta1 = new consultas('Pediatra', new Date('2023.03.25'), funcionario1, paciente1);
console.log(consulta1.DadosConsulta());