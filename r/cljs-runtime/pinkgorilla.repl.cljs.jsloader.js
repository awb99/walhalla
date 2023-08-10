goog.provide('pinkgorilla.repl.cljs.jsloader');
goog.scope(function(){
  pinkgorilla.repl.cljs.jsloader.goog$module$goog$object = goog.module.get('goog.object');
});
pinkgorilla.repl.cljs.jsloader.filter_loaded = (function pinkgorilla$repl$cljs$jsloader$filter_loaded(scripts){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (acc,p__49643){
var vec__49647 = p__49643;
var loaded_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49647,(0),null);
var src = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49647,(1),null);
if(cljs.core.truth_((loaded_QMARK_.cljs$core$IFn$_invoke$arity$0 ? loaded_QMARK_.cljs$core$IFn$_invoke$arity$0() : loaded_QMARK_.call(null)))){
return acc;
} else {
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(acc,src);
}
}),cljs.core.PersistentVector.EMPTY,scripts);
});
pinkgorilla.repl.cljs.jsloader.load_js = (function pinkgorilla$repl$cljs$jsloader$load_js(url){
var status = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(false);
var p = goog.net.jsloader.safeLoad(goog.html.legacyconversions.trustedResourceUrlFromString(cljs.core.clj__GT_js(url)));
p.then((function() { 
var G__49775__delegate = function (args){
return cljs.core.reset_BANG_(status,true);
};
var G__49775 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__49777__i = 0, G__49777__a = new Array(arguments.length -  0);
while (G__49777__i < G__49777__a.length) {G__49777__a[G__49777__i] = arguments[G__49777__i + 0]; ++G__49777__i;}
  args = new cljs.core.IndexedSeq(G__49777__a,0,null);
} 
return G__49775__delegate.call(this,args);};
G__49775.cljs$lang$maxFixedArity = 0;
G__49775.cljs$lang$applyTo = (function (arglist__49780){
var args = cljs.core.seq(arglist__49780);
return G__49775__delegate(args);
});
G__49775.cljs$core$IFn$_invoke$arity$variadic = G__49775__delegate;
return G__49775;
})()
,(function() { 
var G__49782__delegate = function (args){
return cljs.core.reset_BANG_(status,new cljs.core.Keyword(null,"error","error",-978969032));
};
var G__49782 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__49783__i = 0, G__49783__a = new Array(arguments.length -  0);
while (G__49783__i < G__49783__a.length) {G__49783__a[G__49783__i] = arguments[G__49783__i + 0]; ++G__49783__i;}
  args = new cljs.core.IndexedSeq(G__49783__a,0,null);
} 
return G__49782__delegate.call(this,args);};
G__49782.cljs$lang$maxFixedArity = 0;
G__49782.cljs$lang$applyTo = (function (arglist__49788){
var args = cljs.core.seq(arglist__49788);
return G__49782__delegate(args);
});
G__49782.cljs$core$IFn$_invoke$arity$variadic = G__49782__delegate;
return G__49782;
})()
);

return status;
});
/**
 * Load a supplied list of Javascript files and render a component
 * during loading and another component as soon as every script is
 * loaded.
 * 
 * Arg map: {:scripts {loaded-test-fn src}
 *           :loading component
 *           :loaded component}
 */
pinkgorilla.repl.cljs.jsloader.js_loader = (function pinkgorilla$repl$cljs$jsloader$js_loader(scripts,show_once_loaded,show_loading,show_error){
var status = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(false);
return reagent.core.create_class.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"component-did-mount","component-did-mount",-1126910518),(function (_){
var not_loaded = pinkgorilla.repl.cljs.jsloader.filter_loaded(scripts);
var not_loaded_safe = cljs.core.clj__GT_js(cljs.core.map.cljs$core$IFn$_invoke$arity$2(goog.html.legacyconversions.trustedResourceUrlFromString,cljs.core.clj__GT_js(not_loaded)));
var p = goog.net.jsloader.safeLoadMany(not_loaded_safe);
console.log(["loading js: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(not_loaded)].join(''));

return p.then((function() { 
var G__49800__delegate = function (args){
return cljs.core.reset_BANG_(status,true);
};
var G__49800 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__49801__i = 0, G__49801__a = new Array(arguments.length -  0);
while (G__49801__i < G__49801__a.length) {G__49801__a[G__49801__i] = arguments[G__49801__i + 0]; ++G__49801__i;}
  args = new cljs.core.IndexedSeq(G__49801__a,0,null);
} 
return G__49800__delegate.call(this,args);};
G__49800.cljs$lang$maxFixedArity = 0;
G__49800.cljs$lang$applyTo = (function (arglist__49802){
var args = cljs.core.seq(arglist__49802);
return G__49800__delegate(args);
});
G__49800.cljs$core$IFn$_invoke$arity$variadic = G__49800__delegate;
return G__49800;
})()
,(function() { 
var G__49803__delegate = function (args){
return cljs.core.reset_BANG_(status,new cljs.core.Keyword(null,"error","error",-978969032));
};
var G__49803 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__49804__i = 0, G__49804__a = new Array(arguments.length -  0);
while (G__49804__i < G__49804__a.length) {G__49804__a[G__49804__i] = arguments[G__49804__i + 0]; ++G__49804__i;}
  args = new cljs.core.IndexedSeq(G__49804__a,0,null);
} 
return G__49803__delegate.call(this,args);};
G__49803.cljs$lang$maxFixedArity = 0;
G__49803.cljs$lang$applyTo = (function (arglist__49805){
var args = cljs.core.seq(arglist__49805);
return G__49803__delegate(args);
});
G__49803.cljs$core$IFn$_invoke$arity$variadic = G__49803__delegate;
return G__49803;
})()
);
}),new cljs.core.Keyword(null,"reagent-render","reagent-render",-985383853),(function (scripts__$1,show_once_loaded__$1,show_loading__$1,show_error__$1){
var G__49705 = cljs.core.deref(status);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(true,G__49705)){
return show_once_loaded__$1;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"error","error",-978969032),G__49705)){
return show_error__$1;
} else {
return show_loading__$1;

}
}
})], null));
});
pinkgorilla.repl.cljs.jsloader.load_always = (function pinkgorilla$repl$cljs$jsloader$load_always(){
return false;
});
pinkgorilla.repl.cljs.jsloader.browser_defined_QMARK_ = (function pinkgorilla$repl$cljs$jsloader$browser_defined_QMARK_(s){
return (function (){
var defined_QMARK_ = pinkgorilla.repl.cljs.jsloader.goog$module$goog$object.get(window,s);
console.log("symbol ",s,(cljs.core.truth_(defined_QMARK_)?" is defined":" is NOT DEFINED!"));

return defined_QMARK_;
});
});
pinkgorilla.repl.cljs.jsloader.with_js = (function pinkgorilla$repl$cljs$jsloader$with_js(scripts,show_once_loaded){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [pinkgorilla.repl.cljs.jsloader.js_loader,scripts,show_once_loaded,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"loading js .."], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"load-js error!"], null)], null);
});
pinkgorilla.repl.cljs.jsloader.host_name = (function pinkgorilla$repl$cljs$jsloader$host_name(){
var hostname = window.location.hostname;
return hostname;
});

//# sourceMappingURL=pinkgorilla.repl.cljs.jsloader.js.map
