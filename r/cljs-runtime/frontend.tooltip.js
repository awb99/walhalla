goog.provide('frontend.tooltip');
frontend.tooltip.box_with_title = (function frontend$tooltip$box_with_title(var_args){
var args__5775__auto__ = [];
var len__5769__auto___52311 = arguments.length;
var i__5770__auto___52312 = (0);
while(true){
if((i__5770__auto___52312 < len__5769__auto___52311)){
args__5775__auto__.push((arguments[i__5770__auto___52312]));

var G__52316 = (i__5770__auto___52312 + (1));
i__5770__auto___52312 = G__52316;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return frontend.tooltip.box_with_title.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(frontend.tooltip.box_with_title.cljs$core$IFn$_invoke$arity$variadic = (function (p__52284,children){
var map__52285 = p__52284;
var map__52285__$1 = cljs.core.__destructure_map(map__52285);
var title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52285__$1,new cljs.core.Keyword(null,"title","title",636505583));
var color = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52285__$1,new cljs.core.Keyword(null,"color","color",1011675173));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),["bg-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(color),"-600 text-white opacity-75 font-semibold p-3 mb-0 border-b border-solid border-gray-200 uppercase rounded-t-lg"].join('')], null),title], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"text-white p-3"], null),children], null)], null);
}));

(frontend.tooltip.box_with_title.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(frontend.tooltip.box_with_title.cljs$lang$applyTo = (function (seq52282){
var G__52283 = cljs.core.first(seq52282);
var seq52282__$1 = cljs.core.next(seq52282);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__52283,seq52282__$1);
}));

frontend.tooltip.with_tooltip = (function frontend$tooltip$with_tooltip(var_args){
var args__5775__auto__ = [];
var len__5769__auto___52318 = arguments.length;
var i__5770__auto___52319 = (0);
while(true){
if((i__5770__auto___52319 < len__5769__auto___52318)){
args__5775__auto__.push((arguments[i__5770__auto___52319]));

var G__52320 = (i__5770__auto___52319 + (1));
i__5770__auto___52319 = G__52320;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return frontend.tooltip.with_tooltip.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(frontend.tooltip.with_tooltip.cljs$core$IFn$_invoke$arity$variadic = (function (text,children){
var showing_QMARK_ = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(false);
var el_parent = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var el_tooltip = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var open_tooltip = (function() { 
var G__52321__delegate = function (args){
return cljs.core.reset_BANG_(showing_QMARK_,true);
};
var G__52321 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__52322__i = 0, G__52322__a = new Array(arguments.length -  0);
while (G__52322__i < G__52322__a.length) {G__52322__a[G__52322__i] = arguments[G__52322__i + 0]; ++G__52322__i;}
  args = new cljs.core.IndexedSeq(G__52322__a,0,null);
} 
return G__52321__delegate.call(this,args);};
G__52321.cljs$lang$maxFixedArity = 0;
G__52321.cljs$lang$applyTo = (function (arglist__52323){
var args = cljs.core.seq(arglist__52323);
return G__52321__delegate(args);
});
G__52321.cljs$core$IFn$_invoke$arity$variadic = G__52321__delegate;
return G__52321;
})()
;
var close_tooltip = (function (_AMPERSAND_args){
return cljs.core.reset_BANG_(showing_QMARK_,false);
});
return (function() { 
var G__52324__delegate = function (text__$1,children__$1){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.inline-block","div.inline-block",-502349916),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"on-mouse-enter","on-mouse-enter",-1664921661),open_tooltip,new cljs.core.Keyword(null,"on-mouse-leave","on-mouse-leave",-1864319528),close_tooltip,new cljs.core.Keyword(null,"ref","ref",1289896967),(function (p1__52286_SHARP_){
return cljs.core.reset_BANG_(el_parent,p1__52286_SHARP_);
})], null),(cljs.core.truth_(cljs.core.deref(showing_QMARK_))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"top","top",-1856271961),"40px"], null),new cljs.core.Keyword(null,"class","class",-2030961996),"absolute bg-blue-300 p-2 top-3 border-0 mr-3 block z-50 font-normal leading-normal text-sm max-w-xs text-left no-underline break-words rounded-lg",new cljs.core.Keyword(null,"ref","ref",1289896967),(function (p1__52287_SHARP_){
return cljs.core.reset_BANG_(el_tooltip,p1__52287_SHARP_);
})], null),text__$1], null):null)], null),children__$1);
};
var G__52324 = function (text__$1,var_args){
var children__$1 = null;
if (arguments.length > 1) {
var G__52325__i = 0, G__52325__a = new Array(arguments.length -  1);
while (G__52325__i < G__52325__a.length) {G__52325__a[G__52325__i] = arguments[G__52325__i + 1]; ++G__52325__i;}
  children__$1 = new cljs.core.IndexedSeq(G__52325__a,0,null);
} 
return G__52324__delegate.call(this,text__$1,children__$1);};
G__52324.cljs$lang$maxFixedArity = 1;
G__52324.cljs$lang$applyTo = (function (arglist__52326){
var text__$1 = cljs.core.first(arglist__52326);
var children__$1 = cljs.core.rest(arglist__52326);
return G__52324__delegate(text__$1,children__$1);
});
G__52324.cljs$core$IFn$_invoke$arity$variadic = G__52324__delegate;
return G__52324;
})()
;
}));

(frontend.tooltip.with_tooltip.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(frontend.tooltip.with_tooltip.cljs$lang$applyTo = (function (seq52288){
var G__52289 = cljs.core.first(seq52288);
var seq52288__$1 = cljs.core.next(seq52288);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__52289,seq52288__$1);
}));


//# sourceMappingURL=frontend.tooltip.js.map
