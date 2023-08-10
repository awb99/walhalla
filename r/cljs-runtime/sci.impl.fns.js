goog.provide('sci.impl.fns');
sci.impl.fns.fun = (function sci$impl$fns$fun(var_args){
var G__64326 = arguments.length;
switch (G__64326) {
case 5:
return sci.impl.fns.fun.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 11:
return sci.impl.fns.fun.cljs$core$IFn$_invoke$arity$11((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]),(arguments[(6)]),(arguments[(7)]),(arguments[(8)]),(arguments[(9)]),(arguments[(10)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sci.impl.fns.fun.cljs$core$IFn$_invoke$arity$5 = (function (ctx,enclosed_array,fn_body,fn_name,macro_QMARK_){
return sci.impl.fns.fun.cljs$core$IFn$_invoke$arity$11(ctx,enclosed_array,fn_body,fn_name,macro_QMARK_,new cljs.core.Keyword(null,"fixed-arity","fixed-arity",1586445869).cljs$core$IFn$_invoke$arity$1(fn_body),new cljs.core.Keyword(null,"copy-enclosed->invocation","copy-enclosed->invocation",-1322388729).cljs$core$IFn$_invoke$arity$1(fn_body),new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(fn_body),new cljs.core.Keyword(null,"invoc-size","invoc-size",2053298058).cljs$core$IFn$_invoke$arity$1(fn_body),sci.impl.utils.current_ns_name(),new cljs.core.Keyword(null,"vararg-idx","vararg-idx",-590991228).cljs$core$IFn$_invoke$arity$1(fn_body));
}));

(sci.impl.fns.fun.cljs$core$IFn$_invoke$arity$11 = (function (ctx,enclosed_array,fn_body,fn_name,macro_QMARK_,fixed_arity,enclosed__GT_invocation,body,invoc_size,nsm,vararg_idx){
var f = (cljs.core.truth_(vararg_idx)?(function (){var G__64336 = fixed_arity;
switch (G__64336) {
case (0):
return (function() { 
var sci$impl$fns$arity_0__delegate = function (G__64338){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[vararg_idx] = G__64338);

while(true){
var ret__63695__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__63695__auto__)){
continue;
} else {
return ret__63695__auto__;
}
break;
}
};
var sci$impl$fns$arity_0 = function (var_args){
var G__64338 = null;
if (arguments.length > 0) {
var G__65130__i = 0, G__65130__a = new Array(arguments.length -  0);
while (G__65130__i < G__65130__a.length) {G__65130__a[G__65130__i] = arguments[G__65130__i + 0]; ++G__65130__i;}
  G__64338 = new cljs.core.IndexedSeq(G__65130__a,0,null);
} 
return sci$impl$fns$arity_0__delegate.call(this,G__64338);};
sci$impl$fns$arity_0.cljs$lang$maxFixedArity = 0;
sci$impl$fns$arity_0.cljs$lang$applyTo = (function (arglist__65131){
var G__64338 = cljs.core.seq(arglist__65131);
return sci$impl$fns$arity_0__delegate(G__64338);
});
sci$impl$fns$arity_0.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$arity_0__delegate;
return sci$impl$fns$arity_0;
})()
;

break;
case (1):
return (function() { 
var sci$impl$fns$arity_1__delegate = function (G__64343,G__64344){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__64343);

(invoc_array[vararg_idx] = G__64344);

while(true){
var ret__63697__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__63697__auto__)){
continue;
} else {
return ret__63697__auto__;
}
break;
}
};
var sci$impl$fns$arity_1 = function (G__64343,var_args){
var G__64344 = null;
if (arguments.length > 1) {
var G__65132__i = 0, G__65132__a = new Array(arguments.length -  1);
while (G__65132__i < G__65132__a.length) {G__65132__a[G__65132__i] = arguments[G__65132__i + 1]; ++G__65132__i;}
  G__64344 = new cljs.core.IndexedSeq(G__65132__a,0,null);
} 
return sci$impl$fns$arity_1__delegate.call(this,G__64343,G__64344);};
sci$impl$fns$arity_1.cljs$lang$maxFixedArity = 1;
sci$impl$fns$arity_1.cljs$lang$applyTo = (function (arglist__65133){
var G__64343 = cljs.core.first(arglist__65133);
var G__64344 = cljs.core.rest(arglist__65133);
return sci$impl$fns$arity_1__delegate(G__64343,G__64344);
});
sci$impl$fns$arity_1.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$arity_1__delegate;
return sci$impl$fns$arity_1;
})()
;

break;
case (2):
return (function() { 
var sci$impl$fns$arity_2__delegate = function (G__64351,G__64352,G__64353){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__64351);

(invoc_array[(1)] = G__64352);

(invoc_array[vararg_idx] = G__64353);

while(true){
var ret__63697__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__63697__auto__)){
continue;
} else {
return ret__63697__auto__;
}
break;
}
};
var sci$impl$fns$arity_2 = function (G__64351,G__64352,var_args){
var G__64353 = null;
if (arguments.length > 2) {
var G__65136__i = 0, G__65136__a = new Array(arguments.length -  2);
while (G__65136__i < G__65136__a.length) {G__65136__a[G__65136__i] = arguments[G__65136__i + 2]; ++G__65136__i;}
  G__64353 = new cljs.core.IndexedSeq(G__65136__a,0,null);
} 
return sci$impl$fns$arity_2__delegate.call(this,G__64351,G__64352,G__64353);};
sci$impl$fns$arity_2.cljs$lang$maxFixedArity = 2;
sci$impl$fns$arity_2.cljs$lang$applyTo = (function (arglist__65137){
var G__64351 = cljs.core.first(arglist__65137);
arglist__65137 = cljs.core.next(arglist__65137);
var G__64352 = cljs.core.first(arglist__65137);
var G__64353 = cljs.core.rest(arglist__65137);
return sci$impl$fns$arity_2__delegate(G__64351,G__64352,G__64353);
});
sci$impl$fns$arity_2.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$arity_2__delegate;
return sci$impl$fns$arity_2;
})()
;

break;
case (3):
return (function() { 
var sci$impl$fns$arity_3__delegate = function (G__64355,G__64356,G__64357,G__64358){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__64355);

(invoc_array[(1)] = G__64356);

(invoc_array[(2)] = G__64357);

(invoc_array[vararg_idx] = G__64358);

while(true){
var ret__63697__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__63697__auto__)){
continue;
} else {
return ret__63697__auto__;
}
break;
}
};
var sci$impl$fns$arity_3 = function (G__64355,G__64356,G__64357,var_args){
var G__64358 = null;
if (arguments.length > 3) {
var G__65148__i = 0, G__65148__a = new Array(arguments.length -  3);
while (G__65148__i < G__65148__a.length) {G__65148__a[G__65148__i] = arguments[G__65148__i + 3]; ++G__65148__i;}
  G__64358 = new cljs.core.IndexedSeq(G__65148__a,0,null);
} 
return sci$impl$fns$arity_3__delegate.call(this,G__64355,G__64356,G__64357,G__64358);};
sci$impl$fns$arity_3.cljs$lang$maxFixedArity = 3;
sci$impl$fns$arity_3.cljs$lang$applyTo = (function (arglist__65150){
var G__64355 = cljs.core.first(arglist__65150);
arglist__65150 = cljs.core.next(arglist__65150);
var G__64356 = cljs.core.first(arglist__65150);
arglist__65150 = cljs.core.next(arglist__65150);
var G__64357 = cljs.core.first(arglist__65150);
var G__64358 = cljs.core.rest(arglist__65150);
return sci$impl$fns$arity_3__delegate(G__64355,G__64356,G__64357,G__64358);
});
sci$impl$fns$arity_3.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$arity_3__delegate;
return sci$impl$fns$arity_3;
})()
;

break;
case (4):
return (function() { 
var sci$impl$fns$arity_4__delegate = function (G__64360,G__64361,G__64362,G__64363,G__64364){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__64360);

(invoc_array[(1)] = G__64361);

(invoc_array[(2)] = G__64362);

(invoc_array[(3)] = G__64363);

(invoc_array[vararg_idx] = G__64364);

while(true){
var ret__63697__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__63697__auto__)){
continue;
} else {
return ret__63697__auto__;
}
break;
}
};
var sci$impl$fns$arity_4 = function (G__64360,G__64361,G__64362,G__64363,var_args){
var G__64364 = null;
if (arguments.length > 4) {
var G__65167__i = 0, G__65167__a = new Array(arguments.length -  4);
while (G__65167__i < G__65167__a.length) {G__65167__a[G__65167__i] = arguments[G__65167__i + 4]; ++G__65167__i;}
  G__64364 = new cljs.core.IndexedSeq(G__65167__a,0,null);
} 
return sci$impl$fns$arity_4__delegate.call(this,G__64360,G__64361,G__64362,G__64363,G__64364);};
sci$impl$fns$arity_4.cljs$lang$maxFixedArity = 4;
sci$impl$fns$arity_4.cljs$lang$applyTo = (function (arglist__65172){
var G__64360 = cljs.core.first(arglist__65172);
arglist__65172 = cljs.core.next(arglist__65172);
var G__64361 = cljs.core.first(arglist__65172);
arglist__65172 = cljs.core.next(arglist__65172);
var G__64362 = cljs.core.first(arglist__65172);
arglist__65172 = cljs.core.next(arglist__65172);
var G__64363 = cljs.core.first(arglist__65172);
var G__64364 = cljs.core.rest(arglist__65172);
return sci$impl$fns$arity_4__delegate(G__64360,G__64361,G__64362,G__64363,G__64364);
});
sci$impl$fns$arity_4.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$arity_4__delegate;
return sci$impl$fns$arity_4;
})()
;

break;
case (5):
return (function() { 
var sci$impl$fns$arity_5__delegate = function (G__64380,G__64381,G__64382,G__64383,G__64384,G__64385){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__64380);

(invoc_array[(1)] = G__64381);

(invoc_array[(2)] = G__64382);

(invoc_array[(3)] = G__64383);

(invoc_array[(4)] = G__64384);

(invoc_array[vararg_idx] = G__64385);

while(true){
var ret__63697__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__63697__auto__)){
continue;
} else {
return ret__63697__auto__;
}
break;
}
};
var sci$impl$fns$arity_5 = function (G__64380,G__64381,G__64382,G__64383,G__64384,var_args){
var G__64385 = null;
if (arguments.length > 5) {
var G__65183__i = 0, G__65183__a = new Array(arguments.length -  5);
while (G__65183__i < G__65183__a.length) {G__65183__a[G__65183__i] = arguments[G__65183__i + 5]; ++G__65183__i;}
  G__64385 = new cljs.core.IndexedSeq(G__65183__a,0,null);
} 
return sci$impl$fns$arity_5__delegate.call(this,G__64380,G__64381,G__64382,G__64383,G__64384,G__64385);};
sci$impl$fns$arity_5.cljs$lang$maxFixedArity = 5;
sci$impl$fns$arity_5.cljs$lang$applyTo = (function (arglist__65188){
var G__64380 = cljs.core.first(arglist__65188);
arglist__65188 = cljs.core.next(arglist__65188);
var G__64381 = cljs.core.first(arglist__65188);
arglist__65188 = cljs.core.next(arglist__65188);
var G__64382 = cljs.core.first(arglist__65188);
arglist__65188 = cljs.core.next(arglist__65188);
var G__64383 = cljs.core.first(arglist__65188);
arglist__65188 = cljs.core.next(arglist__65188);
var G__64384 = cljs.core.first(arglist__65188);
var G__64385 = cljs.core.rest(arglist__65188);
return sci$impl$fns$arity_5__delegate(G__64380,G__64381,G__64382,G__64383,G__64384,G__64385);
});
sci$impl$fns$arity_5.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$arity_5__delegate;
return sci$impl$fns$arity_5;
})()
;

break;
case (6):
return (function() { 
var sci$impl$fns$arity_6__delegate = function (G__64394,G__64395,G__64396,G__64397,G__64398,G__64399,G__64400){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__64394);

(invoc_array[(1)] = G__64395);

(invoc_array[(2)] = G__64396);

(invoc_array[(3)] = G__64397);

(invoc_array[(4)] = G__64398);

(invoc_array[(5)] = G__64399);

(invoc_array[vararg_idx] = G__64400);

while(true){
var ret__63697__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__63697__auto__)){
continue;
} else {
return ret__63697__auto__;
}
break;
}
};
var sci$impl$fns$arity_6 = function (G__64394,G__64395,G__64396,G__64397,G__64398,G__64399,var_args){
var G__64400 = null;
if (arguments.length > 6) {
var G__65210__i = 0, G__65210__a = new Array(arguments.length -  6);
while (G__65210__i < G__65210__a.length) {G__65210__a[G__65210__i] = arguments[G__65210__i + 6]; ++G__65210__i;}
  G__64400 = new cljs.core.IndexedSeq(G__65210__a,0,null);
} 
return sci$impl$fns$arity_6__delegate.call(this,G__64394,G__64395,G__64396,G__64397,G__64398,G__64399,G__64400);};
sci$impl$fns$arity_6.cljs$lang$maxFixedArity = 6;
sci$impl$fns$arity_6.cljs$lang$applyTo = (function (arglist__65211){
var G__64394 = cljs.core.first(arglist__65211);
arglist__65211 = cljs.core.next(arglist__65211);
var G__64395 = cljs.core.first(arglist__65211);
arglist__65211 = cljs.core.next(arglist__65211);
var G__64396 = cljs.core.first(arglist__65211);
arglist__65211 = cljs.core.next(arglist__65211);
var G__64397 = cljs.core.first(arglist__65211);
arglist__65211 = cljs.core.next(arglist__65211);
var G__64398 = cljs.core.first(arglist__65211);
arglist__65211 = cljs.core.next(arglist__65211);
var G__64399 = cljs.core.first(arglist__65211);
var G__64400 = cljs.core.rest(arglist__65211);
return sci$impl$fns$arity_6__delegate(G__64394,G__64395,G__64396,G__64397,G__64398,G__64399,G__64400);
});
sci$impl$fns$arity_6.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$arity_6__delegate;
return sci$impl$fns$arity_6;
})()
;

break;
case (7):
return (function() { 
var sci$impl$fns$arity_7__delegate = function (G__64414,G__64415,G__64416,G__64417,G__64418,G__64419,G__64420,G__64421){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__64414);

(invoc_array[(1)] = G__64415);

(invoc_array[(2)] = G__64416);

(invoc_array[(3)] = G__64417);

(invoc_array[(4)] = G__64418);

(invoc_array[(5)] = G__64419);

(invoc_array[(6)] = G__64420);

(invoc_array[vararg_idx] = G__64421);

while(true){
var ret__63697__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__63697__auto__)){
continue;
} else {
return ret__63697__auto__;
}
break;
}
};
var sci$impl$fns$arity_7 = function (G__64414,G__64415,G__64416,G__64417,G__64418,G__64419,G__64420,var_args){
var G__64421 = null;
if (arguments.length > 7) {
var G__65217__i = 0, G__65217__a = new Array(arguments.length -  7);
while (G__65217__i < G__65217__a.length) {G__65217__a[G__65217__i] = arguments[G__65217__i + 7]; ++G__65217__i;}
  G__64421 = new cljs.core.IndexedSeq(G__65217__a,0,null);
} 
return sci$impl$fns$arity_7__delegate.call(this,G__64414,G__64415,G__64416,G__64417,G__64418,G__64419,G__64420,G__64421);};
sci$impl$fns$arity_7.cljs$lang$maxFixedArity = 7;
sci$impl$fns$arity_7.cljs$lang$applyTo = (function (arglist__65219){
var G__64414 = cljs.core.first(arglist__65219);
arglist__65219 = cljs.core.next(arglist__65219);
var G__64415 = cljs.core.first(arglist__65219);
arglist__65219 = cljs.core.next(arglist__65219);
var G__64416 = cljs.core.first(arglist__65219);
arglist__65219 = cljs.core.next(arglist__65219);
var G__64417 = cljs.core.first(arglist__65219);
arglist__65219 = cljs.core.next(arglist__65219);
var G__64418 = cljs.core.first(arglist__65219);
arglist__65219 = cljs.core.next(arglist__65219);
var G__64419 = cljs.core.first(arglist__65219);
arglist__65219 = cljs.core.next(arglist__65219);
var G__64420 = cljs.core.first(arglist__65219);
var G__64421 = cljs.core.rest(arglist__65219);
return sci$impl$fns$arity_7__delegate(G__64414,G__64415,G__64416,G__64417,G__64418,G__64419,G__64420,G__64421);
});
sci$impl$fns$arity_7.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$arity_7__delegate;
return sci$impl$fns$arity_7;
})()
;

break;
case (8):
return (function() { 
var sci$impl$fns$arity_8__delegate = function (G__64426,G__64427,G__64428,G__64429,G__64430,G__64431,G__64432,G__64433,G__64434){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__64426);

(invoc_array[(1)] = G__64427);

(invoc_array[(2)] = G__64428);

(invoc_array[(3)] = G__64429);

(invoc_array[(4)] = G__64430);

(invoc_array[(5)] = G__64431);

(invoc_array[(6)] = G__64432);

(invoc_array[(7)] = G__64433);

(invoc_array[vararg_idx] = G__64434);

while(true){
var ret__63697__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__63697__auto__)){
continue;
} else {
return ret__63697__auto__;
}
break;
}
};
var sci$impl$fns$arity_8 = function (G__64426,G__64427,G__64428,G__64429,G__64430,G__64431,G__64432,G__64433,var_args){
var G__64434 = null;
if (arguments.length > 8) {
var G__65223__i = 0, G__65223__a = new Array(arguments.length -  8);
while (G__65223__i < G__65223__a.length) {G__65223__a[G__65223__i] = arguments[G__65223__i + 8]; ++G__65223__i;}
  G__64434 = new cljs.core.IndexedSeq(G__65223__a,0,null);
} 
return sci$impl$fns$arity_8__delegate.call(this,G__64426,G__64427,G__64428,G__64429,G__64430,G__64431,G__64432,G__64433,G__64434);};
sci$impl$fns$arity_8.cljs$lang$maxFixedArity = 8;
sci$impl$fns$arity_8.cljs$lang$applyTo = (function (arglist__65224){
var G__64426 = cljs.core.first(arglist__65224);
arglist__65224 = cljs.core.next(arglist__65224);
var G__64427 = cljs.core.first(arglist__65224);
arglist__65224 = cljs.core.next(arglist__65224);
var G__64428 = cljs.core.first(arglist__65224);
arglist__65224 = cljs.core.next(arglist__65224);
var G__64429 = cljs.core.first(arglist__65224);
arglist__65224 = cljs.core.next(arglist__65224);
var G__64430 = cljs.core.first(arglist__65224);
arglist__65224 = cljs.core.next(arglist__65224);
var G__64431 = cljs.core.first(arglist__65224);
arglist__65224 = cljs.core.next(arglist__65224);
var G__64432 = cljs.core.first(arglist__65224);
arglist__65224 = cljs.core.next(arglist__65224);
var G__64433 = cljs.core.first(arglist__65224);
var G__64434 = cljs.core.rest(arglist__65224);
return sci$impl$fns$arity_8__delegate(G__64426,G__64427,G__64428,G__64429,G__64430,G__64431,G__64432,G__64433,G__64434);
});
sci$impl$fns$arity_8.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$arity_8__delegate;
return sci$impl$fns$arity_8;
})()
;

break;
case (9):
return (function() { 
var sci$impl$fns$arity_9__delegate = function (G__64445,G__64446,G__64447,G__64448,G__64449,G__64450,G__64451,G__64452,G__64453,G__64454){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__64445);

(invoc_array[(1)] = G__64446);

(invoc_array[(2)] = G__64447);

(invoc_array[(3)] = G__64448);

(invoc_array[(4)] = G__64449);

(invoc_array[(5)] = G__64450);

(invoc_array[(6)] = G__64451);

(invoc_array[(7)] = G__64452);

(invoc_array[(8)] = G__64453);

(invoc_array[vararg_idx] = G__64454);

while(true){
var ret__63697__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__63697__auto__)){
continue;
} else {
return ret__63697__auto__;
}
break;
}
};
var sci$impl$fns$arity_9 = function (G__64445,G__64446,G__64447,G__64448,G__64449,G__64450,G__64451,G__64452,G__64453,var_args){
var G__64454 = null;
if (arguments.length > 9) {
var G__65228__i = 0, G__65228__a = new Array(arguments.length -  9);
while (G__65228__i < G__65228__a.length) {G__65228__a[G__65228__i] = arguments[G__65228__i + 9]; ++G__65228__i;}
  G__64454 = new cljs.core.IndexedSeq(G__65228__a,0,null);
} 
return sci$impl$fns$arity_9__delegate.call(this,G__64445,G__64446,G__64447,G__64448,G__64449,G__64450,G__64451,G__64452,G__64453,G__64454);};
sci$impl$fns$arity_9.cljs$lang$maxFixedArity = 9;
sci$impl$fns$arity_9.cljs$lang$applyTo = (function (arglist__65229){
var G__64445 = cljs.core.first(arglist__65229);
arglist__65229 = cljs.core.next(arglist__65229);
var G__64446 = cljs.core.first(arglist__65229);
arglist__65229 = cljs.core.next(arglist__65229);
var G__64447 = cljs.core.first(arglist__65229);
arglist__65229 = cljs.core.next(arglist__65229);
var G__64448 = cljs.core.first(arglist__65229);
arglist__65229 = cljs.core.next(arglist__65229);
var G__64449 = cljs.core.first(arglist__65229);
arglist__65229 = cljs.core.next(arglist__65229);
var G__64450 = cljs.core.first(arglist__65229);
arglist__65229 = cljs.core.next(arglist__65229);
var G__64451 = cljs.core.first(arglist__65229);
arglist__65229 = cljs.core.next(arglist__65229);
var G__64452 = cljs.core.first(arglist__65229);
arglist__65229 = cljs.core.next(arglist__65229);
var G__64453 = cljs.core.first(arglist__65229);
var G__64454 = cljs.core.rest(arglist__65229);
return sci$impl$fns$arity_9__delegate(G__64445,G__64446,G__64447,G__64448,G__64449,G__64450,G__64451,G__64452,G__64453,G__64454);
});
sci$impl$fns$arity_9.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$arity_9__delegate;
return sci$impl$fns$arity_9;
})()
;

break;
case (10):
return (function() { 
var sci$impl$fns$arity_10__delegate = function (G__64462,G__64463,G__64464,G__64465,G__64466,G__64467,G__64468,G__64469,G__64470,G__64471,G__64472){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__64462);

(invoc_array[(1)] = G__64463);

(invoc_array[(2)] = G__64464);

(invoc_array[(3)] = G__64465);

(invoc_array[(4)] = G__64466);

(invoc_array[(5)] = G__64467);

(invoc_array[(6)] = G__64468);

(invoc_array[(7)] = G__64469);

(invoc_array[(8)] = G__64470);

(invoc_array[(9)] = G__64471);

(invoc_array[vararg_idx] = G__64472);

while(true){
var ret__63697__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__63697__auto__)){
continue;
} else {
return ret__63697__auto__;
}
break;
}
};
var sci$impl$fns$arity_10 = function (G__64462,G__64463,G__64464,G__64465,G__64466,G__64467,G__64468,G__64469,G__64470,G__64471,var_args){
var G__64472 = null;
if (arguments.length > 10) {
var G__65230__i = 0, G__65230__a = new Array(arguments.length -  10);
while (G__65230__i < G__65230__a.length) {G__65230__a[G__65230__i] = arguments[G__65230__i + 10]; ++G__65230__i;}
  G__64472 = new cljs.core.IndexedSeq(G__65230__a,0,null);
} 
return sci$impl$fns$arity_10__delegate.call(this,G__64462,G__64463,G__64464,G__64465,G__64466,G__64467,G__64468,G__64469,G__64470,G__64471,G__64472);};
sci$impl$fns$arity_10.cljs$lang$maxFixedArity = 10;
sci$impl$fns$arity_10.cljs$lang$applyTo = (function (arglist__65232){
var G__64462 = cljs.core.first(arglist__65232);
arglist__65232 = cljs.core.next(arglist__65232);
var G__64463 = cljs.core.first(arglist__65232);
arglist__65232 = cljs.core.next(arglist__65232);
var G__64464 = cljs.core.first(arglist__65232);
arglist__65232 = cljs.core.next(arglist__65232);
var G__64465 = cljs.core.first(arglist__65232);
arglist__65232 = cljs.core.next(arglist__65232);
var G__64466 = cljs.core.first(arglist__65232);
arglist__65232 = cljs.core.next(arglist__65232);
var G__64467 = cljs.core.first(arglist__65232);
arglist__65232 = cljs.core.next(arglist__65232);
var G__64468 = cljs.core.first(arglist__65232);
arglist__65232 = cljs.core.next(arglist__65232);
var G__64469 = cljs.core.first(arglist__65232);
arglist__65232 = cljs.core.next(arglist__65232);
var G__64470 = cljs.core.first(arglist__65232);
arglist__65232 = cljs.core.next(arglist__65232);
var G__64471 = cljs.core.first(arglist__65232);
var G__64472 = cljs.core.rest(arglist__65232);
return sci$impl$fns$arity_10__delegate(G__64462,G__64463,G__64464,G__64465,G__64466,G__64467,G__64468,G__64469,G__64470,G__64471,G__64472);
});
sci$impl$fns$arity_10.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$arity_10__delegate;
return sci$impl$fns$arity_10;
})()
;

break;
case (11):
return (function() { 
var sci$impl$fns$arity_11__delegate = function (G__64480,G__64481,G__64482,G__64483,G__64484,G__64485,G__64486,G__64487,G__64488,G__64489,G__64490,G__64491){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__64480);

(invoc_array[(1)] = G__64481);

(invoc_array[(2)] = G__64482);

(invoc_array[(3)] = G__64483);

(invoc_array[(4)] = G__64484);

(invoc_array[(5)] = G__64485);

(invoc_array[(6)] = G__64486);

(invoc_array[(7)] = G__64487);

(invoc_array[(8)] = G__64488);

(invoc_array[(9)] = G__64489);

(invoc_array[(10)] = G__64490);

(invoc_array[vararg_idx] = G__64491);

while(true){
var ret__63697__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__63697__auto__)){
continue;
} else {
return ret__63697__auto__;
}
break;
}
};
var sci$impl$fns$arity_11 = function (G__64480,G__64481,G__64482,G__64483,G__64484,G__64485,G__64486,G__64487,G__64488,G__64489,G__64490,var_args){
var G__64491 = null;
if (arguments.length > 11) {
var G__65233__i = 0, G__65233__a = new Array(arguments.length -  11);
while (G__65233__i < G__65233__a.length) {G__65233__a[G__65233__i] = arguments[G__65233__i + 11]; ++G__65233__i;}
  G__64491 = new cljs.core.IndexedSeq(G__65233__a,0,null);
} 
return sci$impl$fns$arity_11__delegate.call(this,G__64480,G__64481,G__64482,G__64483,G__64484,G__64485,G__64486,G__64487,G__64488,G__64489,G__64490,G__64491);};
sci$impl$fns$arity_11.cljs$lang$maxFixedArity = 11;
sci$impl$fns$arity_11.cljs$lang$applyTo = (function (arglist__65234){
var G__64480 = cljs.core.first(arglist__65234);
arglist__65234 = cljs.core.next(arglist__65234);
var G__64481 = cljs.core.first(arglist__65234);
arglist__65234 = cljs.core.next(arglist__65234);
var G__64482 = cljs.core.first(arglist__65234);
arglist__65234 = cljs.core.next(arglist__65234);
var G__64483 = cljs.core.first(arglist__65234);
arglist__65234 = cljs.core.next(arglist__65234);
var G__64484 = cljs.core.first(arglist__65234);
arglist__65234 = cljs.core.next(arglist__65234);
var G__64485 = cljs.core.first(arglist__65234);
arglist__65234 = cljs.core.next(arglist__65234);
var G__64486 = cljs.core.first(arglist__65234);
arglist__65234 = cljs.core.next(arglist__65234);
var G__64487 = cljs.core.first(arglist__65234);
arglist__65234 = cljs.core.next(arglist__65234);
var G__64488 = cljs.core.first(arglist__65234);
arglist__65234 = cljs.core.next(arglist__65234);
var G__64489 = cljs.core.first(arglist__65234);
arglist__65234 = cljs.core.next(arglist__65234);
var G__64490 = cljs.core.first(arglist__65234);
var G__64491 = cljs.core.rest(arglist__65234);
return sci$impl$fns$arity_11__delegate(G__64480,G__64481,G__64482,G__64483,G__64484,G__64485,G__64486,G__64487,G__64488,G__64489,G__64490,G__64491);
});
sci$impl$fns$arity_11.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$arity_11__delegate;
return sci$impl$fns$arity_11;
})()
;

break;
case (12):
return (function() { 
var sci$impl$fns$arity_12__delegate = function (G__64498,G__64499,G__64500,G__64501,G__64502,G__64503,G__64504,G__64505,G__64506,G__64507,G__64508,G__64509,G__64510){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__64498);

(invoc_array[(1)] = G__64499);

(invoc_array[(2)] = G__64500);

(invoc_array[(3)] = G__64501);

(invoc_array[(4)] = G__64502);

(invoc_array[(5)] = G__64503);

(invoc_array[(6)] = G__64504);

(invoc_array[(7)] = G__64505);

(invoc_array[(8)] = G__64506);

(invoc_array[(9)] = G__64507);

(invoc_array[(10)] = G__64508);

(invoc_array[(11)] = G__64509);

(invoc_array[vararg_idx] = G__64510);

while(true){
var ret__63697__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__63697__auto__)){
continue;
} else {
return ret__63697__auto__;
}
break;
}
};
var sci$impl$fns$arity_12 = function (G__64498,G__64499,G__64500,G__64501,G__64502,G__64503,G__64504,G__64505,G__64506,G__64507,G__64508,G__64509,var_args){
var G__64510 = null;
if (arguments.length > 12) {
var G__65238__i = 0, G__65238__a = new Array(arguments.length -  12);
while (G__65238__i < G__65238__a.length) {G__65238__a[G__65238__i] = arguments[G__65238__i + 12]; ++G__65238__i;}
  G__64510 = new cljs.core.IndexedSeq(G__65238__a,0,null);
} 
return sci$impl$fns$arity_12__delegate.call(this,G__64498,G__64499,G__64500,G__64501,G__64502,G__64503,G__64504,G__64505,G__64506,G__64507,G__64508,G__64509,G__64510);};
sci$impl$fns$arity_12.cljs$lang$maxFixedArity = 12;
sci$impl$fns$arity_12.cljs$lang$applyTo = (function (arglist__65239){
var G__64498 = cljs.core.first(arglist__65239);
arglist__65239 = cljs.core.next(arglist__65239);
var G__64499 = cljs.core.first(arglist__65239);
arglist__65239 = cljs.core.next(arglist__65239);
var G__64500 = cljs.core.first(arglist__65239);
arglist__65239 = cljs.core.next(arglist__65239);
var G__64501 = cljs.core.first(arglist__65239);
arglist__65239 = cljs.core.next(arglist__65239);
var G__64502 = cljs.core.first(arglist__65239);
arglist__65239 = cljs.core.next(arglist__65239);
var G__64503 = cljs.core.first(arglist__65239);
arglist__65239 = cljs.core.next(arglist__65239);
var G__64504 = cljs.core.first(arglist__65239);
arglist__65239 = cljs.core.next(arglist__65239);
var G__64505 = cljs.core.first(arglist__65239);
arglist__65239 = cljs.core.next(arglist__65239);
var G__64506 = cljs.core.first(arglist__65239);
arglist__65239 = cljs.core.next(arglist__65239);
var G__64507 = cljs.core.first(arglist__65239);
arglist__65239 = cljs.core.next(arglist__65239);
var G__64508 = cljs.core.first(arglist__65239);
arglist__65239 = cljs.core.next(arglist__65239);
var G__64509 = cljs.core.first(arglist__65239);
var G__64510 = cljs.core.rest(arglist__65239);
return sci$impl$fns$arity_12__delegate(G__64498,G__64499,G__64500,G__64501,G__64502,G__64503,G__64504,G__64505,G__64506,G__64507,G__64508,G__64509,G__64510);
});
sci$impl$fns$arity_12.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$arity_12__delegate;
return sci$impl$fns$arity_12;
})()
;

break;
case (13):
return (function() { 
var sci$impl$fns$arity_13__delegate = function (G__64517,G__64518,G__64519,G__64520,G__64521,G__64522,G__64523,G__64524,G__64525,G__64526,G__64527,G__64528,G__64529,G__64530){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__64517);

(invoc_array[(1)] = G__64518);

(invoc_array[(2)] = G__64519);

(invoc_array[(3)] = G__64520);

(invoc_array[(4)] = G__64521);

(invoc_array[(5)] = G__64522);

(invoc_array[(6)] = G__64523);

(invoc_array[(7)] = G__64524);

(invoc_array[(8)] = G__64525);

(invoc_array[(9)] = G__64526);

(invoc_array[(10)] = G__64527);

(invoc_array[(11)] = G__64528);

(invoc_array[(12)] = G__64529);

(invoc_array[vararg_idx] = G__64530);

while(true){
var ret__63697__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__63697__auto__)){
continue;
} else {
return ret__63697__auto__;
}
break;
}
};
var sci$impl$fns$arity_13 = function (G__64517,G__64518,G__64519,G__64520,G__64521,G__64522,G__64523,G__64524,G__64525,G__64526,G__64527,G__64528,G__64529,var_args){
var G__64530 = null;
if (arguments.length > 13) {
var G__65240__i = 0, G__65240__a = new Array(arguments.length -  13);
while (G__65240__i < G__65240__a.length) {G__65240__a[G__65240__i] = arguments[G__65240__i + 13]; ++G__65240__i;}
  G__64530 = new cljs.core.IndexedSeq(G__65240__a,0,null);
} 
return sci$impl$fns$arity_13__delegate.call(this,G__64517,G__64518,G__64519,G__64520,G__64521,G__64522,G__64523,G__64524,G__64525,G__64526,G__64527,G__64528,G__64529,G__64530);};
sci$impl$fns$arity_13.cljs$lang$maxFixedArity = 13;
sci$impl$fns$arity_13.cljs$lang$applyTo = (function (arglist__65241){
var G__64517 = cljs.core.first(arglist__65241);
arglist__65241 = cljs.core.next(arglist__65241);
var G__64518 = cljs.core.first(arglist__65241);
arglist__65241 = cljs.core.next(arglist__65241);
var G__64519 = cljs.core.first(arglist__65241);
arglist__65241 = cljs.core.next(arglist__65241);
var G__64520 = cljs.core.first(arglist__65241);
arglist__65241 = cljs.core.next(arglist__65241);
var G__64521 = cljs.core.first(arglist__65241);
arglist__65241 = cljs.core.next(arglist__65241);
var G__64522 = cljs.core.first(arglist__65241);
arglist__65241 = cljs.core.next(arglist__65241);
var G__64523 = cljs.core.first(arglist__65241);
arglist__65241 = cljs.core.next(arglist__65241);
var G__64524 = cljs.core.first(arglist__65241);
arglist__65241 = cljs.core.next(arglist__65241);
var G__64525 = cljs.core.first(arglist__65241);
arglist__65241 = cljs.core.next(arglist__65241);
var G__64526 = cljs.core.first(arglist__65241);
arglist__65241 = cljs.core.next(arglist__65241);
var G__64527 = cljs.core.first(arglist__65241);
arglist__65241 = cljs.core.next(arglist__65241);
var G__64528 = cljs.core.first(arglist__65241);
arglist__65241 = cljs.core.next(arglist__65241);
var G__64529 = cljs.core.first(arglist__65241);
var G__64530 = cljs.core.rest(arglist__65241);
return sci$impl$fns$arity_13__delegate(G__64517,G__64518,G__64519,G__64520,G__64521,G__64522,G__64523,G__64524,G__64525,G__64526,G__64527,G__64528,G__64529,G__64530);
});
sci$impl$fns$arity_13.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$arity_13__delegate;
return sci$impl$fns$arity_13;
})()
;

break;
case (14):
return (function() { 
var sci$impl$fns$arity_14__delegate = function (G__64539,G__64540,G__64541,G__64542,G__64543,G__64544,G__64545,G__64546,G__64547,G__64548,G__64549,G__64550,G__64551,G__64552,G__64553){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__64539);

(invoc_array[(1)] = G__64540);

(invoc_array[(2)] = G__64541);

(invoc_array[(3)] = G__64542);

(invoc_array[(4)] = G__64543);

(invoc_array[(5)] = G__64544);

(invoc_array[(6)] = G__64545);

(invoc_array[(7)] = G__64546);

(invoc_array[(8)] = G__64547);

(invoc_array[(9)] = G__64548);

(invoc_array[(10)] = G__64549);

(invoc_array[(11)] = G__64550);

(invoc_array[(12)] = G__64551);

(invoc_array[(13)] = G__64552);

(invoc_array[vararg_idx] = G__64553);

while(true){
var ret__63697__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__63697__auto__)){
continue;
} else {
return ret__63697__auto__;
}
break;
}
};
var sci$impl$fns$arity_14 = function (G__64539,G__64540,G__64541,G__64542,G__64543,G__64544,G__64545,G__64546,G__64547,G__64548,G__64549,G__64550,G__64551,G__64552,var_args){
var G__64553 = null;
if (arguments.length > 14) {
var G__65242__i = 0, G__65242__a = new Array(arguments.length -  14);
while (G__65242__i < G__65242__a.length) {G__65242__a[G__65242__i] = arguments[G__65242__i + 14]; ++G__65242__i;}
  G__64553 = new cljs.core.IndexedSeq(G__65242__a,0,null);
} 
return sci$impl$fns$arity_14__delegate.call(this,G__64539,G__64540,G__64541,G__64542,G__64543,G__64544,G__64545,G__64546,G__64547,G__64548,G__64549,G__64550,G__64551,G__64552,G__64553);};
sci$impl$fns$arity_14.cljs$lang$maxFixedArity = 14;
sci$impl$fns$arity_14.cljs$lang$applyTo = (function (arglist__65243){
var G__64539 = cljs.core.first(arglist__65243);
arglist__65243 = cljs.core.next(arglist__65243);
var G__64540 = cljs.core.first(arglist__65243);
arglist__65243 = cljs.core.next(arglist__65243);
var G__64541 = cljs.core.first(arglist__65243);
arglist__65243 = cljs.core.next(arglist__65243);
var G__64542 = cljs.core.first(arglist__65243);
arglist__65243 = cljs.core.next(arglist__65243);
var G__64543 = cljs.core.first(arglist__65243);
arglist__65243 = cljs.core.next(arglist__65243);
var G__64544 = cljs.core.first(arglist__65243);
arglist__65243 = cljs.core.next(arglist__65243);
var G__64545 = cljs.core.first(arglist__65243);
arglist__65243 = cljs.core.next(arglist__65243);
var G__64546 = cljs.core.first(arglist__65243);
arglist__65243 = cljs.core.next(arglist__65243);
var G__64547 = cljs.core.first(arglist__65243);
arglist__65243 = cljs.core.next(arglist__65243);
var G__64548 = cljs.core.first(arglist__65243);
arglist__65243 = cljs.core.next(arglist__65243);
var G__64549 = cljs.core.first(arglist__65243);
arglist__65243 = cljs.core.next(arglist__65243);
var G__64550 = cljs.core.first(arglist__65243);
arglist__65243 = cljs.core.next(arglist__65243);
var G__64551 = cljs.core.first(arglist__65243);
arglist__65243 = cljs.core.next(arglist__65243);
var G__64552 = cljs.core.first(arglist__65243);
var G__64553 = cljs.core.rest(arglist__65243);
return sci$impl$fns$arity_14__delegate(G__64539,G__64540,G__64541,G__64542,G__64543,G__64544,G__64545,G__64546,G__64547,G__64548,G__64549,G__64550,G__64551,G__64552,G__64553);
});
sci$impl$fns$arity_14.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$arity_14__delegate;
return sci$impl$fns$arity_14;
})()
;

break;
case (15):
return (function() { 
var sci$impl$fns$arity_15__delegate = function (G__64568,G__64569,G__64570,G__64571,G__64572,G__64573,G__64574,G__64575,G__64576,G__64577,G__64578,G__64579,G__64580,G__64581,G__64582,G__64583){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__64568);

(invoc_array[(1)] = G__64569);

(invoc_array[(2)] = G__64570);

(invoc_array[(3)] = G__64571);

(invoc_array[(4)] = G__64572);

(invoc_array[(5)] = G__64573);

(invoc_array[(6)] = G__64574);

(invoc_array[(7)] = G__64575);

(invoc_array[(8)] = G__64576);

(invoc_array[(9)] = G__64577);

(invoc_array[(10)] = G__64578);

(invoc_array[(11)] = G__64579);

(invoc_array[(12)] = G__64580);

(invoc_array[(13)] = G__64581);

(invoc_array[(14)] = G__64582);

(invoc_array[vararg_idx] = G__64583);

while(true){
var ret__63697__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__63697__auto__)){
continue;
} else {
return ret__63697__auto__;
}
break;
}
};
var sci$impl$fns$arity_15 = function (G__64568,G__64569,G__64570,G__64571,G__64572,G__64573,G__64574,G__64575,G__64576,G__64577,G__64578,G__64579,G__64580,G__64581,G__64582,var_args){
var G__64583 = null;
if (arguments.length > 15) {
var G__65247__i = 0, G__65247__a = new Array(arguments.length -  15);
while (G__65247__i < G__65247__a.length) {G__65247__a[G__65247__i] = arguments[G__65247__i + 15]; ++G__65247__i;}
  G__64583 = new cljs.core.IndexedSeq(G__65247__a,0,null);
} 
return sci$impl$fns$arity_15__delegate.call(this,G__64568,G__64569,G__64570,G__64571,G__64572,G__64573,G__64574,G__64575,G__64576,G__64577,G__64578,G__64579,G__64580,G__64581,G__64582,G__64583);};
sci$impl$fns$arity_15.cljs$lang$maxFixedArity = 15;
sci$impl$fns$arity_15.cljs$lang$applyTo = (function (arglist__65248){
var G__64568 = cljs.core.first(arglist__65248);
arglist__65248 = cljs.core.next(arglist__65248);
var G__64569 = cljs.core.first(arglist__65248);
arglist__65248 = cljs.core.next(arglist__65248);
var G__64570 = cljs.core.first(arglist__65248);
arglist__65248 = cljs.core.next(arglist__65248);
var G__64571 = cljs.core.first(arglist__65248);
arglist__65248 = cljs.core.next(arglist__65248);
var G__64572 = cljs.core.first(arglist__65248);
arglist__65248 = cljs.core.next(arglist__65248);
var G__64573 = cljs.core.first(arglist__65248);
arglist__65248 = cljs.core.next(arglist__65248);
var G__64574 = cljs.core.first(arglist__65248);
arglist__65248 = cljs.core.next(arglist__65248);
var G__64575 = cljs.core.first(arglist__65248);
arglist__65248 = cljs.core.next(arglist__65248);
var G__64576 = cljs.core.first(arglist__65248);
arglist__65248 = cljs.core.next(arglist__65248);
var G__64577 = cljs.core.first(arglist__65248);
arglist__65248 = cljs.core.next(arglist__65248);
var G__64578 = cljs.core.first(arglist__65248);
arglist__65248 = cljs.core.next(arglist__65248);
var G__64579 = cljs.core.first(arglist__65248);
arglist__65248 = cljs.core.next(arglist__65248);
var G__64580 = cljs.core.first(arglist__65248);
arglist__65248 = cljs.core.next(arglist__65248);
var G__64581 = cljs.core.first(arglist__65248);
arglist__65248 = cljs.core.next(arglist__65248);
var G__64582 = cljs.core.first(arglist__65248);
var G__64583 = cljs.core.rest(arglist__65248);
return sci$impl$fns$arity_15__delegate(G__64568,G__64569,G__64570,G__64571,G__64572,G__64573,G__64574,G__64575,G__64576,G__64577,G__64578,G__64579,G__64580,G__64581,G__64582,G__64583);
});
sci$impl$fns$arity_15.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$arity_15__delegate;
return sci$impl$fns$arity_15;
})()
;

break;
case (16):
return (function() { 
var sci$impl$fns$arity_16__delegate = function (G__64598,G__64599,G__64600,G__64601,G__64602,G__64603,G__64604,G__64605,G__64606,G__64607,G__64608,G__64609,G__64610,G__64611,G__64612,G__64613,G__64614){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__64598);

(invoc_array[(1)] = G__64599);

(invoc_array[(2)] = G__64600);

(invoc_array[(3)] = G__64601);

(invoc_array[(4)] = G__64602);

(invoc_array[(5)] = G__64603);

(invoc_array[(6)] = G__64604);

(invoc_array[(7)] = G__64605);

(invoc_array[(8)] = G__64606);

(invoc_array[(9)] = G__64607);

(invoc_array[(10)] = G__64608);

(invoc_array[(11)] = G__64609);

(invoc_array[(12)] = G__64610);

(invoc_array[(13)] = G__64611);

(invoc_array[(14)] = G__64612);

(invoc_array[(15)] = G__64613);

(invoc_array[vararg_idx] = G__64614);

while(true){
var ret__63697__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__63697__auto__)){
continue;
} else {
return ret__63697__auto__;
}
break;
}
};
var sci$impl$fns$arity_16 = function (G__64598,G__64599,G__64600,G__64601,G__64602,G__64603,G__64604,G__64605,G__64606,G__64607,G__64608,G__64609,G__64610,G__64611,G__64612,G__64613,var_args){
var G__64614 = null;
if (arguments.length > 16) {
var G__65249__i = 0, G__65249__a = new Array(arguments.length -  16);
while (G__65249__i < G__65249__a.length) {G__65249__a[G__65249__i] = arguments[G__65249__i + 16]; ++G__65249__i;}
  G__64614 = new cljs.core.IndexedSeq(G__65249__a,0,null);
} 
return sci$impl$fns$arity_16__delegate.call(this,G__64598,G__64599,G__64600,G__64601,G__64602,G__64603,G__64604,G__64605,G__64606,G__64607,G__64608,G__64609,G__64610,G__64611,G__64612,G__64613,G__64614);};
sci$impl$fns$arity_16.cljs$lang$maxFixedArity = 16;
sci$impl$fns$arity_16.cljs$lang$applyTo = (function (arglist__65250){
var G__64598 = cljs.core.first(arglist__65250);
arglist__65250 = cljs.core.next(arglist__65250);
var G__64599 = cljs.core.first(arglist__65250);
arglist__65250 = cljs.core.next(arglist__65250);
var G__64600 = cljs.core.first(arglist__65250);
arglist__65250 = cljs.core.next(arglist__65250);
var G__64601 = cljs.core.first(arglist__65250);
arglist__65250 = cljs.core.next(arglist__65250);
var G__64602 = cljs.core.first(arglist__65250);
arglist__65250 = cljs.core.next(arglist__65250);
var G__64603 = cljs.core.first(arglist__65250);
arglist__65250 = cljs.core.next(arglist__65250);
var G__64604 = cljs.core.first(arglist__65250);
arglist__65250 = cljs.core.next(arglist__65250);
var G__64605 = cljs.core.first(arglist__65250);
arglist__65250 = cljs.core.next(arglist__65250);
var G__64606 = cljs.core.first(arglist__65250);
arglist__65250 = cljs.core.next(arglist__65250);
var G__64607 = cljs.core.first(arglist__65250);
arglist__65250 = cljs.core.next(arglist__65250);
var G__64608 = cljs.core.first(arglist__65250);
arglist__65250 = cljs.core.next(arglist__65250);
var G__64609 = cljs.core.first(arglist__65250);
arglist__65250 = cljs.core.next(arglist__65250);
var G__64610 = cljs.core.first(arglist__65250);
arglist__65250 = cljs.core.next(arglist__65250);
var G__64611 = cljs.core.first(arglist__65250);
arglist__65250 = cljs.core.next(arglist__65250);
var G__64612 = cljs.core.first(arglist__65250);
arglist__65250 = cljs.core.next(arglist__65250);
var G__64613 = cljs.core.first(arglist__65250);
var G__64614 = cljs.core.rest(arglist__65250);
return sci$impl$fns$arity_16__delegate(G__64598,G__64599,G__64600,G__64601,G__64602,G__64603,G__64604,G__64605,G__64606,G__64607,G__64608,G__64609,G__64610,G__64611,G__64612,G__64613,G__64614);
});
sci$impl$fns$arity_16.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$arity_16__delegate;
return sci$impl$fns$arity_16;
})()
;

break;
case (17):
return (function() { 
var sci$impl$fns$arity_17__delegate = function (G__64622,G__64623,G__64624,G__64625,G__64626,G__64627,G__64628,G__64629,G__64630,G__64631,G__64632,G__64633,G__64634,G__64635,G__64636,G__64637,G__64638,G__64639){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__64622);

(invoc_array[(1)] = G__64623);

(invoc_array[(2)] = G__64624);

(invoc_array[(3)] = G__64625);

(invoc_array[(4)] = G__64626);

(invoc_array[(5)] = G__64627);

(invoc_array[(6)] = G__64628);

(invoc_array[(7)] = G__64629);

(invoc_array[(8)] = G__64630);

(invoc_array[(9)] = G__64631);

(invoc_array[(10)] = G__64632);

(invoc_array[(11)] = G__64633);

(invoc_array[(12)] = G__64634);

(invoc_array[(13)] = G__64635);

(invoc_array[(14)] = G__64636);

(invoc_array[(15)] = G__64637);

(invoc_array[(16)] = G__64638);

(invoc_array[vararg_idx] = G__64639);

while(true){
var ret__63697__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__63697__auto__)){
continue;
} else {
return ret__63697__auto__;
}
break;
}
};
var sci$impl$fns$arity_17 = function (G__64622,G__64623,G__64624,G__64625,G__64626,G__64627,G__64628,G__64629,G__64630,G__64631,G__64632,G__64633,G__64634,G__64635,G__64636,G__64637,G__64638,var_args){
var G__64639 = null;
if (arguments.length > 17) {
var G__65260__i = 0, G__65260__a = new Array(arguments.length -  17);
while (G__65260__i < G__65260__a.length) {G__65260__a[G__65260__i] = arguments[G__65260__i + 17]; ++G__65260__i;}
  G__64639 = new cljs.core.IndexedSeq(G__65260__a,0,null);
} 
return sci$impl$fns$arity_17__delegate.call(this,G__64622,G__64623,G__64624,G__64625,G__64626,G__64627,G__64628,G__64629,G__64630,G__64631,G__64632,G__64633,G__64634,G__64635,G__64636,G__64637,G__64638,G__64639);};
sci$impl$fns$arity_17.cljs$lang$maxFixedArity = 17;
sci$impl$fns$arity_17.cljs$lang$applyTo = (function (arglist__65265){
var G__64622 = cljs.core.first(arglist__65265);
arglist__65265 = cljs.core.next(arglist__65265);
var G__64623 = cljs.core.first(arglist__65265);
arglist__65265 = cljs.core.next(arglist__65265);
var G__64624 = cljs.core.first(arglist__65265);
arglist__65265 = cljs.core.next(arglist__65265);
var G__64625 = cljs.core.first(arglist__65265);
arglist__65265 = cljs.core.next(arglist__65265);
var G__64626 = cljs.core.first(arglist__65265);
arglist__65265 = cljs.core.next(arglist__65265);
var G__64627 = cljs.core.first(arglist__65265);
arglist__65265 = cljs.core.next(arglist__65265);
var G__64628 = cljs.core.first(arglist__65265);
arglist__65265 = cljs.core.next(arglist__65265);
var G__64629 = cljs.core.first(arglist__65265);
arglist__65265 = cljs.core.next(arglist__65265);
var G__64630 = cljs.core.first(arglist__65265);
arglist__65265 = cljs.core.next(arglist__65265);
var G__64631 = cljs.core.first(arglist__65265);
arglist__65265 = cljs.core.next(arglist__65265);
var G__64632 = cljs.core.first(arglist__65265);
arglist__65265 = cljs.core.next(arglist__65265);
var G__64633 = cljs.core.first(arglist__65265);
arglist__65265 = cljs.core.next(arglist__65265);
var G__64634 = cljs.core.first(arglist__65265);
arglist__65265 = cljs.core.next(arglist__65265);
var G__64635 = cljs.core.first(arglist__65265);
arglist__65265 = cljs.core.next(arglist__65265);
var G__64636 = cljs.core.first(arglist__65265);
arglist__65265 = cljs.core.next(arglist__65265);
var G__64637 = cljs.core.first(arglist__65265);
arglist__65265 = cljs.core.next(arglist__65265);
var G__64638 = cljs.core.first(arglist__65265);
var G__64639 = cljs.core.rest(arglist__65265);
return sci$impl$fns$arity_17__delegate(G__64622,G__64623,G__64624,G__64625,G__64626,G__64627,G__64628,G__64629,G__64630,G__64631,G__64632,G__64633,G__64634,G__64635,G__64636,G__64637,G__64638,G__64639);
});
sci$impl$fns$arity_17.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$arity_17__delegate;
return sci$impl$fns$arity_17;
})()
;

break;
case (18):
return (function() { 
var sci$impl$fns$arity_18__delegate = function (G__64641,G__64642,G__64643,G__64644,G__64645,G__64646,G__64647,G__64648,G__64649,G__64650,G__64651,G__64652,G__64653,G__64654,G__64655,G__64656,G__64657,G__64658,G__64659){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__64641);

(invoc_array[(1)] = G__64642);

(invoc_array[(2)] = G__64643);

(invoc_array[(3)] = G__64644);

(invoc_array[(4)] = G__64645);

(invoc_array[(5)] = G__64646);

(invoc_array[(6)] = G__64647);

(invoc_array[(7)] = G__64648);

(invoc_array[(8)] = G__64649);

(invoc_array[(9)] = G__64650);

(invoc_array[(10)] = G__64651);

(invoc_array[(11)] = G__64652);

(invoc_array[(12)] = G__64653);

(invoc_array[(13)] = G__64654);

(invoc_array[(14)] = G__64655);

(invoc_array[(15)] = G__64656);

(invoc_array[(16)] = G__64657);

(invoc_array[(17)] = G__64658);

(invoc_array[vararg_idx] = G__64659);

while(true){
var ret__63697__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__63697__auto__)){
continue;
} else {
return ret__63697__auto__;
}
break;
}
};
var sci$impl$fns$arity_18 = function (G__64641,G__64642,G__64643,G__64644,G__64645,G__64646,G__64647,G__64648,G__64649,G__64650,G__64651,G__64652,G__64653,G__64654,G__64655,G__64656,G__64657,G__64658,var_args){
var G__64659 = null;
if (arguments.length > 18) {
var G__65269__i = 0, G__65269__a = new Array(arguments.length -  18);
while (G__65269__i < G__65269__a.length) {G__65269__a[G__65269__i] = arguments[G__65269__i + 18]; ++G__65269__i;}
  G__64659 = new cljs.core.IndexedSeq(G__65269__a,0,null);
} 
return sci$impl$fns$arity_18__delegate.call(this,G__64641,G__64642,G__64643,G__64644,G__64645,G__64646,G__64647,G__64648,G__64649,G__64650,G__64651,G__64652,G__64653,G__64654,G__64655,G__64656,G__64657,G__64658,G__64659);};
sci$impl$fns$arity_18.cljs$lang$maxFixedArity = 18;
sci$impl$fns$arity_18.cljs$lang$applyTo = (function (arglist__65270){
var G__64641 = cljs.core.first(arglist__65270);
arglist__65270 = cljs.core.next(arglist__65270);
var G__64642 = cljs.core.first(arglist__65270);
arglist__65270 = cljs.core.next(arglist__65270);
var G__64643 = cljs.core.first(arglist__65270);
arglist__65270 = cljs.core.next(arglist__65270);
var G__64644 = cljs.core.first(arglist__65270);
arglist__65270 = cljs.core.next(arglist__65270);
var G__64645 = cljs.core.first(arglist__65270);
arglist__65270 = cljs.core.next(arglist__65270);
var G__64646 = cljs.core.first(arglist__65270);
arglist__65270 = cljs.core.next(arglist__65270);
var G__64647 = cljs.core.first(arglist__65270);
arglist__65270 = cljs.core.next(arglist__65270);
var G__64648 = cljs.core.first(arglist__65270);
arglist__65270 = cljs.core.next(arglist__65270);
var G__64649 = cljs.core.first(arglist__65270);
arglist__65270 = cljs.core.next(arglist__65270);
var G__64650 = cljs.core.first(arglist__65270);
arglist__65270 = cljs.core.next(arglist__65270);
var G__64651 = cljs.core.first(arglist__65270);
arglist__65270 = cljs.core.next(arglist__65270);
var G__64652 = cljs.core.first(arglist__65270);
arglist__65270 = cljs.core.next(arglist__65270);
var G__64653 = cljs.core.first(arglist__65270);
arglist__65270 = cljs.core.next(arglist__65270);
var G__64654 = cljs.core.first(arglist__65270);
arglist__65270 = cljs.core.next(arglist__65270);
var G__64655 = cljs.core.first(arglist__65270);
arglist__65270 = cljs.core.next(arglist__65270);
var G__64656 = cljs.core.first(arglist__65270);
arglist__65270 = cljs.core.next(arglist__65270);
var G__64657 = cljs.core.first(arglist__65270);
arglist__65270 = cljs.core.next(arglist__65270);
var G__64658 = cljs.core.first(arglist__65270);
var G__64659 = cljs.core.rest(arglist__65270);
return sci$impl$fns$arity_18__delegate(G__64641,G__64642,G__64643,G__64644,G__64645,G__64646,G__64647,G__64648,G__64649,G__64650,G__64651,G__64652,G__64653,G__64654,G__64655,G__64656,G__64657,G__64658,G__64659);
});
sci$impl$fns$arity_18.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$arity_18__delegate;
return sci$impl$fns$arity_18;
})()
;

break;
case (19):
return (function() { 
var sci$impl$fns$arity_19__delegate = function (G__64664,G__64665,G__64666,G__64667,G__64668,G__64669,G__64670,G__64671,G__64672,G__64673,G__64674,G__64675,G__64676,G__64677,G__64678,G__64679,G__64680,G__64681,G__64682,G__64683){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__64664);

(invoc_array[(1)] = G__64665);

(invoc_array[(2)] = G__64666);

(invoc_array[(3)] = G__64667);

(invoc_array[(4)] = G__64668);

(invoc_array[(5)] = G__64669);

(invoc_array[(6)] = G__64670);

(invoc_array[(7)] = G__64671);

(invoc_array[(8)] = G__64672);

(invoc_array[(9)] = G__64673);

(invoc_array[(10)] = G__64674);

(invoc_array[(11)] = G__64675);

(invoc_array[(12)] = G__64676);

(invoc_array[(13)] = G__64677);

(invoc_array[(14)] = G__64678);

(invoc_array[(15)] = G__64679);

(invoc_array[(16)] = G__64680);

(invoc_array[(17)] = G__64681);

(invoc_array[(18)] = G__64682);

(invoc_array[vararg_idx] = G__64683);

while(true){
var ret__63697__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__63697__auto__)){
continue;
} else {
return ret__63697__auto__;
}
break;
}
};
var sci$impl$fns$arity_19 = function (G__64664,G__64665,G__64666,G__64667,G__64668,G__64669,G__64670,G__64671,G__64672,G__64673,G__64674,G__64675,G__64676,G__64677,G__64678,G__64679,G__64680,G__64681,G__64682,var_args){
var G__64683 = null;
if (arguments.length > 19) {
var G__65271__i = 0, G__65271__a = new Array(arguments.length -  19);
while (G__65271__i < G__65271__a.length) {G__65271__a[G__65271__i] = arguments[G__65271__i + 19]; ++G__65271__i;}
  G__64683 = new cljs.core.IndexedSeq(G__65271__a,0,null);
} 
return sci$impl$fns$arity_19__delegate.call(this,G__64664,G__64665,G__64666,G__64667,G__64668,G__64669,G__64670,G__64671,G__64672,G__64673,G__64674,G__64675,G__64676,G__64677,G__64678,G__64679,G__64680,G__64681,G__64682,G__64683);};
sci$impl$fns$arity_19.cljs$lang$maxFixedArity = 19;
sci$impl$fns$arity_19.cljs$lang$applyTo = (function (arglist__65272){
var G__64664 = cljs.core.first(arglist__65272);
arglist__65272 = cljs.core.next(arglist__65272);
var G__64665 = cljs.core.first(arglist__65272);
arglist__65272 = cljs.core.next(arglist__65272);
var G__64666 = cljs.core.first(arglist__65272);
arglist__65272 = cljs.core.next(arglist__65272);
var G__64667 = cljs.core.first(arglist__65272);
arglist__65272 = cljs.core.next(arglist__65272);
var G__64668 = cljs.core.first(arglist__65272);
arglist__65272 = cljs.core.next(arglist__65272);
var G__64669 = cljs.core.first(arglist__65272);
arglist__65272 = cljs.core.next(arglist__65272);
var G__64670 = cljs.core.first(arglist__65272);
arglist__65272 = cljs.core.next(arglist__65272);
var G__64671 = cljs.core.first(arglist__65272);
arglist__65272 = cljs.core.next(arglist__65272);
var G__64672 = cljs.core.first(arglist__65272);
arglist__65272 = cljs.core.next(arglist__65272);
var G__64673 = cljs.core.first(arglist__65272);
arglist__65272 = cljs.core.next(arglist__65272);
var G__64674 = cljs.core.first(arglist__65272);
arglist__65272 = cljs.core.next(arglist__65272);
var G__64675 = cljs.core.first(arglist__65272);
arglist__65272 = cljs.core.next(arglist__65272);
var G__64676 = cljs.core.first(arglist__65272);
arglist__65272 = cljs.core.next(arglist__65272);
var G__64677 = cljs.core.first(arglist__65272);
arglist__65272 = cljs.core.next(arglist__65272);
var G__64678 = cljs.core.first(arglist__65272);
arglist__65272 = cljs.core.next(arglist__65272);
var G__64679 = cljs.core.first(arglist__65272);
arglist__65272 = cljs.core.next(arglist__65272);
var G__64680 = cljs.core.first(arglist__65272);
arglist__65272 = cljs.core.next(arglist__65272);
var G__64681 = cljs.core.first(arglist__65272);
arglist__65272 = cljs.core.next(arglist__65272);
var G__64682 = cljs.core.first(arglist__65272);
var G__64683 = cljs.core.rest(arglist__65272);
return sci$impl$fns$arity_19__delegate(G__64664,G__64665,G__64666,G__64667,G__64668,G__64669,G__64670,G__64671,G__64672,G__64673,G__64674,G__64675,G__64676,G__64677,G__64678,G__64679,G__64680,G__64681,G__64682,G__64683);
});
sci$impl$fns$arity_19.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$arity_19__delegate;
return sci$impl$fns$arity_19;
})()
;

break;
case (20):
return (function() { 
var sci$impl$fns$arity_20__delegate = function (G__64690,G__64691,G__64692,G__64693,G__64694,G__64695,G__64696,G__64697,G__64698,G__64699,G__64700,G__64701,G__64702,G__64703,G__64704,G__64705,G__64706,G__64707,G__64708,G__64709,G__64710){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__64690);

(invoc_array[(1)] = G__64691);

(invoc_array[(2)] = G__64692);

(invoc_array[(3)] = G__64693);

(invoc_array[(4)] = G__64694);

(invoc_array[(5)] = G__64695);

(invoc_array[(6)] = G__64696);

(invoc_array[(7)] = G__64697);

(invoc_array[(8)] = G__64698);

(invoc_array[(9)] = G__64699);

(invoc_array[(10)] = G__64700);

(invoc_array[(11)] = G__64701);

(invoc_array[(12)] = G__64702);

(invoc_array[(13)] = G__64703);

(invoc_array[(14)] = G__64704);

(invoc_array[(15)] = G__64705);

(invoc_array[(16)] = G__64706);

(invoc_array[(17)] = G__64707);

(invoc_array[(18)] = G__64708);

(invoc_array[(19)] = G__64709);

(invoc_array[vararg_idx] = G__64710);

while(true){
var ret__63697__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__63697__auto__)){
continue;
} else {
return ret__63697__auto__;
}
break;
}
};
var sci$impl$fns$arity_20 = function (G__64690,G__64691,G__64692,G__64693,G__64694,G__64695,G__64696,G__64697,G__64698,G__64699,G__64700,G__64701,G__64702,G__64703,G__64704,G__64705,G__64706,G__64707,G__64708,G__64709,var_args){
var G__64710 = null;
if (arguments.length > 20) {
var G__65276__i = 0, G__65276__a = new Array(arguments.length -  20);
while (G__65276__i < G__65276__a.length) {G__65276__a[G__65276__i] = arguments[G__65276__i + 20]; ++G__65276__i;}
  G__64710 = new cljs.core.IndexedSeq(G__65276__a,0,null);
} 
return sci$impl$fns$arity_20__delegate.call(this,G__64690,G__64691,G__64692,G__64693,G__64694,G__64695,G__64696,G__64697,G__64698,G__64699,G__64700,G__64701,G__64702,G__64703,G__64704,G__64705,G__64706,G__64707,G__64708,G__64709,G__64710);};
sci$impl$fns$arity_20.cljs$lang$maxFixedArity = 20;
sci$impl$fns$arity_20.cljs$lang$applyTo = (function (arglist__65277){
var G__64690 = cljs.core.first(arglist__65277);
arglist__65277 = cljs.core.next(arglist__65277);
var G__64691 = cljs.core.first(arglist__65277);
arglist__65277 = cljs.core.next(arglist__65277);
var G__64692 = cljs.core.first(arglist__65277);
arglist__65277 = cljs.core.next(arglist__65277);
var G__64693 = cljs.core.first(arglist__65277);
arglist__65277 = cljs.core.next(arglist__65277);
var G__64694 = cljs.core.first(arglist__65277);
arglist__65277 = cljs.core.next(arglist__65277);
var G__64695 = cljs.core.first(arglist__65277);
arglist__65277 = cljs.core.next(arglist__65277);
var G__64696 = cljs.core.first(arglist__65277);
arglist__65277 = cljs.core.next(arglist__65277);
var G__64697 = cljs.core.first(arglist__65277);
arglist__65277 = cljs.core.next(arglist__65277);
var G__64698 = cljs.core.first(arglist__65277);
arglist__65277 = cljs.core.next(arglist__65277);
var G__64699 = cljs.core.first(arglist__65277);
arglist__65277 = cljs.core.next(arglist__65277);
var G__64700 = cljs.core.first(arglist__65277);
arglist__65277 = cljs.core.next(arglist__65277);
var G__64701 = cljs.core.first(arglist__65277);
arglist__65277 = cljs.core.next(arglist__65277);
var G__64702 = cljs.core.first(arglist__65277);
arglist__65277 = cljs.core.next(arglist__65277);
var G__64703 = cljs.core.first(arglist__65277);
arglist__65277 = cljs.core.next(arglist__65277);
var G__64704 = cljs.core.first(arglist__65277);
arglist__65277 = cljs.core.next(arglist__65277);
var G__64705 = cljs.core.first(arglist__65277);
arglist__65277 = cljs.core.next(arglist__65277);
var G__64706 = cljs.core.first(arglist__65277);
arglist__65277 = cljs.core.next(arglist__65277);
var G__64707 = cljs.core.first(arglist__65277);
arglist__65277 = cljs.core.next(arglist__65277);
var G__64708 = cljs.core.first(arglist__65277);
arglist__65277 = cljs.core.next(arglist__65277);
var G__64709 = cljs.core.first(arglist__65277);
var G__64710 = cljs.core.rest(arglist__65277);
return sci$impl$fns$arity_20__delegate(G__64690,G__64691,G__64692,G__64693,G__64694,G__64695,G__64696,G__64697,G__64698,G__64699,G__64700,G__64701,G__64702,G__64703,G__64704,G__64705,G__64706,G__64707,G__64708,G__64709,G__64710);
});
sci$impl$fns$arity_20.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$arity_20__delegate;
return sci$impl$fns$arity_20;
})()
;

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__64336)].join('')));

}
})():(function (){var G__64715 = fixed_arity;
switch (G__64715) {
case (0):
return (function sci$impl$fns$arity_0(){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

while(true){
var ret__63695__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__63695__auto__)){
continue;
} else {
return ret__63695__auto__;
}
break;
}
});

break;
case (1):
return (function sci$impl$fns$arity_1(G__64716){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__64716);

while(true){
var ret__63697__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__63697__auto__)){
continue;
} else {
return ret__63697__auto__;
}
break;
}
});

break;
case (2):
return (function sci$impl$fns$arity_2(G__64718,G__64719){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__64718);

(invoc_array[(1)] = G__64719);

while(true){
var ret__63697__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__63697__auto__)){
continue;
} else {
return ret__63697__auto__;
}
break;
}
});

break;
case (3):
return (function sci$impl$fns$arity_3(G__64725,G__64726,G__64727){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__64725);

(invoc_array[(1)] = G__64726);

(invoc_array[(2)] = G__64727);

while(true){
var ret__63697__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__63697__auto__)){
continue;
} else {
return ret__63697__auto__;
}
break;
}
});

break;
case (4):
return (function sci$impl$fns$arity_4(G__64729,G__64730,G__64731,G__64732){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__64729);

(invoc_array[(1)] = G__64730);

(invoc_array[(2)] = G__64731);

(invoc_array[(3)] = G__64732);

while(true){
var ret__63697__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__63697__auto__)){
continue;
} else {
return ret__63697__auto__;
}
break;
}
});

break;
case (5):
return (function sci$impl$fns$arity_5(G__64735,G__64736,G__64737,G__64738,G__64739){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__64735);

(invoc_array[(1)] = G__64736);

(invoc_array[(2)] = G__64737);

(invoc_array[(3)] = G__64738);

(invoc_array[(4)] = G__64739);

while(true){
var ret__63697__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__63697__auto__)){
continue;
} else {
return ret__63697__auto__;
}
break;
}
});

break;
case (6):
return (function sci$impl$fns$arity_6(G__64740,G__64741,G__64742,G__64743,G__64744,G__64745){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__64740);

(invoc_array[(1)] = G__64741);

(invoc_array[(2)] = G__64742);

(invoc_array[(3)] = G__64743);

(invoc_array[(4)] = G__64744);

(invoc_array[(5)] = G__64745);

while(true){
var ret__63697__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__63697__auto__)){
continue;
} else {
return ret__63697__auto__;
}
break;
}
});

break;
case (7):
return (function sci$impl$fns$arity_7(G__64746,G__64747,G__64748,G__64749,G__64750,G__64751,G__64752){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__64746);

(invoc_array[(1)] = G__64747);

(invoc_array[(2)] = G__64748);

(invoc_array[(3)] = G__64749);

(invoc_array[(4)] = G__64750);

(invoc_array[(5)] = G__64751);

(invoc_array[(6)] = G__64752);

while(true){
var ret__63697__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__63697__auto__)){
continue;
} else {
return ret__63697__auto__;
}
break;
}
});

break;
case (8):
return (function sci$impl$fns$arity_8(G__64758,G__64759,G__64760,G__64761,G__64762,G__64763,G__64764,G__64765){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__64758);

(invoc_array[(1)] = G__64759);

(invoc_array[(2)] = G__64760);

(invoc_array[(3)] = G__64761);

(invoc_array[(4)] = G__64762);

(invoc_array[(5)] = G__64763);

(invoc_array[(6)] = G__64764);

(invoc_array[(7)] = G__64765);

while(true){
var ret__63697__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__63697__auto__)){
continue;
} else {
return ret__63697__auto__;
}
break;
}
});

break;
case (9):
return (function sci$impl$fns$arity_9(G__64771,G__64772,G__64773,G__64774,G__64775,G__64776,G__64777,G__64778,G__64779){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__64771);

(invoc_array[(1)] = G__64772);

(invoc_array[(2)] = G__64773);

(invoc_array[(3)] = G__64774);

(invoc_array[(4)] = G__64775);

(invoc_array[(5)] = G__64776);

(invoc_array[(6)] = G__64777);

(invoc_array[(7)] = G__64778);

(invoc_array[(8)] = G__64779);

while(true){
var ret__63697__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__63697__auto__)){
continue;
} else {
return ret__63697__auto__;
}
break;
}
});

break;
case (10):
return (function sci$impl$fns$arity_10(G__64788,G__64789,G__64790,G__64791,G__64792,G__64793,G__64794,G__64795,G__64796,G__64797){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__64788);

(invoc_array[(1)] = G__64789);

(invoc_array[(2)] = G__64790);

(invoc_array[(3)] = G__64791);

(invoc_array[(4)] = G__64792);

(invoc_array[(5)] = G__64793);

(invoc_array[(6)] = G__64794);

(invoc_array[(7)] = G__64795);

(invoc_array[(8)] = G__64796);

(invoc_array[(9)] = G__64797);

while(true){
var ret__63697__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__63697__auto__)){
continue;
} else {
return ret__63697__auto__;
}
break;
}
});

break;
case (11):
return (function sci$impl$fns$arity_11(G__64804,G__64805,G__64806,G__64807,G__64808,G__64809,G__64810,G__64811,G__64812,G__64813,G__64814){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__64804);

(invoc_array[(1)] = G__64805);

(invoc_array[(2)] = G__64806);

(invoc_array[(3)] = G__64807);

(invoc_array[(4)] = G__64808);

(invoc_array[(5)] = G__64809);

(invoc_array[(6)] = G__64810);

(invoc_array[(7)] = G__64811);

(invoc_array[(8)] = G__64812);

(invoc_array[(9)] = G__64813);

(invoc_array[(10)] = G__64814);

while(true){
var ret__63697__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__63697__auto__)){
continue;
} else {
return ret__63697__auto__;
}
break;
}
});

break;
case (12):
return (function sci$impl$fns$arity_12(G__64829,G__64830,G__64831,G__64832,G__64833,G__64834,G__64835,G__64836,G__64837,G__64838,G__64839,G__64840){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__64829);

(invoc_array[(1)] = G__64830);

(invoc_array[(2)] = G__64831);

(invoc_array[(3)] = G__64832);

(invoc_array[(4)] = G__64833);

(invoc_array[(5)] = G__64834);

(invoc_array[(6)] = G__64835);

(invoc_array[(7)] = G__64836);

(invoc_array[(8)] = G__64837);

(invoc_array[(9)] = G__64838);

(invoc_array[(10)] = G__64839);

(invoc_array[(11)] = G__64840);

while(true){
var ret__63697__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__63697__auto__)){
continue;
} else {
return ret__63697__auto__;
}
break;
}
});

break;
case (13):
return (function sci$impl$fns$arity_13(G__64850,G__64851,G__64852,G__64853,G__64854,G__64855,G__64856,G__64857,G__64858,G__64859,G__64860,G__64861,G__64862){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__64850);

(invoc_array[(1)] = G__64851);

(invoc_array[(2)] = G__64852);

(invoc_array[(3)] = G__64853);

(invoc_array[(4)] = G__64854);

(invoc_array[(5)] = G__64855);

(invoc_array[(6)] = G__64856);

(invoc_array[(7)] = G__64857);

(invoc_array[(8)] = G__64858);

(invoc_array[(9)] = G__64859);

(invoc_array[(10)] = G__64860);

(invoc_array[(11)] = G__64861);

(invoc_array[(12)] = G__64862);

while(true){
var ret__63697__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__63697__auto__)){
continue;
} else {
return ret__63697__auto__;
}
break;
}
});

break;
case (14):
return (function sci$impl$fns$arity_14(G__64864,G__64865,G__64866,G__64867,G__64868,G__64869,G__64870,G__64871,G__64872,G__64873,G__64874,G__64875,G__64876,G__64877){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__64864);

(invoc_array[(1)] = G__64865);

(invoc_array[(2)] = G__64866);

(invoc_array[(3)] = G__64867);

(invoc_array[(4)] = G__64868);

(invoc_array[(5)] = G__64869);

(invoc_array[(6)] = G__64870);

(invoc_array[(7)] = G__64871);

(invoc_array[(8)] = G__64872);

(invoc_array[(9)] = G__64873);

(invoc_array[(10)] = G__64874);

(invoc_array[(11)] = G__64875);

(invoc_array[(12)] = G__64876);

(invoc_array[(13)] = G__64877);

while(true){
var ret__63697__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__63697__auto__)){
continue;
} else {
return ret__63697__auto__;
}
break;
}
});

break;
case (15):
return (function sci$impl$fns$arity_15(G__64895,G__64896,G__64897,G__64898,G__64899,G__64900,G__64901,G__64902,G__64903,G__64904,G__64905,G__64906,G__64907,G__64908,G__64909){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__64895);

(invoc_array[(1)] = G__64896);

(invoc_array[(2)] = G__64897);

(invoc_array[(3)] = G__64898);

(invoc_array[(4)] = G__64899);

(invoc_array[(5)] = G__64900);

(invoc_array[(6)] = G__64901);

(invoc_array[(7)] = G__64902);

(invoc_array[(8)] = G__64903);

(invoc_array[(9)] = G__64904);

(invoc_array[(10)] = G__64905);

(invoc_array[(11)] = G__64906);

(invoc_array[(12)] = G__64907);

(invoc_array[(13)] = G__64908);

(invoc_array[(14)] = G__64909);

while(true){
var ret__63697__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__63697__auto__)){
continue;
} else {
return ret__63697__auto__;
}
break;
}
});

break;
case (16):
return (function sci$impl$fns$arity_16(G__64910,G__64911,G__64912,G__64913,G__64914,G__64915,G__64916,G__64917,G__64918,G__64919,G__64920,G__64921,G__64922,G__64923,G__64924,G__64925){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__64910);

(invoc_array[(1)] = G__64911);

(invoc_array[(2)] = G__64912);

(invoc_array[(3)] = G__64913);

(invoc_array[(4)] = G__64914);

(invoc_array[(5)] = G__64915);

(invoc_array[(6)] = G__64916);

(invoc_array[(7)] = G__64917);

(invoc_array[(8)] = G__64918);

(invoc_array[(9)] = G__64919);

(invoc_array[(10)] = G__64920);

(invoc_array[(11)] = G__64921);

(invoc_array[(12)] = G__64922);

(invoc_array[(13)] = G__64923);

(invoc_array[(14)] = G__64924);

(invoc_array[(15)] = G__64925);

while(true){
var ret__63697__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__63697__auto__)){
continue;
} else {
return ret__63697__auto__;
}
break;
}
});

break;
case (17):
return (function sci$impl$fns$arity_17(G__64930,G__64931,G__64932,G__64933,G__64934,G__64935,G__64936,G__64937,G__64938,G__64939,G__64940,G__64941,G__64942,G__64943,G__64944,G__64945,G__64946){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__64930);

(invoc_array[(1)] = G__64931);

(invoc_array[(2)] = G__64932);

(invoc_array[(3)] = G__64933);

(invoc_array[(4)] = G__64934);

(invoc_array[(5)] = G__64935);

(invoc_array[(6)] = G__64936);

(invoc_array[(7)] = G__64937);

(invoc_array[(8)] = G__64938);

(invoc_array[(9)] = G__64939);

(invoc_array[(10)] = G__64940);

(invoc_array[(11)] = G__64941);

(invoc_array[(12)] = G__64942);

(invoc_array[(13)] = G__64943);

(invoc_array[(14)] = G__64944);

(invoc_array[(15)] = G__64945);

(invoc_array[(16)] = G__64946);

while(true){
var ret__63697__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__63697__auto__)){
continue;
} else {
return ret__63697__auto__;
}
break;
}
});

break;
case (18):
return (function sci$impl$fns$arity_18(G__64954,G__64955,G__64956,G__64957,G__64958,G__64959,G__64960,G__64961,G__64962,G__64963,G__64964,G__64965,G__64966,G__64967,G__64968,G__64969,G__64970,G__64971){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__64954);

(invoc_array[(1)] = G__64955);

(invoc_array[(2)] = G__64956);

(invoc_array[(3)] = G__64957);

(invoc_array[(4)] = G__64958);

(invoc_array[(5)] = G__64959);

(invoc_array[(6)] = G__64960);

(invoc_array[(7)] = G__64961);

(invoc_array[(8)] = G__64962);

(invoc_array[(9)] = G__64963);

(invoc_array[(10)] = G__64964);

(invoc_array[(11)] = G__64965);

(invoc_array[(12)] = G__64966);

(invoc_array[(13)] = G__64967);

(invoc_array[(14)] = G__64968);

(invoc_array[(15)] = G__64969);

(invoc_array[(16)] = G__64970);

(invoc_array[(17)] = G__64971);

while(true){
var ret__63697__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__63697__auto__)){
continue;
} else {
return ret__63697__auto__;
}
break;
}
});

break;
case (19):
return (function sci$impl$fns$arity_19(G__64972,G__64973,G__64974,G__64976,G__64977,G__64978,G__64979,G__64980,G__64981,G__64982,G__64983,G__64984,G__64985,G__64986,G__64987,G__64988,G__64989,G__64990,G__64991){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__64972);

(invoc_array[(1)] = G__64973);

(invoc_array[(2)] = G__64974);

(invoc_array[(3)] = G__64976);

(invoc_array[(4)] = G__64977);

(invoc_array[(5)] = G__64978);

(invoc_array[(6)] = G__64979);

(invoc_array[(7)] = G__64980);

(invoc_array[(8)] = G__64981);

(invoc_array[(9)] = G__64982);

(invoc_array[(10)] = G__64983);

(invoc_array[(11)] = G__64984);

(invoc_array[(12)] = G__64985);

(invoc_array[(13)] = G__64986);

(invoc_array[(14)] = G__64987);

(invoc_array[(15)] = G__64988);

(invoc_array[(16)] = G__64989);

(invoc_array[(17)] = G__64990);

(invoc_array[(18)] = G__64991);

while(true){
var ret__63697__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__63697__auto__)){
continue;
} else {
return ret__63697__auto__;
}
break;
}
});

break;
case (20):
return (function sci$impl$fns$arity_20(G__64995,G__64996,G__64997,G__64998,G__64999,G__65000,G__65001,G__65003,G__65004,G__65005,G__65006,G__65007,G__65008,G__65010,G__65011,G__65012,G__65014,G__65015,G__65016,G__65017){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__64995);

(invoc_array[(1)] = G__64996);

(invoc_array[(2)] = G__64997);

(invoc_array[(3)] = G__64998);

(invoc_array[(4)] = G__64999);

(invoc_array[(5)] = G__65000);

(invoc_array[(6)] = G__65001);

(invoc_array[(7)] = G__65003);

(invoc_array[(8)] = G__65004);

(invoc_array[(9)] = G__65005);

(invoc_array[(10)] = G__65006);

(invoc_array[(11)] = G__65007);

(invoc_array[(12)] = G__65008);

(invoc_array[(13)] = G__65010);

(invoc_array[(14)] = G__65011);

(invoc_array[(15)] = G__65012);

(invoc_array[(16)] = G__65014);

(invoc_array[(17)] = G__65015);

(invoc_array[(18)] = G__65016);

(invoc_array[(19)] = G__65017);

while(true){
var ret__63697__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__63697__auto__)){
continue;
} else {
return ret__63697__auto__;
}
break;
}
});

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__64715)].join('')));

}
})());
return f;
}));

(sci.impl.fns.fun.cljs$lang$maxFixedArity = 11);

sci.impl.fns.lookup_by_arity = (function sci$impl$fns$lookup_by_arity(arities,arity){
var or__5045__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(arities,arity);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return new cljs.core.Keyword(null,"variadic","variadic",882626057).cljs$core$IFn$_invoke$arity$1(arities);
}
});
sci.impl.fns.fn_arity_map = (function sci$impl$fns$fn_arity_map(ctx,enclosed_array,fn_name,macro_QMARK_,fn_bodies){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (arity_map,fn_body){
var f = sci.impl.fns.fun.cljs$core$IFn$_invoke$arity$5(ctx,enclosed_array,fn_body,fn_name,macro_QMARK_);
var var_arg_QMARK_ = new cljs.core.Keyword(null,"var-arg-name","var-arg-name",-1100024887).cljs$core$IFn$_invoke$arity$1(fn_body);
var fixed_arity = new cljs.core.Keyword(null,"fixed-arity","fixed-arity",1586445869).cljs$core$IFn$_invoke$arity$1(fn_body);
if(cljs.core.truth_(var_arg_QMARK_)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(arity_map,new cljs.core.Keyword(null,"variadic","variadic",882626057),f);
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(arity_map,fixed_arity,f);
}
}),cljs.core.PersistentArrayMap.EMPTY,fn_bodies);
});
sci.impl.fns.maybe_destructured = (function sci$impl$fns$maybe_destructured(params,body){
if(cljs.core.every_QMARK_(cljs.core.symbol_QMARK_,params)){
return cljs.core.cons(params,body);
} else {
var params__$1 = params;
var new_params = cljs.core.with_meta(cljs.core.PersistentVector.EMPTY,cljs.core.meta(params__$1));
var lets = cljs.core.PersistentVector.EMPTY;
while(true){
if(cljs.core.truth_(params__$1)){
if((cljs.core.first(params__$1) instanceof cljs.core.Symbol)){
var G__65304 = cljs.core.next(params__$1);
var G__65305 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(new_params,cljs.core.first(params__$1));
var G__65306 = lets;
params__$1 = G__65304;
new_params = G__65305;
lets = G__65306;
continue;
} else {
var gparam = cljs.core.gensym.cljs$core$IFn$_invoke$arity$1("p__");
var G__65307 = cljs.core.next(params__$1);
var G__65308 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(new_params,gparam);
var G__65309 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.conj.cljs$core$IFn$_invoke$arity$2(lets,cljs.core.first(params__$1)),gparam);
params__$1 = G__65307;
new_params = G__65308;
lets = G__65309;
continue;
}
} else {
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new_params,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null),null,(1),null)),(new cljs.core.List(null,lets,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([body], 0)))),null,(1),null)))));
}
break;
}
}
});
sci.impl.fns.fn_STAR__STAR_ = (function sci$impl$fns$fn_STAR__STAR_(var_args){
var args__5775__auto__ = [];
var len__5769__auto___65310 = arguments.length;
var i__5770__auto___65311 = (0);
while(true){
if((i__5770__auto___65311 < len__5769__auto___65310)){
args__5775__auto__.push((arguments[i__5770__auto___65311]));

var G__65312 = (i__5770__auto___65311 + (1));
i__5770__auto___65311 = G__65312;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((2) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((2)),(0),null)):null);
return sci.impl.fns.fn_STAR__STAR_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5776__auto__);
});

(sci.impl.fns.fn_STAR__STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (form,_,sigs){
var name = (((cljs.core.first(sigs) instanceof cljs.core.Symbol))?cljs.core.first(sigs):null);
var sigs__$1 = (cljs.core.truth_(name)?cljs.core.next(sigs):sigs);
var sigs__$2 = ((cljs.core.vector_QMARK_(cljs.core.first(sigs__$1)))?(new cljs.core.List(null,sigs__$1,null,(1),null)):((cljs.core.seq_QMARK_(cljs.core.first(sigs__$1)))?sigs__$1:sci.impl.utils.throw_error_with_location.cljs$core$IFn$_invoke$arity$2(((cljs.core.seq(sigs__$1))?["Parameter declaration ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.first(sigs__$1))," should be a vector"].join(''):"Parameter declaration missing"),form)));
var psig = (function (sig){
if((!(cljs.core.seq_QMARK_(sig)))){
throw sci.impl.utils.throw_error_with_location.cljs$core$IFn$_invoke$arity$2(["Invalid signature ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(sig)," should be a list"].join(''),form);
} else {
}

var vec__65046 = sig;
var seq__65047 = cljs.core.seq(vec__65046);
var first__65048 = cljs.core.first(seq__65047);
var seq__65047__$1 = cljs.core.next(seq__65047);
var params = first__65048;
var body = seq__65047__$1;
var ___$1 = (((!(cljs.core.vector_QMARK_(params))))?sci.impl.utils.throw_error_with_location.cljs$core$IFn$_invoke$arity$2(((cljs.core.seq_QMARK_(cljs.core.first(sigs__$2)))?["Parameter declaration ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(params)," should be a vector"].join(''):["Invalid signature ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(sig)," should be a list"].join('')),form):null);
var conds = ((((cljs.core.next(body)) && (cljs.core.map_QMARK_(cljs.core.first(body)))))?cljs.core.first(body):null);
var body__$1 = (cljs.core.truth_(conds)?cljs.core.next(body):body);
var conds__$1 = (function (){var or__5045__auto__ = conds;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.meta(params);
}
})();
var pre = new cljs.core.Keyword(null,"pre","pre",2118456869).cljs$core$IFn$_invoke$arity$1(conds__$1);
var post = new cljs.core.Keyword(null,"post","post",269697687).cljs$core$IFn$_invoke$arity$1(conds__$1);
var body__$2 = (cljs.core.truth_(post)?cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1((new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"%","%",-950237169,null),null,(1),null)),(new cljs.core.List(null,((((1) < cljs.core.count(body__$1)))?cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"do","do",1686842252,null),null,(1),null)),body__$1))):cljs.core.first(body__$1)),null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (c){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","assert","cljs.core/assert",1075777968,null),null,(1),null)),(new cljs.core.List(null,c,null,(1),null)))));
}),post),(new cljs.core.List(null,new cljs.core.Symbol(null,"%","%",-950237169,null),null,(1),null))], 0)))),null,(1),null))))):body__$1);
var body__$3 = (cljs.core.truth_(pre)?cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (c){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","assert","cljs.core/assert",1075777968,null),null,(1),null)),(new cljs.core.List(null,c,null,(1),null)))));
}),pre),body__$2):body__$2);
return sci.impl.fns.maybe_destructured(params,body__$3);
});
var new_sigs = cljs.core.map.cljs$core$IFn$_invoke$arity$2(psig,sigs__$2);
var expr = cljs.core.with_meta((cljs.core.truth_(name)?cljs.core.list_STAR_.cljs$core$IFn$_invoke$arity$3(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),name,new_sigs):cljs.core.cons(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new_sigs)),cljs.core.meta(form));
return expr;
}));

(sci.impl.fns.fn_STAR__STAR_.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(sci.impl.fns.fn_STAR__STAR_.cljs$lang$applyTo = (function (seq65033){
var G__65035 = cljs.core.first(seq65033);
var seq65033__$1 = cljs.core.next(seq65033);
var G__65036 = cljs.core.first(seq65033__$1);
var seq65033__$2 = cljs.core.next(seq65033__$1);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__65035,G__65036,seq65033__$2);
}));

sci.impl.fns.sigs = (function sci$impl$fns$sigs(fdecl){
var asig = (function (fdecl__$1){
var arglist = cljs.core.first(fdecl__$1);
var arglist__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"&form","&form",1482799337,null),cljs.core.first(arglist)))?cljs.core.subvec.cljs$core$IFn$_invoke$arity$3(arglist,(2),cljs.core.count(arglist)):arglist);
var body = cljs.core.next(fdecl__$1);
if(cljs.core.map_QMARK_(cljs.core.first(body))){
if(cljs.core.next(body)){
return cljs.core.with_meta(arglist__$1,cljs.core.conj.cljs$core$IFn$_invoke$arity$2((cljs.core.truth_(cljs.core.meta(arglist__$1))?cljs.core.meta(arglist__$1):cljs.core.PersistentArrayMap.EMPTY),cljs.core.first(body)));
} else {
return arglist__$1;
}
} else {
return arglist__$1;
}
});
if(cljs.core.seq_QMARK_(cljs.core.first(fdecl))){
var ret = cljs.core.PersistentVector.EMPTY;
var fdecls = fdecl;
while(true){
if(cljs.core.truth_(fdecls)){
var G__65317 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,cljs.core.identity(asig(cljs.core.first(fdecls))));
var G__65318 = cljs.core.next(fdecls);
ret = G__65317;
fdecls = G__65318;
continue;
} else {
return cljs.core.seq(ret);
}
break;
}
} else {
return (new cljs.core.List(null,cljs.core.identity(asig(fdecl)),null,(1),null));
}
});
sci.impl.fns.defn_STAR_ = (function sci$impl$fns$defn_STAR_(var_args){
var args__5775__auto__ = [];
var len__5769__auto___65321 = arguments.length;
var i__5770__auto___65322 = (0);
while(true){
if((i__5770__auto___65322 < len__5769__auto___65321)){
args__5775__auto__.push((arguments[i__5770__auto___65322]));

var G__65323 = (i__5770__auto___65322 + (1));
i__5770__auto___65322 = G__65323;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((3) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((3)),(0),null)):null);
return sci.impl.fns.defn_STAR_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5776__auto__);
});

(sci.impl.fns.defn_STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (form,_,name,fdecl){
if((name instanceof cljs.core.Symbol)){
} else {
sci.impl.utils.throw_error_with_location.cljs$core$IFn$_invoke$arity$2("First argument to defn must be a symbol",form);
}

var m = ((typeof cljs.core.first(fdecl) === 'string')?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"doc","doc",1913296891),cljs.core.first(fdecl)], null):cljs.core.PersistentArrayMap.EMPTY);
var fdecl__$1 = ((typeof cljs.core.first(fdecl) === 'string')?cljs.core.next(fdecl):fdecl);
var m__$1 = ((cljs.core.map_QMARK_(cljs.core.first(fdecl__$1)))?cljs.core.conj.cljs$core$IFn$_invoke$arity$2(m,cljs.core.first(fdecl__$1)):m);
var fdecl__$2 = ((cljs.core.map_QMARK_(cljs.core.first(fdecl__$1)))?cljs.core.next(fdecl__$1):fdecl__$1);
var fdecl__$3 = ((cljs.core.vector_QMARK_(cljs.core.first(fdecl__$2)))?(new cljs.core.List(null,fdecl__$2,null,(1),null)):fdecl__$2);
var m__$2 = ((cljs.core.map_QMARK_(cljs.core.last(fdecl__$3)))?cljs.core.conj.cljs$core$IFn$_invoke$arity$2(m__$1,cljs.core.last(fdecl__$3)):m__$1);
var fdecl__$4 = ((cljs.core.map_QMARK_(cljs.core.last(fdecl__$3)))?cljs.core.butlast(fdecl__$3):fdecl__$3);
var m__$3 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),(new cljs.core.List(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),(new cljs.core.List(null,sci.impl.fns.sigs(fdecl__$4),null,(1),null)),(2),null))], null),m__$2);
var name_m = cljs.core.meta(name);
var m__$4 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2((cljs.core.truth_(name_m)?name_m:cljs.core.PersistentArrayMap.EMPTY),m__$3);
var macro_QMARK_ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(name_m);
var expr = cljs.core.cons(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),fdecl__$4);
var expr__$1 = (new cljs.core.List(null,new cljs.core.Symbol(null,"def","def",597100991,null),(new cljs.core.List(null,cljs.core.with_meta(name,m__$4),(new cljs.core.List(null,(cljs.core.truth_((function (){var or__5045__auto__ = macro_QMARK_;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return name;
}
})())?cljs.core.with_meta(expr,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("sci.impl","fn","sci.impl/fn",1695180073),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"macro","macro",-867863404),macro_QMARK_,new cljs.core.Keyword(null,"fn-name","fn-name",-766594004),name], null)], null)):expr),null,(1),null)),(2),null)),(3),null));
return expr__$1;
}));

(sci.impl.fns.defn_STAR_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(sci.impl.fns.defn_STAR_.cljs$lang$applyTo = (function (seq65068){
var G__65069 = cljs.core.first(seq65068);
var seq65068__$1 = cljs.core.next(seq65068);
var G__65070 = cljs.core.first(seq65068__$1);
var seq65068__$2 = cljs.core.next(seq65068__$1);
var G__65071 = cljs.core.first(seq65068__$2);
var seq65068__$3 = cljs.core.next(seq65068__$2);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__65069,G__65070,G__65071,seq65068__$3);
}));

sci.impl.fns.defmacro_STAR_ = (function sci$impl$fns$defmacro_STAR_(var_args){
var args__5775__auto__ = [];
var len__5769__auto___65335 = arguments.length;
var i__5770__auto___65336 = (0);
while(true){
if((i__5770__auto___65336 < len__5769__auto___65335)){
args__5775__auto__.push((arguments[i__5770__auto___65336]));

var G__65337 = (i__5770__auto___65336 + (1));
i__5770__auto___65336 = G__65337;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((3) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((3)),(0),null)):null);
return sci.impl.fns.defmacro_STAR_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5776__auto__);
});

(sci.impl.fns.defmacro_STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (__AMPERSAND_form,__AMPERSAND_env,name,args){
var name__$1 = cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4(name,cljs.core.assoc,new cljs.core.Keyword(null,"macro","macro",-867863404),true);
var prefix = (function (){var p = (new cljs.core.List(null,name__$1,null,(1),null));
var args__$1 = args;
while(true){
var f = cljs.core.first(args__$1);
if(typeof f === 'string'){
var G__65338 = cljs.core.cons(f,p);
var G__65339 = cljs.core.next(args__$1);
p = G__65338;
args__$1 = G__65339;
continue;
} else {
if(cljs.core.map_QMARK_(f)){
var G__65340 = cljs.core.cons(f,p);
var G__65341 = cljs.core.next(args__$1);
p = G__65340;
args__$1 = G__65341;
continue;
} else {
return p;
}
}
break;
}
})();
var fdecl = (function (){var fd = args;
while(true){
if(typeof cljs.core.first(fd) === 'string'){
var G__65342 = cljs.core.next(fd);
fd = G__65342;
continue;
} else {
if(cljs.core.map_QMARK_(cljs.core.first(fd))){
var G__65343 = cljs.core.next(fd);
fd = G__65343;
continue;
} else {
return fd;
}
}
break;
}
})();
var fdecl__$1 = ((cljs.core.vector_QMARK_(cljs.core.first(fdecl)))?(new cljs.core.List(null,fdecl,null,(1),null)):fdecl);
var add_implicit_args = (function (fd){
var args__$1 = cljs.core.first(fd);
return cljs.core.cons(cljs.core.vec(cljs.core.cons(new cljs.core.Symbol(null,"&form","&form",1482799337,null),cljs.core.cons(new cljs.core.Symbol(null,"&env","&env",-919163083,null),args__$1))),cljs.core.next(fd));
});
var add_args = (function (acc,ds){
while(true){
if((ds == null)){
return acc;
} else {
var d = cljs.core.first(ds);
if(cljs.core.map_QMARK_(d)){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(acc,d);
} else {
var G__65344 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(acc,add_implicit_args(d));
var G__65345 = cljs.core.next(ds);
acc = G__65344;
ds = G__65345;
continue;
}
}
break;
}
});
var fdecl__$2 = cljs.core.seq(add_args(cljs.core.PersistentVector.EMPTY,fdecl__$1));
var decl = (function (){var p = prefix;
var d = fdecl__$2;
while(true){
if(cljs.core.truth_(p)){
var G__65346 = cljs.core.next(p);
var G__65347 = cljs.core.cons(cljs.core.first(p),d);
p = G__65346;
d = G__65347;
continue;
} else {
return d;
}
break;
}
})();
return (new cljs.core.List(null,new cljs.core.Symbol(null,"do","do",1686842252,null),(new cljs.core.List(null,cljs.core.cons(new cljs.core.Symbol("cljs.core","defn","cljs.core/defn",-1606493717,null),decl),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"var","var",870848730,null),(new cljs.core.List(null,name__$1,null,(1),null)),(2),null)),null,(1),null)),(2),null)),(3),null));
}));

(sci.impl.fns.defmacro_STAR_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(sci.impl.fns.defmacro_STAR_.cljs$lang$applyTo = (function (seq65097){
var G__65098 = cljs.core.first(seq65097);
var seq65097__$1 = cljs.core.next(seq65097);
var G__65099 = cljs.core.first(seq65097__$1);
var seq65097__$2 = cljs.core.next(seq65097__$1);
var G__65100 = cljs.core.first(seq65097__$2);
var seq65097__$3 = cljs.core.next(seq65097__$2);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__65098,G__65099,G__65100,seq65097__$3);
}));


//# sourceMappingURL=sci.impl.fns.js.map
