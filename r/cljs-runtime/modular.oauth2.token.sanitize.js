goog.provide('modular.oauth2.token.sanitize');
modular.oauth2.token.sanitize.sanitize_token = (function modular$oauth2$token$sanitize$sanitize_token(token){
if(cljs.core.map_QMARK_(token)){
return clojure.set.rename_keys(token,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"access_token","access_token",1591156073),new cljs.core.Keyword(null,"access-token","access-token",-654201199),new cljs.core.Keyword(null,"refresh_token","refresh_token",-162233815),new cljs.core.Keyword(null,"refresh-token","refresh-token",-1032003584),new cljs.core.Keyword(null,"id_token","id_token",148712273),new cljs.core.Keyword(null,"id-token","id-token",-339268306),new cljs.core.Keyword(null,"token_type","token_type",-524227634),new cljs.core.Keyword(null,"token-type","token-type",-835337612),new cljs.core.Keyword(null,"expires_in","expires_in",453935095),new cljs.core.Keyword(null,"expires-in","expires-in",-1086839487)], null));
} else {
return token;
}
});

//# sourceMappingURL=modular.oauth2.token.sanitize.js.map
