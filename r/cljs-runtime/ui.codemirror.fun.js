goog.provide('ui.codemirror.fun');
ui.codemirror.fun.dispatch = (function ui$codemirror$fun$dispatch(p__54602,cm_evt){
var map__54603 = p__54602;
var map__54603__$1 = cljs.core.__destructure_map(map__54603);
var context = map__54603__$1;
var cm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54603__$1,new cljs.core.Keyword(null,"cm","cm",540591536));
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54603__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var fun = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54603__$1,new cljs.core.Keyword(null,"fun","fun",-1265158045));
var cm_events = new cljs.core.Keyword(null,"cm-events","cm-events",-58624234).cljs$core$IFn$_invoke$arity$1(fun);
if(cljs.core.truth_(cm_events)){
return (cm_events.cljs$core$IFn$_invoke$arity$1 ? cm_events.cljs$core$IFn$_invoke$arity$1(cm_evt) : cm_events.call(null,cm_evt));
} else {
return taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"warn","warn",-436710552),"ui.codemirror.fun",null,9,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["codemirror :cm-events is not setup",cm_evt], null);
}),null)),null,(87),null);
}
});
ui.codemirror.fun.save_data = (function ui$codemirror$fun$save_data(p__54604,text){
var map__54605 = p__54604;
var map__54605__$1 = cljs.core.__destructure_map(map__54605);
var context = map__54605__$1;
var cm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54605__$1,new cljs.core.Keyword(null,"cm","cm",540591536));
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54605__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var fun = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54605__$1,new cljs.core.Keyword(null,"fun","fun",-1265158045));
var save_data = new cljs.core.Keyword(null,"save-data","save-data",-1628617344).cljs$core$IFn$_invoke$arity$1(fun);
if(cljs.core.truth_(save_data)){
return (save_data.cljs$core$IFn$_invoke$arity$2 ? save_data.cljs$core$IFn$_invoke$arity$2(id,text) : save_data.call(null,id,text));
} else {
return taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"warn","warn",-436710552),"ui.codemirror.fun",null,15,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["codemirror :save-data is not setup",id,text], null);
}),null)),null,(89),null);
}
});

//# sourceMappingURL=ui.codemirror.fun.js.map
