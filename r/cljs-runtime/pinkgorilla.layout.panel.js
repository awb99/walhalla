goog.provide('pinkgorilla.layout.panel');
/**
 * a panel displays a seq of components
 *   has a header
 */
pinkgorilla.layout.panel.panel = (function pinkgorilla$layout$panel$panel(var_args){
var args__5775__auto__ = [];
var len__5769__auto___54535 = arguments.length;
var i__5770__auto___54536 = (0);
while(true){
if((i__5770__auto___54536 < len__5769__auto___54535)){
args__5775__auto__.push((arguments[i__5770__auto___54536]));

var G__54537 = (i__5770__auto___54536 + (1));
i__5770__auto___54536 = G__54537;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return pinkgorilla.layout.panel.panel.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(pinkgorilla.layout.panel.panel.cljs$core$IFn$_invoke$arity$variadic = (function (p__54530,children){
var map__54531 = p__54530;
var map__54531__$1 = cljs.core.__destructure_map(map__54531);
var title = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__54531__$1,new cljs.core.Keyword(null,"title","title",636505583),"Panel Title");
var extra = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54531__$1,new cljs.core.Keyword(null,"extra","extra",1612569067));
var color = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__54531__$1,new cljs.core.Keyword(null,"color","color",1011675173),"grey");
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),["border-2 border-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(color),"-light rounded"].join('')], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),["flex flex-row items-center justify-between w-full border-b-2 border-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(color),"-light p-2"].join('')], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"text-2xl text-grey-darker"], null),title], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),extra], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"p-2"], null),cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632)], null),children)], null)], null);
}));

(pinkgorilla.layout.panel.panel.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(pinkgorilla.layout.panel.panel.cljs$lang$applyTo = (function (seq54512){
var G__54515 = cljs.core.first(seq54512);
var seq54512__$1 = cljs.core.next(seq54512);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__54515,seq54512__$1);
}));


//# sourceMappingURL=pinkgorilla.layout.panel.js.map
