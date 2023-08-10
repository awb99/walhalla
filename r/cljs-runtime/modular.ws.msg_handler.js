goog.provide('modular.ws.msg_handler');
if((typeof modular !== 'undefined') && (typeof modular.ws !== 'undefined') && (typeof modular.ws.msg_handler !== 'undefined') && (typeof modular.ws.msg_handler._event_msg_handler !== 'undefined')){
} else {
modular.ws.msg_handler._event_msg_handler = (function (){var method_table__5642__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__5643__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__5644__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__5645__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__5646__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__41371 = cljs.core.get_global_hierarchy;
return (fexpr__41371.cljs$core$IFn$_invoke$arity$0 ? fexpr__41371.cljs$core$IFn$_invoke$arity$0() : fexpr__41371.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("modular.ws.msg-handler","-event-msg-handler"),new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__5646__auto__,method_table__5642__auto__,prefer_table__5643__auto__,method_cache__5644__auto__,cached_hierarchy__5645__auto__));
})();
}
modular.ws.msg_handler._event_msg_handler.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("chsk","handshake","chsk/handshake",64910686),(function (p__41372){
var map__41373 = p__41372;
var map__41373__$1 = cljs.core.__destructure_map(map__41373);
var ev_msg = map__41373__$1;
var _QMARK_data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41373__$1,new cljs.core.Keyword(null,"?data","?data",-9471433));
var vec__41374 = _QMARK_data;
var _QMARK_uid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41374,(0),null);
var _QMARK_csrf_token = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41374,(1),null);
var _QMARK_handshake_data = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41374,(2),null);
return taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"debug","debug",-1608172596),"modular.ws.msg-handler",null,12,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Handshake: %s",_QMARK_data], null);
}),null)),null,(69),null);
}));
modular.ws.msg_handler._event_msg_handler.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("chsk","state","chsk/state",-1991397620),(function (p__41377){
var map__41378 = p__41377;
var map__41378__$1 = cljs.core.__destructure_map(map__41378);
var ev_msg = map__41378__$1;
var _QMARK_data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41378__$1,new cljs.core.Keyword(null,"?data","?data",-9471433));
var vec__41379 = (function (){var e = (function (){try{if(cljs.core.vector_QMARK_(_QMARK_data)){
return null;
} else {
return taoensso.truss.impl._dummy_error;
}
}catch (e41382){if((e41382 instanceof Error)){
var e = e41382;
return e;
} else {
throw e41382;

}
}})();
if((e == null)){
return _QMARK_data;
} else {
return taoensso.truss.impl._invar_violation_BANG_(true,new cljs.core.Symbol(null,"modular.ws.msg-handler","modular.ws.msg-handler",-439600703,null),16,39,"jar:file:/home/florian/.m2/repository/org/pinkgorilla/webly/0.4.614/webly-0.4.614.jar!/modular/ws/msg_handler.cljs",new cljs.core.Symbol(null,"vector?","vector?",-61367869,null),new cljs.core.Symbol(null,"?data","?data",1631060094,null),_QMARK_data,e,null);
}
})();
var old_state_map = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41379,(0),null);
var new_state_map = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41379,(1),null);
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"debug","debug",-1608172596),"modular.ws.msg-handler",null,17,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["ws state: %s",new_state_map], null);
}),null)),null,(73),null);

return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("ws","state","ws/state",-1988621911),new_state_map,old_state_map], null));
}));
modular.ws.msg_handler._event_msg_handler.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("chsk","ws-ping","chsk/ws-ping",191675304),(function (p__41398){
var map__41399 = p__41398;
var map__41399__$1 = cljs.core.__destructure_map(map__41399);
var ev_msg = map__41399__$1;
var event = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41399__$1,new cljs.core.Keyword(null,"event","event",301435442));
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41399__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var _QMARK_data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41399__$1,new cljs.core.Keyword(null,"?data","?data",-9471433));
var ring_req = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41399__$1,new cljs.core.Keyword(null,"ring-req","ring-req",-747861961));
var _QMARK_reply_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41399__$1,new cljs.core.Keyword(null,"?reply-fn","?reply-fn",-1479510592));
var send_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41399__$1,new cljs.core.Keyword(null,"send-fn","send-fn",351002041));
return taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"info","info",-317069002),"modular.ws.msg-handler",null,25,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [":chsk/ws-ping: %s",event], null);
}),null)),null,(74),null);
}));
modular.ws.msg_handler._event_msg_handler.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("chsk","recv","chsk/recv",561097091),(function (p__41406){
var map__41408 = p__41406;
var map__41408__$1 = cljs.core.__destructure_map(map__41408);
var ev_msg = map__41408__$1;
var _QMARK_data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41408__$1,new cljs.core.Keyword(null,"?data","?data",-9471433));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(_QMARK_data,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("chsk","ws-ping","chsk/ws-ping",191675304)], null))){
return taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"debug","debug",-1608172596),"modular.ws.msg-handler",null,30,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["ws-ping rcvd."], null);
}),null)),null,(77),null);
} else {
if(cljs.core.vector_QMARK_(_QMARK_data)){
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"debug","debug",-1608172596),"modular.ws.msg-handler",null,33,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["dispatching rcvd ws msg to reframe:",_QMARK_data], null);
}),null)),null,(78),null);

return re_frame.core.dispatch(_QMARK_data);
} else {
return taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"modular.ws.msg-handler",null,35,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["ws rcvd. cannot dispatch. data no vector: ",_QMARK_data], null);
}),null)),null,(79),null);
}
}
}));
modular.ws.msg_handler._event_msg_handler.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"default","default",-1987822328),(function (p__41438){
var map__41439 = p__41438;
var map__41439__$1 = cljs.core.__destructure_map(map__41439);
var ev_msg = map__41439__$1;
var event = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41439__$1,new cljs.core.Keyword(null,"event","event",301435442));
return taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"modular.ws.msg-handler",null,39,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Unhandled ws event: %s",event], null);
}),null)),null,(82),null);
}));
/**
 * Wraps `-event-msg-handler` with logging, error catching, etc.
 */
modular.ws.msg_handler.event_msg_handler = (function modular$ws$msg_handler$event_msg_handler(p__41450){
var map__41451 = p__41450;
var map__41451__$1 = cljs.core.__destructure_map(map__41451);
var req = map__41451__$1;
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41451__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var _QMARK_data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41451__$1,new cljs.core.Keyword(null,"?data","?data",-9471433));
var event = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41451__$1,new cljs.core.Keyword(null,"event","event",301435442));
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"debug","debug",-1608172596),"modular.ws.msg-handler",null,46,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["ws rcvd: evt: %s id: %s data: %s",event,id,_QMARK_data], null);
}),null)),null,(83),null);

return modular.ws.msg_handler._event_msg_handler.cljs$core$IFn$_invoke$arity$1(req);
});

//# sourceMappingURL=modular.ws.msg_handler.js.map
