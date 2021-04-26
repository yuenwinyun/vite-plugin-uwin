import typescript from "@rollup/plugin-typescript";

/** @type {import("rollup").RollupOptions} */
const config = {
    external: ["@rollup/pluginutils"],
    input: "index.ts",
    output: [
        {
            dir: "dist",
            format: "cjs",
            sourcemap: true,
        },
    ],
    plugins: [typescript()],
};

export default config;
