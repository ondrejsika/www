const js = require("@eslint/js");
const react = require("eslint-plugin-react");

module.exports = [
  js.configs.recommended,
  {
    files: ["eslint.config.js"],
    languageOptions: {
      sourceType: "commonjs",
      globals: {
        require: "readonly",
        module: "readonly",
        __dirname: "readonly",
      },
    },
  },
  {
    files: ["**/*.js", "**/*.jsx"],
    plugins: {
      react,
    },
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },
    },
    rules: {
      "no-unused-vars": "warn",
      "react/jsx-uses-react": "error",
      "react/jsx-uses-vars": "error",
      "react/react-in-jsx-scope": "off",
    },
  },
  {
    ignores: [
      "node_modules/",
      "out/",
      ".next/",
      "cloudflare-workers/*/dist/worker.js",
      "cloudflare-workers/_static-site/worker/script.js",
      "sites20/",
    ],
  },
];
