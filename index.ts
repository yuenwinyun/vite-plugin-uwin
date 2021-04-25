import type { Plugin } from "vite";
import { createFilter } from "@rollup/pluginutils";

interface Options {
    include?: string | RegExp | (string | RegExp)[];
    exclude?: string | RegExp | (string | RegExp)[];
    autoImportStatements: {
        [identifier: string]: string;
    };
}

function getFilename(id: string) {
    return id.split(`?`, 2)[0];
}

export const uwin = (options: Options): Plugin => {
    const filter = createFilter(options.include, options.exclude);

    return {
        name: "uwin",
        enforce: "pre",
        async transform(code, id) {
            let transformedCode = code;
            for (const [identifier, statement] of Object.entries(options.autoImportStatements)) {
                if (code.includes(identifier) && filter(getFilename(id))) {
                    transformedCode = statement + "\n" + code;
                }
            }
            return { code: transformedCode };
        },
    };
};
