import packageInfo from "../package.json" with {type: "json"};
import recommended from "./configs/recommended.js";

export default Object.freeze({
    configs: {
        recommended
    },
    meta: {
        name: packageInfo.name,
        version: packageInfo.version
    }
});
