goog.provide('ui.codemirror.bound.codemirror_themed');
ui.codemirror.bound.codemirror_themed.codemirror_themed = (function ui$codemirror$bound$codemirror_themed$codemirror_themed(id,fun,cm_opt){
ui.codemirror.unbound.options.ensure_initialized();

var theme = re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("css","theme-component","css/theme-component",-2079912019),new cljs.core.Keyword(null,"codemirror","codemirror",-1221931625)], null));
return (function (id__$1,fun__$1,cm_opt__$1){
var theme__$1 = (function (){var or__5045__auto__ = cljs.core.deref(theme);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return "mdn-like";
}
})();
var cm_opt_themed = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cm_opt__$1,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"theme","theme",-1247880880),theme__$1], null)], 0));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.my-codemirror","div.my-codemirror",-682657826),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [ui.codemirror.bound.core.codemirror_reagent,id__$1,fun__$1,cm_opt_themed], null)], null);
});
});

//# sourceMappingURL=ui.codemirror.bound.codemirror_themed.js.map
