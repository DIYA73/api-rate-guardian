module.exports = [
"[turbopack-node]/transforms/postcss.ts { CONFIG => \"[project]/admin-ui/postcss.config.js_.loader.mjs [postcss] (ecmascript)\" } [postcss] (ecmascript, async loader)", ((__turbopack_context__) => {

__turbopack_context__.v((parentImport) => {
    return Promise.all([
  "chunks/c7e2d_21a0a9c7._.js",
  "chunks/[root-of-the-server]__e5a813ba._.js"
].map((chunk) => __turbopack_context__.l(chunk))).then(() => {
        return parentImport("[turbopack-node]/transforms/postcss.ts { CONFIG => \"[project]/admin-ui/postcss.config.js_.loader.mjs [postcss] (ecmascript)\" } [postcss] (ecmascript)");
    });
});
}),
];