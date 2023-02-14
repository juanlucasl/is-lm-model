/* SPDX-License-Identifier: Apache-2.0 */
import "./VariableInput.css";
import React from "react";
import { Tooltip } from "react-tooltip";
import { Variable } from "../../../models";

interface InputProps {
  variable: Variable;
}

const STEP = 5;

const removeWhitespaceSpecialCharsAndMakeLower = (string: string) =>
  string.replace(/[\W\s]/gi, "").toLowerCase();

const VariableInput: React.FC<InputProps> = ({
  variable: { value, setValue, label, increaseDescription, decreaseDescription },
}) => (
  <div className="variable-input">
    <span>{label}</span>
    <div
      className="arrow arrow__upwards"
      data-tooltip-html={increaseDescription as string}
      id={`${removeWhitespaceSpecialCharsAndMakeLower(label)}-increase`}
      onClick={() => setValue(value + STEP)}
    >
      &uarr;
    </div>
    <div
      className="arrow arrow__downwards"
      data-tooltip-html={decreaseDescription as string}
      id={`${removeWhitespaceSpecialCharsAndMakeLower(label)}-decrease`}
      onClick={() => setValue(value - STEP)}
    >
      &darr;
    </div>
    <Tooltip
      anchorId={`${removeWhitespaceSpecialCharsAndMakeLower(label)}-increase`}
      className="variable-input__tooltip"
      place="right"
    />
    <Tooltip
      anchorId={`${removeWhitespaceSpecialCharsAndMakeLower(label)}-decrease`}
      className="variable-input__tooltip"
      place="right"
    />
  </div>
);

export default VariableInput;
