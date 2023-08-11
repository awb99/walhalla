goog.provide('frontend.css.events');
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("css","init","css/init",-1875646823),(function (db,p__41463){
var vec__41464 = p__41463;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41464,(0),null);
var theme = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"webly","webly",-937630900),new cljs.core.Keyword(null,"theme","theme",-1247880880)], null));
var map__41469 = (function (){var or__5045__auto__ = theme;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
var map__41469__$1 = cljs.core.__destructure_map(map__41469);
var available = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41469__$1,new cljs.core.Keyword(null,"available","available",-1470697127));
var current = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41469__$1,new cljs.core.Keyword(null,"current","current",-1088038603));
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"info","info",-317069002),"frontend.css.events",null,11,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["css init: ",theme], null);
}),null)),null,(85),null);

re_frame.core.dispatch(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("css","add-components","css/add-components",-873575861),available,current], null));

return db;
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("css","add-components","css/add-components",-873575861),(function (db,p__41471){
var vec__41473 = p__41471;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41473,(0),null);
var components = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41473,(1),null);
var components_default_config = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41473,(2),null);
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"info","info",-317069002),"frontend.css.events",null,18,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["css add-component: ",components_default_config], null);
}),null)),null,(88),null);

var map__41481 = db;
var map__41481__$1 = cljs.core.__destructure_map(map__41481);
var theme = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__41481__$1,new cljs.core.Keyword(null,"theme","theme",-1247880880),cljs.core.PersistentArrayMap.EMPTY);
var map__41482 = theme;
var map__41482__$1 = cljs.core.__destructure_map(map__41482);
var available = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__41482__$1,new cljs.core.Keyword(null,"available","available",-1470697127),cljs.core.PersistentArrayMap.EMPTY);
var current = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__41482__$1,new cljs.core.Keyword(null,"current","current",-1088038603),cljs.core.PersistentArrayMap.EMPTY);
var theme__$1 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"available","available",-1470697127),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([available,components], 0)),new cljs.core.Keyword(null,"current","current",-1088038603),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([current,components_default_config], 0))], null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"theme","theme",-1247880880),theme__$1);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("css","set-theme-component","css/set-theme-component",11464057),(function (db,p__41484){
var vec__41485 = p__41484;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41485,(0),null);
var component = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41485,(1),null);
var theme = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41485,(2),null);
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"theme","theme",-1247880880),new cljs.core.Keyword(null,"current","current",-1088038603),component], null),theme);
}));

//# sourceMappingURL=frontend.css.events.js.map
