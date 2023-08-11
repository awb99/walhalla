goog.provide('modular.oauth2.provider.github');
modular.oauth2.provider.github.parse_authorize_response = (function modular$oauth2$provider$github$parse_authorize_response(p__39860){
var map__39861 = p__39860;
var map__39861__$1 = cljs.core.__destructure_map(map__39861);
var query = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39861__$1,new cljs.core.Keyword(null,"query","query",-1288509510));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"code","code",1586293142),new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(query)], null);
});
modular.oauth2.provider.github.user_parse = (function modular$oauth2$provider$github$user_parse(data){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"user","user",1532431356),new cljs.core.Keyword(null,"login","login",55217519).cljs$core$IFn$_invoke$arity$1(data),new cljs.core.Keyword(null,"email","email",1415816706),new cljs.core.Keyword(null,"email","email",1415816706).cljs$core$IFn$_invoke$arity$1(data)], null);
});
modular.oauth2.provider.github.api_request_auth_header = (function modular$oauth2$provider$github$api_request_auth_header(token){
return new cljs.core.PersistentArrayMap(null, 1, ["Authorization",["token ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(token)].join('')], null);
});
modular.oauth2.provider.github.config = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"auth-header","auth-header",335536512),new cljs.core.Keyword(null,"token-uri","token-uri",91151905),new cljs.core.Keyword(null,"parse-authorize-response","parse-authorize-response",998308109),new cljs.core.Keyword(null,"icon","icon",1679606541),new cljs.core.Keyword(null,"authorize-uri","authorize-uri",1296259534),new cljs.core.Keyword(null,"endpoints","endpoints",274088209),new cljs.core.Keyword(null,"user-parse","user-parse",-1927259113),new cljs.core.Keyword(null,"parse-dispatch","parse-dispatch",1949767065),new cljs.core.Keyword(null,"user","user",1532431356),new cljs.core.Keyword(null,"accessTokenResponseKey","accessTokenResponseKey",280762365),new cljs.core.Keyword(null,"authorize-query-params","authorize-query-params",2017344958)],[modular.oauth2.provider.github.api_request_auth_header,"https://github.com/login/oauth/access_token",modular.oauth2.provider.github.parse_authorize_response,"fab fa-github-square","https://github.com/login/oauth/authorize",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"userinfo","userinfo",460166247),"https://api.github.com/user"], null),modular.oauth2.provider.github.user_parse,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("github","code->token","github/code->token",458862870)], null),"https://api.github.com/user","id_token",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"response_type","response_type",-858403602),"code"], null)]);
modular.oauth2.protocol.provider_config.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"github","github",567794498),(function (_){
return modular.oauth2.provider.github.config;
}));

//# sourceMappingURL=modular.oauth2.provider.github.js.map
