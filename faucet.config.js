let config = {
	manifest: false,
	bundles: [{
		entryPoint: "./views/index.js",
		target: "./dist/bundle.js",
		moduleName: "render",
		transpiler: {
			features: ["es2015", "jsx"],
			jsx: { pragma: "createElement" }
		}
	}]
};

module.exports = {
	js: config
};
