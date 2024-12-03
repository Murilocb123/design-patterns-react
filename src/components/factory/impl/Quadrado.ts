import { FormaGeometrica } from "../interface/FormaGeometrica";

export class Quadrado implements FormaGeometrica {
    nome = "Quadrado";
    qtdLados = 4;

    getSvg(): string {
        return `
            <svg width="100" height="100">
                <rect width="100" height="100" fill="red" />
            </svg>
        `;
    }
}