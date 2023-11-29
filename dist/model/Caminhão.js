"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Caminhao = void 0;
const Veiculo_1 = require("./Veiculo");
class Caminhao extends Veiculo_1.Veiculo {
    constructor(_tipo, _marca, _modelo, _placa, _combustivel, _anodefabricacao, _cor, _quilometragem, _eixo, _capacidadeDeCarga, _tipoDeCarroseria) {
        super(_tipo, _marca, _modelo, _placa, _combustivel, _anodefabricacao, _cor, _quilometragem);
        this.eixo = _eixo;
        this.capacidadeDeCarga = _capacidadeDeCarga;
        this.tipoDeCarroseria = _tipoDeCarroseria;
    }
    getEixo() {
        return this.eixo;
    }
    setEixo(_eixo) {
        this.eixo = _eixo;
    }
    getcapacidadeDeCarga() {
        return this.capacidadeDeCarga;
    }
    setcapacidadeDeCarga(_capacidadeDeCarga) {
        this.capacidadeDeCarga = _capacidadeDeCarga;
    }
    getTipoDeCarroseria() {
        return this.tipoDeCarroseria;
    }
    setTipoDeCarroseria(_tipoDeCarroseria) {
        this.tipoDeCarroseria = _tipoDeCarroseria;
    }
}
exports.Caminhao = Caminhao;
//# sourceMappingURL=Caminh%C3%A3o.js.map