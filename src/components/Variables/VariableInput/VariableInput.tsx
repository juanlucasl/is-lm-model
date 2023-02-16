/* SPDX-License-Identifier: Apache-2.0 */
import "./VariableInput.css";
import React from "react";
import { Tooltip } from "react-tooltip";
import { Variable } from "../../../models";
import { MAX_VALUE, MIN_VALUE } from "../../../constants";

interface InputProps {
  variable: Variable;
}

const STEP = 5;

const removeWhitespaceSpecialCharsAndMakeLower = (string: string) =>
  string.replace(/[\W\s]/gi, "").toLowerCase();

const VariableInput: React.FC<InputProps> = ({
  variable: { value, setValue, label, increaseDescription, decreaseDescription },
}) => {

  const isIncreaseDisabled = () => {
    return value > MAX_VALUE - STEP;
  };

  const handleIncrease = () => {
    if (value + STEP > MAX_VALUE) return;
    setValue(value + STEP);
  };

  const isDecreaseDisabled = () => {
    return value < MIN_VALUE + STEP;
  };

  const handleDecrease = () => {
    if (value - STEP < MIN_VALUE) return;
    setValue(value - STEP);
  };

  return (
    <div className="variable-input">
      <span>{label}</span>
      <div
        className={`arrow arrow__upwards ${isIncreaseDisabled() ? "arrow--disabled" : ""}`}
        data-tooltip-html={increaseDescription as string}
        id={`${removeWhitespaceSpecialCharsAndMakeLower(label)}-increase`}
        onClick={() => handleIncrease()}
      >
        &uarr;
      </div>
      <div
        className={`arrow arrow__downwards ${isDecreaseDisabled() ? "arrow--disabled" : ""}`}
        data-tooltip-html={decreaseDescription as string}
        id={`${removeWhitespaceSpecialCharsAndMakeLower(label)}-decrease`}
        onClick={() => handleDecrease()}
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
};

export default VariableInput;
