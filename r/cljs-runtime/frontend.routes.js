goog.provide('frontend.routes');
if((typeof frontend !== 'undefined') && (typeof frontend.routes !== 'undefined') && (typeof frontend.routes.static_main_path_atom !== 'undefined')){
} else {
frontend.routes.static_main_path_atom = cljs.core.atom.cljs$core$IFn$_invoke$arity$1("");
}
frontend.routes.set_main_path_BANG_ = (function frontend$routes$set_main_path_BANG_(path){
var safe_path = ((clojure.string.ends_with_QMARK_(path,"/"))?cljs.core.subs.cljs$core$IFn$_invoke$arity$3(path,(0),(cljs.core.count(path) - (1))):path);
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"info","info",-317069002),"frontend.routes",null,17,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["set-main-path!",safe_path], null);
}),null)),null,(133),null);

return cljs.core.reset_BANG_(frontend.routes.static_main_path_atom,safe_path);
});
frontend.routes.entry_path_adjust = (function frontend$routes$entry_path_adjust(path){
var path_adjusted = ((clojure.string.blank_QMARK_(cljs.core.deref(frontend.routes.static_main_path_atom)))?path:clojure.string.replace(path,cljs.core.deref(frontend.routes.static_main_path_atom),""));
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"info","info",-317069002),"frontend.routes",null,25,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["entry-path-adjust path: ",path," adjusted: ",path_adjusted], null);
}),null)),null,(134),null);

return path_adjusted;
});
frontend.routes.html_static_adjust = (function frontend$routes$html_static_adjust(path){
if(clojure.string.ends_with_QMARK_(path,"/index.html")){
return clojure.string.replace(path,"/index.html","/");
} else {
return path;
}
});
frontend.routes.window_query_params = (function frontend$routes$window_query_params(){
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"info","info",-317069002),"frontend.routes",null,37,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["window query params: href: ",window.location.href], null);
}),null)),null,(138),null);

return cemerick.url.url.cljs$core$IFn$_invoke$arity$1(window.location.href).query;
});
if((typeof frontend !== 'undefined') && (typeof frontend.routes !== 'undefined') && (typeof frontend.routes.routes !== 'undefined')){
} else {
frontend.routes.routes = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
frontend.routes.link = (function frontend$routes$link(var_args){
var G__44913 = arguments.length;
switch (G__44913) {
case 1:
return frontend.routes.link.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return frontend.routes.link.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(frontend.routes.link.cljs$core$IFn$_invoke$arity$1 = (function (handler){
var url = bidi.bidi.path_for(cljs.core.deref(frontend.routes.routes),handler);
return url;
}));

(frontend.routes.link.cljs$core$IFn$_invoke$arity$2 = (function (handler,route_params){
var url = cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(bidi.bidi.path_for,cljs.core.deref(frontend.routes.routes)),handler,route_params);
return url;
}));

(frontend.routes.link.cljs$lang$maxFixedArity = 2);

frontend.routes.map__GT_params = (function frontend$routes$map__GT_params(m){
var add = (function (acc,p__44925){
var vec__44926 = p__44925;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44926,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44926,(1),null);
return cljs.core.conj.cljs$core$IFn$_invoke$arity$variadic(acc,k,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([v], 0));
});
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(add,cljs.core.PersistentVector.EMPTY,m);
});
frontend.routes.route__GT_url = (function frontend$routes$route__GT_url(p__44929){
var map__44930 = p__44929;
var map__44930__$1 = cljs.core.__destructure_map(map__44930);
var handler = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44930__$1,new cljs.core.Keyword(null,"handler","handler",-195596612));
var query_params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44930__$1,new cljs.core.Keyword(null,"query-params","query-params",900640534));
var route_params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44930__$1,new cljs.core.Keyword(null,"route-params","route-params",2111411055));
var url_handler = ((cljs.core.empty_QMARK_(route_params))?frontend.routes.link.cljs$core$IFn$_invoke$arity$1(handler):frontend.routes.link.cljs$core$IFn$_invoke$arity$2(handler,frontend.routes.map__GT_params(route_params)));
if(cljs.core.empty_QMARK_(query_params)){
return url_handler;
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(url_handler),"?",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cemerick.url.map__GT_query(query_params))].join('');
}
});
if((typeof frontend !== 'undefined') && (typeof frontend.routes !== 'undefined') && (typeof frontend.routes.current !== 'undefined')){
} else {
frontend.routes.current = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
frontend.routes.reset_current_BANG_ = (function frontend$routes$reset_current_BANG_(trigger,match){
if((!(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(match,cljs.core.deref(frontend.routes.current))))){
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"info","info",-317069002),"frontend.routes",null,76,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["reset-current! ",match,"trigger: ",trigger], null);
}),null)),null,(144),null);

return cljs.core.reset_BANG_(frontend.routes.current,match);
} else {
return null;
}
});
frontend.routes.path__GT_route = (function frontend$routes$path__GT_route(routes,path_with_qp,options){
var map__44932 = cemerick.url.url.cljs$core$IFn$_invoke$arity$1(path_with_qp);
var map__44932__$1 = cljs.core.__destructure_map(map__44932);
var path = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44932__$1,new cljs.core.Keyword(null,"path","path",-188191168));
var query = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44932__$1,new cljs.core.Keyword(null,"query","query",-1288509510));
var query_params = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__44933){
var vec__44934 = p__44933;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44934,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44934,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(k),v], null);
}),query));
var match = bidi.bidi.match_route_STAR_(routes,path,options);
if(cljs.core.truth_(match)){
var map__44937 = match;
var map__44937__$1 = cljs.core.__destructure_map(map__44937);
var handler = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44937__$1,new cljs.core.Keyword(null,"handler","handler",-195596612));
var route_params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44937__$1,new cljs.core.Keyword(null,"route-params","route-params",2111411055));
var tag = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44937__$1,new cljs.core.Keyword(null,"tag","tag",-1290361223));
var route = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"handler","handler",-195596612),handler,new cljs.core.Keyword(null,"query-params","query-params",900640534),query_params,new cljs.core.Keyword(null,"route-params","route-params",2111411055),(function (){var or__5045__auto__ = route_params;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})(),new cljs.core.Keyword(null,"tag","tag",-1290361223),(function (){var or__5045__auto__ = tag;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return null;
}
})()], null);
return route;
} else {
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"frontend.routes",null,103,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["no route found for ",path_with_qp], null);
}),null)),null,(145),null);

return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"handler","handler",-195596612),new cljs.core.Keyword("webly","unknown-route","webly/unknown-route",648509429),new cljs.core.Keyword(null,"url","url",276297046),path_with_qp], null);
}
});
frontend.routes.pushy_goto_BANG_ = (function frontend$routes$pushy_goto_BANG_(match){
frontend.routes.reset_current_BANG_("pushy/goto",match);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("webly","unknown-route","webly/unknown-route",648509429),new cljs.core.Keyword(null,"handler","handler",-195596612).cljs$core$IFn$_invoke$arity$1(match))){
var G__44938 = new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(match);
return (frontend.routes.hard_redirect.cljs$core$IFn$_invoke$arity$1 ? frontend.routes.hard_redirect.cljs$core$IFn$_invoke$arity$1(G__44938) : frontend.routes.hard_redirect.call(null,G__44938));
} else {
return null;
}
});
frontend.routes.on_url_change = (function frontend$routes$on_url_change(var_args){
var args__5775__auto__ = [];
var len__5769__auto___45016 = arguments.length;
var i__5770__auto___45030 = (0);
while(true){
if((i__5770__auto___45030 < len__5769__auto___45016)){
args__5775__auto__.push((arguments[i__5770__auto___45030]));

var G__45032 = (i__5770__auto___45030 + (1));
i__5770__auto___45030 = G__45032;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return frontend.routes.on_url_change.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(frontend.routes.on_url_change.cljs$core$IFn$_invoke$arity$variadic = (function (path,options){
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"info","info",-317069002),"frontend.routes",null,115,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["url did change to: ",path], null);
}),null)),null,(151),null);

var options__$1 = (function (){var or__5045__auto__ = options;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
var path__$1 = frontend.routes.entry_path_adjust(path);
var path__$2 = frontend.routes.html_static_adjust(path__$1);
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"info","info",-317069002),"frontend.routes",null,119,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["adjusted path: ",path__$2], null);
}),null)),null,(153),null);

return frontend.routes.path__GT_route(cljs.core.deref(frontend.routes.routes),path__$2,options__$1);
}));

(frontend.routes.on_url_change.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(frontend.routes.on_url_change.cljs$lang$applyTo = (function (seq44939){
var G__44946 = cljs.core.first(seq44939);
var seq44939__$1 = cljs.core.next(seq44939);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__44946,seq44939__$1);
}));

frontend.routes.history = pushy.core.pushy(frontend.routes.pushy_goto_BANG_,frontend.routes.on_url_change);
frontend.routes.hard_redirect_BANG_ = (function frontend$routes$hard_redirect_BANG_(url){
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"info","info",-317069002),"frontend.routes",null,131,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["hard redirect to: ",url], null);
}),null)),null,(158),null);

frontend.routes.history.pushy$core$IHistory$stop_BANG_$arity$1(null);

return (window.location = url);
});
frontend.routes.params__GT_map = (function frontend$routes$params__GT_map(params){
var pairs = cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),params);
var add = (function (m,p__44984){
var vec__44985 = p__44984;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44985,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44985,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,k,v);
});
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(add,cljs.core.PersistentArrayMap.EMPTY,pairs);
});
frontend.routes.goto_route_BANG_ = (function frontend$routes$goto_route_BANG_(route){
var url = frontend.routes.route__GT_url(route);
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"info","info",-317069002),"frontend.routes",null,148,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["bidi/goto route: %s url: %s",route,url], null);
}),null)),null,(162),null);

frontend.routes.reset_current_BANG_("goto-route",route);

return frontend.routes.history.pushy$core$IHistory$set_token_BANG_$arity$2(null,url);
});
frontend.routes.goto_BANG_ = (function frontend$routes$goto_BANG_(var_args){
var args__5775__auto__ = [];
var len__5769__auto___45076 = arguments.length;
var i__5770__auto___45077 = (0);
while(true){
if((i__5770__auto___45077 < len__5769__auto___45076)){
args__5775__auto__.push((arguments[i__5770__auto___45077]));

var G__45078 = (i__5770__auto___45077 + (1));
i__5770__auto___45077 = G__45078;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return frontend.routes.goto_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(frontend.routes.goto_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (handler,params){
var params_map = frontend.routes.params__GT_map(params);
var route_params = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(params_map,new cljs.core.Keyword(null,"query-params","query-params",900640534),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"tag","tag",-1290361223)], 0));
var query_params = (function (){var or__5045__auto__ = new cljs.core.Keyword(null,"query-params","query-params",900640534).cljs$core$IFn$_invoke$arity$1(params_map);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
var tag = new cljs.core.Keyword(null,"tag","tag",-1290361223).cljs$core$IFn$_invoke$arity$1(params_map);
var route = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"handler","handler",-195596612),handler,new cljs.core.Keyword(null,"route-params","route-params",2111411055),route_params,new cljs.core.Keyword(null,"query-params","query-params",900640534),query_params,new cljs.core.Keyword(null,"tag","tag",-1290361223),tag], null);
return frontend.routes.goto_route_BANG_(route);
}));

(frontend.routes.goto_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(frontend.routes.goto_BANG_.cljs$lang$applyTo = (function (seq44990){
var G__44991 = cljs.core.first(seq44990);
var seq44990__$1 = cljs.core.next(seq44990);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__44991,seq44990__$1);
}));

frontend.routes.nav_BANG_ = (function frontend$routes$nav_BANG_(url){
var map__44997 = frontend.routes.path__GT_route(cljs.core.deref(frontend.routes.routes),url,cljs.core.PersistentArrayMap.EMPTY);
var map__44997__$1 = cljs.core.__destructure_map(map__44997);
var h = map__44997__$1;
var handler = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44997__$1,new cljs.core.Keyword(null,"handler","handler",-195596612));
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"info","info",-317069002),"frontend.routes",null,166,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["nav!: ",h], null);
}),null)),null,(165),null);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(handler,new cljs.core.Keyword("webly","unknown-route","webly/unknown-route",648509429))){
return (window.location = url);
} else {
frontend.routes.reset_current_BANG_("bidi/goto!",h);

return frontend.routes.history.pushy$core$IHistory$set_token_BANG_$arity$2(null,url);
}
});
frontend.routes.G = (function frontend$routes$G(handler_str){
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"info","info",-317069002),"frontend.routes",null,176,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["handler-str: ",handler_str], null);
}),null)),null,(166),null);

var handler_kw = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(handler_str);
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"info","info",-317069002),"frontend.routes",null,178,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["handler-kw: ",handler_kw], null);
}),null)),null,(167),null);

return frontend.routes.goto_BANG_(handler_kw);
});
goog.exportSymbol('frontend.routes.G', frontend.routes.G);

//# sourceMappingURL=frontend.routes.js.map
