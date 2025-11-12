import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";
import pluginReact from "eslint-plugin-react";

/** @type {import('eslint').Linter.Config[]} */
export default [
  { files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}"] },
  {
    ignores: ["dist/**/*", "node_modules/*"],
  },
  { settings: { react: { version: "detect" } } },
  { languageOptions: { globals: globals.node } },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  pluginReact.configs.flat.recommended,
  {
    rules: {
      "no-unused-vars": "warn",
      "arrow-body-style": ["error", "always"],
    },
  },
  {
    overrides: [
      {
        files: ["**/ModelViewer/**/*.{ts,tsx}"],
        rules: {
          "react/no-unknown-property": [
            "error",
            {
              ignore: [
                // R3F/three props
                "args",
                "attach",
                "position",
                "rotation",
                "scale",
                "intensity",
                "color",
                "fov",
                "near",
                "far",
                "castShadow",
                "receiveShadow",
                "toneMapping",
                "object",
                "map",
                "roughness",
                "metalness",
                "envMap",
                "preset",
                "makeDefault",
              ],
            },
          ],
        },
      },
    ],
  },
];
