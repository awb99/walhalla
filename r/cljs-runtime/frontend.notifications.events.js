goog.provide('frontend.notifications.events');
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("notification","add","notification/add",-797397960),(function (p__45918,p__45919){
var map__45933 = p__45918;
var map__45933__$1 = cljs.core.__destructure_map(map__45933);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45933__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__45937 = p__45919;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45937,(0),null);
var map__45940 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45937,(1),null);
var map__45940__$1 = cljs.core.__destructure_map(map__45940);
var n = map__45940__$1;
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45940__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45940__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ms,(0))){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.update.cljs$core$IFn$_invoke$arity$4(db,new cljs.core.Keyword(null,"notifications","notifications",1685638001),cljs.core.conj,n)], null);
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.update.cljs$core$IFn$_invoke$arity$4(db,new cljs.core.Keyword(null,"notifications","notifications",1685638001),cljs.core.conj,n),new cljs.core.Keyword(null,"dispatch-later","dispatch-later",291951390),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ms","ms",-1152709733),ms,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("notification","dismiss","notification/dismiss",1041352438),id], null)], null)], null)], null);
}
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("notification","show","notification/show",1864741804),(function (_,p__45955){
var vec__45956 = p__45955;
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45956,(0),null);
var hiccup = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45956,(1),null);
var type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45956,(2),null);
var n = frontend.notifications.core.notification.cljs$core$IFn$_invoke$arity$2(type,hiccup);
re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("notification","add","notification/add",-797397960),n], null));

return null;
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("notification","dismiss","notification/dismiss",1041352438),(function (db,p__45964){
var vec__45966 = p__45964;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45966,(0),null);
var notification_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45966,(1),null);
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"notifications","notifications",1685638001),(function (notis){
return cljs.core.filterv((function (p1__45963_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(notification_id,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p1__45963_SHARP_));
}),notis);
}));
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"process-error-response","process-error-response",10419145),(function (db,p__45976){
var vec__45977 = p__45976;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45977,(0),null);
var location__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45977,(1),null);
var response = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45977,(2),null);
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"frontend.notifications.events",null,38,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["ERROR RESPONSE: ",response], null);
}),null)),null,(199),null);

re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("notification","add","notification/add",-797397960),frontend.notifications.core.notification.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"warning","warning",-1685650671),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(location__$1)," Error: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"status-text","status-text",-1834235478).cljs$core$IFn$_invoke$arity$1(response))," (",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"status","status",-1997798413).cljs$core$IFn$_invoke$arity$1(response)),")"].join(''))], null));

return db;
}));

//# sourceMappingURL=frontend.notifications.events.js.map
