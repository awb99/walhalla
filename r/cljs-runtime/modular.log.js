goog.provide('modular.log');
modular.log.create_appender = (function modular$log$create_appender(p__57065){
var map__57067 = p__57065;
var map__57067__$1 = cljs.core.__destructure_map(map__57067);
var opts = map__57067__$1;
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57067__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var opts__$1 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(opts,new cljs.core.Keyword(null,"type","type",1174270348));
var appender = cljs.core.get.cljs$core$IFn$_invoke$arity$2(modular.log.appenders.appender_list,type);
if(cljs.core.truth_(appender)){
return (appender.cljs$core$IFn$_invoke$arity$1 ? appender.cljs$core$IFn$_invoke$arity$1(opts__$1) : appender.call(null,opts__$1));
} else {
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["appender not found: ",type], 0));

return null;
}
});
modular.log.create_appenders = (function modular$log$create_appenders(appenders){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"appenders","appenders",1245583998),cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__57079){
var vec__57081 = p__57079;
var name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57081,(0),null);
var opts = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57081,(1),null);
var a = modular.log.create_appender(opts);
if(cljs.core.truth_(a)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [name,a], null);
} else {
return null;
}
}),appenders)))], null);
});
modular.log.timbre_config_BANG_ = (function modular$log$timbre_config_BANG_(p__57088){
var map__57089 = p__57088;
var map__57089__$1 = cljs.core.__destructure_map(map__57089);
var config = map__57089__$1;
var min_level = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__57089__$1,new cljs.core.Keyword(null,"min-level","min-level",1634684919),new cljs.core.Keyword(null,"info","info",-317069002));
var appenders = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__57089__$1,new cljs.core.Keyword(null,"appenders","appenders",1245583998),modular.log.appenders.default_appenders);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["timbre config min-level: ",min_level,"appenders: ",appenders], 0));

return taoensso.timbre.set_config_BANG_(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([taoensso.timbre.default_config,modular.log.create_appenders(appenders),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"min-level","min-level",1634684919),min_level], null)], 0)));
});

//# sourceMappingURL=modular.log.js.map
