goog.provide('reval.type.ui.list');
reval.type.ui.list.box = (function reval$type$ui$list$box(class$,open,close,inside){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),class$], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.font-bold.teal-700.mr-1","span.font-bold.teal-700.mr-1",-1200070922),open], null),cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.items","span.items",-589314205)], null),inside),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.font-bold.teal-700.ml-1","span.font-bold.teal-700.ml-1",-483225231),close], null)], null);
});
reval.type.ui.list.list__GT_hiccup = (function reval$type$ui$list$list__GT_hiccup(p__51168,list){
var map__51169 = p__51168;
var map__51169__$1 = cljs.core.__destructure_map(map__51169);
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51169__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var open = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51169__$1,new cljs.core.Keyword(null,"open","open",-1763596448));
var close = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51169__$1,new cljs.core.Keyword(null,"close","close",1835149582));
var separator = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51169__$1,new cljs.core.Keyword(null,"separator","separator",-1628749125));
return reval.type.ui.list.box(class$,open,close,cljs.core.interpose.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),separator], null),cljs.core.map.cljs$core$IFn$_invoke$arity$2(reval.type.protocol.to_hiccup,list)));
});
reval.type.ui.list.map__GT_hiccup = (function reval$type$ui$list$map__GT_hiccup(options,entry){
return reval.type.ui.list.list__GT_hiccup(options,cljs.core.interleave.cljs$core$IFn$_invoke$arity$2(cljs.core.keys(entry),cljs.core.vals(entry)));
});

//# sourceMappingURL=reval.type.ui.list.js.map
