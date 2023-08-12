goog.provide('modular.oauth2.authorize.redirect_events');
modular.oauth2.authorize.redirect_events.oauth_redirect_dispatch = (function modular$oauth2$authorize$redirect_events$oauth_redirect_dispatch(data){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("oauth2","redirect","oauth2/redirect",1061581509),data], null));
});
modular.oauth2.authorize.redirect.register_callback(modular.oauth2.authorize.redirect_events.oauth_redirect_dispatch);
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("oauth2","redirect","oauth2/redirect",1061581509),(function (p__41330,p__41331){
var map__41334 = p__41330;
var map__41334__$1 = cljs.core.__destructure_map(map__41334);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41334__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__41335 = p__41331;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41335,(0),null);
var data = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41335,(1),null);
var p = new cljs.core.Keyword(null,"provider","provider",-302056900).cljs$core$IFn$_invoke$arity$1(data);
var provider = modular.oauth2.protocol.provider_config.cljs$core$IFn$_invoke$arity$1(p);
var parse_authorize_response = new cljs.core.Keyword(null,"parse-authorize-response","parse-authorize-response",998308109).cljs$core$IFn$_invoke$arity$1(provider);
var auth_result = (parse_authorize_response.cljs$core$IFn$_invoke$arity$1 ? parse_authorize_response.cljs$core$IFn$_invoke$arity$1(data) : parse_authorize_response.call(null,data));
if(cljs.core.truth_(new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(auth_result))){
re_frame.core.dispatch(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("oauth2","code->token","oauth2/code->token",-1624413778),p,auth_result], null));
} else {
re_frame.core.dispatch(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("oauth2","authorize-success","oauth2/authorize-success",1740761473),p,auth_result], null));
}

return null;
}));

//# sourceMappingURL=modular.oauth2.authorize.redirect_events.js.map
