/* SPDX-License-Identifier: Apache-2.0 */
export type FunctionFormula = (x: number) => number;

export type Variable = {
  value: number;
  setValue: (value: number) => void;
  label: string;
  increaseDescription?: string | JSX.Element;
  decreaseDescription?: string | JSX.Element;
};
