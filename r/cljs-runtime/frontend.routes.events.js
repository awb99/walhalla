goog.provide('frontend.routes.events');
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("bidi","init","bidi/init",-1883240046),(function (db,p__45549){
var vec__45550 = p__45549;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45550,(0),null);
var routes_frontend = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45550,(1),null);
var routes_backend = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45550,(2),null);
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"info","info",-317069002),"frontend.routes.events",null,11,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["bidi init .."], null);
}),null)),null,(97),null);

cljs.core.reset_BANG_(frontend.routes.routes,routes_frontend);

taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"info","info",-317069002),"frontend.routes.events",null,13,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["bidi routes-frontend are: ",routes_frontend], null);
}),null)),null,(98),null);

var db__$1 = (function (){var or__5045__auto__ = db;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"info","info",-317069002),"frontend.routes.events",null,15,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["starting pushy"], null);
}),null)),null,(99),null);

frontend.routes.history.pushy$core$IHistory$start_BANG_$arity$1(null);

return cljs.core.assoc_in(db__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"bidi","bidi",1964105728)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"client","client",-1323448117),routes_frontend,new cljs.core.Keyword(null,"server","server",1499190120),routes_backend], null));
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("bidi","goto-route","bidi/goto-route",1868797141),(function (_,p__45572){
var vec__45574 = p__45572;
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45574,(0),null);
var match = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45574,(1),null);
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"debug","debug",-1608172596),"frontend.routes.events",null,22,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["bidi/goto-route: ",match], null);
}),null)),null,(102),null);

frontend.routes.goto_route_BANG_(match);

return null;
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("bidi","goto","bidi/goto",82927145),(function (_,p__45584){
var vec__45585 = p__45584;
var seq__45586 = cljs.core.seq(vec__45585);
var first__45587 = cljs.core.first(seq__45586);
var seq__45586__$1 = cljs.core.next(seq__45586);
var ___$1 = first__45587;
var first__45587__$1 = cljs.core.first(seq__45586__$1);
var seq__45586__$2 = cljs.core.next(seq__45586__$1);
var handler_or_url = first__45587__$1;
var params = seq__45586__$2;
if(typeof handler_or_url === 'string'){
frontend.routes.nav_BANG_(handler_or_url);
} else {
if((cljs.core.count(params) > (0))){
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"debug","debug",-1608172596),"frontend.routes.events",null,32,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["bidi/goto! (params): ",cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [handler_or_url], null),params)], null);
}),null)),null,(105),null);

cljs.core.apply.cljs$core$IFn$_invoke$arity$2(frontend.routes.goto_BANG_,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [handler_or_url], null),params));
} else {
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"debug","debug",-1608172596),"frontend.routes.events",null,34,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["bidi/goto! (no-params)",handler_or_url], null);
}),null)),null,(106),null);

frontend.routes.goto_BANG_(handler_or_url);
}
}

return null;
}));
re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("webly","routes","webly/routes",-501898079),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (db,_){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"bidi","bidi",1964105728)], null));
})], 0));

//# sourceMappingURL=frontend.routes.events.js.map
