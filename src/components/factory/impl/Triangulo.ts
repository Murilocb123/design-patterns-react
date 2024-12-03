import { FormaGeometrica } from "../interface/FormaGeometrica";

export class Triangulo implements FormaGeometrica {
    nome = "Triangulo";
    qtdLados = 3;

    getSvg(): string {
        return `
            <svg width="100" height="100">
                <polygon points="50,0 100,100 0,100" fill="green" />
            </svg>
        `;
    }
}