goog.provide('pinkgorilla.repl.cljs.jsloader');
goog.scope(function(){
  pinkgorilla.repl.cljs.jsloader.goog$module$goog$object = goog.module.get('goog.object');
});
pinkgorilla.repl.cljs.jsloader.filter_loaded = (function pinkgorilla$repl$cljs$jsloader$filter_loaded(scripts){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (acc,p__50798){
var vec__50800 = p__50798;
var loaded_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50800,(0),null);
var src = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50800,(1),null);
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
var G__50816__delegate = function (args){
return cljs.core.reset_BANG_(status,true);
};
var G__50816 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__50817__i = 0, G__50817__a = new Array(arguments.length -  0);
while (G__50817__i < G__50817__a.length) {G__50817__a[G__50817__i] = arguments[G__50817__i + 0]; ++G__50817__i;}
  args = new cljs.core.IndexedSeq(G__50817__a,0,null);
} 
return G__50816__delegate.call(this,args);};
G__50816.cljs$lang$maxFixedArity = 0;
G__50816.cljs$lang$applyTo = (function (arglist__50818){
var args = cljs.core.seq(arglist__50818);
return G__50816__delegate(args);
});
G__50816.cljs$core$IFn$_invoke$arity$variadic = G__50816__delegate;
return G__50816;
})()
,(function() { 
var G__50819__delegate = function (args){
return cljs.core.reset_BANG_(status,new cljs.core.Keyword(null,"error","error",-978969032));
};
var G__50819 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__50820__i = 0, G__50820__a = new Array(arguments.length -  0);
while (G__50820__i < G__50820__a.length) {G__50820__a[G__50820__i] = arguments[G__50820__i + 0]; ++G__50820__i;}
  args = new cljs.core.IndexedSeq(G__50820__a,0,null);
} 
return G__50819__delegate.call(this,args);};
G__50819.cljs$lang$maxFixedArity = 0;
G__50819.cljs$lang$applyTo = (function (arglist__50821){
var args = cljs.core.seq(arglist__50821);
return G__50819__delegate(args);
});
G__50819.cljs$core$IFn$_invoke$arity$variadic = G__50819__delegate;
return G__50819;
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
var G__50822__delegate = function (args){
return cljs.core.reset_BANG_(status,true);
};
var G__50822 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__50823__i = 0, G__50823__a = new Array(arguments.length -  0);
while (G__50823__i < G__50823__a.length) {G__50823__a[G__50823__i] = arguments[G__50823__i + 0]; ++G__50823__i;}
  args = new cljs.core.IndexedSeq(G__50823__a,0,null);
} 
return G__50822__delegate.call(this,args);};
G__50822.cljs$lang$maxFixedArity = 0;
G__50822.cljs$lang$applyTo = (function (arglist__50824){
var args = cljs.core.seq(arglist__50824);
return G__50822__delegate(args);
});
G__50822.cljs$core$IFn$_invoke$arity$variadic = G__50822__delegate;
return G__50822;
})()
,(function() { 
var G__50825__delegate = function (args){
return cljs.core.reset_BANG_(status,new cljs.core.Keyword(null,"error","error",-978969032));
};
var G__50825 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__50826__i = 0, G__50826__a = new Array(arguments.length -  0);
while (G__50826__i < G__50826__a.length) {G__50826__a[G__50826__i] = arguments[G__50826__i + 0]; ++G__50826__i;}
  args = new cljs.core.IndexedSeq(G__50826__a,0,null);
} 
return G__50825__delegate.call(this,args);};
G__50825.cljs$lang$maxFixedArity = 0;
G__50825.cljs$lang$applyTo = (function (arglist__50827){
var args = cljs.core.seq(arglist__50827);
return G__50825__delegate(args);
});
G__50825.cljs$core$IFn$_invoke$arity$variadic = G__50825__delegate;
return G__50825;
})()
);
}),new cljs.core.Keyword(null,"reagent-render","reagent-render",-985383853),(function (scripts__$1,show_once_loaded__$1,show_loading__$1,show_error__$1){
var G__50815 = cljs.core.deref(status);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(true,G__50815)){
return show_once_loaded__$1;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"error","error",-978969032),G__50815)){
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
