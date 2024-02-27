"use strict";
class Carro {
    modelo;
    ano;
    marca;
    preço;
    motor;
    cor;
    constructor(modelo, ano, marca, preço, motor, cor) {
        this.modelo = modelo;
        this.ano = ano;
        this.marca = marca;
        this.preço = preço;
        this.motor = motor;
        this.cor = cor;
    }
}
const carrodev = new Carro('Opala', 1975, 'chevrolet', 45000, 4.1, 'preto');
console.log(carrodev);
