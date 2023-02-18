/* SPDX-License-Identifier: Apache-2.0 */
import React from "react";
import { render, screen } from "@testing-library/react";
import MarkGithubIcon from "./MarkGithubIcon";

describe("MarkGithubIcon", () => {
  it("should render a GitHub icon with correct attributes", () => {
    render(<MarkGithubIcon />);
    const icon = screen.getByAltText("GitHub icon");
    expect(icon).toBeVisible();
    expect(icon).toHaveAttribute("aria-label", "Source code on GitHub");
    expect(icon).toHaveAttribute("title", "Source code on GitHub");
  });
});
