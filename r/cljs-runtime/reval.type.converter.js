goog.provide('reval.type.converter');
reval.type.converter.unknown_type_view = (function reval$type$converter$unknown_type_view(v){
var type_as_str = cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.type(v));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.border-solid.p-2","div.border-solid.p-2",-1839443453),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p.text-red-300","p.text-red-300",350308684),type_as_str], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([v], 0))], null)], null);
});
reval.type.converter.nil_view = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.p-2.clj-nil","div.p-2.clj-nil",-1230063018),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"nil"], null)], null);
reval.type.converter.value_type__GT_hiccup = (function reval$type$converter$value_type__GT_hiccup(v){
try{return reval.type.protocol.to_hiccup(v);
}catch (e51167){var e = e51167;
return reval.type.converter.unknown_type_view(v);
}});

//# sourceMappingURL=reval.type.converter.js.map
