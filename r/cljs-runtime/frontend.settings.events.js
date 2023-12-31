goog.provide('frontend.settings.events');
akiroz.re_frame.storage.reg_co_fx_BANG_(new cljs.core.Keyword(null,"webly","webly",-937630900),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"fx","fx",-1237829572),new cljs.core.Keyword(null,"store","store",1512230022),new cljs.core.Keyword(null,"cofx","cofx",2013202907),new cljs.core.Keyword(null,"store","store",1512230022)], null));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword("settings","init","settings/init",-106254215),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_frame.core.inject_cofx.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"store","store",1512230022))], null),(function (p__44987){
var map__44988 = p__44987;
var map__44988__$1 = cljs.core.__destructure_map(map__44988);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44988__$1,new cljs.core.Keyword(null,"db","db",993250759));
var store = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44988__$1,new cljs.core.Keyword(null,"store","store",1512230022));
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"info","info",-317069002),"frontend.settings.events",null,17,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["settings/localstorage init"], null);
}),null)),null,(158),null);

var store__$1 = (function (){var or__5045__auto__ = store;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
var settings_default = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"settings","settings",1556144875)], null));
var use_localstorage = new cljs.core.Keyword(null,"use-localstorage","use-localstorage",1355458634).cljs$core$IFn$_invoke$arity$1(settings_default);
var settings_default__$1 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(settings_default,new cljs.core.Keyword(null,"use-localstorage","use-localstorage",1355458634));
var settings = (cljs.core.truth_(use_localstorage)?cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([settings_default__$1,store__$1], 0)):settings_default__$1);
if(cljs.core.truth_(use_localstorage)){
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"info","info",-317069002),"frontend.settings.events",null,26,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [":db :settings can be changed by user via localstorage"], null);
}),null)),null,(160),null);
} else {
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"info","info",-317069002),"frontend.settings.events",null,27,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["using static settings supplied via config"], null);
}),null)),null,(161),null);
}

return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"settings","settings",1556144875),settings)], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword("settings","set","settings/set",1202002397),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_frame.core.inject_cofx.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"store","store",1512230022))], null),(function (p__45024,p__45025){
var map__45030 = p__45024;
var map__45030__$1 = cljs.core.__destructure_map(map__45030);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45030__$1,new cljs.core.Keyword(null,"db","db",993250759));
var store = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45030__$1,new cljs.core.Keyword(null,"store","store",1512230022));
var vec__45031 = p__45025;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45031,(0),null);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45031,(1),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45031,(2),null);
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"info","info",-317069002),"frontend.settings.events",null,36,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["changing setting ",k," to: ",v], null);
}),null)),null,(170),null);

var store__$1 = (function (){var or__5045__auto__ = store;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"settings","settings",1556144875),k], null),v),new cljs.core.Keyword(null,"store","store",1512230022),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(store__$1,k,v)], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword("settings","unset","settings/unset",-1226410607),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_frame.core.inject_cofx.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"store","store",1512230022))], null),(function (p__45036,p__45037){
var map__45039 = p__45036;
var map__45039__$1 = cljs.core.__destructure_map(map__45039);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45039__$1,new cljs.core.Keyword(null,"db","db",993250759));
var store = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45039__$1,new cljs.core.Keyword(null,"store","store",1512230022));
var vec__45041 = p__45037;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45041,(0),null);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45041,(1),null);
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"info","info",-317069002),"frontend.settings.events",null,45,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["unsetting setting ",k], null);
}),null)),null,(173),null);

var store__$1 = (function (){var or__5045__auto__ = store;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
var settings = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"settings","settings",1556144875).cljs$core$IFn$_invoke$arity$1(db),k);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"settings","settings",1556144875)], null),settings),new cljs.core.Keyword(null,"store","store",1512230022),cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(store__$1,k)], null);
}));

//# sourceMappingURL=frontend.settings.events.js.map
