goog.provide('pinkgorilla.layout.tab');
pinkgorilla.layout.tab.tab_menu = (function pinkgorilla$layout$tab$tab_menu(p__54509,tabs){
var map__54510 = p__54509;
var map__54510__$1 = cljs.core.__destructure_map(map__54510);
var active = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__54510__$1,new cljs.core.Keyword(null,"active","active",1895962068),(0));
var select_page = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54510__$1,new cljs.core.Keyword(null,"select-page","select-page",191223628));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"border-bottom","border-bottom",2110948415),"2px solid #eaeaea"], null)], null),cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul.flex.cursor-pointer","ul.flex.cursor-pointer",733529204)], null),cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2((function (i,v){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li.py-2.px-6.rounded-t-lg","li.py-2.px-6.rounded-t-lg",301513981),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(active,i))?"bg-blue-200":"bg-white"),new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return (select_page.cljs$core$IFn$_invoke$arity$1 ? select_page.cljs$core$IFn$_invoke$arity$1(i) : select_page.call(null,i));
})], null),cljs.core.first(v)], null);
}),tabs))], null);
});
pinkgorilla.layout.tab.tab = (function pinkgorilla$layout$tab$tab(var_args){
var args__5775__auto__ = [];
var len__5769__auto___54543 = arguments.length;
var i__5770__auto___54544 = (0);
while(true){
if((i__5770__auto___54544 < len__5769__auto___54543)){
args__5775__auto__.push((arguments[i__5770__auto___54544]));

var G__54545 = (i__5770__auto___54544 + (1));
i__5770__auto___54544 = G__54545;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return pinkgorilla.layout.tab.tab.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(pinkgorilla.layout.tab.tab.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var active = reagent.core.atom.cljs$core$IFn$_invoke$arity$1((0));
return (function() { 
var G__54547__delegate = function (args__$1){
var vec__54532 = ((cljs.core.map_QMARK_(cljs.core.first(args__$1)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first(args__$1),cljs.core.rest(args__$1)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentArrayMap.EMPTY,args__$1], null));
var props = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54532,(0),null);
var children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54532,(1),null);
var tabs = cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),children);
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),pinkie.box.apply_style(props),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [pinkgorilla.layout.tab.tab_menu,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"active","active",1895962068),cljs.core.deref(active),new cljs.core.Keyword(null,"select-page","select-page",191223628),(function (i){
return cljs.core.reset_BANG_(active,i);
})], null),tabs], null),(function (){var page = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(tabs,cljs.core.deref(active));
if(cljs.core.truth_(page)){
return cljs.core.second(page);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),"no tab selected page:",cljs.core.deref(active)], null);
}
})()], null);
};
var G__54547 = function (var_args){
var args__$1 = null;
if (arguments.length > 0) {
var G__54548__i = 0, G__54548__a = new Array(arguments.length -  0);
while (G__54548__i < G__54548__a.length) {G__54548__a[G__54548__i] = arguments[G__54548__i + 0]; ++G__54548__i;}
  args__$1 = new cljs.core.IndexedSeq(G__54548__a,0,null);
} 
return G__54547__delegate.call(this,args__$1);};
G__54547.cljs$lang$maxFixedArity = 0;
G__54547.cljs$lang$applyTo = (function (arglist__54549){
var args__$1 = cljs.core.seq(arglist__54549);
return G__54547__delegate(args__$1);
});
G__54547.cljs$core$IFn$_invoke$arity$variadic = G__54547__delegate;
return G__54547;
})()
;
}));

(pinkgorilla.layout.tab.tab.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(pinkgorilla.layout.tab.tab.cljs$lang$applyTo = (function (seq54524){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq54524));
}));


//# sourceMappingURL=pinkgorilla.layout.tab.js.map
