"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Carro = void 0;
const Veiculo_1 = require("./Veiculo");
class Carro extends Veiculo_1.Veiculo {
    constructor(_tipo, _marca, _modelo, _placa, _combustivel, _anodefabricacao, _cor, _quilometragem, _numeroDePassageiros, _capacidadePortaMalas, _transmissao) {
        super(_tipo, _marca, _modelo, _placa, _combustivel, _anodefabricacao, _cor, _quilometragem);
        this.numeroDePassageiros = _numeroDePassageiros;
        this.capacidadePortaMalas = _capacidadePortaMalas;
        this.transmissao = _transmissao;
    }
    setnumeroDePassageiros(numeroDePassageiros) {
        this.numeroDePassageiros = numeroDePassageiros;
    }
    getnumeroDePassageiros() {
        return this.numeroDePassageiros;
    }
    setcapacidadePortaMalas(_capacidadePortaMalas) {
        this.capacidadePortaMalas = _capacidadePortaMalas;
    }
    getcapacidaePortaMalas() {
        return this.capacidadePortaMalas;
    }
    setTransmissao(_transmissao) {
        this.transmissao = _transmissao;
    }
    getTransmissao() {
        return this.transmissao;
    }
}
exports.Carro = Carro;
//# sourceMappingURL=Carro.js.map