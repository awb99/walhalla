goog.provide('pinkgorilla.repl.cljs.js_interop');
goog.scope(function(){
  pinkgorilla.repl.cljs.js_interop.goog$module$goog$object = goog.module.get('goog.object');
});
/**
 * Safe access to a value at key a js object.
 * Returns `'forbidden` if reading the property would result in a `SecurityError`.
 * https://developer.mozilla.org/en-US/docs/Web/Security/Same-origin_policy
 */
pinkgorilla.repl.cljs.js_interop.value_of = (function pinkgorilla$repl$cljs$js_interop$value_of(obj,k){
try{var v = (function (){var obj50785 = obj;
if((!((obj50785 == null)))){
return (obj50785[applied_science.js_interop.impl.wrap_key(k)]);
} else {
return undefined;
}
})();
v.constructor;

return v;
}catch (e50784){if((e50784 instanceof Error)){
var _ = e50784;
return new cljs.core.Symbol(null,"forbidden","forbidden",-338916619,null);
} else {
throw e50784;

}
}});
pinkgorilla.repl.cljs.js_interop.obj__GT_clj = (function pinkgorilla$repl$cljs$js_interop$obj__GT_clj(x){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (result,key){
var v = (x[key]);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("function",goog.typeOf(v))){
return result;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(result,key,v);
}
}),cljs.core.PersistentArrayMap.EMPTY,pinkgorilla.repl.cljs.js_interop.goog$module$goog$object.getKeys(x));
});

//# sourceMappingURL=pinkgorilla.repl.cljs.js_interop.js.map
