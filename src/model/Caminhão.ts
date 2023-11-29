import { Veiculo } from "./Veiculo"

export class Caminhao extends Veiculo {
    private eixo: number;
    private capacidadeDeCarga: number;
    private tipoDeCarroseria: string;

    public constructor(_tipo: string, _marca: string, _modelo: string, _placa: string, _combustivel: string, _anodefabricacao: number, _cor: string, _quilometragem: number, _eixo: number, _capacidadeDeCarga: number, _tipoDeCarroseria: string,){
        super(_tipo,_marca, _modelo, _placa, _combustivel, _anodefabricacao, _cor, _quilometragem,);
        this.eixo = _eixo;
        this.capacidadeDeCarga = _capacidadeDeCarga;
        this.tipoDeCarroseria = _tipoDeCarroseria;
    }

    public getEixo(): number{ 
        return this.eixo;
    }

    public setEixo(_eixo: number): void{ 
        this.eixo = _eixo;
    }

    public getcapacidadeDeCarga(): number{ 
        return this.capacidadeDeCarga;
    }

    public setcapacidadeDeCarga(_capacidadeDeCarga: number): void{ 
        this.capacidadeDeCarga = _capacidadeDeCarga;
    }

    public getTipoDeCarroseria(): string{ 
        return this.tipoDeCarroseria;
    }

    public setTipoDeCarroseria(_tipoDeCarroseria: string): void{ 
        this.tipoDeCarroseria = _tipoDeCarroseria;
    }
}