goog.provide('goldly.sci.kernel_cljs');
goldly.sci.kernel_cljs.require_async = (function goldly$sci$kernel_cljs$require_async(var_args){
var args__5775__auto__ = [];
var len__5769__auto___54566 = arguments.length;
var i__5770__auto___54567 = (0);
while(true){
if((i__5770__auto___54567 < len__5769__auto___54566)){
args__5775__auto__.push((arguments[i__5770__auto___54567]));

var G__54568 = (i__5770__auto___54567 + (1));
i__5770__auto___54567 = G__54568;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return goldly.sci.kernel_cljs.require_async.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});
goog.exportSymbol('goldly.sci.kernel_cljs.require_async', goldly.sci.kernel_cljs.require_async);

(goldly.sci.kernel_cljs.require_async.cljs$core$IFn$_invoke$arity$variadic = (function (libspec){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(sci.async.require,goldly.sci.kernel_cljs.ctx_repl,libspec);
}));

(goldly.sci.kernel_cljs.require_async.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(goldly.sci.kernel_cljs.require_async.cljs$lang$applyTo = (function (seq54561){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq54561));
}));

goldly.sci.kernel_cljs.compile_code = (function goldly$sci$kernel_cljs$compile_code(code){
try{return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"result","result",1415092211),sci.core.eval_string_STAR_(goldly.sci.kernel_cljs.ctx_repl,code)], null);
}catch (e54562){var e = e54562;
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"goldly.sci.kernel-cljs",null,41,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["sci compile-code --]",code,"[-- ex: ",e], null);
}),null)),null,(96),null);

return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"root-ex","root-ex",-1080814778),e.data,new cljs.core.Keyword(null,"err","err",-2089457205),e.message], null)], null);
}});
goog.exportSymbol('goldly.sci.kernel_cljs.compile_code', goldly.sci.kernel_cljs.compile_code);
goldly.sci.kernel_cljs.resolve_symbol = (function goldly$sci$kernel_cljs$resolve_symbol(sym){
return sci.impl.resolve.resolve_symbol.cljs$core$IFn$_invoke$arity$2(goldly.sci.kernel_cljs.ctx_repl,sym);
});
goldly.sci.kernel_cljs._BANG_last_ns = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(sci.core.ns));
cljs.core.enable_console_print_BANG_();
goldly.sci.kernel_cljs.output = cljs.core.atom.cljs$core$IFn$_invoke$arity$1("");
goldly.sci.kernel_cljs.my_print_fn = (function goldly$sci$kernel_cljs$my_print_fn(var_args){
var args__5775__auto__ = [];
var len__5769__auto___54569 = arguments.length;
var i__5770__auto___54570 = (0);
while(true){
if((i__5770__auto___54570 < len__5769__auto___54569)){
args__5775__auto__.push((arguments[i__5770__auto___54570]));

var G__54571 = (i__5770__auto___54570 + (1));
i__5770__auto___54570 = G__54571;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return goldly.sci.kernel_cljs.my_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(goldly.sci.kernel_cljs.my_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(args));

var args__$1 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args);
var args__$2 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(args__$1),"\n"].join('');
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(goldly.sci.kernel_cljs.output,cljs.core.str,args__$2);
}));

(goldly.sci.kernel_cljs.my_print_fn.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(goldly.sci.kernel_cljs.my_print_fn.cljs$lang$applyTo = (function (seq54563){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq54563));
}));

sci.core.alter_var_root.cljs$core$IFn$_invoke$arity$2(sci.core.print_fn,cljs.core.constantly(goldly.sci.kernel_cljs.my_print_fn));
sci.core.alter_var_root.cljs$core$IFn$_invoke$arity$2(sci.core.print_err_fn,cljs.core.constantly(cljs.core._STAR_print_err_fn_STAR_));
goldly.sci.kernel_cljs.compile_code_async = (function goldly$sci$kernel_cljs$compile_code_async(code){
try{var bm__51638__auto__ = cljs.core.PersistentArrayMap.createAsIfByAssoc([sci.core.ns,cljs.core.deref(goldly.sci.kernel_cljs._BANG_last_ns)]);
if(cljs.core.map_QMARK_(bm__51638__auto__)){
} else {
throw (new Error("Assert failed: (clojure.core/map? bm__51638__auto__)"));
}

sci.impl.vars.push_thread_bindings(bm__51638__auto__);

try{var eval_p = sci.async.eval_string_PLUS_.cljs$core$IFn$_invoke$arity$2(goldly.sci.kernel_cljs.ctx_repl,code);
return eval_p.then((function (res){
var map__54565 = res;
var map__54565__$1 = cljs.core.__destructure_map(map__54565);
var val = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54565__$1,new cljs.core.Keyword(null,"val","val",128701612));
var ns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54565__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var result = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"id","id",-1388402092),null,new cljs.core.Keyword(null,"code","code",1586293142),code,new cljs.core.Keyword(null,"value","value",305978217),val,new cljs.core.Keyword(null,"out","out",-910545517),cljs.core.deref(goldly.sci.kernel_cljs.output),new cljs.core.Keyword(null,"ns","ns",441598760),cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns)], null);
cljs.core.reset_BANG_(goldly.sci.kernel_cljs._BANG_last_ns,ns);

cljs.core.reset_BANG_(goldly.sci.kernel_cljs.output,"");

taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"debug","debug",-1608172596),"goldly.sci.kernel-cljs",null,89,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["sci-cljs compile result: ",result], null);
}),null)),null,(98),null);

return result;
}));
}finally {sci.impl.vars.pop_thread_bindings();
}}catch (e54564){var e = e54564;
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"goldly.sci.kernel-cljs",null,92,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["sci compile-code-async --]",code,"[-- ex: ",e], null);
}),null)),null,(97),null);

return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"root-ex","root-ex",-1080814778),e.data,new cljs.core.Keyword(null,"err","err",-2089457205),e.message], null)], null);
}});
goog.exportSymbol('goldly.sci.kernel_cljs.compile_code_async', goldly.sci.kernel_cljs.compile_code_async);
goldly.sci.kernel_cljs.rns = sci.core.create_ns.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"cljs.reader","cljs.reader",1327473948,null),null);
goldly.sci.kernel_cljs.ctx_static = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"bindings","bindings",1271397192),goldly_bindings_generated.bindings_generated,new cljs.core.Keyword(null,"preset","preset",777387345),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"termination-safe","termination-safe",-1845225130),false], null),new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([goldly_bindings_generated.ns_generated,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Symbol(null,"clojure.core","clojure.core",-189332625,null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Symbol(null,"require","require",1172530194,null),sci.async.require,new cljs.core.Symbol(null,"time","time",-1268547887,null),(function (){var ns__51625__auto__ = goldly.sci.clojure_core.cljns;
var var__51626__auto__ = new cljs.core.Var(function(){return goldly.sci.clojure_core.time;},new cljs.core.Symbol("goldly.sci.clojure-core","time","goldly.sci.clojure-core/time",589711439,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"macro","macro",-867863404),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"goldly.sci.clojure-core","goldly.sci.clojure-core",-2000722947,null),new cljs.core.Symbol(null,"time","time",-1268547887,null),"goldly/sci/clojure_core.cljs",(28),(1),(11),true,(11),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"expr","expr",-1908713478,null)], null)),"Evaluates expr and prints the time it took. Returns the value of expr.",(cljs.core.truth_(goldly.sci.clojure_core.time)?goldly.sci.clojure_core.time.cljs$lang$test:null)]));
var val__51627__auto__ = cljs.core.deref(var__51626__auto__);
var m__51628__auto__ = cljs.core.meta(var__51626__auto__);
var name__51629__auto__ = (function (){var or__5045__auto__ = null;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m__51628__auto__);
}
})();
var new_m__51630__auto__ = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"ns","ns",441598760),ns__51625__auto__,new cljs.core.Keyword(null,"name","name",1843675177),name__51629__auto__,new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m__51628__auto__),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m__51628__auto__)], null);
if(cljs.core.truth_(new cljs.core.Keyword(null,"dynamic","dynamic",704819571).cljs$core$IFn$_invoke$arity$1(m__51628__auto__))){
return sci.core.new_dynamic_var.cljs$core$IFn$_invoke$arity$3(name__51629__auto__,val__51627__auto__,new_m__51630__auto__);
} else {
if(cljs.core.truth_((function (){var or__5045__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m__51628__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return new cljs.core.Keyword("sci","macro","sci/macro",-868536151).cljs$core$IFn$_invoke$arity$1(m__51628__auto__);
}
})())){
return sci.core.new_macro_var.cljs$core$IFn$_invoke$arity$3(name__51629__auto__,val__51627__auto__,new_m__51630__auto__);
} else {
return sci.core.new_var.cljs$core$IFn$_invoke$arity$3(name__51629__auto__,val__51627__auto__,new_m__51630__auto__);

}
}
})(),new cljs.core.Symbol(null,"system-time","system-time",1690633727,null),(function (){var ns__51625__auto__ = goldly.sci.clojure_core.cljns;
var var__51626__auto__ = new cljs.core.Var(function(){return cljs.core.system_time;},new cljs.core.Symbol("cljs.core","system-time","cljs.core/system-time",1562011930,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"cljs.core","cljs.core",770546058,null),new cljs.core.Symbol(null,"system-time","system-time",1690633727,null),"cljs/core.cljs",(18),(1),(399),(399),cljs.core.list(cljs.core.PersistentVector.EMPTY),"Returns highest resolution time offered by host in milliseconds.",(cljs.core.truth_(cljs.core.system_time)?cljs.core.system_time.cljs$lang$test:null)]));
var val__51627__auto__ = cljs.core.deref(var__51626__auto__);
var m__51628__auto__ = cljs.core.meta(var__51626__auto__);
var name__51629__auto__ = (function (){var or__5045__auto__ = null;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m__51628__auto__);
}
})();
var new_m__51630__auto__ = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"ns","ns",441598760),ns__51625__auto__,new cljs.core.Keyword(null,"name","name",1843675177),name__51629__auto__,new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m__51628__auto__),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m__51628__auto__)], null);
if(cljs.core.truth_(new cljs.core.Keyword(null,"dynamic","dynamic",704819571).cljs$core$IFn$_invoke$arity$1(m__51628__auto__))){
return sci.core.new_dynamic_var.cljs$core$IFn$_invoke$arity$3(name__51629__auto__,val__51627__auto__,new_m__51630__auto__);
} else {
if(cljs.core.truth_((function (){var or__5045__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m__51628__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return new cljs.core.Keyword("sci","macro","sci/macro",-868536151).cljs$core$IFn$_invoke$arity$1(m__51628__auto__);
}
})())){
return sci.core.new_macro_var.cljs$core$IFn$_invoke$arity$3(name__51629__auto__,val__51627__auto__,new_m__51630__auto__);
} else {
return sci.core.new_var.cljs$core$IFn$_invoke$arity$3(name__51629__auto__,val__51627__auto__,new_m__51630__auto__);

}
}
})(),new cljs.core.Symbol(null,"random-uuid","random-uuid",-1574409597,null),cljs.core.random_uuid,new cljs.core.Symbol(null,"read-string","read-string",-558384455,null),(function (){var ns__51625__auto__ = goldly.sci.kernel_cljs.rns;
var var__51626__auto__ = new cljs.core.Var(function(){return cljs.reader.read_string;},new cljs.core.Symbol("cljs.reader","read-string","cljs.reader/read-string",589673466,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"top-fn","top-fn",-2056129173),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"cljs.reader","cljs.reader",1327473948,null),new cljs.core.Symbol(null,"read-string","read-string",-558384455,null),"cljs/reader.cljs",(18),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"variadic?","variadic?",584179762),false,new cljs.core.Keyword(null,"fixed-arity","fixed-arity",1586445869),(2),new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543),(2),new cljs.core.Keyword(null,"method-params","method-params",-980792179),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"s","s",-948495851,null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"opts","opts",1795607228,null),new cljs.core.Symbol(null,"s","s",-948495851,null)], null)], null),new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"s","s",-948495851,null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"opts","opts",1795607228,null),new cljs.core.Symbol(null,"s","s",-948495851,null)], null)),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",1944829838),cljs.core.list(null,null)], null),(1),(174),(174),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"s","s",-948495851,null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"opts","opts",1795607228,null),new cljs.core.Symbol(null,"s","s",-948495851,null)], null)),"Reads one object from the string s.\n   Returns nil when s is nil or empty.\n\n   Reads data in the edn format (subset of Clojure data):\n   http://edn-format.org\n\n   opts is a map as per cljs.tools.reader.edn/read",(cljs.core.truth_(cljs.reader.read_string)?cljs.reader.read_string.cljs$lang$test:null)]));
var val__51627__auto__ = cljs.core.deref(var__51626__auto__);
var m__51628__auto__ = cljs.core.meta(var__51626__auto__);
var name__51629__auto__ = (function (){var or__5045__auto__ = null;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m__51628__auto__);
}
})();
var new_m__51630__auto__ = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"ns","ns",441598760),ns__51625__auto__,new cljs.core.Keyword(null,"name","name",1843675177),name__51629__auto__,new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m__51628__auto__),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m__51628__auto__)], null);
if(cljs.core.truth_(new cljs.core.Keyword(null,"dynamic","dynamic",704819571).cljs$core$IFn$_invoke$arity$1(m__51628__auto__))){
return sci.core.new_dynamic_var.cljs$core$IFn$_invoke$arity$3(name__51629__auto__,val__51627__auto__,new_m__51630__auto__);
} else {
if(cljs.core.truth_((function (){var or__5045__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m__51628__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return new cljs.core.Keyword("sci","macro","sci/macro",-868536151).cljs$core$IFn$_invoke$arity$1(m__51628__auto__);
}
})())){
return sci.core.new_macro_var.cljs$core$IFn$_invoke$arity$3(name__51629__auto__,val__51627__auto__,new_m__51630__auto__);
} else {
return sci.core.new_var.cljs$core$IFn$_invoke$arity$3(name__51629__auto__,val__51627__auto__,new_m__51630__auto__);

}
}
})()], null),new cljs.core.Symbol(null,"goldly.sci","goldly.sci",-91271036,null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Symbol(null,"require-async","require-async",-93567966,null),goldly.sci.kernel_cljs.require_async,new cljs.core.Symbol(null,"compile-sci","compile-sci",-814834508,null),goldly.sci.kernel_cljs.compile_code,new cljs.core.Symbol(null,"compile-sci-async","compile-sci-async",-110238770,null),goldly.sci.kernel_cljs.compile_code_async,new cljs.core.Symbol(null,"resolve-symbol-sci","resolve-symbol-sci",897150083,null),goldly.sci.kernel_cljs.resolve_symbol], null)], null)], 0)),new cljs.core.Keyword(null,"classes","classes",2037804510),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Symbol(null,"js","js",-886355190,null),window,new cljs.core.Keyword(null,"allow","allow",-1857325745),new cljs.core.Keyword(null,"all","all",892129742)], null),new cljs.core.Keyword(null,"disable-arity-checks","disable-arity-checks",1131364206),true,new cljs.core.Keyword(null,"async-load-fn","async-load-fn",-472170029),goldly.sci.loader.async_load.async_load_fn], null);
goldly.sci.kernel_cljs.ctx_repl = sci.core.init(goldly.sci.kernel_cljs.ctx_static);

//# sourceMappingURL=goldly.sci.kernel_cljs.js.map
