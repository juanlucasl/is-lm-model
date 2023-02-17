const CONSUMPTION_UP = "&uarr; Consumption (C)";
const CONSUMPTION_DOWN = "&darr; Consumption (C)";

const INTEREST_RATE_UP = "&uarr; Interest Rate (i)";
const INTEREST_RATE_DOWN = "&darr; Interest Rate (i)";

const OUTPUT_UP = "&uarr; Output or GDP (Y) (In equilibrium Y = Z (Demand for goods))";
const OUTPUT_DOWN = "&darr; Output or GDP (Y) (In equilibrium Y = Z (Demand for goods))";

const IS_RIGHT = "&rarr; The IS Curve shifts to the right";
const IS_LEFT = "&larr; The IS Curve shifts to the left";

const LM_RIGHT = "&rarr; The LM Curve shifts to the right";
const LM_LEFT = "&larr; The LM Curve shifts to the left";

const en = {
  IS_LM_MODEL: "IS-LM Model",
  IS_CURVE: "IS Curve",
  LM_CURVE: "LM Curve",
  TAXES: "Taxes (T)",
  INVESTMENT: "Investment (I)",
  PUBLIC_EXPENDITURE: "Public Expenditure (G)",
  MONEY_SUPPLY: "Money Supply (M)",
  TAXES_INCREASE_DESCRIPTION: `
    <p>
      The government charges more taxes and people have less surplus income to demand goods
      <ul>
        <li>${CONSUMPTION_DOWN}</li>
        <li>${INTEREST_RATE_DOWN}</li>
        <li>${OUTPUT_DOWN}</li>
        <li>${IS_LEFT}</li>
      </ul>
    </p>
  `,
  TAXES_DECREASE_DESCRIPTION: `
    <p>
      The government charges less taxes and people have more surplus income to demand goods
      <ul>
        <li>${CONSUMPTION_UP}</li>
        <li>${INTEREST_RATE_UP}</li>
        <li>${OUTPUT_UP}</li>
        <li>${IS_RIGHT}</li>
      </ul>
    </p>
  `,
  INVESTMENT_INCREASE_DESCRIPTION: `
    <p>
      Higher demand for capital goods, hence higher Aggregate Demand
      <ul>
        <li>${CONSUMPTION_UP}</li>
        <li>${INTEREST_RATE_UP}</li>
        <li>${OUTPUT_UP}</li>
        <li>${IS_RIGHT}</li>
      </ul>
    </p>
  `,
  INVESTMENT_DECREASE_DESCRIPTION: `
    <p>
      Lower demand for capital goods, hence lower Aggregate Demand
      <ul>
        <li>${CONSUMPTION_DOWN}</li>
        <li>${INTEREST_RATE_DOWN}</li>
        <li>${OUTPUT_DOWN}</li>
        <li>${IS_LEFT}</li>
      </ul>
    </p>
  `,
  PUBLIC_EXPENDITURE_INCREASE_DESCRIPTION: `
    <p>
      The government demands more goods and services, hence higher Aggregate Demand
      <ul>
        <li>${CONSUMPTION_UP}</li>
        <li>${INTEREST_RATE_UP}</li>
        <li>${OUTPUT_UP}</li>
        <li>${IS_RIGHT}</li>
      </ul>
    </p>
  `,
  PUBLIC_EXPENDITURE_DECREASE_DESCRIPTION: `
    <p>
      The government demands fewer goods and services, hence lower Aggregate Demand
      <ul>
        <li>${CONSUMPTION_DOWN}</li>
        <li>${INTEREST_RATE_DOWN}</li>
        <li>${OUTPUT_DOWN}</li>
        <li>${IS_LEFT}</li>
      </ul>
    </p>
  `,
  MONEY_SUPPLY_INCREASE_DESCRIPTION: `
    <p>
      Increased money supply drives down the price of money, reflected in interest rates
      <ul>
        <li>${INTEREST_RATE_DOWN}</li>
        <li>${LM_RIGHT}</li>
      </ul>
    </p>
  `,
  MONEY_SUPPLY_DECREASE_DESCRIPTION: `
    <p>
      Lower money supply drives up the price of money, reflected in interest rates.
      <ul>
        <li>${INTEREST_RATE_UP}</li>
        <li>${LM_LEFT}</li>
      </ul>
    </p>
  `,
};

export default en;
