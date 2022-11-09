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
  ignorePatterns: [
    "/lib/**/*", // Ignore built files.
    // "/test/**",
  ],
  plugins: ["prettier", "import"],
  rules: {
    "new-cap": "off",
    "import/no-unresolved": 0,
    "no-unused-vars": "off",
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
    "require-jsdoc": "off",
    "object-curly-spacing": "warn",
    "array-bracket-spacing": "warn",
    "space-in-parens": "warn",
  },
};
