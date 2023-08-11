goog.provide('webly.app.app');
webly.app.app.mount_app = (function webly$app$app$mount_app(){
return reagent.dom.render.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [webly.app.views.webly_app], null),document.getElementById("app"));
});
webly.app.app.before_load = (function webly$app$app$before_load(){
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"info","info",-317069002),"webly.app.app",null,55,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["before-load"], null);
}),null)),null,(207),null);

return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("webly","before-load","webly/before-load",-1237809257)], null));
});
webly.app.app.after_load = (function webly$app$app$after_load(){
cljs.core.enable_console_print_BANG_();

taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"info","info",-317069002),"webly.app.app",null,61,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["after-load"], null);
}),null)),null,(208),null);

taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"info","info",-317069002),"webly.app.app",null,63,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["clearing reframe subscription cache.."], null);
}),null)),null,(209),null);

re_frame.core.clear_subscription_cache_BANG_();

taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"info","info",-317069002),"webly.app.app",null,66,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["mounting webly-app .."], null);
}),null)),null,(210),null);

re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("ga","event","ga/event",301434432),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"category","category",-593092832),"webly",new cljs.core.Keyword(null,"action","action",-811238024),"mounted",new cljs.core.Keyword(null,"label","label",1718410804),(77),new cljs.core.Keyword(null,"value","value",305978217),(13)], null)], null));

return webly.app.app.mount_app();
});
webly.app.app.remove_spinner = (function webly$app$app$remove_spinner(){
var spinner = document.getElementById("spinner");
var body_classes = document.body.classList;
spinner.remove();

if(cljs.core.truth_(body_classes.contains("loading"))){
return body_classes.remove("loading");
} else {
return null;
}
});
webly.app.app.setup_bidi = (function webly$app$app$setup_bidi(user_routes_api,user_routes_app){
var routes_frontend = webly.app.routes.make_routes_frontend(user_routes_app);
var routes_backend = webly.app.routes.make_routes_backend(user_routes_app,user_routes_api);
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("bidi","init","bidi/init",-1883240046),routes_frontend,routes_backend], null));
});
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("webly","app-after-config-load","webly/app-after-config-load",247540067),(function (db,p__46354){
var vec__46355 = p__46354;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46355,(0),null);
var static_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46355,(1),null);
var routes_46384 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"webly","webly",-937630900),new cljs.core.Keyword(null,"routes","routes",457900162)], null));
var start_user_app_46385 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"webly","webly",-937630900),new cljs.core.Keyword(null,"start-user-app","start-user-app",-459208748)], null));
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"info","info",-317069002),"webly.app.app",null,89,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["webly config after-load"], null);
}),null)),null,(211),null);

webly.app.app.remove_spinner();

re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("webly","status","webly/status",-2111320042),new cljs.core.Keyword(null,"configuring-app","configuring-app",578473757)], null));

webly.app.app.setup_bidi(new cljs.core.Keyword(null,"api","api",-899839580).cljs$core$IFn$_invoke$arity$1(routes_46384),new cljs.core.Keyword(null,"app","app",-560961707).cljs$core$IFn$_invoke$arity$1(routes_46384));

re_frame.core.dispatch(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("ga","init","ga/init",-1875486012)], null));

re_frame.core.dispatch(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("keybindings","init","keybindings/init",1829009079)], null));

re_frame.core.dispatch(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("css","init","css/init",-1875646823)], null));

re_frame.core.dispatch(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("settings","init","settings/init",-106254215)], null));

if(cljs.core.truth_(static_QMARK_)){
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"warn","warn",-436710552),"webly.app.app",null,98,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["websockets are deactivated in static mode."], null);
}),null)),null,(212),null);
} else {
re_frame.core.dispatch(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("ws","init","ws/init",-1875485502)], null));
}

re_frame.core.dispatch(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("webly","set-status","webly/set-status",-116304998),new cljs.core.Keyword(null,"configured?","configured?",642178633),true], null));

if(cljs.core.truth_(start_user_app_46385)){
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"info","info",-317069002),"webly.app.app",null,103,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["starting user app: ",start_user_app_46385], null);
}),null)),null,(213),null);

re_frame.core.dispatch(start_user_app_46385);
} else {
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"warn","warn",-436710552),"webly.app.app",null,105,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["no user app startup defined."], null);
}),null)),null,(214),null);
}

return db;
}));
webly.app.app.start = (function webly$app$app$start(mode){
cljs.core.enable_console_print_BANG_();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["webly starting mode:",mode], 0));

taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"info","info",-317069002),"webly.app.app",null,113,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["webly starting mode: ",mode," prefs: ",new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"compile-time","compile-time",214692584),"2023-08-11 12:15:40",new cljs.core.Keyword(null,"tenx","tenx",44439421),false,new cljs.core.Keyword(null,"profile","profile",-545963874),"compile2",new cljs.core.Keyword(null,"main-path","main-path",-1462199157),"",new cljs.core.Keyword(null,"asset-path","asset-path",1500889617),"/r",new cljs.core.Keyword(null,"advanced?","advanced?",-385632194),null,new cljs.core.Keyword(null,"start-user-app","start-user-app",-459208748),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("goldly","init","goldly/init",-635145545)], null)], null)], null);
}),null)),null,(215),null);

var static_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,"static");
var main_path = new cljs.core.Keyword(null,"main-path","main-path",-1462199157).cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"compile-time","compile-time",214692584),"2023-08-11 12:15:40",new cljs.core.Keyword(null,"tenx","tenx",44439421),false,new cljs.core.Keyword(null,"profile","profile",-545963874),"compile2",new cljs.core.Keyword(null,"main-path","main-path",-1462199157),"",new cljs.core.Keyword(null,"asset-path","asset-path",1500889617),"/r",new cljs.core.Keyword(null,"advanced?","advanced?",-385632194),null,new cljs.core.Keyword(null,"start-user-app","start-user-app",-459208748),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("goldly","init","goldly/init",-635145545)], null)], null));
var asset_path = new cljs.core.Keyword(null,"asset-path","asset-path",1500889617).cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"compile-time","compile-time",214692584),"2023-08-11 12:15:40",new cljs.core.Keyword(null,"tenx","tenx",44439421),false,new cljs.core.Keyword(null,"profile","profile",-545963874),"compile2",new cljs.core.Keyword(null,"main-path","main-path",-1462199157),"",new cljs.core.Keyword(null,"asset-path","asset-path",1500889617),"/r",new cljs.core.Keyword(null,"advanced?","advanced?",-385632194),null,new cljs.core.Keyword(null,"start-user-app","start-user-app",-459208748),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("goldly","init","goldly/init",-635145545)], null)], null));
if(static_QMARK_){
frontend.routes.set_main_path_BANG_(main_path);
} else {
}

re_frame.core.dispatch(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reframe10x-init","reframe10x-init",1876204380)], null));

re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("webly","status","webly/status",-2111320042),new cljs.core.Keyword(null,"route-init","route-init",1387761286)], null));

re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("webly","status","webly/status",-2111320042),new cljs.core.Keyword(null,"loading-config","loading-config",-1877829996)], null));

re_frame.core.dispatch(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("config","load","config/load",1051108634),new cljs.core.Keyword("webly","app-after-config-load","webly/app-after-config-load",247540067),static_QMARK_,main_path], null));

return webly.app.app.mount_app();
});
goog.exportSymbol('webly.app.app.start', webly.app.app.start);

//# sourceMappingURL=webly.app.app.js.map
