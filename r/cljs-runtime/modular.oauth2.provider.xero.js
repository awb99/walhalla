goog.provide('modular.oauth2.provider.xero');
modular.oauth2.provider.xero.parse_authorize_response = (function modular$oauth2$provider$xero$parse_authorize_response(p__39853){
var map__39855 = p__39853;
var map__39855__$1 = cljs.core.__destructure_map(map__39855);
var query = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39855__$1,new cljs.core.Keyword(null,"query","query",-1288509510));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"scope","scope",-439358418),new cljs.core.Keyword(null,"scope","scope",-439358418).cljs$core$IFn$_invoke$arity$1(query),new cljs.core.Keyword(null,"code","code",1586293142),new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(query)], null);
});
modular.oauth2.provider.xero.api_request_auth_header = (function modular$oauth2$provider$xero$api_request_auth_header(token){
return new cljs.core.PersistentArrayMap(null, 1, ["Authorization",["Bearer ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(token)].join('')], null);
});
modular.oauth2.provider.xero.user_parse = (function modular$oauth2$provider$xero$user_parse(data){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"user","user",1532431356),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"Organisations","Organisations",-1166499094),new cljs.core.Keyword(null,"Name","Name",-131211369)], null)),new cljs.core.Keyword(null,"email","email",1415816706),"no email"], null);
});
modular.oauth2.provider.xero.config = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"auth-header","auth-header",335536512),new cljs.core.Keyword(null,"token-uri","token-uri",91151905),new cljs.core.Keyword(null,"parse-authorize-response","parse-authorize-response",998308109),new cljs.core.Keyword(null,"authorize-uri","authorize-uri",1296259534),new cljs.core.Keyword(null,"endpoints","endpoints",274088209),new cljs.core.Keyword(null,"user-parse","user-parse",-1927259113),new cljs.core.Keyword(null,"user","user",1532431356),new cljs.core.Keyword(null,"accessTokenResponseKey","accessTokenResponseKey",280762365),new cljs.core.Keyword(null,"authorize-query-params","authorize-query-params",2017344958)],[modular.oauth2.provider.xero.api_request_auth_header,"https://identity.xero.com/connect/token",modular.oauth2.provider.xero.parse_authorize_response,"https://login.xero.com/identity/connect/authorize",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"userinfo","userinfo",460166247),"https://api.xero.com/api.xro/2.0/Organisation"], null),modular.oauth2.provider.xero.user_parse,"https://api.xero.com/api.xro/2.0/Organisation","id_token",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"response_type","response_type",-858403602),"code",new cljs.core.Keyword(null,"returnUrl","returnUrl",194073247),"https://login.xero.com/identity/identity/connect/authorize"], null)]);
modular.oauth2.protocol.provider_config.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"xero","xero",-1274517303),(function (_){
return modular.oauth2.provider.xero.config;
}));
modular.oauth2.provider.xero.header_xero_tenant = (function modular$oauth2$provider$xero$header_xero_tenant(tenant_id){
return new cljs.core.PersistentArrayMap(null, 1, ["Xero-Tenant-Id",tenant_id], null);
});

//# sourceMappingURL=modular.oauth2.provider.xero.js.map
