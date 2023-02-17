/* SPDX-License-Identifier: Apache-2.0 */
import React from "react";
import { screen } from "@testing-library/react";
import App from "./App";
import { MESSAGES } from "../lang/messages";
import { Locales } from "../lang/locales";
import { renderWithIntlProvider } from "../utils/test-utils";

describe("App", () => {
  it("renders correctly with English locale", () => {
    const { container } = renderWithIntlProvider(<App />, Locales.English);
    expect(screen.getByText(MESSAGES[Locales.English].IS_LM_MODEL)).toBeVisible();
    expect(container).toMatchSnapshot();
  });

  it("renders correctly with Spanish locale", () => {
    const { container } = renderWithIntlProvider(<App />, Locales.Spanish);
    expect(screen.getByText(MESSAGES[Locales.Spanish].IS_LM_MODEL)).toBeVisible();
    expect(container).toMatchSnapshot();
  });
});
