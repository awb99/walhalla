goog.provide('viz.hiccup');
viz.hiccup.hiccup_with_fn_symbol_QMARK_ = (function viz$hiccup$hiccup_with_fn_symbol_QMARK_(hiccup_vector){
return ((cljs.core.vector_QMARK_(hiccup_vector)) && ((((!(cljs.core.map_entry_QMARK_(hiccup_vector)))) && ((cljs.core.first(hiccup_vector) instanceof cljs.core.Symbol)))));
});
/**
 * input: hiccup vector
 * if keyword (first position in vector) has been registered via register-tag,
 * then it gets replaced with the react function,
 * otherwise keyword remains
 */
viz.hiccup.replace_tag_in_hiccup_vector = (function viz$hiccup$replace_tag_in_hiccup_vector(resolve,h){
var tag = cljs.core.first(h);
var render_function = viz.resolve.resolve_fn(resolve,tag);
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(h,(0),render_function));
});
/**
 * resolve function-as symbol to function references in the reagent-hickup-map.
 * Leaves regular hiccup data unchanged.
 */
viz.hiccup.resolve_hiccup = (function viz$hiccup$resolve_hiccup(resolve,h){
return clojure.walk.prewalk((function (x){
if(viz.hiccup.hiccup_with_fn_symbol_QMARK_(x)){
return viz.hiccup.replace_tag_in_hiccup_vector(resolve,x);
} else {
return x;
}
}),h);
});

//# sourceMappingURL=viz.hiccup.js.map
