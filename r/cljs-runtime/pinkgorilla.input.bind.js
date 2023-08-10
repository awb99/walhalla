goog.provide('pinkgorilla.input.bind');
pinkgorilla.input.bind.bind = (function pinkgorilla$input$bind$bind(control){
return (function (p__54497,a,path){
var map__54498 = p__54497;
var map__54498__$1 = cljs.core.__destructure_map(map__54498);
var options = map__54498__$1;
var on_change = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54498__$1,new cljs.core.Keyword(null,"on-change","on-change",-732046149));
var val = (cljs.core.truth_(path)?cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(a),path):cljs.core.deref(a));
var change_val_fn = (function (v){
if(cljs.core.truth_(path)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(a,cljs.core.assoc_in,path,v);
} else {
cljs.core.reset_BANG_(a,v);
}

if(cljs.core.truth_(on_change)){
return (on_change.cljs$core$IFn$_invoke$arity$1 ? on_change.cljs$core$IFn$_invoke$arity$1(v) : on_change.call(null,v));
} else {
return null;
}
});
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [control,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([options,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"on-change","on-change",-732046149),change_val_fn,new cljs.core.Keyword(null,"value","value",305978217),val], null)], 0))], null);
});
});

//# sourceMappingURL=pinkgorilla.input.bind.js.map
