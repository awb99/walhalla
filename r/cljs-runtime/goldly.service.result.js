goog.provide('goldly.service.result');
goldly.service.result.specter_resolve = (function goldly$service$result$specter_resolve(specter_vector){
return clojure.walk.prewalk((function (x){
if((x instanceof cljs.core.Keyword)){
var G__77971 = x;
var G__77971__$1 = (((G__77971 instanceof cljs.core.Keyword))?G__77971.fqn:null);
switch (G__77971__$1) {
case "END":
return com.rpl.specter.END;

break;
default:
return x;

}
} else {
return x;
}
}),specter_vector);
});
goldly.service.result.update_atom_where = (function goldly$service$result$update_atom_where(a,where,result){
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"debug","debug",-1608172596),"goldly.service.result",null,19,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["updating atom where: %s with result: %s",where,result], null);
}),null)),null,(320),null);

try{var where_resolved = goldly.service.result.specter_resolve(where);
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"debug","debug",-1608172596),"goldly.service.result",null,22,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["specter resolved: ",where_resolved], null);
}),null)),null,(322),null);

return cljs.core.reset_BANG_(a,com.rpl.specter.impl.compiled_setval_STAR_((function (){var info__76670__auto__ = goldly.service.result.pathcache77974;
var info__76670__auto____$1 = (((info__76670__auto__ == null))?(function (){var info77975 = com.rpl.specter.impl.magic_precompilation(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_LocalSym(where_resolved,new cljs.core.Symbol(null,"where-resolved","where-resolved",453826419,null))], null),"goldly.service.result",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"where-resolved","where-resolved",453826419,null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"where-resolved","where-resolved",453826419,null)], null));
goldly.service.result.pathcache77974 = info77975;

return info77975;
})():info__76670__auto__);
var precompiled77976 = com.rpl.specter.impl.cached_path_info_precompiled(info__76670__auto____$1);
var dynamic_QMARK___76671__auto__ = com.rpl.specter.impl.cached_path_info_dynamic_QMARK_(info__76670__auto____$1);
if(cljs.core.truth_(dynamic_QMARK___76671__auto__)){
var G__77982 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [where_resolved], null);
return (precompiled77976.cljs$core$IFn$_invoke$arity$1 ? precompiled77976.cljs$core$IFn$_invoke$arity$1(G__77982) : precompiled77976.call(null,G__77982));
} else {
return precompiled77976;
}
})(),result,cljs.core.deref(a)));
}catch (e77972){var e = e77972;
return taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"goldly.service.result",null,26,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["update-atom-where: %s  ex: %s",e], null);
}),null)),null,(321),null);
}});

//# sourceMappingURL=goldly.service.result.js.map
