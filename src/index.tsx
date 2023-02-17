/* SPDX-License-Identifier: Apache-2.0 */
import "react-tooltip/dist/react-tooltip.css";
import "./index.css";
import React from "react";
import ReactDOM from "react-dom/client";
import { IntlProvider } from "react-intl";
import App from "./components/App";
import { Locales } from "./lang/locales";
import { MESSAGES } from "./lang/messages";

const locale =
  navigator.language.substring(0, 2) === Locales.Spanish ? Locales.Spanish : Locales.English;

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
root.render(
  <React.StrictMode>
    <IntlProvider locale={locale} messages={MESSAGES[locale]}>
      <App />
    </IntlProvider>
  </React.StrictMode>
);
