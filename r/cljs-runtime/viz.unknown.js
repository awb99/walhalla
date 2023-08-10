goog.provide('viz.unknown');
/**
 * ui component for unknown tags - so that we don't need to catch react errors
 * Currently not yet used (see resolve function)
 */
viz.unknown.no_renderer = (function viz$unknown$no_renderer(tag){
return (function() { 
var G__51826__delegate = function (_){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.unknown-tag","span.unknown-tag",-1604027258),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"background-color","background-color",570434026),"red"], null)], null),["Unknown Tag: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(tag)].join('')], null);
};
var G__51826 = function (var_args){
var _ = null;
if (arguments.length > 0) {
var G__51827__i = 0, G__51827__a = new Array(arguments.length -  0);
while (G__51827__i < G__51827__a.length) {G__51827__a[G__51827__i] = arguments[G__51827__i + 0]; ++G__51827__i;}
  _ = new cljs.core.IndexedSeq(G__51827__a,0,null);
} 
return G__51826__delegate.call(this,_);};
G__51826.cljs$lang$maxFixedArity = 0;
G__51826.cljs$lang$applyTo = (function (arglist__51828){
var _ = cljs.core.seq(arglist__51828);
return G__51826__delegate(_);
});
G__51826.cljs$core$IFn$_invoke$arity$variadic = G__51826__delegate;
return G__51826;
})()
;
});

//# sourceMappingURL=viz.unknown.js.map
