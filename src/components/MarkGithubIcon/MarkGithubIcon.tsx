/* SPDX-License-Identifier: Apache-2.0 */
import React from "react";

const MarkGithubIcon: React.FC = () => {
  return (
    <img
      src={`${process.env.PUBLIC_URL}/mark-github.svg`}
      alt="GitHub icon"
      aria-label="Source code on GitHub"
      title="Source code on GitHub"
    />
  );
};

export default MarkGithubIcon;
