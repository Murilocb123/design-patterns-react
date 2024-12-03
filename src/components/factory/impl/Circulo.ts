import { FormasGeometricas } from "../enum/FormasGeometricas";
import { FormaGeometrica } from "../interface/FormaGeometrica";


export class Circulo implements FormaGeometrica {
    nome: string = FormasGeometricas.CIRCULO;
    qtdLados: number = 0;

    constructor() {
        this.qtdLados = 0;
    }

    getSvg(): string {
        // gere um svg de um circulo com borda preta e preenchimento vermelho
        return `<svg height="100" width="100">
                    <circle cx="50" cy="50" r="40" stroke="black" stroke-width="3" fill="red" />
                </svg>`;
    }
}