module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  settings: {
    react: {
      version: "18.2",
    },
  },
  extends: [
    "standard",
    "plugin:react/recommended",
    "plugin:prettier/recommended",
  ],
  overrides: [
    {
      env: {
        node: true,
      },
      files: [".eslintrc.{js,cjs}"],
      parserOptions: {
        sourceType: "script",
      },
    },
  ],
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  plugins: ["react"],
  rules: {
    "max-len": [
      "error",
      {
        code: 80, // Maximum line length
        tabWidth: 2, // Number of spaces for each indentation level
        ignoreUrls: true, // Ignore URLs
        ignoreStrings: true, // Ignore string literals
        ignoreTemplateLiterals: true, // Ignore template literals
        ignoreComments: true, // Ignore comments
        ignoreRegExpLiterals: true, // Ignore regular expressions
        ignoreTrailingComments: true, // Ignore trailing comments
        ignorePattern: "^(\\s*\\*\\s*)+", // Ignore lines starting with '*'
      },
    ],
    semi: ["error", "always"], // Always show an error for missing semicolons
    indent: ["error", 2], // Enforce 2 spaces for indentation
    "react/react-in-jsx-scope": "error", // Ensure 'React' is in scope when using JSX
    "comma-dangle": ["error", "always-multiline"], // Enforce trailing commas in multiline object and array literals
    "object-curly-spacing": ["error", "always"], // Require spaces after opening curly braces
    "no-multiple-empty-lines": ["error", { max: 1 }], // Disallow more than one blank line
    "react/prop-types": "off",
    "space-infix-ops": ["error", { int32Hint: false }],
  },
};
