goog.provide('goldly.static$.app');
goldly.static$.app.mount_app = (function goldly$static$app$mount_app(page_fn){
return reagent.dom.render.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [page_fn], null),document.getElementById("app"));
});
goldly.static$.app.patch_path = (function goldly$static$app$patch_path(){
goldly.sci.loader.cljs_source_http.set_github_load_mode();

return goldly.sci.loader.shadow_module.set_github_load_mode();
});
goldly.static$.app.start = (function goldly$static$app$start(symbol_page_as_string){
cljs.core.enable_console_print_BANG_();

goldly.static$.app.patch_path();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["starting goldly static app page symbol:",symbol_page_as_string], 0));

var page_symbol = cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(symbol_page_as_string);
var libspec = cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace(page_symbol));
var require_p = goldly.sci.kernel_cljs.require_async.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([libspec], 0));
require_p.then((function (res){
var page_fn = goldly.sci.kernel_cljs.resolve_symbol(page_symbol);
if(cljs.core.truth_(page_fn)){
return goldly.static$.app.mount_app(page_fn);
} else {
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["could not resolve page: ",page_symbol], 0));
}
}));

return require_p.catch((function (err){
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["could not sci-require ns: ",libspec], 0));
}));
});
goog.exportSymbol('goldly.static$.app.start', goldly.static$.app.start);

//# sourceMappingURL=goldly.static.app.js.map
