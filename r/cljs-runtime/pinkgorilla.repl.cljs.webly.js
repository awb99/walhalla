goog.provide('pinkgorilla.repl.cljs.webly');
pinkgorilla.repl.cljs.webly.nav = (function pinkgorilla$repl$cljs$webly$nav(var_args){
var args__5775__auto__ = [];
var len__5769__auto___51214 = arguments.length;
var i__5770__auto___51215 = (0);
while(true){
if((i__5770__auto___51215 < len__5769__auto___51214)){
args__5775__auto__.push((arguments[i__5770__auto___51215]));

var G__51216 = (i__5770__auto___51215 + (1));
i__5770__auto___51215 = G__51216;
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
(pinkgorilla.repl.cljs.webly.nav.cljs$lang$applyTo = (function (seq51206){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq51206));
}));

pinkgorilla.repl.cljs.webly.current_route = (function pinkgorilla$repl$cljs$webly$current_route(){
return cljs.core.deref(frontend.routes.current);
});
pinkgorilla.repl.cljs.webly.dialog = (function pinkgorilla$repl$cljs$webly$dialog(var_args){
var args__5775__auto__ = [];
var len__5769__auto___51217 = arguments.length;
var i__5770__auto___51218 = (0);
while(true){
if((i__5770__auto___51218 < len__5769__auto___51217)){
args__5775__auto__.push((arguments[i__5770__auto___51218]));

var G__51219 = (i__5770__auto___51218 + (1));
i__5770__auto___51218 = G__51219;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return pinkgorilla.repl.cljs.webly.dialog.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(pinkgorilla.repl.cljs.webly.dialog.cljs$core$IFn$_invoke$arity$variadic = (function (f,p__51209){
var vec__51210 = p__51209;
var size = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51210,(0),null);
if(cljs.core.truth_(size)){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("modal","open","modal/open",-1860325197),f,new cljs.core.Keyword(null,"small","small",2133478704)], null));
} else {
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("modal","open","modal/open",-1860325197),f], null));
}
}));

(pinkgorilla.repl.cljs.webly.dialog.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(pinkgorilla.repl.cljs.webly.dialog.cljs$lang$applyTo = (function (seq51207){
var G__51208 = cljs.core.first(seq51207);
var seq51207__$1 = cljs.core.next(seq51207);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__51208,seq51207__$1);
}));

pinkgorilla.repl.cljs.webly.notify = (function pinkgorilla$repl$cljs$webly$notify(var_args){
var args__5775__auto__ = [];
var len__5769__auto___51220 = arguments.length;
var i__5770__auto___51221 = (0);
while(true){
if((i__5770__auto___51221 < len__5769__auto___51220)){
args__5775__auto__.push((arguments[i__5770__auto___51221]));

var G__51222 = (i__5770__auto___51221 + (1));
i__5770__auto___51221 = G__51222;
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
(pinkgorilla.repl.cljs.webly.notify.cljs$lang$applyTo = (function (seq51213){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq51213));
}));


//# sourceMappingURL=pinkgorilla.repl.cljs.webly.js.map
