goog.provide('webly.app.status.events');
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("webly","set-status","webly/set-status",-116304998),(function (db,p__45920){
var vec__45927 = p__45920;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45927,(0),null);
var field = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45927,(1),null);
var value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45927,(2),null);
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("webly","status","webly/status",-2111320042),field], null),value);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("webly","status","webly/status",-2111320042),(function (db,p__45951){
var vec__45952 = p__45951;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45952,(0),null);
var state = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45952,(1),null);
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("webly","status","webly/status",-2111320042),new cljs.core.Keyword(null,"state","state",-1988618099)], null),state);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("webly","status-css","webly/status-css",2120189393),(function (db,p__45959){
var vec__45960 = p__45959;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45960,(0),null);
var status = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45960,(1),null);
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("webly","status","webly/status",-2111320042),new cljs.core.Keyword(null,"css","css",1135045163)], null),status);
}));

//# sourceMappingURL=webly.app.status.events.js.map
