/* eslint-disable @typescript-eslint/naming-convention */
module.exports = {
    "env": {
        "es6": true,
        "node": true
    },

    "globals": {
        "Atomics": "readonly",
        "SharedArrayBuffer": "readonly"
    },

    "parser": "@typescript-eslint/parser",

    "parserOptions": {
        "ecmaVersion": 2020,
        "sourceType": "module"
    },

    "plugins": [
        "@typescript-eslint"
    ],

    "rules": {
        "use-isnan": "error",

        "dot-notation": "warn",

        "camelcase": ["warn", {
            "properties": "never"
        }],

        "quotes": ["warn", "double"],

        "max-classes-per-file": "warn",

        "@typescript-eslint/naming-convention": [
            "warn",

            {
                "selector": "typeLike",
                "format": ["PascalCase"]
            },

            {
                "selector": "memberLike",
                "modifiers": ["private", "protected"],
                "format": ["camelCase"]
            },

            {
                "selector": "memberLike",
                "modifiers": ["public"],
                "format": ["camelCase"],
                "leadingUnderscore": "allow"
            },

            {
                "selector": "variableLike",
                "format": ["camelCase"]
            },

            {
                "selector": "interface",
                "format": ["PascalCase"],
                "prefix": ["I"]
            },

            {
                "selector": "function",
                "format": ["camelCase"],
                "leadingUnderscore": "allow"
            }
        ],

        "@typescript-eslint/no-extra-non-null-assertion": ["error"],

        "@typescript-eslint/no-invalid-void-type": ["error"],

        "@typescript-eslint/consistent-type-definitions": ["error", "interface"],

        "no-extra-semi": "off",

        "@typescript-eslint/no-extra-semi": ["error"],

        "indent": ["warn", 4, { "SwitchCase": 1 }],

        "semi": "error",

        "no-unused-vars": "off",

        "no-unused-expressions": "off",

        "no-unused-labels": "off",

        "eol-last": ["error"],

        "max-len": ["error", {
            "code": 120,
            "ignoreComments": true,
            "ignoreRegExpLiterals": true
        }],

        "curly": "error",
        
        "no-var": "error",

        "prefer-const": "error",

        "comma-dangle": "error",

        "brace-style": ["error", "allman"]
    }
};
