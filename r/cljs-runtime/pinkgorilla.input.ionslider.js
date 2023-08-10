goog.provide('pinkgorilla.input.ionslider');
var module$node_modules$jquery$dist$jquery=shadow.js.require("module$node_modules$jquery$dist$jquery", {"globals":["$","jQuery"]});
var module$node_modules$react_ion_slider$dist$index=shadow.js.require("module$node_modules$react_ion_slider$dist$index", {});
pinkgorilla.input.ionslider.slider_ion = (function pinkgorilla$input$ionslider$slider_ion(p__54565){
var map__54566 = p__54565;
var map__54566__$1 = cljs.core.__destructure_map(map__54566);
var options = map__54566__$1;
var on_change = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54566__$1,new cljs.core.Keyword(null,"on-change","on-change",-732046149));
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54566__$1,new cljs.core.Keyword(null,"value","value",305978217));
var range_QMARK_ = cljs.core.vector_QMARK_(value);
var on_change_wrapped = (function (v){
if(cljs.core.truth_(on_change)){
var v_clj = cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(v);
var v2 = ((range_QMARK_)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.get.cljs$core$IFn$_invoke$arity$2(v_clj,"from"),cljs.core.get.cljs$core$IFn$_invoke$arity$2(v_clj,"to")], null):cljs.core.get.cljs$core$IFn$_invoke$arity$2(v_clj,"from"));
return (on_change.cljs$core$IFn$_invoke$arity$1 ? on_change.cljs$core$IFn$_invoke$arity$1(v2) : on_change.call(null,v2));
} else {
return null;
}
});
var opts_ion = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-change","on-change",-732046149),on_change_wrapped], null);
var opts_ion_value = ((range_QMARK_)?(function (){var vec__54571 = value;
var from = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54571,(0),null);
var to = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54571,(1),null);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"from","from",1815293044),from,new cljs.core.Keyword(null,"to","to",192099007),to,new cljs.core.Keyword(null,"type","type",1174270348),"double"], null);
})():new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"from","from",1815293044),value,new cljs.core.Keyword(null,"type","type",1174270348),"single"], null));
var options__$1 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([options,opts_ion,opts_ion_value], 0));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),module$node_modules$react_ion_slider$dist$index,options__$1], null);
});

//# sourceMappingURL=pinkgorilla.input.ionslider.js.map
