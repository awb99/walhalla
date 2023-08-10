goog.provide('modular.oauth2.authorize.code_2_token');
modular.oauth2.authorize.code_2_token.current_url = (function modular$oauth2$authorize$code_2_token$current_url(){
return window.location.href;
});
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("oauth2","code->token","oauth2/code->token",-1624413778),(function (p__41336,p__41337){
var map__41338 = p__41336;
var map__41338__$1 = cljs.core.__destructure_map(map__41338);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41338__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__41339 = p__41337;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41339,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41339,(1),null);
var data = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41339,(2),null);
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"info","info",-317069002),"modular.oauth2.authorize.code-2-token",null,14,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["getting token for provider ",p," with data: ",data], null);
}),null)),null,(63),null);

var provider = modular.oauth2.provider.get_provider_config(p);
var code = new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(data);
var map__41344 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"oauth2","oauth2",-751919788),p], null));
var map__41344__$1 = cljs.core.__destructure_map(map__41344);
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41344__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
var client_secret = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41344__$1,new cljs.core.Keyword(null,"client-secret","client-secret",477227642));
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"info","info",-317069002),"modular.oauth2.authorize.code-2-token",null,18,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["oauth2/code->token .. code: ",code," clientId ",client_id], null);
}),null)),null,(64),null);

return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),db,new cljs.core.Keyword(null,"http-xhrio","http-xhrio",1846166714),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"get","get",1683182755),new cljs.core.Keyword(null,"uri","uri",-774711847),"/api/oauth2/token",new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"provider","provider",-302056900),p,new cljs.core.Keyword(null,"code","code",1586293142),code,new cljs.core.Keyword(null,"url-redirect","url-redirect",-1997851071),modular.oauth2.provider.url_redirect(p,modular.oauth2.authorize.code_2_token.current_url())], null),new cljs.core.Keyword(null,"timeout","timeout",-318625318),(5000),new cljs.core.Keyword(null,"response-format","response-format",1664465322),ajax.core.json_response_format(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keywords?","keywords?",764949733),true], null)),new cljs.core.Keyword(null,"on-success","on-success",1786904109),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("oauth2","authorize-success","oauth2/authorize-success",1740761473),p], null),new cljs.core.Keyword(null,"on-failure","on-failure",842888245),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("oauth2","save-error","oauth2/save-error",1975737677),p], null)], null)], null);
}));

//# sourceMappingURL=modular.oauth2.authorize.code_2_token.js.map
