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
      // TypeScript specific rules
      "@typescript-eslint/no-unused-vars": "error",
      "@typescript-eslint/no-explicit-any": "warn",
      
      // React specific rules
      "react/jsx-key": "error",
      "react/no-unescaped-entities": "error",
      "react-hooks/exhaustive-deps": "warn",
      
      // General code quality
      "no-console": "warn",
      "prefer-const": "error",
      "no-var": "error",
    },
  },
];

export default eslintConfig;
