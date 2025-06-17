import customConfig from "./src/configs/custom-config.js";
import jsConfig from "./src/configs/js-config.js";
import stylisticConfig from "./src/configs/stylistic-config.js";

export default Object.freeze({
    configs: {
        recommended: [
            jsConfig,
            stylisticConfig,
            customConfig
        ]
    }
});
