import frozenDefaultExportRule from "../rules/frozen-default-export.js";
import stylistic from "@stylistic/eslint-plugin";

export default Object.freeze({
    plugins: Object.freeze({
        "@radiantbeing": {
            rules: {
                "frozen-default-export": frozenDefaultExportRule
            }
        },
        "@stylistic": stylistic
    }),
    rules: Object.freeze({
        "@radiantbeing/frozen-default-export": "error",
        "@stylistic/array-bracket-newline": [
            "error",
            {"multiline": true}
        ],
        "@stylistic/arrow-parens": "error",
        "@stylistic/brace-style": [
            "error",
            "1tbs",
            {allowSingleLine: false}
        ],
        "@stylistic/comma-dangle": ["error", "never"],
        "@stylistic/indent": [
            "error",
            4,
            {
                ignoreComments: true,
                ignoredNodes: ["ConditionalExpression"],
                offsetTernaryExpressions: false
            }
        ],
        "@stylistic/max-len": [
            "error",
            {
                code: 80,
                comments: 80,
                ignoreRegExpLiterals: true
            }
        ],
        "@stylistic/max-statements-per-line": "error",
        "@stylistic/object-curly-spacing": ["error", "never"],
        "@stylistic/quotes": ["error", "double"],
        "@stylistic/semi": ["error", "always"],
        "@stylistic/semi-spacing": ["error", {"after": true, "before": false}],
        "@stylistic/space-infix-ops": "error",
        "arrow-body-style": ["error", "never"],
        "curly": ["error", "all"],
        "no-dupe-keys": "error",
        "no-unused-vars": [
            "error",
            {caughtErrorsIgnorePattern: "^ignore"}
        ],
        "sort-keys": ["error", "asc"],
        "vars-on-top": "error"
    })
});
