"use strict";

module.exports = {
	js: [{
		source: "./views/index.js",
		target: "./dist/views.js",
		moduleName: "render",
		jsx: { pragma: "createElement" }
	}]
};
