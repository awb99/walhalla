goog.provide('goldly.cljs.reload');
goldly.cljs.reload.reloading_cljs_ui = (function goldly$cljs$reload$reloading_cljs_ui(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),"reloading cljs (sci) code"], null);
});
frontend.page.reagent_page.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("goldly","reload-cljs","goldly/reload-cljs",334924610),(function (p__55145){
var map__55146 = p__55145;
var map__55146__$1 = cljs.core.__destructure_map(map__55146);
var route = map__55146__$1;
var route_params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55146__$1,new cljs.core.Keyword(null,"route-params","route-params",2111411055));
var query_params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55146__$1,new cljs.core.Keyword(null,"query-params","query-params",900640534));
var handler = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55146__$1,new cljs.core.Keyword(null,"handler","handler",-195596612));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [goldly.cljs.reload.reloading_cljs_ui], null);
}));
goldly.cljs.reload.reload_cljs = (function goldly$cljs$reload$reload_cljs(){
var c = cljs.core.deref(frontend.routes.current);
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"warn","warn",-436710552),"goldly.cljs.reload",null,19,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["reload: ",c], null);
}),null)),null,(232),null);

re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("bidi","goto","bidi/goto",82927145),new cljs.core.Keyword("goldly","reload-cljs","goldly/reload-cljs",334924610)], null));

re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("bidi","goto-route","bidi/goto-route",1868797141),c], null));

return webly.app.views.refresh_page();
});

//# sourceMappingURL=goldly.cljs.reload.js.map
