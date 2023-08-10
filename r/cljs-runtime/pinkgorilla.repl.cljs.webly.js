goog.provide('pinkgorilla.repl.cljs.webly');
pinkgorilla.repl.cljs.webly.nav = (function pinkgorilla$repl$cljs$webly$nav(var_args){
var args__5775__auto__ = [];
var len__5769__auto___50151 = arguments.length;
var i__5770__auto___50152 = (0);
while(true){
if((i__5770__auto___50152 < len__5769__auto___50151)){
args__5775__auto__.push((arguments[i__5770__auto___50152]));

var G__50153 = (i__5770__auto___50152 + (1));
i__5770__auto___50152 = G__50153;
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
(pinkgorilla.repl.cljs.webly.nav.cljs$lang$applyTo = (function (seq50098){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq50098));
}));

pinkgorilla.repl.cljs.webly.current_route = (function pinkgorilla$repl$cljs$webly$current_route(){
return cljs.core.deref(frontend.routes.current);
});
pinkgorilla.repl.cljs.webly.dialog = (function pinkgorilla$repl$cljs$webly$dialog(var_args){
var args__5775__auto__ = [];
var len__5769__auto___50161 = arguments.length;
var i__5770__auto___50162 = (0);
while(true){
if((i__5770__auto___50162 < len__5769__auto___50161)){
args__5775__auto__.push((arguments[i__5770__auto___50162]));

var G__50164 = (i__5770__auto___50162 + (1));
i__5770__auto___50162 = G__50164;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return pinkgorilla.repl.cljs.webly.dialog.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(pinkgorilla.repl.cljs.webly.dialog.cljs$core$IFn$_invoke$arity$variadic = (function (f,p__50117){
var vec__50118 = p__50117;
var size = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50118,(0),null);
if(cljs.core.truth_(size)){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("modal","open","modal/open",-1860325197),f,new cljs.core.Keyword(null,"small","small",2133478704)], null));
} else {
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("modal","open","modal/open",-1860325197),f], null));
}
}));

(pinkgorilla.repl.cljs.webly.dialog.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(pinkgorilla.repl.cljs.webly.dialog.cljs$lang$applyTo = (function (seq50107){
var G__50108 = cljs.core.first(seq50107);
var seq50107__$1 = cljs.core.next(seq50107);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__50108,seq50107__$1);
}));

pinkgorilla.repl.cljs.webly.notify = (function pinkgorilla$repl$cljs$webly$notify(var_args){
var args__5775__auto__ = [];
var len__5769__auto___50165 = arguments.length;
var i__5770__auto___50166 = (0);
while(true){
if((i__5770__auto___50166 < len__5769__auto___50165)){
args__5775__auto__.push((arguments[i__5770__auto___50166]));

var G__50168 = (i__5770__auto___50166 + (1));
i__5770__auto___50166 = G__50168;
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
(pinkgorilla.repl.cljs.webly.notify.cljs$lang$applyTo = (function (seq50129){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq50129));
}));


//# sourceMappingURL=pinkgorilla.repl.cljs.webly.js.map
