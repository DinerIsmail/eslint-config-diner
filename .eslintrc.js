module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es2022: true,
    node: true
  },
  plugins: [
    "react",
    "react-hooks",
    "import",
    "jsx-a11y",
    "@typescript-eslint",
    "promise",
    "@tanstack/query"
  ],
  extends: [
    "plugin:import/recommended",
    "plugin:import/typescript",
    "plugin:react/recommended",
    "plugin:react-hooks/recommended",
    "plugin:jsx-a11y/recommended",
    "plugin:promise/recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:@typescript-eslint/recommended-requiring-type-checking",
    "plugin:@next/next/recommended",
    "prettier",
    "plugin:@tanstack/eslint-plugin-query/recommended"
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    sourceType: "module",
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: "latest",
    project: [
      "tsconfig.json"
    ]
  },
  settings: {
    react: {
      "version": "detect"
    },
    "import/resolver": {
      "alias": {
        "map": [
          [
            "@components",
            "./components/"
          ],
          [
            "@hooks",
            "./hooks/"
          ],
          [
            "@helpers",
            "./helpers/"
          ],
          [
            "@store",
            "./store/"
          ],
          [
            "@styles",
            "./styles/"
          ]
        ],
        "extensions": [
          ".js",
          ".jsx",
          ".ts",
          ".tsx"
        ]
      }
    },
    "import/extensions": [
      ".js",
      ".jsx",
      ".ts",
      ".tsx"
    ]
  },
  rules: {
    "arrow-parens": [
      2,
      "always"
    ],
    "arrow-spacing": [
      1,
      {
        "before": true,
        "after": true
      }
    ],
    "jsx-quotes": 1,
    "keyword-spacing": [
      1,
      {
        "before": true,
        "after": true
      }
    ],
    "no-alert": 0,
    "no-console": 0,
    "no-debugger": 1,
    "no-empty-function": [
      1,
      {
        "allow": [
          "arrowFunctions"
        ]
      }
    ],
    "no-lone-blocks": 1,
    "no-param-reassign": 0,
    "no-trailing-spaces": [
      2,
      {
        "skipBlankLines": true
      }
    ],
    "no-underscore-dangle": 0,
    "no-unexpected-multiline": 1,
    "no-unreachable": 1,
    "no-useless-escape": 0,
    "no-var": 1,
    "no-mixed-spaces-and-tabs": 1,
    "prefer-const": 1,
    "prettier/prettier": 0,
    "quotes": [
      2,
      "single",
      {
        "avoidEscape": true,
        "allowTemplateLiterals": true
      }
    ],
    "react-hooks/rules-of-hooks": 2,
    "react-hooks/exhaustive-deps": "warn",
    "react/no-unescaped-entities": 0,
    "strict": 0,
    "react/jsx-props-no-spreading": 0,
    "react/react-in-jsx-scope": 0,
    "react/prop-types": 0,
    "import/default": 1,
    "import/export": 1,
    "import/named": 1,
    "import/namespace": 1,
    "import/no-named-as-default": 1,
    "import/no-unresolved": 1,
    "import/no-anonymous-default-export": 0,
    "jsx-a11y/anchor-is-valid": 1,
    "jsx-a11y/label-has-associated-control": 1,
    "@typescript-eslint/ban-ts-comment": 0,
    "no-unused-vars": "off",
    "@typescript-eslint/no-unused-vars": [
      1,
      {
        "args": "all",
        "caughtErrors": "none",
        "ignoreRestSiblings": true,
        "vars": "all",
        "argsIgnorePattern": "^_",
        "destructuredArrayIgnorePattern": "^_"
      }
    ],
    "@typescript-eslint/no-unsafe-assignment": 0,
    "@typescript-eslint/no-unsafe-member-access": 0,
    "@typescript-eslint/restrict-template-expressions": 0,
    "@typescript-eslint/no-unsafe-call": 0,
    "@typescript-eslint/no-unsafe-return": 0,
    "@typescript-eslint/no-explicit-any": 0,
    "@typescript-eslint/no-unsafe-argument": 0,
    "@typescript-eslint/no-var-requires": 0,
    "@typescript-eslint/no-floating-promises": 0,
    "promise/catch-or-return": [
      1,
      {
        "allowFinally": true
      }
    ],
    "@typescript-eslint/no-base-to-string": 0
  }
}
