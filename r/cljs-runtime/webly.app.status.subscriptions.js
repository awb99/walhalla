goog.provide('webly.app.status.subscriptions');
re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("webly","status-of","webly/status-of",556175399),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (db,p__45922){
var vec__45930 = p__45922;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45930,(0),null);
var field = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45930,(1),null);
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("webly","status","webly/status",-2111320042),field], null));
})], 0));
re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("webly","status","webly/status",-2111320042),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (db,_){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("webly","status","webly/status",-2111320042)], null));
})], 0));
re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("webly","status-show-app","webly/status-show-app",-1254988117),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (db,_){
var status = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("webly","status","webly/status",-2111320042)], null));
var map__45949 = status;
var map__45949__$1 = cljs.core.__destructure_map(map__45949);
var state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45949__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var css = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45949__$1,new cljs.core.Keyword(null,"css","css",1135045163));
return ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.Keyword(null,"running","running",1554969103))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(css,new cljs.core.Keyword(null,"loaded","loaded",-1246482293))));
})], 0));

//# sourceMappingURL=webly.app.status.subscriptions.js.map
