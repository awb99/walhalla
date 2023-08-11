goog.provide('frontend.analytics.events');
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("ga","init","ga/init",-1875486012),(function (db,p__44985){
var vec__44986 = p__44985;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44986,(0),null);
var map__44991_45021 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"google-analytics","google-analytics",-232541620)], null));
var map__44991_45022__$1 = cljs.core.__destructure_map(map__44991_45021);
var enabled_45023 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44991_45022__$1,new cljs.core.Keyword(null,"enabled","enabled",1195909756));
var id_45024 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44991_45022__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var debug_QMARK__45025 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44991_45022__$1,new cljs.core.Keyword(null,"debug?","debug?",-1831756173));
if(cljs.core.truth_(enabled_45023)){
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"info","info",-317069002),"frontend.analytics.events",null,13,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["ga init id: ",id_45024," debug?: ",debug_QMARK__45025], null);
}),null)),null,(164),null);
} else {
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"debug","debug",-1608172596),"frontend.analytics.events",null,16,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["google analytics disabled."], null);
}),null)),null,(168),null);
}

return db;
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("ga","event","ga/event",301434432),(function (db,p__45012){
var vec__45013 = p__45012;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45013,(0),null);
var map__45016 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45013,(1),null);
var map__45016__$1 = cljs.core.__destructure_map(map__45016);
var category = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45016__$1,new cljs.core.Keyword(null,"category","category",-593092832));
var action = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45016__$1,new cljs.core.Keyword(null,"action","action",-811238024));
var label = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45016__$1,new cljs.core.Keyword(null,"label","label",1718410804));
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45016__$1,new cljs.core.Keyword(null,"value","value",305978217));
var map__45020_45028 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"google-analytics","google-analytics",-232541620)], null));
var map__45020_45029__$1 = cljs.core.__destructure_map(map__45020_45028);
var enabled_45030 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45020_45029__$1,new cljs.core.Keyword(null,"enabled","enabled",1195909756));
var data_45031 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"event_category","event_category",1030534305),category,new cljs.core.Keyword(null,"event_label","event_label",-322760834),label,new cljs.core.Keyword(null,"value","value",305978217),value], null);
if(cljs.core.truth_(enabled_45030)){
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"info","info",-317069002),"frontend.analytics.events",null,27,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["ga send event",category], null);
}),null)),null,(171),null);

frontend.analytics.google_tag.send_event(action,data_45031);
} else {
}

return db;
}));

//# sourceMappingURL=frontend.analytics.events.js.map
