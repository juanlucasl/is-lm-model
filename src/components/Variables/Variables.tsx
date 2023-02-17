/* SPDX-License-Identifier: Apache-2.0 */
import "./Variables.css";
import React from "react";
import VariableInput from "./VariableInput";
import { Variable } from "../../models";

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
    {variables.map((variable) => (
      <VariableInput variable={variable} key={variable.label} />
    ))}
  </section>
);

export default Variables;
