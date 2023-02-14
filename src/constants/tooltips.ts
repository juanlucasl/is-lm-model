const CONSUMPTION_UP = "&uarr; Consumo (C)";
const CONSUMPTION_DOWN = "&darr; Consumo (C)";

const INTEREST_RATE_UP = "&uarr; Tipo de Interés (i)";
const INTEREST_RATE_DOWN = "&darr; Tipo de Interés (i)";

const OUTPUT_UP = "&uarr; Producción o PIB (Y) (En equilibrio Y = Z (Demanda de bienes))";
const OUTPUT_DOWN = "&darr; Producción o PIB (Y) (En equilibrio Y = Z (Demanda de bienes))";

const IS_RIGHT = "&rarr; La Curva IS se desplaza hacia la derecha, reflejando un aumento en la Demanda Agregada";
const IS_LEFT = "&larr; La Curva IS se desplaza hacia la izquierda, reflejando un descenso en la Demanda Agregada";

export const TAXES_INCREASE_DESCRIPTION = `
  <p>
    El Estado cobra más impuestos y la gente tiene menor excedente de renta para demandar
    bienes
    <ul>
      <li>${CONSUMPTION_DOWN}</li>
      <li>${INTEREST_RATE_DOWN}</li>
      <li>${OUTPUT_DOWN}</li>
      <li>${IS_LEFT}</li>
    </ul>
  </p>
`;

export const TAXES_DECREASE_DESCRIPTION = `
  <p>
    El Estado cobra menos impuestos y la gente tiene mayor excedente de renta para demandar
    bienes
    <ul>
      <li>${CONSUMPTION_UP}</li>
      <li>${INTEREST_RATE_UP}</li>
      <li>${OUTPUT_UP}</li>
      <li>${IS_RIGHT}</li>
    </ul>
  </p>
`;

export const INVESTMENT_INCREASE_DESCRIPTION = `
  <p>
    Mayor demanda de bienes de capital, por lo tanto, es mayor la Demanda Agregada
    <ul>
      <li>${CONSUMPTION_UP}</li>
      <li>${INTEREST_RATE_UP}</li>
      <li>${OUTPUT_UP}</li>
      <li>${IS_RIGHT}</li>
    </ul>
  </p>
`;

export const INVESTMENT_DECREASE_DESCRIPTION = `
  <p>
    Menor demanda de bienes de capital, por lo tanto, es menor la Demanda Agregada
    <ul>
      <li>${CONSUMPTION_DOWN}</li>
      <li>${INTEREST_RATE_DOWN}</li>
      <li>${OUTPUT_DOWN}</li>
      <li>${IS_LEFT}</li>
    </ul>
  </p>
`;

export const PUBLIC_EXPENDITURE_INCREASE_DESCRIPTION = `
  <p>
    El Estado demanda más bienes y servicios, por lo tanto, es mayor la Demanda Agregada
    <ul>
      <li>${CONSUMPTION_UP}</li>
      <li>${INTEREST_RATE_UP}</li>
      <li>${OUTPUT_UP}</li>
      <li>${IS_RIGHT}</li>
    </ul>
  </p>
`;

export const PUBLIC_EXPENDITURE_DECREASE_DESCRIPTION = `
  <p>
    El Estado demanda menos bienes y servicios, por lo tanto, es menor la Demanda Agregada
    <ul>
      <li>${CONSUMPTION_DOWN}</li>
      <li>${INTEREST_RATE_DOWN}</li>
      <li>${OUTPUT_DOWN}</li>
      <li>${IS_LEFT}</li>
    </ul>
  </p>
`;

export const MONEY_SUPPLY_INCREASE_DESCRIPTION = `
  <p>
    Mayor oferta de dinero hace bajar su precio, reflejado en el interés
    <ul>
      <li>${INTEREST_RATE_DOWN}</li>
    </ul>
  </p>
`;

export const MONEY_SUPPLY_DECREASE_DESCRIPTION = `
  <p>
    Menor oferta de dinero hace subir su precio, reflejado en el interés{" "}
    <ul>
      <li>${INTEREST_RATE_UP}</li>
    </ul>
  </p>
`;
