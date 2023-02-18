/* SPDX-License-Identifier: Apache-2.0 */
import React from "react";

const SiApacheIcon: React.FC = () => {
  return (
    <img
      src={`${process.env.PUBLIC_URL}/si-apache.svg`}
      alt="Apache icon"
      aria-label="Apache License 2.0"
      title="Apache License 2.0"
    />
  );
};

export default SiApacheIcon;
