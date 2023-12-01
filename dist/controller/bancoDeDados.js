"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.inicializarVeiculos = exports.listarVeiculos = exports.persistirVeiculo = void 0;
const Veiculo_1 = require("../model/Veiculo");
/**
 * Lista de pessoas que são armazenadas durante a execução do programa
 */
let bancoDadosVeiculo = [];
/**
 * Cadastra um veiculo na lista, simulando um banco de dados.
 * Os dados são armazenados somente durante tempo de execução
 *
 * @param veiculo - veiculo a ser inserida na lista
 * @returns Em caso de erro, é retornado os detalhes do erro a quem chamou esta função
 */
function persistirVeiculo(veiculo) {
    //persistindo os dados
    try {
        bancoDadosVeiculo.push(veiculo);
    }
    catch (_a) {
        return `Erro ao persistir os dados\n ${Error}`;
    }
}
exports.persistirVeiculo = persistirVeiculo;
/**
 * Lista todos os veiculos cadastrados
 * @returns Lista de veiculos cadastrados
 */
function listarVeiculos() {
    return bancoDadosVeiculo;
}
exports.listarVeiculos = listarVeiculos;
function inicializarVeiculos() {
    bancoDadosVeiculo.push(new Veiculo_1.Veiculo('Carro', 'Toyota', 'Corolla', 'ABC-1234', 'Gasolina', 2020, 'Prata', 50000));
    bancoDadosVeiculo.push(new Veiculo_1.Veiculo('Carro', 'Ford', 'Focus', 'XYZ-5678', 'Etanol', 2018, 'Preto', 60000));
    bancoDadosVeiculo.push(new Veiculo_1.Veiculo('Carro', 'Honda', 'Civic', 'JKL-9012', 'Flex', 2019, 'Azul', 45000));
    bancoDadosVeiculo.push(new Veiculo_1.Veiculo('Caminhão', 'Volvo', 'FH16', 'XYZ-5678', 'Diesel', 2019, 'Azul', 80000));
    bancoDadosVeiculo.push(new Veiculo_1.Veiculo('Caminhão', 'Mercedes-Benz', 'Actros', 'GHI8765', 'Diesel', 2022, 'Branco', 60000));
}
exports.inicializarVeiculos = inicializarVeiculos;
//# sourceMappingURL=bancoDeDados.js.map