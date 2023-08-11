goog.provide('modular.oauth2.authorize.start');
modular.oauth2.authorize.start.current_url = (function modular$oauth2$authorize$start$current_url(){
return window.location.href;
});
modular.oauth2.authorize.start.open_authorize_window = (function modular$oauth2$authorize$start$open_authorize_window(db,provider){
var url_auth = modular.oauth2.provider.url_start(provider,modular.oauth2.authorize.start.current_url());
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"info","info",-317069002),"modular.oauth2.authorize.start",null,18,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["opening oauth2 window: ",url_auth], null);
}),null)),null,(61),null);

return window.open(url_auth,["Webly OAuth2 ",cljs.core.name(provider)].join(''),"width=500,height=600");
});
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("oauth2","authorize-start","oauth2/authorize-start",1379461893),(function (db,p__41347){
var vec__41348 = p__41347;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41348,(0),null);
var provider = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41348,(1),null);
var oauth_success_event = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41348,(2),null);
var window__$1 = modular.oauth2.authorize.start.open_authorize_window(db,provider);
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"oauth-authorize","oauth-authorize",1699524488)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"window","window",724519534),window__$1,new cljs.core.Keyword(null,"success-event","success-event",2038143820),oauth_success_event], null));
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("oauth2","authorize-success","oauth2/authorize-success",1740761473),(function (db,p__41358){
var vec__41359 = p__41358;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41359,(0),null);
var provider = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41359,(1),null);
var token = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41359,(2),null);
var token__$1 = modular.oauth2.token.sanitize.sanitize_token(token);
var access_token = new cljs.core.Keyword(null,"access-token","access-token",-654201199).cljs$core$IFn$_invoke$arity$1(token__$1);
var map__41362 = new cljs.core.Keyword(null,"oauth-authorize","oauth-authorize",1699524488).cljs$core$IFn$_invoke$arity$1(db);
var map__41362__$1 = cljs.core.__destructure_map(map__41362);
var window__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41362__$1,new cljs.core.Keyword(null,"window","window",724519534));
var success_event = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41362__$1,new cljs.core.Keyword(null,"success-event","success-event",2038143820));
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"info","info",-317069002),"modular.oauth2.authorize.start",null,37,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["oauth2 authorize success: ",provider,token__$1], null);
}),null)),null,(67),null);

if(cljs.core.truth_(access_token)){
re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("oauth2","get-user","oauth2/get-user",-2080288949),provider], null));

re_frame.core.dispatch(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [success_event,provider,token__$1], null));

if(cljs.core.truth_(window__$1)){
window__$1.close();
} else {
}

return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"token","token",-1211463215),provider], null),token__$1),new cljs.core.Keyword(null,"oauth-authorize","oauth-authorize",1699524488));
} else {
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"token","token",-1211463215),provider], null),token__$1);
}
}));

//# sourceMappingURL=modular.oauth2.authorize.start.js.map
