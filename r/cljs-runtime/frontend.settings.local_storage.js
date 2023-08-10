goog.provide('frontend.settings.local_storage');
frontend.settings.local_storage.ls_set_BANG_ = (function frontend$settings$local_storage$ls_set_BANG_(k,v){
return localStorage.setItem(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([k], 0)),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([v], 0)));
});
frontend.settings.local_storage.ls_get = (function frontend$settings$local_storage$ls_get(k){
var temp__5804__auto__ = localStorage.getItem(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([k], 0)));
if(cljs.core.truth_(temp__5804__auto__)){
var s = temp__5804__auto__;
return cljs.reader.read_string.cljs$core$IFn$_invoke$arity$1(s);
} else {
return null;
}
});
frontend.settings.local_storage.ls_remove_BANG_ = (function frontend$settings$local_storage$ls_remove_BANG_(k){
return localStorage.removeItem(k);
});

//# sourceMappingURL=frontend.settings.local_storage.js.map
