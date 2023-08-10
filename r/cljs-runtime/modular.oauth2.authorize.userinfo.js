goog.provide('modular.oauth2.authorize.userinfo');
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("oauth2","get-user","oauth2/get-user",-2080288949),(function (p__41318,p__41319){
var map__41322 = p__41318;
var map__41322__$1 = cljs.core.__destructure_map(map__41322);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41322__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__41323 = p__41319;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41323,(0),null);
var provider = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41323,(1),null);
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"info","info",-317069002),"modular.oauth2.authorize.userinfo",null,12,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["oauth/after-login:",provider], null);
}),null)),null,(60),null);

var config_41363 = modular.oauth2.provider.get_provider_config(provider);
var uri_41364 = new cljs.core.Keyword(null,"user","user",1532431356).cljs$core$IFn$_invoke$arity$1(config_41363);
re_frame.core.dispatch(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"request","request",1772954723),provider,uri_41364,new cljs.core.Keyword("oauth2","set-user","oauth2/set-user",-545966060)], null));

return db;
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("oauth2","set-user","oauth2/set-user",-545966060),(function (db,p__41343){
var vec__41344 = p__41343;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41344,(0),null);
var provider = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41344,(1),null);
var data = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41344,(2),null);
var map__41351 = modular.oauth2.provider.parse_userinfo(provider,data);
var map__41351__$1 = cljs.core.__destructure_map(map__41351);
var user = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41351__$1,new cljs.core.Keyword(null,"user","user",1532431356));
var email = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41351__$1,new cljs.core.Keyword(null,"email","email",1415816706));
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"info","info",-317069002),"modular.oauth2.authorize.userinfo",null,23,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["oauth2/set-user:",provider,user,email], null);
}),null)),null,(65),null);

re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("oauth2","logged-in","oauth2/logged-in",-497360012),provider], null));

return cljs.core.assoc_in(cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"token","token",-1211463215),provider,new cljs.core.Keyword(null,"user","user",1532431356)], null),user),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"token","token",-1211463215),provider,new cljs.core.Keyword(null,"email","email",1415816706)], null),email);
}));

//# sourceMappingURL=modular.oauth2.authorize.userinfo.js.map
