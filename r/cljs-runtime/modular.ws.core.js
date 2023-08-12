goog.provide('modular.ws.core');
if((typeof modular !== 'undefined') && (typeof modular.ws !== 'undefined') && (typeof modular.ws.core !== 'undefined') && (typeof modular.ws.core.c !== 'undefined')){
} else {
modular.ws.core.c = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
modular.ws.core.init_ws_BANG_ = (function modular$ws$core$init_ws_BANG_(path,port){
var conn = modular.ws.adapter.ws_init_BANG_(path,port);
cljs.core.reset_BANG_(modular.ws.core.c,conn);

return modular.ws.adapter.start_router_BANG_(conn);
});
modular.ws.core.send_BANG_ = (function modular$ws$core$send_BANG_(var_args){
var G__44959 = arguments.length;
switch (G__44959) {
case 1:
return modular.ws.core.send_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 3:
return modular.ws.core.send_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(modular.ws.core.send_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (data){
if(cljs.core.truth_(data)){
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"info","info",-317069002),"modular.ws.core",null,18,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["sending (no cb): ",data], null);
}),null)),null,(149),null);

try{return modular.ws.ws.send.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(modular.ws.core.c),data);
}catch (e44972){var e = e44972;
return taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"modular.ws.core",null,22,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["exception sending to ws: ",e], null);
}),null)),null,(151),null);
}} else {
return null;
}
}));

(modular.ws.core.send_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (data,cb,timeout){
if(cljs.core.truth_(data)){
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"info","info",-317069002),"modular.ws.core",null,25,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["sending (cb): ",data], null);
}),null)),null,(152),null);

try{return modular.ws.ws.send.cljs$core$IFn$_invoke$arity$4(cljs.core.deref(modular.ws.core.c),data,cb,timeout);
}catch (e44973){var e = e44973;
return taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"modular.ws.core",null,29,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["exception sending to ws: ",e], null);
}),null)),null,(153),null);
}} else {
return null;
}
}));

(modular.ws.core.send_BANG_.cljs$lang$maxFixedArity = 3);

re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("ws","send","ws/send",-652154486),(function (db,v){
var G__44974_44996 = cljs.core.count(v);
switch (G__44974_44996) {
case (2):
var vec__44975_44999 = v;
var __45000 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44975_44999,(0),null);
var data_45001 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44975_44999,(1),null);
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"info","info",-317069002),"modular.ws.core",null,36,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["ws send (no cb): ",data_45001], null);
}),null)),null,(154),null);

modular.ws.core.send_BANG_.cljs$core$IFn$_invoke$arity$1(data_45001);

break;
case (4):
var vec__44978_45004 = v;
var __45005 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44978_45004,(0),null);
var data_45006 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44978_45004,(1),null);
var cb_45007 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44978_45004,(2),null);
var timeout_45008 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44978_45004,(3),null);
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"info","info",-317069002),"modular.ws.core",null,39,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["ws send (cb): ",data_45006], null);
}),null)),null,(155),null);

modular.ws.core.send_BANG_.cljs$core$IFn$_invoke$arity$3(data_45006,cb_45007,timeout_45008);

break;
default:
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"modular.ws.core",null,41,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [":ws/send bad format: ",v], null);
}),null)),null,(156),null);

}

return db;
}));

//# sourceMappingURL=modular.ws.core.js.map
