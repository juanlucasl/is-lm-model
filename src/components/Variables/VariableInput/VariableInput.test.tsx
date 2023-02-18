/* SPDX-License-Identifier: Apache-2.0 */
import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import VariableInput, { STEP } from "./VariableInput";
import { Variable } from "../../../models";
import { MAX_VALUE, MIN_VALUE } from "../../../constants";

const mockVariable: Variable = {
  value: 0,
  setValue: jest.fn(),
  label: "Mock Variable Input",
  increaseDescription: "Mock increase description",
  decreaseDescription: "Mock decrease description",
};

describe("VariableInput", () => {
  it("renders correctly", () => {
    const { container } = render(<VariableInput variable={mockVariable} />);
    expect(container).toMatchSnapshot();
  });

  it("should render a label and two arrows", () => {
    render(<VariableInput variable={mockVariable} />);
    expect(screen.getByText(mockVariable.label)).toBeVisible();
    expect(screen.getByRole("button", { name: /\+/i })).toBeVisible();
    expect(screen.getByRole("button", { name: /-/i })).toBeVisible();
  });

  it("should call the setValue function with the new value when the increase arrow is clicked", () => {
    render(<VariableInput variable={mockVariable} />);
    userEvent.click(screen.getByRole("button", { name: /\+/i }));
    expect(mockVariable.setValue).toHaveBeenCalledWith(STEP);
  });

  it("should call the setValue function with the new value when the decrease arrow is clicked", () => {
    render(<VariableInput variable={mockVariable} />);
    userEvent.click(screen.getByRole("button", { name: /-/i }));
    expect(mockVariable.setValue).toHaveBeenCalledWith(-STEP);
  });

  it("should disable the increase arrow when the value is at the maximum", () => {
    render(<VariableInput variable={{ ...mockVariable, value: MAX_VALUE }} />);
    const arrowIncrease = screen.getByRole("button", { name: /\+/i });

    userEvent.click(arrowIncrease);
    expect(mockVariable.setValue).not.toHaveBeenCalled();
    expect(arrowIncrease).toHaveAttribute("aria-disabled", "true");
    expect(arrowIncrease).toHaveClass("arrow--disabled");
  });

  it("should disable the decrease arrow when the value is at the minimum", () => {
    render(<VariableInput variable={{ ...mockVariable, value: MIN_VALUE }} />);
    const arrowDecrease = screen.getByRole("button", { name: /-/i });

    userEvent.click(arrowDecrease);
    expect(mockVariable.setValue).not.toHaveBeenCalled();
    expect(arrowDecrease).toHaveAttribute("aria-disabled", "true");
    expect(arrowDecrease).toHaveClass("arrow--disabled");
  });
});
