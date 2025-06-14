import customPlugin from "../plugins/custom.js";
import {defineConfig} from "eslint/config";

export default Object.freeze(defineConfig({
    plugins: {
        custom: customPlugin
    },
    rules: {
        "arrow-body-style": ["error", "never"],
        "curly": ["error", "all"],
        "custom/freeze-default-export": "error",
        "no-unused-vars": [
            "error",
            {caughtErrorsIgnorePattern: "^ignore"}
        ],
        "sort-imports": "error",
        "sort-keys": ["error", "asc"]
    }
}));
