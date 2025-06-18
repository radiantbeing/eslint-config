import customConfig from "./configs/custom-config.js";
import jsConfig from "./configs/js-config.js";
import stylisticConfig from "./configs/stylistic-config.js";

export default Object.freeze({
    configs: {
        recommended: [
            jsConfig,
            stylisticConfig,
            customConfig
        ]
    }
});
