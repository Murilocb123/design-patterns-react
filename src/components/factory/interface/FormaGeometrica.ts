interface FormaGeometrica {
    nome: string;
    qtdLados: number;

    getSvg(): string;
}

export type { FormaGeometrica };