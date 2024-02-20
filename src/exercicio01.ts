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
}
const funcionario1 = new Funcionarios('david.henrique4560@gmail.com', 'David Gomes', 'pediatra', '84987047031',new Date('2002-12-10'));
console.log(funcionario1);



class Pacientes {
    nomePacientes: string;
    contatoPaciente: string;
    cpf: string;
    constructor(nomePacientes: string, contatoPaciente: string, cpf: string) {
        this.nomePacientes = nomePacientes;
        this.contatoPaciente = contatoPaciente;
        this.cpf = cpf;
    }
}
const paciente1 = new Pacientes('David', '84987047031', '701.972.314-46');
console.log(paciente1);

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
}
const consulta1 = new consultas('Pediatra', new Date('2023.03.25'), funcionario1, paciente1);
console.log(consulta1);