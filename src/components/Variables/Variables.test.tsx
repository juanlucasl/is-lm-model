import React from "react";
import { render, screen } from "@testing-library/react";
import Variables from "./Variables";
import { Variable } from "../../models";

const mockVariables: Variable[] = [
  {
    label: "Mock Variable Input 1",
    value: 0,
    setValue: jest.fn(),
    increaseDescription: "Mock increase description 1",
    decreaseDescription: "Mock decrease description 1",
  },
  {
    label: "Mock Variable Input 2",
    value: 0,
    setValue: jest.fn(),
    increaseDescription: "Mock increase description 2",
    decreaseDescription: "Mock decrease description 2",
  },
];

describe("Variables", () => {
  it("renders correctly", () => {
    const { container } = render(<Variables variables={mockVariables} />);
    expect(container).toMatchSnapshot();
  });

  it("renders the title and description if provided", () => {
    render(
      <Variables variables={mockVariables} title="Mock Title" description="Mock Description" />
    );
    expect(screen.getByRole("heading", { name: /Mock Title/ })).toBeVisible();
    expect(screen.getByText("Mock Description")).toBeVisible();
  });

  it("renders the variable input fields", () => {
    render(<Variables variables={mockVariables} />);
    expect(screen.getByText(mockVariables[0].label)).toBeVisible();
    expect(screen.getByText(mockVariables[1].label)).toBeVisible();
    expect(screen.getAllByTestId("arrow-increase")).toHaveLength(mockVariables.length);
    expect(screen.getAllByTestId("arrow-decrease")).toHaveLength(mockVariables.length);
  });
});
