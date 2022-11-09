module.exports = {
  root: true,
  env: {
    es6: true,
    node: true,
  },
  extends: [
    "eslint:recommended",
    "plugin:import/errors",
    "plugin:import/warnings",
    "google",
    "prettier",
    "plugin:prettier/recommended",
  ],
  parser: "@typescript-eslint/parser",
  ignorePatterns: [
    "/lib/**/*", // Ignore built files.
    // "/test/**",
  ],
  plugins: ["prettier", "@typescript-eslint", "import"],
  rules: {
    "new-cap": "off",
    "import/no-unresolved": 0,
    "no-unused-vars": "off",
    "@typescript-eslint/no-unused-vars": [
      "error",
      {argsIgnorePattern: "^_", varsIgnorePattern: "^_"},
    ],
    "import/order": [
      "warn",
      {
        groups: [
          "external",
          "builtin",
          "internal",
          "sibling",
          "parent",
          "index",
        ],
      },
    ],
    "@typescript-eslint/no-explicit-any": "off",
    "require-jsdoc": "off",
    "object-curly-spacing": "warn",
    "array-bracket-spacing": "warn",
    "space-in-parens": "warn",
  },
};
