goog.provide('pinkie.jsrender');
pinkie.jsrender.info = (function pinkie$jsrender$info(s){
return console.log(s);
});
pinkie.jsrender.render_function_impl = (function pinkie$jsrender$render_function_impl(p__49187){
var map__49188 = p__49187;
var map__49188__$1 = cljs.core.__destructure_map(map__49188);
var spec = map__49188__$1;
var f = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49188__$1,new cljs.core.Keyword(null,"f","f",-1597136552));
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49188__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var box = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49188__$1,new cljs.core.Keyword(null,"box","box",1530920394));
var uuid = cljs_uuid_utils.core.uuid_string(cljs_uuid_utils.core.make_random_uuid());
return reagent.core.create_class.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"display-name","display-name",694513143),"render-function-impl",new cljs.core.Keyword(null,"reagent-render","reagent-render",-985383853),(function (p__49189){
var map__49190 = p__49189;
var map__49190__$1 = cljs.core.__destructure_map(map__49190);
var spec__$1 = map__49190__$1;
var f__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49190__$1,new cljs.core.Keyword(null,"f","f",-1597136552));
var data__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49190__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var box__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49190__$1,new cljs.core.Keyword(null,"box","box",1530920394));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(pinkie.box.apply_style(spec__$1),new cljs.core.Keyword(null,"id","id",-1388402092),uuid),new cljs.core.Keyword(null,"f","f",-1597136552))], null);
}),new cljs.core.Keyword(null,"component-did-mount","component-did-mount",-1126910518),(function (this$){
var G__49192 = reagent.dom.dom_node(this$);
var G__49193 = data;
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__49192,G__49193) : f.call(null,G__49192,G__49193));
}),new cljs.core.Keyword(null,"component-did-update","component-did-update",-1468549173),(function (this$,old_argv){
var new_argv = cljs.core.rest(reagent.core.argv(this$));
var vec__49194 = new_argv;
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49194,(0),null);
var map__49197 = arg1;
var map__49197__$1 = cljs.core.__destructure_map(map__49197);
var f__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49197__$1,new cljs.core.Keyword(null,"f","f",-1597136552));
var data__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49197__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var G__49198 = reagent.dom.dom_node(this$);
var G__49199 = data__$1;
return (f__$1.cljs$core$IFn$_invoke$arity$2 ? f__$1.cljs$core$IFn$_invoke$arity$2(G__49198,G__49199) : f__$1.call(null,G__49198,G__49199));
})], null));
});
pinkie.jsrender.render_clj = (function pinkie$jsrender$render_clj(spec){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [pinkie.error.error_boundary,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [pinkie.jsrender.render_function_impl,spec], null)], null);
});
/**
 * reagent component that renders a js function,
 *     calls 
 *     parameters:
 *       f    the js render function
 *            gets js data
 *       data a clojure datastructure that will be converted to js
 *            before calling f
 */
pinkie.jsrender.render_js = (function pinkie$jsrender$render_js(p__49202){
var map__49204 = p__49202;
var map__49204__$1 = cljs.core.__destructure_map(map__49204);
var spec = map__49204__$1;
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49204__$1,new cljs.core.Keyword(null,"data","data",-232669377));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [pinkie.jsrender.render_clj,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword(null,"data","data",-232669377),cljs.core.clj__GT_js(data))], null);
});

//# sourceMappingURL=pinkie.jsrender.js.map
