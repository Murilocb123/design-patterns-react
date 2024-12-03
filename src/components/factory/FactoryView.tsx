import { Dropdown } from "primereact/dropdown";
import { FormasGeometricas } from "./enum/FormasGeometricas";
import { useState } from "react";
import { FormasGeometricasFactory } from "./FormasGeometricasFactory";

/**
 * 
 * Compoenente tem como objetivo gerar formas geométricas
 * apartir de enums e uma classe Factory
 * 
 */
export default function FactoryView() {
    const options = () => {
        return Object.values(FormasGeometricas).map((forma) => {
            return { label: forma, value: forma }
        });
    };

    const [selectedOption, setSelectedOption] = useState<FormasGeometricas | null>(null);

    const updateFormaGeometrica = (forma: FormasGeometricas) => {
        setSelectedOption(forma);
    }

    const geraFormaGeometrica = () => {
        return selectedOption ? FormasGeometricasFactory.createFormaGeometrica(selectedOption)?.getSvg : null;
    }


    return (
        <div>
            <div className="flex justify-content-center">
                <div className="card">
                    <h5 className="text-center text-lg">Formas Geométricas</h5>
                    <Dropdown options={options()} placeholder="Selecione uma forma geométrica"
                        value={selectedOption} onChange={(e) => updateFormaGeometrica(e.value)} />
                </div>
            </div>
            <div className="flex justify-content-center">
                <div className="card">
                    <h5 className="text-center text-lg">Forma Geométrica Selecionada</h5>
                    <div className="text-center">
                        <div dangerouslySetInnerHTML={{ __html: (selectedOption ? geraFormaGeometrica()?.() ?? "Não Encontrado" : "Não Encontrado") }} />
                    </div>
                </div>
            </div>
        </div>


    );

}
