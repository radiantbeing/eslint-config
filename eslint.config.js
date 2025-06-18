import {defineConfig} from "eslint/config";
import radiant from "./src/index.js";

export default Object.freeze(defineConfig({
    extends: [radiant.configs.recommended],
    files: ["**/*.{js,mjs,cjs}"]
}));
