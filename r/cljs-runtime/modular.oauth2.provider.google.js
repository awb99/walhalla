goog.provide('modular.oauth2.provider.google');
modular.oauth2.provider.google.parse_authorize_code_response = (function modular$oauth2$provider$google$parse_authorize_code_response(p__39863){
var map__39865 = p__39863;
var map__39865__$1 = cljs.core.__destructure_map(map__39865);
var query = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39865__$1,new cljs.core.Keyword(null,"query","query",-1288509510));
var map__39866 = query;
var map__39866__$1 = cljs.core.__destructure_map(map__39866);
var scope = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39866__$1,new cljs.core.Keyword(null,"scope","scope",-439358418));
var code = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39866__$1,new cljs.core.Keyword(null,"code","code",1586293142));
var prompt = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39866__$1,new cljs.core.Keyword(null,"prompt","prompt",-78109487));
var authuser = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39866__$1,new cljs.core.Keyword(null,"authuser","authuser",926833728));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"scope","scope",-439358418),scope,new cljs.core.Keyword(null,"code","code",1586293142),code], null);
});
modular.oauth2.provider.google.user_parse = (function modular$oauth2$provider$google$user_parse(data){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"user","user",1532431356),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(data),new cljs.core.Keyword(null,"email","email",1415816706),new cljs.core.Keyword(null,"email","email",1415816706).cljs$core$IFn$_invoke$arity$1(data)], null);
});
modular.oauth2.provider.google.api_request_auth_header = (function modular$oauth2$provider$google$api_request_auth_header(token){
return new cljs.core.PersistentArrayMap(null, 1, ["Authorization",["Bearer ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(token)].join('')], null);
});
modular.oauth2.provider.google.config = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"auth-header","auth-header",335536512),new cljs.core.Keyword(null,"token-uri","token-uri",91151905),new cljs.core.Keyword(null,"authorize-nonce","authorize-nonce",-957663765),new cljs.core.Keyword(null,"parse-authorize-response","parse-authorize-response",998308109),new cljs.core.Keyword(null,"icon","icon",1679606541),new cljs.core.Keyword(null,"authorize-uri","authorize-uri",1296259534),new cljs.core.Keyword(null,"endpoints","endpoints",274088209),new cljs.core.Keyword(null,"user-parse","user-parse",-1927259113),new cljs.core.Keyword(null,"user","user",1532431356),new cljs.core.Keyword(null,"accessTokenResponseKey","accessTokenResponseKey",280762365),new cljs.core.Keyword(null,"authorize-query-params","authorize-query-params",2017344958)],[modular.oauth2.provider.google.api_request_auth_header,"https://www.googleapis.com/oauth2/v4/token",true,modular.oauth2.provider.google.parse_authorize_code_response,"fab fa-google-plus","https://accounts.google.com/o/oauth2/v2/auth",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"userinfo","userinfo",460166247),"https://www.googleapis.com/oauth2/v2/userinfo"], null),modular.oauth2.provider.google.user_parse,"https://www.googleapis.com/oauth2/v2/userinfo","id_token",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"response_type","response_type",-858403602),"code",new cljs.core.Keyword(null,"access_type","access_type",1154594737),"offline"], null)]);
modular.oauth2.protocol.provider_config.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"google","google",578454873),(function (_){
return modular.oauth2.provider.google.config;
}));

//# sourceMappingURL=modular.oauth2.provider.google.js.map
