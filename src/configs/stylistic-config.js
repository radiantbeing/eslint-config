import {defineConfig} from "eslint/config";
import stylistic from "@stylistic/eslint-plugin";

export default Object.freeze(defineConfig({
    plugins: {
        "@stylistic": stylistic
    },
    rules: {
        "@stylistic/arrow-parens": ["error", "always"],
        "@stylistic/block-spacing": "off",
        "@stylistic/brace-style": [
            "error",
            "1tbs",
            {allowSingleLine: true}
        ],
        "@stylistic/comma-dangle": ["error", "never"],
        "@stylistic/indent": ["error", 4, {
            ignoreComments: true,
            ignoredNodes: [
                "ConditionalExpression",
                "TSUnionType",
                "TSIntersectionType",
                "TSTypeParameterInstantiation",
                "FunctionExpression > .params[decorators.length > 0]",
                "FunctionExpression > "
                + ".params > "
                + ":matches(Decorator, :not(:first-child))"
            ],
            offsetTernaryExpressions: false
        }],
        "@stylistic/max-len": ["error", {
            code: 80,
            comments: 80,
            ignoreRegExpLiterals: true,
            ignoreStrings: true,
            ignoreTemplateLiterals: true,
            ignoreUrls: true
        }],
        "@stylistic/max-statements-per-line": "off",
        "@stylistic/object-curly-spacing": ["error", "never"],
        "@stylistic/operator-linebreak": ["error", "before"],
        "@stylistic/padded-blocks": "off",
        "@stylistic/quotes": ["error", "double"],
        "@stylistic/semi": ["error", "always"],
        "@stylistic/spaced-comment": "off"
    }
}));
