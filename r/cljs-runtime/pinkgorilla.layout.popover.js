goog.provide('pinkgorilla.layout.popover');
var module$node_modules$$popperjs$core$dist$cjs$popper=shadow.js.require("module$node_modules$$popperjs$core$dist$cjs$popper", {});
pinkgorilla.layout.popover.tooltip = (function pinkgorilla$layout$popover$tooltip(p__54567){
var map__54570 = p__54567;
var map__54570__$1 = cljs.core.__destructure_map(map__54570);
var title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54570__$1,new cljs.core.Keyword(null,"title","title",636505583));
var content = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54570__$1,new cljs.core.Keyword(null,"content","content",15833224));
var color = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54570__$1,new cljs.core.Keyword(null,"color","color",1011675173));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),["bg-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(color),"-600 text-white opacity-75 font-semibold p-3 mb-0 border-b border-solid border-gray-200 uppercase rounded-t-lg"].join('')], null),title], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"text-white p-3"], null),content], null)], null);
});
pinkgorilla.layout.popover.popover = (function pinkgorilla$layout$popover$popover(p__54583,child){
var map__54584 = p__54583;
var map__54584__$1 = cljs.core.__destructure_map(map__54584);
var color = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54584__$1,new cljs.core.Keyword(null,"color","color",1011675173));
var placement = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54584__$1,new cljs.core.Keyword(null,"placement","placement",768366651));
var button_text = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54584__$1,new cljs.core.Keyword(null,"button-text","button-text",-1800441720));
var popover_QMARK_ = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(false);
var btn = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var popover = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var open_popover = (function (){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["showing popover"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["btn:",cljs.core.deref(btn)], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["popover: ",cljs.core.deref(popover)], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["placement: ",placement], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["popper: ",module$node_modules$$popperjs$core$dist$cjs$popper.createPopper], 0));

module$node_modules$$popperjs$core$dist$cjs$popper.createPopper(cljs.core.deref(btn),cljs.core.deref(popover),({"placement": placement}));

return cljs.core.reset_BANG_(popover_QMARK_,true);
});
var close_popover = (function (){
return cljs.core.reset_BANG_(popover_QMARK_,false);
});
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"flex flex-wrap"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"w-full text-center"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"className","className",-1983287057),["bg-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(color),"-500 text-white ","active:bg-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(color),"-600 ","font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1"].join(''),new cljs.core.Keyword(null,"type","type",1174270348),"button",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
if(cljs.core.truth_(cljs.core.deref(popover_QMARK_))){
return close_popover();
} else {
return open_popover();
}
}),new cljs.core.Keyword(null,"ref","ref",1289896967),(function (p1__54577_SHARP_){
return cljs.core.reset_BANG_(btn,p1__54577_SHARP_);
})], null),button_text], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),[(cljs.core.truth_(cljs.core.deref(popover_QMARK_))?null:"hidden "),"bg-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(color),"-600 border-0 mr-3 block z-50 font-normal leading-normal text-sm max-w-xs text-left no-underline break-words rounded-lg"].join(''),new cljs.core.Keyword(null,"ref","ref",1289896967),(function (p1__54579_SHARP_){
return cljs.core.reset_BANG_(popover,p1__54579_SHARP_);
})], null),child], null)], null)], null)], null);
});
});

//# sourceMappingURL=pinkgorilla.layout.popover.js.map
