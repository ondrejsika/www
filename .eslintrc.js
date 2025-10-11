module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:react/jsx-runtime",
    "next/core-web-vitals",
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: "latest",
    sourceType: "module",
  },
  plugins: ["react"],
  rules: {
    "react/prop-types": "off",
    "react/react-in-jsx-scope": "off",
    "react/no-unknown-property": ["error", { ignore: ["jsx", "global"] }],
    "no-unused-vars": ["warn", { argsIgnorePattern: "^_" }],
    "no-console": ["warn", { allow: ["warn", "error"] }],
    // Next.js rules - relaxed for monorepo
    "@next/next/no-html-link-for-pages": "off",
    "@next/next/no-sync-scripts": "warn",
    "@next/next/no-document-import-in-page": "off",
  },
  settings: {
    react: {
      version: "detect",
    },
  },
};
