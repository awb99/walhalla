goog.provide('modular.oauth2.token.save_handler');
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("oauth2","save-result-success","oauth2/save-result-success",677464311),(function (_,p__39874){
var vec__39875 = p__39874;
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39875,(0),null);
var provider = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39875,(1),null);
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"info","info",-317069002),"modular.oauth2.token.save-handler",null,10,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["server token save success for provider",provider], null);
}),null)),null,(42),null);

return null;
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("oauth2","save-result-error","oauth2/save-result-error",-2034830095),(function (_,p__39878){
var vec__39879 = p__39878;
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39879,(0),null);
var provider = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39879,(1),null);
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"modular.oauth2.token.save-handler",null,16,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["server token save error  for provider",provider], null);
}),null)),null,(43),null);

return null;
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("oauth2","save-server","oauth2/save-server",1203434586),(function (p__39882,p__39883){
var map__39884 = p__39882;
var map__39884__$1 = cljs.core.__destructure_map(map__39884);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39884__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__39885 = p__39883;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39885,(0),null);
var provider = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39885,(1),null);
var token = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39885,(2),null);
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"info","info",-317069002),"modular.oauth2.token.save-handler",null,22,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["saving token for provider ",provider," on server"], null);
}),null)),null,(44),null);

return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"http-xhrio","http-xhrio",1846166714),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"post","post",269697687),new cljs.core.Keyword(null,"uri","uri",-774711847),"/api/oauth2/save-token",new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"provider","provider",-302056900),provider,new cljs.core.Keyword(null,"token","token",-1211463215),token], null),new cljs.core.Keyword(null,"format","format",-1306924766),(ajax.core.transit_request_format.cljs$core$IFn$_invoke$arity$0 ? ajax.core.transit_request_format.cljs$core$IFn$_invoke$arity$0() : ajax.core.transit_request_format.call(null)),new cljs.core.Keyword(null,"timeout","timeout",-318625318),(5000),new cljs.core.Keyword(null,"response-format","response-format",1664465322),(ajax.core.transit_response_format.cljs$core$IFn$_invoke$arity$0 ? ajax.core.transit_response_format.cljs$core$IFn$_invoke$arity$0() : ajax.core.transit_response_format.call(null)),new cljs.core.Keyword(null,"on-success","on-success",1786904109),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("oauth2","save-result-success","oauth2/save-result-success",677464311)], null),new cljs.core.Keyword(null,"on-failure","on-failure",842888245),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("oauth2","save-result-error","oauth2/save-result-error",-2034830095)], null)], null)], null);
}));

//# sourceMappingURL=modular.oauth2.token.save_handler.js.map
