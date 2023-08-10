goog.provide('pinkgorilla.layout.spaces');
var module$node_modules$react_spaces$dist$index=shadow.js.require("module$node_modules$react_spaces$dist$index", {});
pinkgorilla.layout.spaces.wrap = (function pinkgorilla$layout$spaces$wrap(c){
return (function() { 
var G__54562__delegate = function (opts,p__54553){
var vec__54554 = p__54553;
var child = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54554,(0),null);
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),c,opts,child], null);
};
var G__54562 = function (opts,var_args){
var p__54553 = null;
if (arguments.length > 1) {
var G__54563__i = 0, G__54563__a = new Array(arguments.length -  1);
while (G__54563__i < G__54563__a.length) {G__54563__a[G__54563__i] = arguments[G__54563__i + 1]; ++G__54563__i;}
  p__54553 = new cljs.core.IndexedSeq(G__54563__a,0,null);
} 
return G__54562__delegate.call(this,opts,p__54553);};
G__54562.cljs$lang$maxFixedArity = 1;
G__54562.cljs$lang$applyTo = (function (arglist__54564){
var opts = cljs.core.first(arglist__54564);
var p__54553 = cljs.core.rest(arglist__54564);
return G__54562__delegate(opts,p__54553);
});
G__54562.cljs$core$IFn$_invoke$arity$variadic = G__54562__delegate;
return G__54562;
})()
;
});
pinkgorilla.layout.spaces.viewport = pinkgorilla.layout.spaces.wrap(module$node_modules$react_spaces$dist$index.ViewPort);
pinkgorilla.layout.spaces.fill = pinkgorilla.layout.spaces.wrap(module$node_modules$react_spaces$dist$index.Fill);
pinkgorilla.layout.spaces.description = pinkgorilla.layout.spaces.wrap(module$node_modules$react_spaces$dist$index.Description);
pinkgorilla.layout.spaces.left = pinkgorilla.layout.spaces.wrap(module$node_modules$react_spaces$dist$index.Left);
pinkgorilla.layout.spaces.right = pinkgorilla.layout.spaces.wrap(module$node_modules$react_spaces$dist$index.Right);
pinkgorilla.layout.spaces.top = pinkgorilla.layout.spaces.wrap(module$node_modules$react_spaces$dist$index.Top);
pinkgorilla.layout.spaces.bottom = pinkgorilla.layout.spaces.wrap(module$node_modules$react_spaces$dist$index.Bottom);
pinkgorilla.layout.spaces.left_resizeable = pinkgorilla.layout.spaces.wrap(module$node_modules$react_spaces$dist$index.LeftResizable);
pinkgorilla.layout.spaces.right_resizeable = pinkgorilla.layout.spaces.wrap(module$node_modules$react_spaces$dist$index.RightResizable);
pinkgorilla.layout.spaces.top_resizeable = pinkgorilla.layout.spaces.wrap(module$node_modules$react_spaces$dist$index.TopResizable);
pinkgorilla.layout.spaces.bottom_resizeable = pinkgorilla.layout.spaces.wrap(module$node_modules$react_spaces$dist$index.BottomResizable);
pinkgorilla.layout.spaces.centered_vertically = pinkgorilla.layout.spaces.wrap(module$node_modules$react_spaces$dist$index.CenteredVertically);

//# sourceMappingURL=pinkgorilla.layout.spaces.js.map
