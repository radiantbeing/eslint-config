import {defineConfig} from "eslint/config";

export default Object.freeze(defineConfig({
    rules: {
        "arrow-body-style": ["error", "never"],
        "curly": ["error", "all"],
        "no-dupe-keys": "error",
        "no-unused-vars": [
            "error",
            {caughtErrorsIgnorePattern: "^ignore"}
        ],
        "sort-keys": ["error", "asc"],
        "vars-on-top": "error"
    }
}));
