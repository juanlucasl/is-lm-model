/* SPDX-License-Identifier: Apache-2.0 */
import "./VariableInput.css";
import React from "react";

interface InputProps {
  label: string;
  step: number;
  value: number;
  setValue: (value: number) => void;
}

const VariableInput: React.FC<InputProps> = ({ label, step, value, setValue }) => (
  <div className="variable-input">
    <span>{label}</span>
    <div className="arrow arrow__upwards" onClick={() => setValue(value + step)}>
      &uarr;
    </div>
    <div className="arrow arrow__downwards" onClick={() => setValue(value - step)}>
      &darr;
    </div>
  </div>
);

export default VariableInput;
