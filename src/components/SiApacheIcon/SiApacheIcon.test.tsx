/* SPDX-License-Identifier: Apache-2.0 */
import React from "react";
import { render, screen } from "@testing-library/react";
import SiApacheIcon from "./SiApacheIcon";

describe("SiApacheIcon", () => {
  it("should render an Apache icon with correct attributes", () => {
    render(<SiApacheIcon />);
    const icon = screen.getByAltText("Apache icon");
    expect(icon).toBeVisible();
    expect(icon).toHaveAttribute("aria-label", "Apache License 2.0");
    expect(icon).toHaveAttribute("title", "Apache License 2.0");
  });
});
