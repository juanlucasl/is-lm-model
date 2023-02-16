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
  TAXES_INCREASE_DESCRIPTION,
  MONEY_SUPPLY_DECREASE_DESCRIPTION,
  MONEY_SUPPLY_INCREASE_DESCRIPTION,
  PUBLIC_EXPENDITURE_INCREASE_DESCRIPTION,
  INVESTMENT_INCREASE_DESCRIPTION,
  INVESTMENT_DECREASE_DESCRIPTION,
  PUBLIC_EXPENDITURE_DECREASE_DESCRIPTION,
  TAXES_DECREASE_DESCRIPTION,
} from "../constants";
import { Variable } from "../models";

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
   *
   * Oferta Monetaria (M): Es la suma de los billetes y monedas en poder del público, más los
   * depósitos a la vista en el sistema bancario.
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
      value: impuestos,
      setValue: setImpuestos,
      label: "Impuestos (T)",
      increaseDescription: TAXES_INCREASE_DESCRIPTION,
      decreaseDescription: TAXES_DECREASE_DESCRIPTION,
    },
    {
      value: inversion,
      setValue: setInversion,
      label: "Inversión (I)",
      increaseDescription: INVESTMENT_INCREASE_DESCRIPTION,
      decreaseDescription: INVESTMENT_DECREASE_DESCRIPTION,
    },
    {
      value: gastoPublico,
      setValue: setGastoPublico,
      label: "Gasto Público (G)",
      increaseDescription: PUBLIC_EXPENDITURE_INCREASE_DESCRIPTION,
      decreaseDescription: PUBLIC_EXPENDITURE_DECREASE_DESCRIPTION,
    },
  ];

  const variablesLM: Variable[] = [
    {
      value: ofertaMonetaria,
      setValue: setOfertaMonetaria,
      label: "Oferta Monetaria (M)",
      increaseDescription: MONEY_SUPPLY_INCREASE_DESCRIPTION,
      decreaseDescription: MONEY_SUPPLY_DECREASE_DESCRIPTION,
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
