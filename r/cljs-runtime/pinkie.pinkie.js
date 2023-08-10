goog.provide('pinkie.pinkie');
pinkie.pinkie.component_registry = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
/**
 * registers a reagent component in the pinkie registry.
 * does not capture meta data
 */
pinkie.pinkie.register_tag = (function pinkie$pinkie$register_tag(pinkie_tag,func){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(pinkie.pinkie.component_registry,cljs.core.assoc,pinkie_tag,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"meta","meta",1499536964),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"tag","tag",-1290361223),pinkie_tag,new cljs.core.Keyword(null,"fun","fun",-1265158045),func], null));
});
pinkie.pinkie.get_component = (function pinkie$pinkie$get_component(tag){
var G__49191 = cljs.core.deref(pinkie.pinkie.component_registry);
return (tag.cljs$core$IFn$_invoke$arity$1 ? tag.cljs$core$IFn$_invoke$arity$1(G__49191) : tag.call(null,G__49191));
});
pinkie.pinkie.get_renderer = (function pinkie$pinkie$get_renderer(tag){
return new cljs.core.Keyword(null,"fun","fun",-1265158045).cljs$core$IFn$_invoke$arity$1(pinkie.pinkie.get_component(tag));
});
pinkie.pinkie.component_list = (function pinkie$pinkie$component_list(){
return cljs.core.vals(cljs.core.deref(pinkie.pinkie.component_registry));
});
pinkie.pinkie.tags = (function pinkie$pinkie$tags(){
return cljs.core.keys(cljs.core.deref(pinkie.pinkie.component_registry));
});
pinkie.pinkie.clj__GT_json = (function pinkie$pinkie$clj__GT_json(ds){
return JSON.stringify(cljs.core.clj__GT_js(ds));
});
pinkie.pinkie.pinkie_namespace = cljs.core.namespace(new cljs.core.Keyword("p","test","p/test",577538765));
pinkie.pinkie.pinkie_tag_QMARK_ = (function pinkie$pinkie$pinkie_tag_QMARK_(tag){
var kw_namespace = cljs.core.namespace(tag);
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(pinkie.pinkie.pinkie_namespace,kw_namespace);
});
pinkie.pinkie.pinkie_exclude_QMARK_ = (function pinkie$pinkie$pinkie_exclude_QMARK_(hiccup_vector){
return cljs.core.contains_QMARK_(cljs.core.meta(hiccup_vector),new cljs.core.Keyword(null,"r","r",-471384190));
});
pinkie.pinkie.hiccup_vector_QMARK_ = (function pinkie$pinkie$hiccup_vector_QMARK_(hiccup_vector){
return ((cljs.core.vector_QMARK_(hiccup_vector)) && ((((!(cljs.core.map_entry_QMARK_(hiccup_vector)))) && ((cljs.core.first(hiccup_vector) instanceof cljs.core.Keyword)))));
});
pinkie.pinkie.should_replace_QMARK_ = (function pinkie$pinkie$should_replace_QMARK_(hiccup_vector){
if(pinkie.pinkie.hiccup_vector_QMARK_(hiccup_vector)){
var tag = cljs.core.first(hiccup_vector);
return (((!(pinkie.pinkie.pinkie_exclude_QMARK_(hiccup_vector)))) && (pinkie.pinkie.pinkie_tag_QMARK_(tag)));
} else {
return false;
}
});
/**
 * ui component for unknown tags - so that we don't need to catch react errors
 * Currently not yet used (see resolve function)
 */
pinkie.pinkie.unknown_tag = (function pinkie$pinkie$unknown_tag(tag){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.unknown-tag","span.unknown-tag",-1604027258),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"background-color","background-color",570434026),"red"], null)], null),["Unknown Tag: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(tag)].join('')], null);
});
/**
 * input: hiccup vector
 * if keyword (first position in vector) has been registered via register-tag,
 * then it gets replaced with the react function,
 * otherwise keyword remains
 */
pinkie.pinkie.replace_tag_in_hiccup_vector = (function pinkie$pinkie$replace_tag_in_hiccup_vector(hiccup_vector){
var tag = cljs.core.first(hiccup_vector);
var render_function = pinkie.pinkie.get_renderer(tag);
if((render_function == null)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["pinkie unknown tag: ",cljs.core.name(tag)], 0));

return pinkie.pinkie.unknown_tag(tag);
} else {
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(hiccup_vector,(0),render_function));
}
});
/**
 * resolve function-as symbol to function references in the reagent-hickup-map.
 * Leaves regular hiccup data unchanged.
 */
pinkie.pinkie.tag_inject = (function pinkie$pinkie$tag_inject(hiccup_vector){
return clojure.walk.prewalk((function (x){
if(pinkie.pinkie.should_replace_QMARK_(x)){
return pinkie.pinkie.replace_tag_in_hiccup_vector(x);
} else {
return x;
}
}),hiccup_vector);
});
pinkie.pinkie.to_map_style = (function pinkie$pinkie$to_map_style(s){
var style_vec = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__49236_SHARP_){
return clojure.string.split.cljs$core$IFn$_invoke$arity$2(p1__49236_SHARP_,/:/);
}),clojure.string.split.cljs$core$IFn$_invoke$arity$2(s,/;/));
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__5523__auto__ = (function pinkie$pinkie$to_map_style_$_iter__49257(s__49258){
return (new cljs.core.LazySeq(null,(function (){
var s__49258__$1 = s__49258;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__49258__$1);
if(temp__5804__auto__){
var s__49258__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__49258__$2)){
var c__5521__auto__ = cljs.core.chunk_first(s__49258__$2);
var size__5522__auto__ = cljs.core.count(c__5521__auto__);
var b__49261 = cljs.core.chunk_buffer(size__5522__auto__);
if((function (){var i__49260 = (0);
while(true){
if((i__49260 < size__5522__auto__)){
var vec__49274 = cljs.core._nth(c__5521__auto__,i__49260);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49274,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49274,(1),null);
cljs.core.chunk_append(b__49261,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(clojure.string.trim(k)),clojure.string.trim(v)], null));

var G__49364 = (i__49260 + (1));
i__49260 = G__49364;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__49261),pinkie$pinkie$to_map_style_$_iter__49257(cljs.core.chunk_rest(s__49258__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__49261),null);
}
} else {
var vec__49283 = cljs.core.first(s__49258__$2);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49283,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49283,(1),null);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(clojure.string.trim(k)),clojure.string.trim(v)], null),pinkie$pinkie$to_map_style_$_iter__49257(cljs.core.rest(s__49258__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5523__auto__(style_vec);
})());
});
pinkie.pinkie.is_style_QMARK_ = (function pinkie$pinkie$is_style_QMARK_(x){
if(((cljs.core.vector_QMARK_(x)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((2),cljs.core.count(x))) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.first(x),new cljs.core.Keyword(null,"style","style",-496642736))) && (typeof cljs.core.second(x) === 'string'))))))){
return true;
} else {
return false;
}
});
pinkie.pinkie.replace_style = (function pinkie$pinkie$replace_style(x){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["pinkie replacing string style: ",x], 0));

return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(x,(1),pinkie.pinkie.to_map_style(cljs.core.last(x))));
});
/**
 * resolve function-as symbol to function references in the reagent-hickup-map.
 * Leaves regular hiccup data unchanged.
 */
pinkie.pinkie.convert_style_as_strings_to_map = (function pinkie$pinkie$convert_style_as_strings_to_map(hiccup_vector){
return clojure.walk.prewalk((function (x){
if(pinkie.pinkie.is_style_QMARK_(x)){
return pinkie.pinkie.replace_style(x);
} else {
return x;
}
}),hiccup_vector);
});
pinkie.pinkie.render_as_QMARK_ = (function pinkie$pinkie$render_as_QMARK_(hiccup_vector){
return cljs.core.contains_QMARK_(cljs.core.meta(hiccup_vector),new cljs.core.Keyword("p","render-as","p/render-as",-1497012127));
});
pinkie.pinkie.wrap_renderer = (function pinkie$pinkie$wrap_renderer(x){
var renderer = new cljs.core.Keyword("p","render-as","p/render-as",-1497012127).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(x));
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["pinkie wrapping renderer ",renderer," to: ",x], 0));

return cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [renderer,x], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"R","R",-936662523),true], null));
});
/**
 * resolve function-as symbol to function references in the reagent-hickup-map.
 * Leaves regular hiccup data unchanged.
 */
pinkie.pinkie.convert_render_as = (function pinkie$pinkie$convert_render_as(hiccup_vector){
return clojure.walk.postwalk((function (x){
if(pinkie.pinkie.render_as_QMARK_(x)){
return pinkie.pinkie.wrap_renderer(x);
} else {
return x;
}
}),hiccup_vector);
});

//# sourceMappingURL=pinkie.pinkie.js.map
