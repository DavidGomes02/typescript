class Funcionarios {
    funcionarios: string;
    nomeFuncionario: string;
    profissão: string;

    constructor(funcionarios: string, nomes: string, profissão: string) {
        this.funcionarios = funcionarios;
        this.nomeFuncionario = nomes;
        this.profissão = profissão;
        
        

       
    
    
     }
}
class consultas {
    tipoDeConsulta: string;
    dataDeConsultas: Date;
constructor (tipoDeConsulta: string, dataDeConsultas: Date){
this.tipoDeConsulta = tipoDeConsulta;
        this.dataDeConsultas = dataDeConsultas;
    }
}

class Pacientes{
    nomePacientes: string;
    contatoPaciente: string;
    cpf: string;
constructor( nomePacientes: string, contatoPaciente: number){
 this.nomePacientes = nomePacientes;
        this.contatoPaciente = contatoPaciente;
        this.cpf = cpf;
}
    
}
