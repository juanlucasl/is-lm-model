import React from "react";
import { render, screen } from "@testing-library/react";
import FunctionsDrawer from "./FunctionsDrawer";
import { GRAPH_SIZE } from "../../constants";

const mockFunctionsToDraw = [(x: number) => x, (x: number) => x * 2];

jest.mock("canvas", () => {
  const mCanvas = {
    getContext: jest.fn(),
  };
  return {
    createCanvas: jest.fn(() => mCanvas),
  };
});

describe("FunctionsDrawer", () => {
  it("renders correctly", () => {
    const { container } = render(<FunctionsDrawer functionsToDraw={mockFunctionsToDraw} />);
    expect(container).toMatchSnapshot();
  });

  it("renders the canvas element", () => {
    render(<FunctionsDrawer functionsToDraw={mockFunctionsToDraw} />);
    const canvas = screen.getByRole("img") as HTMLCanvasElement;
    expect(canvas).toBeInTheDocument();
    expect(canvas.width).toBe(GRAPH_SIZE);
    expect(canvas.height).toBe(GRAPH_SIZE);
  });
});
