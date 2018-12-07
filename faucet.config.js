"use strict";

module.exports = {
	watchDirs: ["./views"],
	js: [{
		source: "./views/index.js",
		target: "./dist/views.js",
		exports: "render",
		esnext: {
			exclude: ["classnames"]
		},
		jsx: { pragma: "createElement" }
	}]
};
