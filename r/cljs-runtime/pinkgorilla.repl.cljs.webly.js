goog.provide('pinkgorilla.repl.cljs.webly');
pinkgorilla.repl.cljs.webly.dialog = (function pinkgorilla$repl$cljs$webly$dialog(var_args){
var args__5775__auto__ = [];
var len__5769__auto___50731 = arguments.length;
var i__5770__auto___50732 = (0);
while(true){
if((i__5770__auto___50732 < len__5769__auto___50731)){
args__5775__auto__.push((arguments[i__5770__auto___50732]));

var G__50733 = (i__5770__auto___50732 + (1));
i__5770__auto___50732 = G__50733;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return pinkgorilla.repl.cljs.webly.dialog.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(pinkgorilla.repl.cljs.webly.dialog.cljs$core$IFn$_invoke$arity$variadic = (function (f,p__50718){
var vec__50719 = p__50718;
var size = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50719,(0),null);
if(cljs.core.truth_(size)){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("modal","open","modal/open",-1860325197),f,new cljs.core.Keyword(null,"small","small",2133478704)], null));
} else {
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("modal","open","modal/open",-1860325197),f], null));
}
}));

(pinkgorilla.repl.cljs.webly.dialog.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(pinkgorilla.repl.cljs.webly.dialog.cljs$lang$applyTo = (function (seq50716){
var G__50717 = cljs.core.first(seq50716);
var seq50716__$1 = cljs.core.next(seq50716);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__50717,seq50716__$1);
}));

pinkgorilla.repl.cljs.webly.notify = (function pinkgorilla$repl$cljs$webly$notify(var_args){
var args__5775__auto__ = [];
var len__5769__auto___50736 = arguments.length;
var i__5770__auto___50737 = (0);
while(true){
if((i__5770__auto___50737 < len__5769__auto___50736)){
args__5775__auto__.push((arguments[i__5770__auto___50737]));

var G__50738 = (i__5770__auto___50737 + (1));
i__5770__auto___50737 = G__50738;
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
(pinkgorilla.repl.cljs.webly.notify.cljs$lang$applyTo = (function (seq50724){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq50724));
}));


//# sourceMappingURL=pinkgorilla.repl.cljs.webly.js.map
