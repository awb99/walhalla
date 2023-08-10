goog.provide('ui.highlightjs');
var module$node_modules$highlight_DOT_js$lib$core=shadow.js.require("module$node_modules$highlight_DOT_js$lib$core", {});
var module$node_modules$highlight_DOT_js$lib$languages$clojure=shadow.js.require("module$node_modules$highlight_DOT_js$lib$languages$clojure", {});
var module$node_modules$highlight_DOT_js$lib$languages$clojure_repl=shadow.js.require("module$node_modules$highlight_DOT_js$lib$languages$clojure_repl", {});
module$node_modules$highlight_DOT_js$lib$core.registerLanguage("clojure",module$node_modules$highlight_DOT_js$lib$languages$clojure);
module$node_modules$highlight_DOT_js$lib$core.registerLanguage("clojure-repl",module$node_modules$highlight_DOT_js$lib$languages$clojure_repl);
ui.highlightjs.highlightjs = (function ui$highlightjs$highlightjs(code){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pre.clojure","pre.clojure",660001231),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),"clojure",new cljs.core.Keyword(null,"ref","ref",1289896967),(function (p1__72451_SHARP_){
if(cljs.core.truth_(p1__72451_SHARP_)){
return module$node_modules$highlight_DOT_js$lib$core.highlightElement(p1__72451_SHARP_);
} else {
return null;
}
})], null),code], null)], null);
});

//# sourceMappingURL=ui.highlightjs.js.map
