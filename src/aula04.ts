class Carro {
    modelo: string;
    ano: number;
    marca: string;
    preço: number;
    motor: number;
    cor: string;
    constructor(modelo: string, ano: number, marca: string, preço: number, motor: number, cor: string) {
        this.modelo = modelo;
        this.ano = ano;
        this.marca = marca;
        this.preço = preço;
        this.motor = motor;
        this.cor = cor;
    }
}
const carrodev = new Carro('Opala',1975,'chevrolet',45000,4.1,'preto')

console.log(carrodev);