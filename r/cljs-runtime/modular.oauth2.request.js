goog.provide('modular.oauth2.request');
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"request","request",1772954723),(function (p__41320,p__41321){
var map__41326 = p__41320;
var map__41326__$1 = cljs.core.__destructure_map(map__41326);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41326__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__41327 = p__41321;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41327,(0),null);
var provider = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41327,(1),null);
var uri = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41327,(2),null);
var success = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41327,(3),null);
var token = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"token","token",-1211463215),provider], null));
var at = new cljs.core.Keyword(null,"access-token","access-token",-654201199).cljs$core$IFn$_invoke$arity$1(token);
var r = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"headers","headers",-835030129),modular.oauth2.provider.get_provider_auth_header(provider,at)], null),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"uri","uri",-774711847),uri,new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"get","get",1683182755),new cljs.core.Keyword(null,"timeout","timeout",-318625318),(5000),new cljs.core.Keyword(null,"response-format","response-format",1664465322),ajax.core.json_response_format(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keywords?","keywords?",764949733),true], null)),new cljs.core.Keyword(null,"on-success","on-success",1786904109),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [success,provider], null),new cljs.core.Keyword(null,"on-failure","on-failure",842888245),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("oauth2","request-error","oauth2/request-error",1602441658),provider], null)], null)], 0));
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"info","info",-317069002),"modular.oauth2.request",null,25,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, ["making web request:",provider," token: ",at," r: ",r], null);
}),null)),null,(62),null);

return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"http-xhrio","http-xhrio",1846166714),r], null);
}));
modular.oauth2.request.err_msg = (function modular$oauth2$request$err_msg(res){
var or__5045__auto__ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(res,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"response","response",-1068424192),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"message","message",-406056002)], null));
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(res,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"response","response",-1068424192),new cljs.core.Keyword(null,"message","message",-406056002)], null));
}
});
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("oauth2","request-error","oauth2/request-error",1602441658),(function (p__41352,p__41353){
var map__41354 = p__41352;
var map__41354__$1 = cljs.core.__destructure_map(map__41354);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41354__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__41355 = p__41353;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41355,(0),null);
var provider = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41355,(1),null);
var res = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41355,(2),null);
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"modular.oauth2.request",null,38,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["oauth2 provider: %s error: %s",provider,res], null);
}),null)),null,(66),null);

frontend.notifications.core.add_notification.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"error","error",-978969032),["request error ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(provider),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(modular.oauth2.request.err_msg(res))].join(''));

return cljs.core.PersistentArrayMap.EMPTY;
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("oauth2","login-error","oauth2/login-error",-132128984),(function (p__41363,p__41364){
var map__41365 = p__41363;
var map__41365__$1 = cljs.core.__destructure_map(map__41365);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41365__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__41366 = p__41364;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41366,(0),null);
var provider = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41366,(1),null);
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"modular.oauth2.request",null,45,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["oauth2 provider: %s error",provider], null);
}),null)),null,(68),null);

frontend.notifications.core.add_notification.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"danger","danger",-624338030),"oauth login error (token not received)");

return cljs.core.PersistentArrayMap.EMPTY;
}));

//# sourceMappingURL=modular.oauth2.request.js.map
