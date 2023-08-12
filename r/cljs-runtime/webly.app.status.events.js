goog.provide('webly.app.status.events');
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("webly","set-status","webly/set-status",-116304998),(function (db,p__45918){
var vec__45926 = p__45918;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45926,(0),null);
var field = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45926,(1),null);
var value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45926,(2),null);
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("webly","status","webly/status",-2111320042),field], null),value);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("webly","status","webly/status",-2111320042),(function (db,p__45933){
var vec__45934 = p__45933;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45934,(0),null);
var state = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45934,(1),null);
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("webly","status","webly/status",-2111320042),new cljs.core.Keyword(null,"state","state",-1988618099)], null),state);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("webly","status-css","webly/status-css",2120189393),(function (db,p__45942){
var vec__45943 = p__45942;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45943,(0),null);
var status = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45943,(1),null);
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("webly","status","webly/status",-2111320042),new cljs.core.Keyword(null,"css","css",1135045163)], null),status);
}));

//# sourceMappingURL=webly.app.status.events.js.map
