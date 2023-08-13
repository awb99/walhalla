goog.provide('frontend.config.events');
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("config","load","config/load",1051108634),(function (p__45555,p__45556){
var map__45558 = p__45555;
var map__45558__$1 = cljs.core.__destructure_map(map__45558);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45558__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__45559 = p__45556;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45559,(0),null);
var after_config_load = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45559,(1),null);
var static_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45559,(2),null);
var format = (cljs.core.truth_(static_QMARK_)?(ajax.core.text_response_format.cljs$core$IFn$_invoke$arity$0 ? ajax.core.text_response_format.cljs$core$IFn$_invoke$arity$0() : ajax.core.text_response_format.call(null)):(ajax.core.transit_response_format.cljs$core$IFn$_invoke$arity$2 ? ajax.core.transit_response_format.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"json","json",1279968570),modular.encoding.transit.decode) : ajax.core.transit_response_format.call(null,new cljs.core.Keyword(null,"json","json",1279968570),modular.encoding.transit.decode)));
var uri = (cljs.core.truth_(static_QMARK_)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(frontend.routes.static_main_path_atom)),"/r/config.edn"].join(''):"/api/config");
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"info","info",-317069002),"frontend.config.events",null,28,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["loading config static?: %s from url: %s then dispatch: %s",static_QMARK_,uri,after_config_load], null);
}),null)),null,(100),null);

return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"http-xhrio","http-xhrio",1846166714),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"get","get",1683182755),new cljs.core.Keyword(null,"uri","uri",-774711847),uri,new cljs.core.Keyword(null,"timeout","timeout",-318625318),(10000),new cljs.core.Keyword(null,"response-format","response-format",1664465322),format,new cljs.core.Keyword(null,"on-success","on-success",1786904109),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("config","load-success","config/load-success",247252721),static_QMARK_,after_config_load], null),new cljs.core.Keyword(null,"on-failure","on-failure",842888245),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("config","load-error","config/load-error",-2108596423)], null)], null)], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("config","load-success","config/load-success",247252721),(function (cofx,p__45573){
var vec__45577 = p__45573;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45577,(0),null);
var static_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45577,(1),null);
var after_config_load = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45577,(2),null);
var config = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45577,(3),null);
var config__$1 = (cljs.core.truth_(static_QMARK_)?modular.encoding.edn.read_edn(config):config);
var config__$2 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(config__$1,new cljs.core.Keyword(null,"static?","static?",-1639874822),static_QMARK_);
var fx = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc_in(new cljs.core.Keyword(null,"db","db",993250759).cljs$core$IFn$_invoke$arity$1(cofx),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415)], null),config__$2),new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [after_config_load,static_QMARK_], null)], null);
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"info","info",-317069002),"frontend.config.events",null,60,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["config load-success!"], null);
}),null)),null,(103),null);

modular.log.timbre_config_BANG_(new cljs.core.Keyword("timbre","cljs","timbre/cljs",1824613596).cljs$core$IFn$_invoke$arity$1(config__$2));

taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"debug","debug",-1608172596),"frontend.config.events",null,62,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["config: ",config__$2], null);
}),null)),null,(104),null);

if(cljs.core.truth_(after_config_load)){
return fx;
} else {
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(fx,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
}
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("config","load-error","config/load-error",-2108596423),(function (db,p__45589){
var vec__45591 = p__45589;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45591,(0),null);
var response = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45591,(1),null);
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"frontend.config.events",null,70,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["config-load-error: ",response], null);
}),null)),null,(107),null);

var details = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"status-text","status-text",-1834235478).cljs$core$IFn$_invoke$arity$1(response))," (",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"status","status",-1997798413).cljs$core$IFn$_invoke$arity$1(response)),")"].join('');
frontend.notifications.core.add_notification.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"error","error",-978969032),"Error loading config");

taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"frontend.config.events",null,73,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["config load error: ",details], null);
}),null)),null,(108),null);

return db;
}));

//# sourceMappingURL=frontend.config.events.js.map
