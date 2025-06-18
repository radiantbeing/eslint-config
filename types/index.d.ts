import type {ESLint, Linter} from "eslint";

declare const config: Readonly<{
    configs: {
        recommended: Readonly<{
            plugins: Readonly<Record<string, ESLint.Plugin>>;
            rules: Readonly<Linter.RulesRecord>;
        }>
    },
    meta: {
        name: string;
        version: string;
    }
}>;

export default config;
