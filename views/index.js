import * as views from "./manifest";
import Renderer from "complate-stream";

let renderer = new Renderer();

Object.keys(views).
	map(key => views[key]).
	forEach(view => renderer.registerView(view));

export default renderer.renderView;
