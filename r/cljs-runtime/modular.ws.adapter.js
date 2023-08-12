goog.provide('modular.ws.adapter');
modular.ws.adapter._QMARK_csrf_token = (function (){var temp__5804__auto__ = document.getElementById("sente-csrf-token");
if(cljs.core.truth_(temp__5804__auto__)){
var el = temp__5804__auto__;
return el.getAttribute("data-csrf-token");
} else {
return null;
}
})();
modular.ws.adapter.ws_init_BANG_ = (function modular$ws$adapter$ws_init_BANG_(path,port){
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"debug","debug",-1608172596),"modular.ws.adapter",null,16,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["connecting sente websocket.. ",path,port], null);
}),null)),null,(132),null);

var packer = taoensso.sente.packers.transit.get_transit_packer.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword(null,"json","json",1279968570),modular.encoding.transit.encode,modular.encoding.transit.decode);
var opts = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"auto","auto",-566279492),new cljs.core.Keyword(null,"packer","packer",66077544),packer], null);
var opts__$1 = (cljs.core.truth_(port)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(opts,new cljs.core.Keyword(null,"port","port",1534937262),port):opts);
var map__44899 = taoensso.sente.make_channel_socket_client_BANG_.cljs$core$IFn$_invoke$arity$variadic(path,modular.ws.adapter._QMARK_csrf_token,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([opts__$1], 0));
var map__44899__$1 = cljs.core.__destructure_map(map__44899);
var chsk = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44899__$1,new cljs.core.Keyword(null,"chsk","chsk",-863703081));
var ch_recv = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44899__$1,new cljs.core.Keyword(null,"ch-recv","ch-recv",-990916861));
var send_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44899__$1,new cljs.core.Keyword(null,"send-fn","send-fn",351002041));
var state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44899__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"chsk","chsk",-863703081),chsk,new cljs.core.Keyword(null,"ch-chsk","ch-chsk",-1915928982),ch_recv,new cljs.core.Keyword(null,"chsk-send!","chsk-send!",-2123715779),send_fn,new cljs.core.Keyword(null,"chsk-state","chsk-state",1020217391),state], null);
});
if((typeof modular !== 'undefined') && (typeof modular.ws !== 'undefined') && (typeof modular.ws.adapter !== 'undefined') && (typeof modular.ws.adapter.router_ !== 'undefined')){
} else {
modular.ws.adapter.router_ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
modular.ws.adapter.stop_router_BANG_ = (function modular$ws$adapter$stop_router_BANG_(){
var temp__5804__auto__ = cljs.core.deref(modular.ws.adapter.router_);
if(cljs.core.truth_(temp__5804__auto__)){
var stop_f = temp__5804__auto__;
return (stop_f.cljs$core$IFn$_invoke$arity$0 ? stop_f.cljs$core$IFn$_invoke$arity$0() : stop_f.call(null));
} else {
return null;
}
});
modular.ws.adapter.sente_csrf_warning = (function modular$ws$adapter$sente_csrf_warning(){
if(cljs.core.truth_(modular.ws.adapter._QMARK_csrf_token)){
return taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"debug","debug",-1608172596),"modular.ws.adapter",null,40,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["CSRF token detected in HTML, great!"], null);
}),null)),null,(137),null);
} else {
return taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"warn","warn",-436710552),"modular.ws.adapter",null,41,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["CSRF token NOT detected in HTML, default Sente config will reject requests"], null);
}),null)),null,(138),null);
}
});
modular.ws.adapter.start_router_BANG_ = (function modular$ws$adapter$start_router_BANG_(conn){
var map__44908 = conn;
var map__44908__$1 = cljs.core.__destructure_map(map__44908);
var ch_chsk = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44908__$1,new cljs.core.Keyword(null,"ch-chsk","ch-chsk",-1915928982));
modular.ws.adapter.stop_router_BANG_();

modular.ws.adapter.sente_csrf_warning();

return cljs.core.reset_BANG_(modular.ws.adapter.router_,taoensso.sente.start_client_chsk_router_BANG_(ch_chsk,modular.ws.msg_handler.event_msg_handler));
});

//# sourceMappingURL=modular.ws.adapter.js.map
