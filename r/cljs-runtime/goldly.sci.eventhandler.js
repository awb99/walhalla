goog.provide('goldly.sci.eventhandler');
goldly.sci.eventhandler.edn_QMARK_ = (function goldly$sci$eventhandler$edn_QMARK_(obj){
return ((typeof obj === 'number') || (((typeof obj === 'string') || (((cljs.core.coll_QMARK_(obj)) || (((cljs.core.boolean_QMARK_(obj)) || ((((obj == null)) || (((cljs.core.regexp_QMARK_(obj)) || ((((obj instanceof cljs.core.Symbol)) || ((obj instanceof cljs.core.Keyword)))))))))))))));
});
goldly.sci.eventhandler.norm_evt = (function goldly$sci$eventhandler$norm_evt(obj){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(goldly.sci.eventhandler.edn_QMARK_,cljs.core.second),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__65480_SHARP_){
var norm = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(clojure.string.replace(p1__65480_SHARP_,/[A-Z]/,(function (r){
return ["-",clojure.string.lower_case(r)].join('');
})));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [norm,(obj[p1__65480_SHARP_])], null);
}),Object.getOwnPropertyNames(Object.getPrototypeOf(obj)))));
});
goldly.sci.eventhandler.eventhandler_fn = (function goldly$sci$eventhandler$eventhandler_fn(fun){
return (function() { 
var G__65483__delegate = function (e,args){
try{e.preventDefault();

e.stopPropagation();

var t = e.target;
var v = t.value;
var e_norm = goldly.sci.eventhandler.norm_evt(t);
var _ = taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"info","info",-317069002),"goldly.sci.eventhandler",null,37,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, ["eventhandler v:",v," e-norm: ",e_norm," args: ",args], null);
}),null)),null,(269),null);
var fun_args = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [v,e_norm], null);
var fun_args__$1 = (((args == null))?fun_args:cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fun_args,args)));
var ___$1 = taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"debug","debug",-1608172596),"goldly.sci.eventhandler",null,42,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["fun-args: ",fun_args__$1], null);
}),null)),null,(270),null);
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(fun,fun_args__$1);
}catch (e65482){var err = e65482;
return taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"goldly.sci.eventhandler",null,45,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["eventhandler-fn exception: ",err], null);
}),null)),null,(266),null);
}};
var G__65483 = function (e,var_args){
var args = null;
if (arguments.length > 1) {
var G__65484__i = 0, G__65484__a = new Array(arguments.length -  1);
while (G__65484__i < G__65484__a.length) {G__65484__a[G__65484__i] = arguments[G__65484__i + 1]; ++G__65484__i;}
  args = new cljs.core.IndexedSeq(G__65484__a,0,null);
} 
return G__65483__delegate.call(this,e,args);};
G__65483.cljs$lang$maxFixedArity = 1;
G__65483.cljs$lang$applyTo = (function (arglist__65485){
var e = cljs.core.first(arglist__65485);
var args = cljs.core.rest(arglist__65485);
return G__65483__delegate(e,args);
});
G__65483.cljs$core$IFn$_invoke$arity$variadic = G__65483__delegate;
return G__65483;
})()
;
});

//# sourceMappingURL=goldly.sci.eventhandler.js.map
