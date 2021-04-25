import typescript from "@rollup/plugin-typescript"

/** @type {import("rollup").RollupOptions} */
export default {
    external: ["@rollup/pluginutils"],
    input: "index.ts",
    output:[
        {
            dir: "dist",
            format: "cjs",
            sourcemap: true
        }
    ],
    plugins: [typescript()]
}
