/* SPDX-License-Identifier: Apache-2.0 */
import "./Variables.css";
import React from "react";
import VariableInput from "./VariableInput";

export interface Variable {
  state: number;
  setState: (value: number) => void;
  label: string;
}

interface VariablesProps {
  variables: Variable[];
  title?: string;
  description?: string;
}

/**
 * Displays input fields for a set of variables.
 *
 * @returns The input fields for the variables
 */
export const Variables: React.FC<VariablesProps> = ({ variables, title, description }) => (
  <section className="variables">
    {(title || description) && (
      <div className="variables__header">
        {title && <h2>{title}</h2>}
        {description && <var>{description}</var>}
      </div>
    )}
    {variables.map(({ state, setState, label }) => (
      <VariableInput key={label} label={label} step={5} value={state} setValue={setState} />
    ))}
  </section>
);

export default Variables;
