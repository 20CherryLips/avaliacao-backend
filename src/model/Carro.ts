import { Veiculo } from "./Veiculo"

export class Carro extends Veiculo{
    private numeroDePassageiros: number;
    private capacidadePortaMalas: number;
    private transmissao: string;

    public constructor(_tipo:string, _marca:string, _modelo: string, _placa: string, _combustivel: string, _anodefabricacao: number, _cor: string, _quilometragem: number, _numeroDePassageiros: number, _capacidadePortaMalas: number, _transmissao: string,){
        super(_tipo, _marca, _modelo, _placa, _combustivel, _anodefabricacao, _cor, _quilometragem);
        this.numeroDePassageiros = _numeroDePassageiros;
        this.capacidadePortaMalas = _capacidadePortaMalas;
        this.transmissao = _transmissao;
    }

    public setnumeroDePassageiros(numeroDePassageiros: number): void {
        this.numeroDePassageiros = numeroDePassageiros;
    }

    public getnumeroDePassageiros(): number {
        return this.numeroDePassageiros;
    }

    public setcapacidadePortaMalas(_capacidadePortaMalas: number): void {
        this.capacidadePortaMalas = _capacidadePortaMalas;
    }

    public getcapacidaePortaMalas(): number {
        return this.capacidadePortaMalas;
    }

    public setTransmissao(_transmissao: string): void {
        this.transmissao = _transmissao;
    }

    public getTransmissao(): string {
        return this.transmissao;
    }
}




