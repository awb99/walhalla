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
var G__45048 = arguments.length;
switch (G__45048) {
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
}),null)),null,(182),null);

try{return modular.ws.ws.send.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(modular.ws.core.c),data);
}catch (e45069){var e = e45069;
return taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"modular.ws.core",null,22,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["exception sending to ws: ",e], null);
}),null)),null,(183),null);
}} else {
return null;
}
}));

(modular.ws.core.send_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (data,cb,timeout){
if(cljs.core.truth_(data)){
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"info","info",-317069002),"modular.ws.core",null,25,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["sending (cb): ",data], null);
}),null)),null,(184),null);

try{return modular.ws.ws.send.cljs$core$IFn$_invoke$arity$4(cljs.core.deref(modular.ws.core.c),data,cb,timeout);
}catch (e45072){var e = e45072;
return taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"modular.ws.core",null,29,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["exception sending to ws: ",e], null);
}),null)),null,(185),null);
}} else {
return null;
}
}));

(modular.ws.core.send_BANG_.cljs$lang$maxFixedArity = 3);

re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("ws","send","ws/send",-652154486),(function (db,v){
var G__45073_45103 = cljs.core.count(v);
switch (G__45073_45103) {
case (2):
var vec__45075_45105 = v;
var __45106 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45075_45105,(0),null);
var data_45107 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45075_45105,(1),null);
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"info","info",-317069002),"modular.ws.core",null,36,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["ws send (no cb): ",data_45107], null);
}),null)),null,(188),null);

modular.ws.core.send_BANG_.cljs$core$IFn$_invoke$arity$1(data_45107);

break;
case (4):
var vec__45078_45108 = v;
var __45109 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45078_45108,(0),null);
var data_45110 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45078_45108,(1),null);
var cb_45111 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45078_45108,(2),null);
var timeout_45112 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45078_45108,(3),null);
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"info","info",-317069002),"modular.ws.core",null,39,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["ws send (cb): ",data_45110], null);
}),null)),null,(189),null);

modular.ws.core.send_BANG_.cljs$core$IFn$_invoke$arity$3(data_45110,cb_45111,timeout_45112);

break;
default:
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"modular.ws.core",null,41,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [":ws/send bad format: ",v], null);
}),null)),null,(190),null);

}

return db;
}));

//# sourceMappingURL=modular.ws.core.js.map
