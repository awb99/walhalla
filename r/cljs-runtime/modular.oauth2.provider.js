goog.provide('modular.oauth2.provider');
modular.oauth2.provider.provider_uri = (function modular$oauth2$provider$provider_uri(provider){
var provider_name = cljs.core.name(provider);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"start-uri","start-uri",-233414380),["/api/oauth2/start/",provider_name].join(''),new cljs.core.Keyword(null,"redirect-uri","redirect-uri",374475842),["/oauth2/redirect/",provider_name].join(''),new cljs.core.Keyword(null,"landing-uri","landing-uri",-1690630914),["/oauth2/landing/",provider_name].join('')], null);
});
modular.oauth2.provider.get_provider_config = (function modular$oauth2$provider$get_provider_config(p){
var c = modular.oauth2.protocol.provider_config.cljs$core$IFn$_invoke$arity$1(p);
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"debug","debug",-1608172596),"modular.oauth2.provider",null,26,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["provider ",p,"config: ",c], null);
}),null)),null,(47),null);

return c;
});
modular.oauth2.provider.full_provider_config = (function modular$oauth2$provider$full_provider_config(config,provider){
var code = (function (){var or__5045__auto__ = modular.oauth2.provider.get_provider_config(provider);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
var app = (function (){var or__5045__auto__ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(config,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"oauth2","oauth2",-751919788),provider], null));
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([code,app], 0));
});
modular.oauth2.provider.ring_oauth2_config = (function modular$oauth2$provider$ring_oauth2_config(config){
var provider_list = modular.oauth2.protocol.known_providers();
var list = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p){
return cljs.core.PersistentArrayMap.createAsIfByAssoc([p,modular.oauth2.provider.full_provider_config(config,p)]);
}),provider_list);
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.merge,list);
});
modular.oauth2.provider.url_start = (function modular$oauth2$provider$url_start(provider_kw,current_url){
var provider_path = new cljs.core.Keyword(null,"start-uri","start-uri",-233414380).cljs$core$IFn$_invoke$arity$1(modular.oauth2.provider.provider_uri(provider_kw));
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(cemerick.url.url.cljs$core$IFn$_invoke$arity$1(current_url),new cljs.core.Keyword(null,"query","query",-1288509510),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"current-url","current-url",-1470200930),current_url], null),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"path","path",-188191168),provider_path], 0)));
});
modular.oauth2.provider.scope__GT_string = (function modular$oauth2$provider$scope__GT_string(scope){
var scope__$1 = (((scope == null))?"":scope);
var scope__$2 = ((typeof scope__$1 === 'string')?scope__$1:clojure.string.join.cljs$core$IFn$_invoke$arity$2(" ",scope__$1));
return scope__$2;
});
modular.oauth2.provider.nonce = (function modular$oauth2$provider$nonce(){
return Math.random().toString();
});
modular.oauth2.provider.set_relative_path = (function modular$oauth2$provider$set_relative_path(current_url,path){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cemerick.url.url.cljs$core$IFn$_invoke$arity$1(current_url),new cljs.core.Keyword(null,"path","path",-188191168),path).toString();
});
modular.oauth2.provider.url_without_qp = (function modular$oauth2$provider$url_without_qp(url_str){
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"info","info",-317069002),"modular.oauth2.provider",null,77,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["url with qp: ",url_str], null);
}),null)),null,(48),null);

var url_no_qp_str = cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(cemerick.url.url.cljs$core$IFn$_invoke$arity$1(url_str),new cljs.core.Keyword(null,"query","query",-1288509510),null,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"anchor","anchor",1549638489),null], 0)));
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"info","info",-317069002),"modular.oauth2.provider",null,81,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["url without qp: ",url_no_qp_str], null);
}),null)),null,(49),null);

return url_no_qp_str;
});
modular.oauth2.provider.url_redirect = (function modular$oauth2$provider$url_redirect(provider_kw,current_url){
return modular.oauth2.provider.url_without_qp(modular.oauth2.provider.set_relative_path(current_url,new cljs.core.Keyword(null,"redirect-uri","redirect-uri",374475842).cljs$core$IFn$_invoke$arity$1(modular.oauth2.provider.provider_uri(provider_kw))));
});
modular.oauth2.provider.url_authorize = (function modular$oauth2$provider$url_authorize(config,provider,current_url){
var map__39903 = modular.oauth2.provider.full_provider_config(config,provider);
var map__39903__$1 = cljs.core.__destructure_map(map__39903);
var authorize_uri = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39903__$1,new cljs.core.Keyword(null,"authorize-uri","authorize-uri",1296259534));
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39903__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
var scope = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39903__$1,new cljs.core.Keyword(null,"scope","scope",-439358418));
var authorize_query_params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39903__$1,new cljs.core.Keyword(null,"authorize-query-params","authorize-query-params",2017344958));
var authorize_nonce = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39903__$1,new cljs.core.Keyword(null,"authorize-nonce","authorize-nonce",-957663765));
var authorize_redirect_uri_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39903__$1,new cljs.core.Keyword(null,"authorize-redirect-uri-name","authorize-redirect-uri-name",1553957341));
var query = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"client_id","client_id",48809273),client_id,new cljs.core.Keyword(null,"redirect_uri","redirect_uri",-1479457764),modular.oauth2.provider.url_redirect(provider,current_url),new cljs.core.Keyword(null,"scope","scope",-439358418),modular.oauth2.provider.scope__GT_string(scope)], null);
var query__$1 = (cljs.core.truth_(authorize_redirect_uri_name)?clojure.set.rename_keys(query,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"redirect_uri","redirect_uri",-1479457764),authorize_redirect_uri_name], null)):query);
var query__$2 = (cljs.core.truth_(authorize_nonce)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(query__$1,new cljs.core.Keyword(null,"nonce","nonce",564330331),modular.oauth2.provider.nonce()):query__$1);
var query__$3 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([authorize_query_params,query__$2], 0));
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"info","info",-317069002),"modular.oauth2.provider",null,110,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["authorize query params: ",authorize_query_params], null);
}),null)),null,(53),null);

taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"info","info",-317069002),"modular.oauth2.provider",null,111,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["oauth2 for: %s authorize-uri: %s params: %s",provider,authorize_uri,cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([query__$3], 0))], null);
}),null)),null,(54),null);

return cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cemerick.url.url.cljs$core$IFn$_invoke$arity$1(authorize_uri),new cljs.core.Keyword(null,"query","query",-1288509510),query__$3));
});
modular.oauth2.provider.get_provider_auth_header = (function modular$oauth2$provider$get_provider_auth_header(p,token){
var temp__5802__auto__ = modular.oauth2.provider.get_provider_config(p);
if(cljs.core.truth_(temp__5802__auto__)){
var config = temp__5802__auto__;
var auth_header = new cljs.core.Keyword(null,"auth-header","auth-header",335536512).cljs$core$IFn$_invoke$arity$1(config);
return (auth_header.cljs$core$IFn$_invoke$arity$1 ? auth_header.cljs$core$IFn$_invoke$arity$1(token) : auth_header.call(null,token));
} else {
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"modular.oauth2.provider",null,124,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["cannot get auth header for unknwon provider"], null);
}),null)),null,(56),null);

return cljs.core.PersistentArrayMap.EMPTY;
}
});
modular.oauth2.provider.parse_userinfo = (function modular$oauth2$provider$parse_userinfo(p,token){
var temp__5802__auto__ = modular.oauth2.provider.get_provider_config(p);
if(cljs.core.truth_(temp__5802__auto__)){
var config = temp__5802__auto__;
var user_parse = new cljs.core.Keyword(null,"user-parse","user-parse",-1927259113).cljs$core$IFn$_invoke$arity$1(config);
return (user_parse.cljs$core$IFn$_invoke$arity$1 ? user_parse.cljs$core$IFn$_invoke$arity$1(token) : user_parse.call(null,token));
} else {
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"modular.oauth2.provider",null,131,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["cannot parse userinfo unknwon provider"], null);
}),null)),null,(57),null);

return cljs.core.PersistentArrayMap.EMPTY;
}
});

//# sourceMappingURL=modular.oauth2.provider.js.map
