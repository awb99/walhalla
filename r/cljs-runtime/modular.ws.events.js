goog.provide('modular.ws.events');
/**
 * gets the current url, as a map
 */
modular.ws.events.application_url = (function modular$ws$events$application_url(){
return cemerick.url.url.cljs$core$IFn$_invoke$arity$1(window.location.href);
});
modular.ws.events.is_https_QMARK_ = (function modular$ws$events$is_https_QMARK_(){
var map__45062 = modular.ws.events.application_url();
var map__45062__$1 = cljs.core.__destructure_map(map__45062);
var protocol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45062__$1,new cljs.core.Keyword(null,"protocol","protocol",652470118));
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("https",protocol);
});
modular.ws.events.is_served_by_shadow_QMARK_ = (function modular$ws$events$is_served_by_shadow_QMARK_(db){
var app_url = modular.ws.events.application_url();
var port = app_url.port;
var shadow_dev_port = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"shadow","shadow",873231803),new cljs.core.Keyword(null,"dev-http","dev-http",-1053278119),new cljs.core.Keyword(null,"port","port",1534937262)], null));
var shadow_port = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"shadow","shadow",873231803),new cljs.core.Keyword(null,"http","http",382524695),new cljs.core.Keyword(null,"port","port",1534937262)], null));
return ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(port,shadow_dev_port)) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(port,shadow_port)));
});
modular.ws.events.changed_port = (function modular$ws$events$changed_port(db){
if(modular.ws.events.is_served_by_shadow_QMARK_(db)){
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"warn","warn",-436710552),"modular.ws.events",null,27,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["the page is served by shadow which does not support sente websockets - connecting to jetty server.."], null);
}),null)),null,(186),null);

if(modular.ws.events.is_https_QMARK_()){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword("webly","web-server","webly/web-server",-2046151113),new cljs.core.Keyword(null,"ssl-port","ssl-port",613478143)], null));
} else {
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword("webly","web-server","webly/web-server",-2046151113),new cljs.core.Keyword(null,"port","port",1534937262)], null));
}
} else {
return null;
}
});
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("ws","init","ws/init",-1875485502),(function (db,p__45082){
var vec__45083 = p__45082;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45083,(0),null);
var port = modular.ws.events.changed_port(db);
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"warn","warn",-436710552),"modular.ws.events",null,36,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["ws connect to port (nil=unchanged): ",port], null);
}),null)),null,(191),null);

modular.ws.core.init_ws_BANG_("/api/chsk",port);

return db;
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("ws","state","ws/state",-1988621911),(function (db,p__45108){
var vec__45110 = p__45108;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45110,(0),null);
var new_state_map = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45110,(1),null);
var old_state_map = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45110,(2),null);
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"debug","debug",-1608172596),"modular.ws.events",null,64,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["ws/state ",new_state_map], null);
}),null)),null,(193),null);

if(cljs.core.truth_(new cljs.core.Keyword(null,"first-open?","first-open?",396686530).cljs$core$IFn$_invoke$arity$1(new_state_map))){
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"info","info",-317069002),"modular.ws.events",null,66,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["ws open (first-time): ",new_state_map], null);
}),null)),null,(194),null);

re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("ws","open-first","ws/open-first",-1976054870),new_state_map], null));
} else {
}

return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"ws","ws",86841443),new_state_map);
}));
re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("ws","connected?","ws/connected?",-1197555199),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (db,_){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ws","ws",86841443),new cljs.core.Keyword(null,"open?","open?",1238443125)], null));
})], 0));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("ws","unknown","ws/unknown",-935965877),(function (db,p__45117){
var vec__45119 = p__45117;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45119,(0),null);
var data = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45119,(1),null);
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"modular.ws.events",null,78,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["ws server does not know how to handle events of type: ",data," you need to add code to clj side of your app"], null);
}),null)),null,(196),null);

return db;
}));

//# sourceMappingURL=modular.ws.events.js.map
