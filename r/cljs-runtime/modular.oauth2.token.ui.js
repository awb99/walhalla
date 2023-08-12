goog.provide('modular.oauth2.token.ui');
re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("tokens","summary","tokens/summary",1240646086),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (db,p__52290){
var vec__52291 = p__52290;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52291,(0),null);
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("tokens","summary","tokens/summary",1240646086)], null));
})], 0));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("tokens","summary","tokens/summary",1240646086),(function (db,p__52294){
var vec__52295 = p__52294;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52295,(0),null);
var ts = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52295,(1),null);
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"info","info",-317069002),"modular.oauth2.token.ui",null,15,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["tokens/summary",ts], null);
}),null)),null,(225),null);

return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("tokens","summary","tokens/summary",1240646086)], null),ts);
}));
modular.oauth2.token.ui.connect = (function modular$oauth2$token$ui$connect(provider){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("oauth2","authorize-start","oauth2/authorize-start",1379461893),provider,new cljs.core.Keyword("oauth2","save-server","oauth2/save-server",1203434586)], null));
});
modular.oauth2.token.ui.provider_status = (function modular$oauth2$token$ui$provider_status(provider,status){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),cljs.core.name(provider)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"available","available",-1470697127).cljs$core$IFn$_invoke$arity$1(status))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return modular.oauth2.token.ui.connect(provider);
}),new cljs.core.Keyword(null,"class","class",-2030961996),"hover:text-blue-700"], null),"connect"], null)], null);
});
modular.oauth2.token.ui.provider_status_grid = (function modular$oauth2$token$ui$provider_status_grid(providers){
var c = re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("ws","connected?","ws/connected?",-1197555199)], null));
var tokens_status = re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("tokens","summary","tokens/summary",1240646086),providers], null));
var provider_status = (function (provider){
return modular.oauth2.token.ui.provider_status(provider,(function (){var G__52317 = cljs.core.deref(tokens_status);
return (provider.cljs$core$IFn$_invoke$arity$1 ? provider.cljs$core$IFn$_invoke$arity$1(G__52317) : provider.call(null,G__52317));
})());
});
var todo_QMARK_ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true);
return (function (providers__$1){
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"info","info",-317069002),"modular.oauth2.token.ui",null,37,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["connected: ",cljs.core.deref(c)], null);
}),null)),null,(226),null);

if(cljs.core.truth_(cljs.core.deref(c))){
if(cljs.core.truth_(cljs.core.deref(todo_QMARK_))){
cljs.core.reset_BANG_(todo_QMARK_,false);

re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("ws","send","ws/send",-652154486),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("tokens","summary","tokens/summary",1240646086),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"providers","providers",543153826),providers__$1], null)], null)], null));
} else {
}
} else {
}

return cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.grid.grid-cols-3","div.grid.grid-cols-3",-606474718),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),"provider"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),"status"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),"c/d"], null)], null),cljs.core.map.cljs$core$IFn$_invoke$arity$2(provider_status,providers__$1));
});
});

//# sourceMappingURL=modular.oauth2.token.ui.js.map
