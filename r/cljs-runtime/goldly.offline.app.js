goog.provide('goldly.offline.app');
goog.scope(function(){
  goldly.offline.app.goog$module$shadow$loader = goog.module.get('shadow.loader');
});
goldly.offline.app.mount_app = (function goldly$offline$app$mount_app(page_fn){
return reagent.dom.render.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [page_fn], null),document.getElementById("app"));
});
goldly.offline.app.patch_path = (function goldly$offline$app$patch_path(){
goldly.sci.loader.cljs_source_http.set_github_load_mode();

return goldly.offline.app.goog$module$shadow$loader.init(goldly.sci.loader.static$.dynamic_base());
});
goldly.offline.app.start = (function goldly$offline$app$start(var_args){
var G__54580 = arguments.length;
switch (G__54580) {
case 1:
return goldly.offline.app.start.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return goldly.offline.app.start.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});
goog.exportSymbol('goldly.offline.app.start', goldly.offline.app.start);

(goldly.offline.app.start.cljs$core$IFn$_invoke$arity$1 = (function (symbol_page_as_string){
return goldly.offline.app.start.cljs$core$IFn$_invoke$arity$2(symbol_page_as_string,null);
}));

(goldly.offline.app.start.cljs$core$IFn$_invoke$arity$2 = (function (symbol_page_as_string,symbol_init_as_string){
cljs.core.enable_console_print_BANG_();

goldly.offline.app.patch_path();

if(cljs.core.truth_(symbol_init_as_string)){
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"info","info",-317069002),"goldly.offline.app",null,31,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["starting with init-fn: ",symbol_init_as_string], null);
}),null)),null,(101),null);

var init_symbol_54582 = cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(symbol_init_as_string);
var libspec_54583 = cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace(init_symbol_54582));
var require_p_54584 = goldly.sci.kernel_cljs.require_async.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([libspec_54583], 0));
require_p_54584.then((function (res){
var init_fn = goldly.sci.kernel_cljs.resolve_symbol(init_symbol_54582);
if(cljs.core.truth_(init_fn)){
return (init_fn.cljs$core$IFn$_invoke$arity$0 ? init_fn.cljs$core$IFn$_invoke$arity$0() : init_fn.call(null));
} else {
return (goldly.offline.app.error.cljs$core$IFn$_invoke$arity$2 ? goldly.offline.app.error.cljs$core$IFn$_invoke$arity$2("could not resolve init-fn: ",init_symbol_54582) : goldly.offline.app.error.call(null,"could not resolve init-fn: ",init_symbol_54582));
}
}));

require_p_54584.catch((function (err){
return (goldly.offline.app.error.cljs$core$IFn$_invoke$arity$2 ? goldly.offline.app.error.cljs$core$IFn$_invoke$arity$2("exception in init-fn: ",err) : goldly.offline.app.error.call(null,"exception in init-fn: ",err));
}));
} else {
}

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["starting goldly static app page symbol:",symbol_page_as_string], 0));

var page_symbol = cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(symbol_page_as_string);
var libspec = cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace(page_symbol));
var require_p = goldly.sci.kernel_cljs.require_async.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([libspec], 0));
require_p.then((function (res){
var page_fn = goldly.sci.kernel_cljs.resolve_symbol(page_symbol);
if(cljs.core.truth_(page_fn)){
return goldly.offline.app.mount_app(page_fn);
} else {
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["could not resolve page: ",page_symbol], 0));
}
}));

return require_p.catch((function (err){
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["could not sci-require ns: ",libspec], 0));
}));
}));

(goldly.offline.app.start.cljs$lang$maxFixedArity = 2);


//# sourceMappingURL=goldly.offline.app.js.map
