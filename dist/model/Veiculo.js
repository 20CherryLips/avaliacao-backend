"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Veiculo = void 0;
class Veiculo {
    constructor(_tipo, _marca, _modelo, _placa, _combustivel, _anodefabricacao, _cor, _quilometragem) {
        this.tipo = _tipo;
        this.marca = _marca;
        this.modelo = _modelo;
        this.placa = _placa;
        this.combustivel = _combustivel;
        this.anodefabricacao = _anodefabricacao;
        this.cor = _cor;
        this.quilometragem = _quilometragem;
    }
    classificarPeso() {
        if (this.tipo === "Carro") {
            return "Leve";
        }
        else if (this.tipo === "Caminhao") {
            return "Pesado";
        }
        else {
            return "Não classificado";
        }
    }
    setMarca(_marca) {
        this.marca = _marca;
    }
    getMarca() {
        return this.marca;
    }
    setModelo(_modelo) {
        this.modelo = _modelo;
    }
    getModelo() {
        return this.modelo;
    }
    setPlaca(_placa) {
        this.placa = _placa;
    }
    getPlaca() {
        return this.placa;
    }
    setCombustivel(_combustivel) {
        this.combustivel = _combustivel;
    }
    getCombustivel() {
        return this.combustivel;
    }
    setAnoDeFabricacao(_anodefabricacao) {
        this.anodefabricacao = _anodefabricacao;
    }
    getAnoDeFabricacao() {
        return this.anodefabricacao;
    }
    setCor(_cor) {
        this.cor = _cor;
    }
    getCor() {
        return this.cor;
    }
    setQuilometragem(_quilometragem) {
        this.quilometragem = _quilometragem;
    }
    getQuilometragem() {
        return this.quilometragem;
    }
    mostraVeiculo() {
        console.log(`Marca: ${this.marca}
        Modelo : ${this.modelo}
        Placa : ${this.placa}
        Combustivel : ${this.combustivel}
        Ano de Fabricação : ${this.anodefabricacao}
        Cor: ${this.cor}
        Quilometragem : ${this.quilometragem}`);
    }
}
exports.Veiculo = Veiculo;
//# sourceMappingURL=Veiculo.js.map