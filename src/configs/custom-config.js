import customPlugin from "../plugins/custom.js";
import {defineConfig} from "eslint/config";

export default Object.freeze(defineConfig({
    plugins: {
        "@radiantbeing": customPlugin
    },
    rules: {
        "@radiantbeing/freeze-default-export": "error"
    }
}));
