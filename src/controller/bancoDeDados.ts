import { Veiculo } from "../model/Veiculo";

/**
 * Lista de pessoas que são armazenadas durante a execução do programa
 */
let bancoDadosVeiculo: Veiculo[] = [];

/**
 * Cadastra um veiculo na lista, simulando um banco de dados.
 * Os dados são armazenados somente durante tempo de execução
 * 
 * @param veiculo - veiculo a ser inserida na lista
 * @returns Em caso de erro, é retornado os detalhes do erro a quem chamou esta função
 */
export function persistirVeiculo(veiculo: Veiculo) {
    //persistindo os dados
    try {
        bancoDadosVeiculo.push(veiculo);
    } catch {
        return `Erro ao persistir os dados\n ${Error}`;
    }
}

/**
 * Lista todos os veiculos cadastrados
 * @returns Lista de veiculos cadastrados
 */
export function listarVeiculos() {
    return bancoDadosVeiculo;
}

export function inicializarVeiculos() {
    bancoDadosVeiculo.push(
        new Veiculo('Carro', 'Toyota', 'Corolla', 'ABC-1234', 'Gasolina', 2020, 'Prata', 50000));
    
    bancoDadosVeiculo.push(
        new Veiculo('Carro', 'Ford', 'Focus', 'XYZ-5678', 'Etanol', 2018, 'Preto', 60000));
    
    bancoDadosVeiculo.push(
        new Veiculo('Carro', 'Honda', 'Civic', 'JKL-9012', 'Flex', 2019, 'Azul', 45000));

    bancoDadosVeiculo.push(
        new Veiculo('Caminhão', 'Volvo', 'FH16', 'XYZ-5678', 'Diesel', 2019, 'Azul', 80000 ));

    bancoDadosVeiculo.push(
        new Veiculo('Caminhão', 'Mercedes-Benz', 'Actros', 'GHI8765', 'Diesel', 2022, 'Branco', 60000));

}