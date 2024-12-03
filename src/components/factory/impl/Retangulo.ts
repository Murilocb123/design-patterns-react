import { FormaGeometrica } from "../interface/FormaGeometrica";

export class Retangulo implements FormaGeometrica {
    nome = "Retangulo";
    qtdLados = 4;

    getSvg(): string {
        return `
            <svg width="100" height="100">
                <rect width="100" height="50" fill="red" />
            </svg>
        `;
    }
}