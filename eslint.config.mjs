import nextVitals from "eslint-config-next/core-web-vitals";
import nextTypeScript from "eslint-config-next/typescript";
import { version as reactVersion } from "react";

const eslintConfig = [
  ...nextVitals,
  ...nextTypeScript,
  {
    settings: {
      react: { version: reactVersion },
    },
  },
];

export default eslintConfig;
