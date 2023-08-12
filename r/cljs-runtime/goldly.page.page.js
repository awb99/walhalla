goog.provide('goldly.page.page');
goldly.page.page.error_boundary = (function goldly$page$page$error_boundary(_){
var error_a = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var info_a = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(null);
return reagent.core.create_class.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"component-did-catch","component-did-catch",652725810),(function (___$1,___$2,i){
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"goldly.page.page",null,23,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["page did catch: ",i], null);
}),null)),null,(120),null);

return cljs.core.reset_BANG_(info_a,i);
}),new cljs.core.Keyword(null,"get-derived-state-from-error","get-derived-state-from-error",1473896468),(function (e){
cljs.core.reset_BANG_(error_a,e);

return ({});
}),new cljs.core.Keyword(null,"reagent-render","reagent-render",-985383853),(function (comp){
if(cljs.core.truth_(cljs.core.deref(error_a))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.bg-red-300","div.bg-red-300",2079870901),"Error: ",(cljs.core.truth_(cljs.core.deref(error_a))?cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.deref(error_a)], 0)):null)], null);
} else {
return comp;
}
})], null));
});
/**
 * shows a page 
 * expects: kw and route-map
 */
goldly.page.page.show_page = (function goldly$page$page$show_page(route_map){
return frontend.page.reagent_page.cljs$core$IFn$_invoke$arity$1(route_map);
});
/**
 * currently available pages that can be used in the routing table
 * seq of page keywords
 */
goldly.page.page.available_pages = (function goldly$page$page$available_pages(){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__50781_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"default","default",-1987822328),p1__50781_SHARP_);
}),cljs.core.keys(cljs.core.methods$(frontend.page.reagent_page))));
});
/**
 * add-page is exposed to sci
 * defines a new browser-based page 
 * that can be used in the routing table to define new pages
 */
goldly.page.page.add_page = (function goldly$page$page$add_page(p,kw){
return frontend.page.reagent_page.cljs$core$IMultiFn$_add_method$arity$3(null,kw,(function (p__50782){
var map__50783 = p__50782;
var map__50783__$1 = cljs.core.__destructure_map(map__50783);
var route = map__50783__$1;
var _route_params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50783__$1,new cljs.core.Keyword(null,"_route-params","_route-params",1851096184));
var _query_params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50783__$1,new cljs.core.Keyword(null,"_query-params","_query-params",1092697350));
var _handler = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50783__$1,new cljs.core.Keyword(null,"_handler","_handler",-1607001187));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [goldly.page.page.error_boundary,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p,route], null)], null);
}));
});

//# sourceMappingURL=goldly.page.page.js.map
