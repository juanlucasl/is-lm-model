/* SPDX-License-Identifier: Apache-2.0 */
import "./App.css";
import React, { useState } from "react";
import { FormattedMessage, useIntl } from "react-intl";
import { MarkGithubIcon } from "@primer/octicons-react";
import { Siapache } from "@icons-pack/react-simple-icons";
import FunctionsDrawer from "./FunctionsDrawer";
import Variables from "./Variables";
import {
  DEMANDA_BASE_DE_DINERO,
  CONSUMO_AUTONOMO,
  PROPENSION_MARGINAL_A_CONSUMIR,
  SENSIBILIDAD_DE_LA_DEMANDA_MONETARIA_AL_INTERES,
} from "../constants";
import { Variable } from "../models";

function App() {
  const intl = useIntl();
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
      label: intl.formatMessage({ id: "TAXES" }),
      increaseDescription: intl.formatMessage({ id: "TAXES_INCREASE_DESCRIPTION" }),
      decreaseDescription: intl.formatMessage({ id: "TAXES_DECREASE_DESCRIPTION" }),
    },
    {
      value: inversion,
      setValue: setInversion,
      label: intl.formatMessage({ id: "INVESTMENT" }),
      increaseDescription: intl.formatMessage({ id: "INVESTMENT_INCREASE_DESCRIPTION" }),
      decreaseDescription: intl.formatMessage({ id: "INVESTMENT_DECREASE_DESCRIPTION" }),
    },
    {
      value: gastoPublico,
      setValue: setGastoPublico,
      label: intl.formatMessage({ id: "PUBLIC_EXPENDITURE" }),
      increaseDescription: intl.formatMessage({
        id: "PUBLIC_EXPENDITURE_INCREASE_DESCRIPTION",
      }),
      decreaseDescription: intl.formatMessage({
        id: "PUBLIC_EXPENDITURE_DECREASE_DESCRIPTION",
      }),
    },
  ];

  const variablesLM: Variable[] = [
    {
      value: ofertaMonetaria,
      setValue: setOfertaMonetaria,
      label: intl.formatMessage({ id: "MONEY_SUPPLY" }),
      increaseDescription: intl.formatMessage({ id: "MONEY_SUPPLY_INCREASE_DESCRIPTION" }),
      decreaseDescription: intl.formatMessage({ id: "MONEY_SUPPLY_DECREASE_DESCRIPTION" }),
    },
  ];

  return (
    <article className="App">
      <h1>
        <FormattedMessage id="IS_LM_MODEL" />
      </h1>
      <section className="App__functions-section">
        <FunctionsDrawer
          functionsToDraw={[funcionIS, funcionLM]}
          verticalAxisLabel="i"
          horizontalAxisLabel="Y"
        />
        <section className="App__variables-section">
          <Variables
            variables={variablesIS}
            title={intl.formatMessage({ id: "IS_CURVE" })}
            description="Y = C(Y-T) + I(Y, i) + G"
          />
          <Variables
            variables={variablesLM}
            title={intl.formatMessage({ id: "LM_CURVE" })}
            description="M/P = Y ⋅ L(i)"
          />
        </section>
      </section>
      <div className="App__anchor-icons">
        <a href="https://github.com/juanlucasl/is-lm-model" target="_blank" rel="noreferrer">
          <MarkGithubIcon aria-label="Source code in Github"/>
        </a>
        <a href="https://www.apache.org/licenses/LICENSE-2.0" target="_blank" rel="noreferrer">
          <Siapache aria-label="Apache License 2.0" title="Apache License 2.0"/>
        </a>
      </div>
    </article>
  );
}

export default App;
