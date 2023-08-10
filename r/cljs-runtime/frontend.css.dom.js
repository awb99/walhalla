goog.provide('frontend.css.dom');
frontend.css.dom.on_link_load = (function frontend$css$dom$on_link_load(var_args){
var args__5775__auto__ = [];
var len__5769__auto___45097 = arguments.length;
var i__5770__auto___45098 = (0);
while(true){
if((i__5770__auto___45098 < len__5769__auto___45097)){
args__5775__auto__.push((arguments[i__5770__auto___45098]));

var G__45099 = (i__5770__auto___45098 + (1));
i__5770__auto___45098 = G__45099;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return frontend.css.dom.on_link_load.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});
goog.exportSymbol('frontend.css.dom.on_link_load', frontend.css.dom.on_link_load);

(frontend.css.dom.on_link_load.cljs$core$IFn$_invoke$arity$variadic = (function (x,_){
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"debug","debug",-1608172596),"frontend.css.dom",null,7,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["css loaded: %s",x], null);
}),null)),null,(172),null);

return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("css","loading-success","css/loading-success",-283738859),x], null));
}));

(frontend.css.dom.on_link_load.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(frontend.css.dom.on_link_load.cljs$lang$applyTo = (function (seq45010){
var G__45011 = cljs.core.first(seq45010);
var seq45010__$1 = cljs.core.next(seq45010);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__45011,seq45010__$1);
}));

frontend.css.dom.on_link_error = (function frontend$css$dom$on_link_error(var_args){
var args__5775__auto__ = [];
var len__5769__auto___45100 = arguments.length;
var i__5770__auto___45101 = (0);
while(true){
if((i__5770__auto___45101 < len__5769__auto___45100)){
args__5775__auto__.push((arguments[i__5770__auto___45101]));

var G__45102 = (i__5770__auto___45101 + (1));
i__5770__auto___45101 = G__45102;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return frontend.css.dom.on_link_error.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});
goog.exportSymbol('frontend.css.dom.on_link_error', frontend.css.dom.on_link_error);

(frontend.css.dom.on_link_error.cljs$core$IFn$_invoke$arity$variadic = (function (x,_){
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"frontend.css.dom",null,11,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["css load error: %s",x], null);
}),null)),null,(174),null);

return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("css","loading-success","css/loading-success",-283738859),x], null));
}));

(frontend.css.dom.on_link_error.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(frontend.css.dom.on_link_error.cljs$lang$applyTo = (function (seq45039){
var G__45040 = cljs.core.first(seq45039);
var seq45039__$1 = cljs.core.next(seq45039);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__45040,seq45039__$1);
}));

frontend.css.dom.add_css_link = (function frontend$css$dom$add_css_link(href){
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"debug","debug",-1608172596),"frontend.css.dom",null,18,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["adding css: %s",href], null);
}),null)),null,(177),null);

re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("css","loading-add","css/loading-add",211864941),href], null));

var head = document.head;
var href__$1 = cljs.core.clj__GT_js(href);
var link = document.createElement("link");
link.setAttribute("href",href__$1);

link.setAttribute("rel","stylesheet");

link.setAttribute("type","text/css");

link.setAttribute("class","webly");

link.setAttribute("onload",["frontend.css.dom.on_link_load ('",cljs.core.str.cljs$core$IFn$_invoke$arity$1(href__$1),"')"].join(''));

link.setAttribute("onerror",["frontend.css.dom.on_link_error ('",cljs.core.str.cljs$core$IFn$_invoke$arity$1(href__$1),"')"].join(''));

return head.appendChild(link);
});
frontend.css.dom.existing_css = (function frontend$css$dom$existing_css(){
var links = document.querySelectorAll("link.webly");
var get_link = (function (link){
return link.getAttribute("href");
});
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(get_link,links);
});
frontend.css.dom.remove_css_link = (function frontend$css$dom$remove_css_link(href){
var temp__5804__auto__ = document.querySelector(["link.webly[href='",cljs.core.str.cljs$core$IFn$_invoke$arity$1(href),"']"].join(''));
if(cljs.core.truth_(temp__5804__auto__)){
var elem = temp__5804__auto__;
var parent = elem.parentElement;
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"debug","debug",-1608172596),"frontend.css.dom",null,41,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["removing css: %s",href], null);
}),null)),null,(180),null);

return parent.removeChild(elem);
} else {
return null;
}
});
frontend.css.dom.update_css = (function frontend$css$dom$update_css(current){
var current_set = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentHashSet.EMPTY,current);
var existing = frontend.css.dom.existing_css();
var existing_set = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentHashSet.EMPTY,existing);
var css_add = cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__45070_SHARP_){
return (!(cljs.core.contains_QMARK_(existing_set,p1__45070_SHARP_)));
}),current);
var css_remove = cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__45071_SHARP_){
return (!(cljs.core.contains_QMARK_(current_set,p1__45071_SHARP_)));
}),existing);
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"info","info",-317069002),"frontend.css.dom",null,50,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["css current %s add: %s remove: %s ",current,css_add,css_remove], null);
}),null)),null,(189),null);

cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2(frontend.css.dom.add_css_link,css_add));

return cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2(frontend.css.dom.remove_css_link,css_remove));
});

//# sourceMappingURL=frontend.css.dom.js.map
