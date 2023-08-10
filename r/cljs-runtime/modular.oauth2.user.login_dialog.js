goog.provide('modular.oauth2.user.login_dialog');
modular.oauth2.user.login_dialog.login_ui = (function modular$oauth2$user$login_dialog$login_ui(){
var username = reagent.core.atom.cljs$core$IFn$_invoke$arity$1("");
var password = reagent.core.atom.cljs$core$IFn$_invoke$arity$1("");
var on_change = (function (a){
return (function (e){
var v = e.target.value;
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"info","info",-317069002),"modular.oauth2.user.login-dialog",null,14,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["changed: ",v], null);
}),null)),null,(53),null);

return cljs.core.reset_BANG_(a,v);
});
});
var login_local = (function (){
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"info","info",-317069002),"modular.oauth2.user.login-dialog",null,17,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["logging in locally.."], null);
}),null)),null,(54),null);

return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("ws","send","ws/send",-652154486),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("login","local","login/local",-1592011595),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"username","username",1605666410),cljs.core.deref(username),new cljs.core.Keyword(null,"password","password",417022471),cljs.core.deref(password)], null)], null)], null));
});
var login_oidc = (function (provider){
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"info","info",-317069002),"modular.oauth2.user.login-dialog",null,22,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["logging in oidc ",provider," .."], null);
}),null)),null,(56),null);

return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("oauth2","authorize-start","oauth2/authorize-start",1379461893),provider,new cljs.core.Keyword("oauth2","login-oauth-success","oauth2/login-oauth-success",-1529227958)], null));
});
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"w-full flex items-center justify-center bg-blue-800"], null),new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"bg-gray-200 w-96 h-auto rounded-lg pt-8 pb-8 px-8 flex flex-col items-center"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"font-light text-4xl mb-4"], null),"gorilla",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"font-bold"], null),"login"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"text",new cljs.core.Keyword(null,"class","class",-2030961996),"w-full h-12 rounded-lg px-4 text-lg focus:ring-blue-600 mb-4",new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"Email",new cljs.core.Keyword(null,"value","value",305978217),cljs.core.deref(username),new cljs.core.Keyword(null,"on-change","on-change",-732046149),on_change(username)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"password",new cljs.core.Keyword(null,"class","class",-2030961996),"w-full h-12 rounded-lg px-4 text-lg focus:ring-blue-600 mb-4",new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"Password",new cljs.core.Keyword(null,"value","value",305978217),cljs.core.deref(password),new cljs.core.Keyword(null,"on-change","on-change",-732046149),on_change(password)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),"w-full h-12 rounded-lg bg-blue-600 text-gray-200 uppercase font-semibold hover:bg-blue-700 text-gray-100 transition mb-4",new cljs.core.Keyword(null,"on-click","on-click",1632826543),login_local], null),"Login"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"text-gray-800 mb-4"], null),"or"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),"w-full h-12 rounded-lg bg-red-600 text-gray-200 uppercase font-semibold hover:bg-red-700 text-gray-100 transition mb-4",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return login_oidc(new cljs.core.Keyword(null,"google","google",578454873));
})], null),"Sign with Google"], null)], null)], null);
});
});
modular.oauth2.user.login_dialog.show_login_dialog = (function modular$oauth2$user$login_dialog$show_login_dialog(){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("modal","open","modal/open",-1860325197),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [modular.oauth2.user.login_dialog.login_ui], null)], null),new cljs.core.Keyword(null,"medium","medium",-1864319384)], null));
});
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("login","dialog","login/dialog",1186171536),(function (_,___$1){
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"info","info",-317069002),"modular.oauth2.user.login-dialog",null,64,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["showing login dialog"], null);
}),null)),null,(57),null);

return modular.oauth2.user.login_dialog.show_login_dialog();
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("login","local","login/local",-1592011595),(function (db,p__39912){
var vec__39913 = p__39912;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39913,(0),null);
var map__39916 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39913,(1),null);
var map__39916__$1 = cljs.core.__destructure_map(map__39916);
var result = map__39916__$1;
var error = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39916__$1,new cljs.core.Keyword(null,"error","error",-978969032));
var error_message = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39916__$1,new cljs.core.Keyword(null,"error-message","error-message",1756021561));
var user = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39916__$1,new cljs.core.Keyword(null,"user","user",1532431356));
var token = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39916__$1,new cljs.core.Keyword(null,"token","token",-1211463215));
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"info","info",-317069002),"modular.oauth2.user.login-dialog",null,70,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["login result: ",result], null);
}),null)),null,(58),null);

re_frame.core.dispatch(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("modal","close","modal/close",1402872795)], null));

if(cljs.core.truth_(error)){
frontend.notifications.core.add_notification.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"error","error",-978969032),error_message);
} else {
}

if(cljs.core.truth_(user)){
frontend.notifications.core.add_notification.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"info","info",-317069002),["Logged in as: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(user)].join(''));
} else {
}

if(cljs.core.truth_(user)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"user","user",1532431356),result);
} else {
return db;
}
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("oauth2","login-oauth-success","oauth2/login-oauth-success",-1529227958),(function (p__39917,p__39918){
var map__39919 = p__39917;
var map__39919__$1 = cljs.core.__destructure_map(map__39919);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39919__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__39920 = p__39918;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39920,(0),null);
var provider = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39920,(1),null);
var token = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39920,(2),null);
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"info","info",-317069002),"modular.oauth2.user.login-dialog",null,83,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["oauth2 login success via oidc for provider ",provider,"token: ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([token], 0))], null);
}),null)),null,(59),null);

re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("ws","send","ws/send",-652154486),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("login","oidc","login/oidc",1319273394),token], null)], null));

return null;
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("oauth2","logout","oauth2/logout",293951348),(function (p__39926,p__39927){
var map__39928 = p__39926;
var map__39928__$1 = cljs.core.__destructure_map(map__39928);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39928__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__39929 = p__39927;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39929,(0),null);
var service = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39929,(1),null);
var new_db = cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(db,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"token","token",-1211463215)], null),cljs.core.dissoc,service);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"db","db",993250759),new_db], null);
}));

//# sourceMappingURL=modular.oauth2.user.login_dialog.js.map
