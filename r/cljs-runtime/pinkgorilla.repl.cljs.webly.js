goog.provide('pinkgorilla.repl.cljs.webly');
pinkgorilla.repl.cljs.webly.nav = (function pinkgorilla$repl$cljs$webly$nav(var_args){
var args__5775__auto__ = [];
var len__5769__auto___50350 = arguments.length;
var i__5770__auto___50351 = (0);
while(true){
if((i__5770__auto___50351 < len__5769__auto___50350)){
args__5775__auto__.push((arguments[i__5770__auto___50351]));

var G__50359 = (i__5770__auto___50351 + (1));
i__5770__auto___50351 = G__50359;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return pinkgorilla.repl.cljs.webly.nav.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(pinkgorilla.repl.cljs.webly.nav.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return re_frame.core.dispatch(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("bidi","goto","bidi/goto",82927145)], null),args)));
}));

(pinkgorilla.repl.cljs.webly.nav.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(pinkgorilla.repl.cljs.webly.nav.cljs$lang$applyTo = (function (seq50254){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq50254));
}));

pinkgorilla.repl.cljs.webly.current_route = (function pinkgorilla$repl$cljs$webly$current_route(){
return cljs.core.deref(frontend.routes.current);
});
pinkgorilla.repl.cljs.webly.dialog = (function pinkgorilla$repl$cljs$webly$dialog(var_args){
var args__5775__auto__ = [];
var len__5769__auto___50378 = arguments.length;
var i__5770__auto___50382 = (0);
while(true){
if((i__5770__auto___50382 < len__5769__auto___50378)){
args__5775__auto__.push((arguments[i__5770__auto___50382]));

var G__50384 = (i__5770__auto___50382 + (1));
i__5770__auto___50382 = G__50384;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return pinkgorilla.repl.cljs.webly.dialog.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(pinkgorilla.repl.cljs.webly.dialog.cljs$core$IFn$_invoke$arity$variadic = (function (f,p__50289){
var vec__50291 = p__50289;
var size = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50291,(0),null);
if(cljs.core.truth_(size)){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("modal","open","modal/open",-1860325197),f,new cljs.core.Keyword(null,"small","small",2133478704)], null));
} else {
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("modal","open","modal/open",-1860325197),f], null));
}
}));

(pinkgorilla.repl.cljs.webly.dialog.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(pinkgorilla.repl.cljs.webly.dialog.cljs$lang$applyTo = (function (seq50265){
var G__50266 = cljs.core.first(seq50265);
var seq50265__$1 = cljs.core.next(seq50265);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__50266,seq50265__$1);
}));

pinkgorilla.repl.cljs.webly.notify = (function pinkgorilla$repl$cljs$webly$notify(var_args){
var args__5775__auto__ = [];
var len__5769__auto___50406 = arguments.length;
var i__5770__auto___50407 = (0);
while(true){
if((i__5770__auto___50407 < len__5769__auto___50406)){
args__5775__auto__.push((arguments[i__5770__auto___50407]));

var G__50408 = (i__5770__auto___50407 + (1));
i__5770__auto___50407 = G__50408;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return pinkgorilla.repl.cljs.webly.notify.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(pinkgorilla.repl.cljs.webly.notify.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(frontend.notifications.core.add_notification,args);
}));

(pinkgorilla.repl.cljs.webly.notify.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(pinkgorilla.repl.cljs.webly.notify.cljs$lang$applyTo = (function (seq50300){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq50300));
}));


//# sourceMappingURL=pinkgorilla.repl.cljs.webly.js.map
