/* SPDX-License-Identifier: Apache-2.0 */
import { ReactElement } from "react";
import { IntlProvider } from "react-intl";
import { render, RenderResult } from "@testing-library/react";
import { Locales } from "../lang/locales";
import { MESSAGES } from "../lang/messages";

export function renderWithIntlProvider(ui: ReactElement, locale: Locales): RenderResult {
  return render(
    <IntlProvider locale={locale} messages={MESSAGES[locale]}>
      {ui}
    </IntlProvider>
  );
}
