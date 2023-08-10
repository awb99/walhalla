goog.provide('pinkgorilla.repl.cljs.format');
/**
 * Formats a string using goog.string.format.
 * e.g: (format "Cost: %.2f" 10.0234)
 */
pinkgorilla.repl.cljs.format.format = (function pinkgorilla$repl$cljs$format$format(var_args){
var args__5775__auto__ = [];
var len__5769__auto___51787 = arguments.length;
var i__5770__auto___51788 = (0);
while(true){
if((i__5770__auto___51788 < len__5769__auto___51787)){
args__5775__auto__.push((arguments[i__5770__auto___51788]));

var G__51789 = (i__5770__auto___51788 + (1));
i__5770__auto___51788 = G__51789;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return pinkgorilla.repl.cljs.format.format.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(pinkgorilla.repl.cljs.format.format.cljs$core$IFn$_invoke$arity$variadic = (function (fmt,args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(goog.string.format,fmt,args);
}));

(pinkgorilla.repl.cljs.format.format.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(pinkgorilla.repl.cljs.format.format.cljs$lang$applyTo = (function (seq51781){
var G__51782 = cljs.core.first(seq51781);
var seq51781__$1 = cljs.core.next(seq51781);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__51782,seq51781__$1);
}));


//# sourceMappingURL=pinkgorilla.repl.cljs.format.js.map
