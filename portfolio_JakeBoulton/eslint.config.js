import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";
import pluginReact from "eslint-plugin-react";

/** @type {import('eslint').Linter.FlatConfig[]} */
export default [
  {
    ignores: ["node_modules/**", "dist/**"], // Proper glob patterns
    files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}"], // Include file patterns
    languageOptions: {
      parser: tseslint, // Use the TypeScript parser
      globals: globals.browser, // Include browser globals
    },
    rules: {
      "react/react-in-jsx-scope": "off", // No need for React import in JSX
      "react/no-unescaped-entities": "off", // Disable unescaped entities rule
    },
  },
  {
    files: ["**/*.js"],
    languageOptions: {
      sourceType: "commonjs", // Allow CommonJS modules for JS files
    },
  },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended, // Add TypeScript recommended rules
  {
    ...pluginReact.configs.flat.recommended,
    settings: {
      react: {
        version: "detect", // Automatically detect React version
      },
    },
  },
];
