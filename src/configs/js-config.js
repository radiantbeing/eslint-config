import customPlugin from "../plugins/custom.js";
import {defineConfig} from "eslint/config";

export default Object.freeze(defineConfig({
    plugins: {
        "@radiantbeing": customPlugin
    },
    rules: {
        "@radiantbeing/freeze-default-export": "error",
        "arrow-body-style": ["error", "never"],
        "curly": ["error", "all"],
        "no-unused-vars": [
            "error",
            {caughtErrorsIgnorePattern: "^ignore"}
        ],
        "sort-imports": "error",
        "sort-keys": ["error", "asc"]
    }
}));
