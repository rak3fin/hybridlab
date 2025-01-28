import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends("next/core-web-vitals", "next/typescript"),
  {
    rules: {
      // Customize the rule for unused variables
      "@typescript-eslint/no-unused-vars": [
        "error",
        {
          varsIgnorePattern: "^_", // Ignore variables prefixed with _
          argsIgnorePattern: "^_", // Ignore function arguments prefixed with _
        },
      ],
      "@typescript-eslint/no-explicit-any": "off",
    },
  },
];

export default eslintConfig;
