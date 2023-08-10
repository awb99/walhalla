goog.provide('modular.ws.ws');
modular.ws.ws.cb_dispatch_to_reframe = (function modular$ws$ws$cb_dispatch_to_reframe(cb_reply){
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"debug","debug",-1608172596),"modular.ws.ws",null,8,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["dispatching ws callback reply: %s",cb_reply], null);
}),null)),null,(70),null);

if(cljs.core.vector_QMARK_(cb_reply)){
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"debug","debug",-1608172596),"modular.ws.ws",null,11,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["dispatching cb: ",cb_reply], null);
}),null)),null,(71),null);

return re_frame.core.dispatch(cb_reply);
} else {
return taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"modular.ws.ws",null,13,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["ws reply/dispatch to reframe failed. not a vector: ",cb_reply], null);
}),null)),null,(72),null);
}
});
modular.ws.ws.send = (function modular$ws$ws$send(var_args){
var G__41394 = arguments.length;
switch (G__41394) {
case 2:
return modular.ws.ws.send.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return modular.ws.ws.send.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(modular.ws.ws.send.cljs$core$IFn$_invoke$arity$2 = (function (conn,data){
var map__41402 = conn;
var map__41402__$1 = cljs.core.__destructure_map(map__41402);
var chsk_send_BANG_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41402__$1,new cljs.core.Keyword(null,"chsk-send!","chsk-send!",-2123715779));
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"debug","debug",-1608172596),"modular.ws.ws",null,18,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["chsk-send!"], null);
}),null)),null,(75),null);

if(cljs.core.truth_(chsk_send_BANG_)){
return (chsk_send_BANG_.cljs$core$IFn$_invoke$arity$1 ? chsk_send_BANG_.cljs$core$IFn$_invoke$arity$1(data) : chsk_send_BANG_.call(null,data));
} else {
return taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"modular.ws.ws",null,21,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["chsk-send! not defined! cannot send: ",data], null);
}),null)),null,(76),null);
}
}));

(modular.ws.ws.send.cljs$core$IFn$_invoke$arity$4 = (function (conn,data,cb,timeout){
var map__41424 = conn;
var map__41424__$1 = cljs.core.__destructure_map(map__41424);
var chsk_send_BANG_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41424__$1,new cljs.core.Keyword(null,"chsk-send!","chsk-send!",-2123715779));
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"debug","debug",-1608172596),"modular.ws.ws",null,24,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["chsk-send!"], null);
}),null)),null,(80),null);

if(cljs.core.truth_(chsk_send_BANG_)){
return (chsk_send_BANG_.cljs$core$IFn$_invoke$arity$3 ? chsk_send_BANG_.cljs$core$IFn$_invoke$arity$3(data,timeout,cb) : chsk_send_BANG_.call(null,data,timeout,cb));
} else {
return taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"modular.ws.ws",null,27,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["chsk-send! not defined! cannot send: ",data], null);
}),null)),null,(81),null);
}
}));

(modular.ws.ws.send.cljs$lang$maxFixedArity = 4);


//# sourceMappingURL=modular.ws.ws.js.map
