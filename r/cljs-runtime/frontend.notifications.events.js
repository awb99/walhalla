goog.provide('frontend.notifications.events');
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("notification","add","notification/add",-797397960),(function (p__45915,p__45916){
var map__45925 = p__45915;
var map__45925__$1 = cljs.core.__destructure_map(map__45925);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45925__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__45929 = p__45916;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45929,(0),null);
var map__45932 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45929,(1),null);
var map__45932__$1 = cljs.core.__destructure_map(map__45932);
var n = map__45932__$1;
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45932__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45932__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ms,(0))){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.update.cljs$core$IFn$_invoke$arity$4(db,new cljs.core.Keyword(null,"notifications","notifications",1685638001),cljs.core.conj,n)], null);
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.update.cljs$core$IFn$_invoke$arity$4(db,new cljs.core.Keyword(null,"notifications","notifications",1685638001),cljs.core.conj,n),new cljs.core.Keyword(null,"dispatch-later","dispatch-later",291951390),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ms","ms",-1152709733),ms,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("notification","dismiss","notification/dismiss",1041352438),id], null)], null)], null)], null);
}
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("notification","show","notification/show",1864741804),(function (_,p__45937){
var vec__45939 = p__45937;
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45939,(0),null);
var hiccup = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45939,(1),null);
var type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45939,(2),null);
var n = frontend.notifications.core.notification.cljs$core$IFn$_invoke$arity$2(type,hiccup);
re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("notification","add","notification/add",-797397960),n], null));

return null;
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("notification","dismiss","notification/dismiss",1041352438),(function (db,p__45947){
var vec__45948 = p__45947;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45948,(0),null);
var notification_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45948,(1),null);
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"notifications","notifications",1685638001),(function (notis){
return cljs.core.filterv((function (p1__45946_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(notification_id,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p1__45946_SHARP_));
}),notis);
}));
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"process-error-response","process-error-response",10419145),(function (db,p__45951){
var vec__45952 = p__45951;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45952,(0),null);
var location__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45952,(1),null);
var response = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45952,(2),null);
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"frontend.notifications.events",null,38,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["ERROR RESPONSE: ",response], null);
}),null)),null,(187),null);

re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("notification","add","notification/add",-797397960),frontend.notifications.core.notification.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"warning","warning",-1685650671),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(location__$1)," Error: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"status-text","status-text",-1834235478).cljs$core$IFn$_invoke$arity$1(response))," (",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"status","status",-1997798413).cljs$core$IFn$_invoke$arity$1(response)),")"].join(''))], null));

return db;
}));

//# sourceMappingURL=frontend.notifications.events.js.map
