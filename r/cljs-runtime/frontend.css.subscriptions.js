goog.provide('frontend.css.subscriptions');
re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("css","theme","css/theme",-1248044221),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (db,p__44933){
var vec__44934 = p__44933;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44934,(0),null);
var map__44937 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"theme","theme",-1247880880)], null));
var map__44937__$1 = cljs.core.__destructure_map(map__44937);
var available = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__44937__$1,new cljs.core.Keyword(null,"available","available",-1470697127),cljs.core.PersistentArrayMap.EMPTY);
var current = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__44937__$1,new cljs.core.Keyword(null,"current","current",-1088038603),cljs.core.PersistentArrayMap.EMPTY);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"available","available",-1470697127),available,new cljs.core.Keyword(null,"current","current",-1088038603),current], null);
})], 0));
re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("css","app-theme-links","css/app-theme-links",-2052498290),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (db,p__44939){
var vec__44941 = p__44939;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44941,(0),null);
var map__44944 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"theme","theme",-1247880880)], null));
var map__44944__$1 = cljs.core.__destructure_map(map__44944);
var available = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__44944__$1,new cljs.core.Keyword(null,"available","available",-1470697127),cljs.core.PersistentArrayMap.EMPTY);
var current = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__44944__$1,new cljs.core.Keyword(null,"current","current",-1088038603),cljs.core.PersistentArrayMap.EMPTY);
var prefix = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"prefix","prefix",-265908465)], null));
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"debug","debug",-1608172596),"frontend.css.subscriptions",null,26,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["app theme link prefix: ",prefix], null);
}),null)),null,(147),null);

return frontend.css.config.css_app(prefix,available,current);
})], 0));
re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("css","theme-component","css/theme-component",-2079912019),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (db,p__44951){
var vec__44955 = p__44951;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44955,(0),null);
var component = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44955,(1),null);
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"theme","theme",-1247880880),new cljs.core.Keyword(null,"current","current",-1088038603),component], null));
})], 0));

//# sourceMappingURL=frontend.css.subscriptions.js.map
