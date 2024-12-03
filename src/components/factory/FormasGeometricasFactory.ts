import { FormasGeometricas } from "./enum/FormasGeometricas";
import { Circulo } from "./impl/Circulo";
import { Quadrado } from "./impl/Quadrado";
import { Retangulo } from "./impl/Retangulo";
import { Triangulo } from "./impl/Triangulo";
import { FormaGeometrica } from "./interface/FormaGeometrica";


export class FormasGeometricasFactory {
    
    /**
     * Método que cria uma forma geométrica apartir de um enum
     * @param forma 
     * @returns FormaGeometrica | null
     **/
    static createFormaGeometrica(forma: FormasGeometricas): FormaGeometrica |null {
        switch (forma) {
            case FormasGeometricas.CIRCULO:
                return new Circulo();
            case FormasGeometricas.QUADRADO:
                return new Quadrado();
            case FormasGeometricas.RETANGULO:
                return new Retangulo();
            case FormasGeometricas.TRIANGULO:
                return new Triangulo();
            default:
                return null;
        }
    }
}