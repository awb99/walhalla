goog.provide('modular.oauth2.user.subscriptions');
re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("oauth2","tokens","oauth2/tokens",203933129),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (db,p__39839){
var vec__39840 = p__39839;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39840,(0),null);
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"token","token",-1211463215)], null));
})], 0));
modular.oauth2.user.subscriptions.token_QMARK_ = (function modular$oauth2$user$subscriptions$token_QMARK_(token){
var map__39846 = token;
var map__39846__$1 = cljs.core.__destructure_map(map__39846);
var access_token = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39846__$1,new cljs.core.Keyword(null,"access-token","access-token",-654201199));
if(cljs.core.truth_(access_token)){
return true;
} else {
return false;
}
});
re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("oauth2","logged-in?","oauth2/logged-in?",-1752296106),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (db,p__39847){
var vec__39848 = p__39847;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39848,(0),null);
var service = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39848,(1),null);
var temp__5802__auto__ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"token","token",-1211463215),service], null));
if(cljs.core.truth_(temp__5802__auto__)){
var token = temp__5802__auto__;
return modular.oauth2.user.subscriptions.token_QMARK_(token);
} else {
return false;
}
})], 0));
re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("oauth2","logged-in-email-or-user","oauth2/logged-in-email-or-user",926473551),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (db,p__39853){
var vec__39855 = p__39853;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39855,(0),null);
var service = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39855,(1),null);
var email = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"token","token",-1211463215),service,new cljs.core.Keyword(null,"email","email",1415816706)], null));
var user = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"token","token",-1211463215),service,new cljs.core.Keyword(null,"user","user",1532431356)], null));
var eu = (function (){var or__5045__auto__ = email;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return user;
}
})();
if(cljs.core.truth_(eu)){
return eu;
} else {
return "unknown email";
}
})], 0));
re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("oauth2","user","oauth2/user",-1906845315),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (db,p__39863){
var vec__39864 = p__39863;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39864,(0),null);
var user = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"user","user",1532431356),new cljs.core.Keyword(null,"user","user",1532431356)], null));
return user;
})], 0));

//# sourceMappingURL=modular.oauth2.user.subscriptions.js.map
