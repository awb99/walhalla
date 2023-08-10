goog.provide('pinkie.error');
pinkie.error.error_boundary = (function pinkie$error$error_boundary(_){
var error = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var info = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(null);
return reagent.core.create_class.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"component-did-catch","component-did-catch",652725810),(function (___$1,___$2,i){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["pinkie component did catch: ",i], 0));

return cljs.core.reset_BANG_(info,i);
}),new cljs.core.Keyword(null,"get-derived-state-from-error","get-derived-state-from-error",1473896468),(function (e){
cljs.core.reset_BANG_(error,e);

return ({});
}),new cljs.core.Keyword(null,"reagent-render","reagent-render",-985383853),(function (comp){
if(cljs.core.truth_(cljs.core.deref(error))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.bg-red-300","div.bg-red-300",2079870901),"Error: ",(cljs.core.truth_(cljs.core.deref(error))?cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.deref(error)], 0)):null)], null);
} else {
return comp;
}
})], null));
});

//# sourceMappingURL=pinkie.error.js.map
