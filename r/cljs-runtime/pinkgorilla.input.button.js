goog.provide('pinkgorilla.input.button');
pinkgorilla.input.button.button = (function pinkgorilla$input$button$button(var_args){
var G__54529 = arguments.length;
switch (G__54529) {
case 1:
return pinkgorilla.input.button.button.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return pinkgorilla.input.button.button.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(pinkgorilla.input.button.button.cljs$core$IFn$_invoke$arity$1 = (function (text){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [pinkgorilla.input.button.button,cljs.core.PersistentArrayMap.EMPTY,text], null);
}));

(pinkgorilla.input.button.button.cljs$core$IFn$_invoke$arity$2 = (function (p__54540,text){
var map__54542 = p__54540;
var map__54542__$1 = cljs.core.__destructure_map(map__54542);
var options = map__54542__$1;
var on_click = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54542__$1,new cljs.core.Keyword(null,"on-click","on-click",1632826543));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),"bg-blue-500 hover:bg-blue-700 text-white font-bold rounded",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function() { 
var G__54550__delegate = function (_,___$1){
if(cljs.core.truth_(on_click)){
return (on_click.cljs$core$IFn$_invoke$arity$0 ? on_click.cljs$core$IFn$_invoke$arity$0() : on_click.call(null));
} else {
return null;
}
};
var G__54550 = function (_,var_args){
var ___$1 = null;
if (arguments.length > 1) {
var G__54551__i = 0, G__54551__a = new Array(arguments.length -  1);
while (G__54551__i < G__54551__a.length) {G__54551__a[G__54551__i] = arguments[G__54551__i + 1]; ++G__54551__i;}
  ___$1 = new cljs.core.IndexedSeq(G__54551__a,0,null);
} 
return G__54550__delegate.call(this,_,___$1);};
G__54550.cljs$lang$maxFixedArity = 1;
G__54550.cljs$lang$applyTo = (function (arglist__54552){
var _ = cljs.core.first(arglist__54552);
var ___$1 = cljs.core.rest(arglist__54552);
return G__54550__delegate(_,___$1);
});
G__54550.cljs$core$IFn$_invoke$arity$variadic = G__54550__delegate;
return G__54550;
})()
], null),cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(options,new cljs.core.Keyword(null,"on-click","on-click",1632826543))], 0)),text], null);
}));

(pinkgorilla.input.button.button.cljs$lang$maxFixedArity = 2);


//# sourceMappingURL=pinkgorilla.input.button.js.map
