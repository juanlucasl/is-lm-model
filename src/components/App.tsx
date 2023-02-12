/* SPDX-License-Identifier: Apache-2.0 */
import "./App.css";
import React, { useState } from "react";
import FunctionsDrawer from "./FunctionsDrawer";
import Variables from "./Variables";
import {
  DEMANDA_BASE_DE_DINERO,
  CONSUMO_AUTONOMO,
  PROPENSION_MARGINAL_A_CONSUMIR,
  SENSIBILIDAD_DE_LA_DEMANDA_MONETARIA_AL_INTERES,
} from "../constants";
import { Variable } from "./Variables/Variables";

function App() {
  /**
   *
   * Inversion (I): Sumatoria de inversión no residual (la compra de nuevas máquinas/plantas
   * por parte de las empresas) y de inversión residual (la compra de apartamentos/viviendas
   * por parte de los individuos).
   *
   * Gasto Publico (G): Bienes y servicios comprados por el Estado.
   *
   * Impuestos (I): Impuestos cobrados por el Estado.
   */

  const [inversion, setInversion] = useState(50);
  const [gastoPublico, setGastoPublico] = useState(50);
  const [impuestos, setImpuestos] = useState(50);

  const [ofertaMonetaria, setOfertaMonetaria] = useState(50);

  const funcionConsumo = (renta: number) =>
    CONSUMO_AUTONOMO + PROPENSION_MARGINAL_A_CONSUMIR * (renta - impuestos);

  const funcionIS = (produccion: number) =>
    funcionConsumo(-produccion) + inversion + gastoPublico;

  const funcionLM = (produccion: number) =>
    DEMANDA_BASE_DE_DINERO +
    produccion * SENSIBILIDAD_DE_LA_DEMANDA_MONETARIA_AL_INTERES -
    ofertaMonetaria;

  const variablesIS: Variable[] = [
    {
      state: inversion,
      setState: setInversion,
      label: "Inversión (I)",
    },
    {
      state: gastoPublico,
      setState: setGastoPublico,
      label: "Gasto Público (G)",
    },
    {
      state: impuestos,
      setState: setImpuestos,
      label: "Impuestos (T)",
    },
  ];

  const variablesLM: Variable[] = [
    {
      state: ofertaMonetaria,
      setState: setOfertaMonetaria,
      label: "Oferta Monetaria (M)",
    },
  ];

  return (
    <article className="App">
      <h1>Modelo IS-LM</h1>
      <section className="App__functions-section">
        <FunctionsDrawer
          functionsToDraw={[funcionIS, funcionLM]}
          verticalAxisLabel="i"
          horizontalAxisLabel="Y"
        />
        <section className="App__variables-section">
          <Variables
            variables={variablesIS}
            title="Relacion IS"
            description="Y = C(Y-T) + I(Y, i) + G"
          />
          <Variables
            variables={variablesLM}
            title="Relacion LM"
            description="M/P = Y ⋅ L(i)"
          />
        </section>
      </section>
    </article>
  );
}

export default App;
