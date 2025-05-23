import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends('next/core-web-vitals'),

  // Add additional flat config rules or settings here
  {
    rules: {
      "no-undef": "error",
      "no-extra-semi": "warn",
      "no-unused-vars": "warn"
    },
  },
];;

export default eslintConfig;
