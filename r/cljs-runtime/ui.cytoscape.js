goog.provide('ui.cytoscape');
var module$node_modules$cytoscape$dist$cytoscape_cjs=shadow.js.require("module$node_modules$cytoscape$dist$cytoscape_cjs", {});
var module$node_modules$cytoscape_cose_bilkent$cytoscape_cose_bilkent=shadow.js.require("module$node_modules$cytoscape_cose_bilkent$cytoscape_cose_bilkent", {});
var module$node_modules$cytoscape_dagre$cytoscape_dagre=shadow.js.require("module$node_modules$cytoscape_dagre$cytoscape_dagre", {});
var module$node_modules$react_cytoscapejs$dist$react_cytoscape=shadow.js.require("module$node_modules$react_cytoscapejs$dist$react_cytoscape", {});
module$node_modules$cytoscape$dist$cytoscape_cjs.use(module$node_modules$cytoscape_cose_bilkent$cytoscape_cose_bilkent);
module$node_modules$cytoscape$dist$cytoscape_cjs.use(module$node_modules$cytoscape_dagre$cytoscape_dagre);
ui.cytoscape.cytoscape = (function ui$cytoscape$cytoscape(data){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),module$node_modules$react_cytoscapejs$dist$react_cytoscape,data], null);
});
/**
 * 
 */
ui.cytoscape.cytoscape_boxed = (function ui$cytoscape$cytoscape_boxed(props){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ui.cytoscape.cytoscape,pinkie.box.apply_style(props)], null);
});

//# sourceMappingURL=ui.cytoscape.js.map
