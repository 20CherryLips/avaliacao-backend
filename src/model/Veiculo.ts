export class Veiculo {
    private tipo: string;
    private marca: string;
    private modelo: string;
    private placa: string; 
    private combustivel: string;
    private anodefabricacao: number;
    private cor: string;
    private quilometragem: number;

    public constructor(_tipo: string, _marca: string, _modelo: string, _placa: string, _combustivel: string, _anodefabricacao: number, _cor: string,
    _quilometragem: number) {
        this.tipo = _tipo;
        this.marca = _marca;
        this.modelo = _modelo;
        this.placa = _placa;
        this.combustivel = _combustivel;
        this.anodefabricacao = _anodefabricacao;
        this.cor = _cor;
        this.quilometragem = _quilometragem;
    }

    public classificarPeso(): string {
        if (this.tipo === "Carro") {
            return "Leve";
        } else if (this.tipo === "Caminhao") {
            return "Pesado";
        } else {
            return "Não classificado";
        }
    }

    public setMarca(_marca: string): void {
        this.marca = _marca;
    }

    public getMarca(): string {
        return this.marca;
    }


    public setModelo(_modelo: string): void {
        this.modelo = _modelo;
    }

    public getModelo(): string {
        return this.modelo;
    }

    public setPlaca(_placa: string): void {
        this.placa = _placa;
    }

    public getPlaca(): string {
        return this.placa;
    }

    public setCombustivel(_combustivel: string): void {
        this.combustivel = _combustivel;
    }

    public getCombustivel(): string {
        return this.combustivel;
    }

    public setAnoDeFabricacao(_anodefabricacao: number): void {
        this.anodefabricacao = _anodefabricacao;
    }

    public getAnoDeFabricacao(): number {
        return this.anodefabricacao;
    }

    public setCor(_cor: string): void {
        this.cor = _cor;
    }

    public getCor(): string {
        return this.cor;
    }

    public setQuilometragem(_quilometragem: number): void {
        this.quilometragem = _quilometragem;
    }

    public getQuilometragem(): number {
        return this.quilometragem;
    }

    

    public mostraVeiculo() {
        console.log(`Marca: ${this.marca}
        Modelo : ${this.modelo}
        Placa : ${this.placa}
        Combustivel : ${this.combustivel}
        Ano de Fabricação : ${this.anodefabricacao}
        Cor: ${this.cor}
        Quilometragem : ${this.quilometragem}`);
    }


}
