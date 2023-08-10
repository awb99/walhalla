goog.provide('goldly.sci.kernel_cljs');
goldly.sci.kernel_cljs.require_async = (function goldly$sci$kernel_cljs$require_async(var_args){
var args__5775__auto__ = [];
var len__5769__auto___54579 = arguments.length;
var i__5770__auto___54580 = (0);
while(true){
if((i__5770__auto___54580 < len__5769__auto___54579)){
args__5775__auto__.push((arguments[i__5770__auto___54580]));

var G__54581 = (i__5770__auto___54580 + (1));
i__5770__auto___54580 = G__54581;
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
(goldly.sci.kernel_cljs.require_async.cljs$lang$applyTo = (function (seq54554){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq54554));
}));

goldly.sci.kernel_cljs.compile_code = (function goldly$sci$kernel_cljs$compile_code(code){
try{return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"result","result",1415092211),sci.core.eval_string_STAR_(goldly.sci.kernel_cljs.ctx_repl,code)], null);
}catch (e54555){var e = e54555;
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"goldly.sci.kernel-cljs",null,46,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["sci compile-code --]",code,"[-- ex: ",e], null);
}),null)),null,(83),null);

return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"root-ex","root-ex",-1080814778),e.data,new cljs.core.Keyword(null,"err","err",-2089457205),e.message], null)], null);
}});
goog.exportSymbol('goldly.sci.kernel_cljs.compile_code', goldly.sci.kernel_cljs.compile_code);
goldly.sci.kernel_cljs.resolve_symbol = (function goldly$sci$kernel_cljs$resolve_symbol(sym){
return sci.impl.resolve.resolve_symbol.cljs$core$IFn$_invoke$arity$2(goldly.sci.kernel_cljs.ctx_repl,sym);
});
goldly.sci.kernel_cljs.sci_ns_lookup = (function goldly$sci$kernel_cljs$sci_ns_lookup(libname){
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"debug","debug",-1608172596),"goldly.sci.kernel-cljs",null,56,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["looking up module for sci-ns:",libname], null);
}),null)),null,(84),null);

var temp__5802__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(goldly_bindings_generated.sci_lazy_ns_dict,libname);
if(cljs.core.truth_(temp__5802__auto__)){
var module_name = temp__5802__auto__;
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"info","info",-317069002),"goldly.sci.kernel-cljs",null,58,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["module for ",libname,": ",module_name], null);
}),null)),null,(85),null);

return cljs.core.get.cljs$core$IFn$_invoke$arity$2(goldly_bindings_generated.lazy_modules,module_name);
} else {
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"info","info",-317069002),"goldly.sci.kernel-cljs",null,60,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["no lazy-module found for: ",libname], null);
}),null)),null,(86),null);

return null;
}
});
goldly.sci.kernel_cljs.add_sci_ns = (function goldly$sci$kernel_cljs$add_sci_ns(ctx,libname,ns,opts,sci_ns,sci_defs,ns_vars){
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"info","info",-317069002),"goldly.sci.kernel-cljs",null,64,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, ["creating sci ns: ",sci_ns,"ns-vars:",ns_vars,"sci-defs",sci_defs], null);
}),null)),null,(87),null);

var mlns = sci.core.create_ns.cljs$core$IFn$_invoke$arity$1(sci_ns);
var sci_ns_def = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$3((function (sci_def,ns_var){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(sci_def,new cljs.core.Keyword(null,"add","add",235287739))){
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"info","info",-317069002),"goldly.sci.kernel-cljs",null,71,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["TEST: adding: ",(ns_var.cljs$core$IFn$_invoke$arity$2 ? ns_var.cljs$core$IFn$_invoke$arity$2((7),(7)) : ns_var.call(null,(7),(7)))], null);
}),null)),null,(88),null);
} else {
}

return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sci_def,sci.core.new_var.cljs$core$IFn$_invoke$arity$3(sci_def,ns_var,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ns","ns",441598760),mlns], null))], null);
}),sci_defs,ns_vars));
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"info","info",-317069002),"goldly.sci.kernel-cljs",null,76,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, ["sci/add-namespace! sci-ns: ",libname," sci ns :",sci_ns,"def: ",sci_ns_def], null);
}),null)),null,(89),null);

return sci.core.add_namespace_BANG_(ctx,libname,sci_ns_def);
});
goldly.sci.kernel_cljs.load_module_ns = (function goldly$sci$kernel_cljs$load_module_ns(ctx,libname,ns,opts,sci_ns,sci_def,loadable){
return goldly.sci.load_shadow.load_ext_shadow(loadable).then((function (ns_vars){
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"info","info",-317069002),"goldly.sci.kernel-cljs",null,83,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, ["received ns-vars for sci-ns: ",sci_ns,"libname: ",libname,"ns: ",ns], null);
}),null)),null,(90),null);

return goldly.sci.kernel_cljs.add_sci_ns(ctx,libname,ns,opts,sci_ns,sci_def,ns_vars);
}));
});
goldly.sci.kernel_cljs.load_module = (function goldly$sci$kernel_cljs$load_module(ctx,libname,ns,opts,sci_mod){
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"info","info",-317069002),"goldly.sci.kernel-cljs",null,87,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["load-module: ",libname], null);
}),null)),null,(91),null);

var promises = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__54556){
var vec__54557 = p__54556;
var sci_ns = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54557,(0),null);
var map__54560 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54557,(1),null);
var map__54560__$1 = cljs.core.__destructure_map(map__54560);
var sci_def = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54560__$1,new cljs.core.Keyword(null,"sci-def","sci-def",-971575708));
var loadable = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54560__$1,new cljs.core.Keyword(null,"loadable","loadable",-411421563));
return goldly.sci.kernel_cljs.load_module_ns(ctx,libname,ns,opts,sci_ns,sci_def,loadable);
}),sci_mod);
var p_all = promesa.core.all(promises);
return p_all.then((function (_d){
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"info","info",-317069002),"goldly.sci.kernel-cljs",null,95,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["load-module: ",libname," - finished loading all namespaces"], null);
}),null)),null,(92),null);

return cljs.core.PersistentArrayMap.EMPTY;
}));
});
goldly.sci.kernel_cljs.load_module_test = (function goldly$sci$kernel_cljs$load_module_test(ctx,libname,ns,opts){
return Promise.resolve(({"libfn": (function (){
return "result!";
})})).then((function (mod){
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"info","info",-317069002),"goldly.sci.kernel-cljs",null,103,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, ["demo lib : ",libname,"did load: ",mod,"mod-clj:",cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(mod)], null);
}),null)),null,(93),null);

sci.core.add_class_BANG_(ctx,new cljs.core.Keyword(null,"as","as",1148689641).cljs$core$IFn$_invoke$arity$1(opts),mod);

sci.core.add_import_BANG_(ctx,ns,new cljs.core.Keyword(null,"as","as",1148689641).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"as","as",1148689641).cljs$core$IFn$_invoke$arity$1(opts));

return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"handled","handled",1889700151),true], null);
}));
});
goldly.sci.kernel_cljs.ns__GT_filename = (function goldly$sci$kernel_cljs$ns__GT_filename(ns){
return clojure.string.replace(clojure.string.replace(ns,/\./,"/"),/\-/,"_");
});
goldly.sci.kernel_cljs.valid_code_QMARK_ = (function goldly$sci$kernel_cljs$valid_code_QMARK_(p__54561){
var map__54562 = p__54561;
var map__54562__$1 = cljs.core.__destructure_map(map__54562);
var result = map__54562__$1;
var code = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54562__$1,new cljs.core.Keyword(null,"code","code",1586293142));
var and__5043__auto__ = code;
if(cljs.core.truth_(and__5043__auto__)){
return (!(clojure.string.blank_QMARK_(code)));
} else {
return and__5043__auto__;
}
});
goldly.sci.kernel_cljs.on_cljs_received = (function goldly$sci$kernel_cljs$on_cljs_received(ctx,libname,ns,opts,resolve,reject,p__54563){
var vec__54564 = p__54563;
var event_type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54564,(0),null);
var map__54567 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54564,(1),null);
var map__54567__$1 = cljs.core.__destructure_map(map__54567);
var data = map__54567__$1;
var result = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54567__$1,new cljs.core.Keyword(null,"result","result",1415092211));
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"info","info",-317069002),"goldly.sci.kernel-cljs",null,120,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["on-cljs-received: ",event_type,"data: ",data], null);
}),null)),null,(94),null);

if(cljs.core.truth_(goldly.sci.kernel_cljs.valid_code_QMARK_(result))){
var code = new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(result);
var eval_p = sci.async.eval_string_PLUS_.cljs$core$IFn$_invoke$arity$2(ctx,code);
eval_p.then((function (res){
var map__54568 = res;
var map__54568__$1 = cljs.core.__destructure_map(map__54568);
var val = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54568__$1,new cljs.core.Keyword(null,"val","val",128701612));
var ns__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54568__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"info","info",-317069002),"goldly.sci.kernel-cljs",null,126,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["sci-cljs loader require - compile result: ",res], null);
}),null)),null,(95),null);

var temp__5804__auto___54582 = new cljs.core.Keyword(null,"as","as",1148689641).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(temp__5804__auto___54582)){
var as_54583 = temp__5804__auto___54582;
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"warn","warn",-436710552),"goldly.sci.kernel-cljs",null,130,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, ["registering as: ",as_54583,"in ns: ",ns__$1," to:",cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(libname)], null);
}),null)),null,(96),null);

sci.core.add_import_BANG_(ctx,ns__$1,cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(libname),new cljs.core.Keyword(null,"as","as",1148689641).cljs$core$IFn$_invoke$arity$1(opts));
} else {
}

var G__54569 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"handled","handled",1889700151),false], null);
return (resolve.cljs$core$IFn$_invoke$arity$1 ? resolve.cljs$core$IFn$_invoke$arity$1(G__54569) : resolve.call(null,G__54569));
}));

return eval_p.catch((function (e){
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"goldly.sci.kernel-cljs",null,134,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["compile error for: ",libname," error: ",e], null);
}),null)),null,(97),null);

return (reject.cljs$core$IFn$_invoke$arity$2 ? reject.cljs$core$IFn$_invoke$arity$2("compile error for: ",libname) : reject.call(null,"compile error for: ",libname));
}));
} else {
return (reject.cljs$core$IFn$_invoke$arity$2 ? reject.cljs$core$IFn$_invoke$arity$2("no sci-code for: ",libname) : reject.call(null,"no sci-code for: ",libname));
}
});
/**
 * gets the current url, as a map
 */
goldly.sci.kernel_cljs.application_url = (function goldly$sci$kernel_cljs$application_url(){
return cemerick.url.url.cljs$core$IFn$_invoke$arity$1(window.location.href);
});
goldly.sci.kernel_cljs.load_module_sci = (function goldly$sci$kernel_cljs$load_module_sci(p__54570){
var map__54571 = p__54570;
var map__54571__$1 = cljs.core.__destructure_map(map__54571);
var d = map__54571__$1;
var ctx = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54571__$1,new cljs.core.Keyword(null,"ctx","ctx",-493610118));
var libname = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54571__$1,new cljs.core.Keyword(null,"libname","libname",135992497));
var ns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54571__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var opts = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54571__$1,new cljs.core.Keyword(null,"opts","opts",155075701));
var property_path = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54571__$1,new cljs.core.Keyword(null,"property-path","property-path",201212852));
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"info","info",-317069002),"goldly.sci.kernel-cljs",null,166,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, ["load-sci-src","libname:",libname,"ns: ",ns,"opts:",opts], null);
}),null)),null,(98),null);

var filename = [goldly.sci.kernel_cljs.ns__GT_filename(cljs.core.str.cljs$core$IFn$_invoke$arity$1(libname)),".cljs"].join('');
var url = ["/code/",filename].join('');
var map__54572 = goldly.sci.kernel_cljs.application_url();
var map__54572__$1 = cljs.core.__destructure_map(map__54572);
var protocol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54572__$1,new cljs.core.Keyword(null,"protocol","protocol",652470118));
var path = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54572__$1,new cljs.core.Keyword(null,"path","path",-188191168));
var url2 = ["file:///home/florian/repo/pink-gorilla/goldly/goldly-test/target/static",url].join('');
var url3 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(protocol,"file"))?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),url].join(''):url);
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"info","info",-317069002),"goldly.sci.kernel-cljs",null,175,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["loading filename: ",filename], null);
}),null)),null,(99),null);

taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"info","info",-317069002),"goldly.sci.kernel-cljs",null,176,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["protocol: ",protocol," path: ",path], null);
}),null)),null,(100),null);

taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"warn","warn",-436710552),"goldly.sci.kernel-cljs",null,177,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["url3: ",url3], null);
}),null)),null,(101),null);

return (new Promise((function (resolve,reject){
var response = window.fetch(url2,cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mode","mode",654403691),"no-cors"], null)));
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"info","info",-317069002),"goldly.sci.kernel-cljs",null,181,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["load-module-sci-cljs url: ",url], null);
}),null)),null,(102),null);

return response.then((function (r){
var status = r.status;
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"info","info",-317069002),"goldly.sci.kernel-cljs",null,185,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["http response status: ",status], null);
}),null)),null,(103),null);

return r.text().then((function (t){
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"info","info",-317069002),"goldly.sci.kernel-cljs",null,188,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["http text: ",t], null);
}),null)),null,(104),null);

return goldly.sci.kernel_cljs.on_cljs_received(ctx,libname,ns,opts,resolve,reject,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"http-load","http-load",-1640742303),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"result","result",1415092211),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"code","code",1586293142),t], null)], null)], null));
})).catch((function (e){
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"goldly.sci.kernel-cljs",null,191,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["http text error: ",e], null);
}),null)),null,(105),null);

return (reject.cljs$core$IFn$_invoke$arity$1 ? reject.cljs$core$IFn$_invoke$arity$1("could not get text for sci-cljs-file") : reject.call(null,"could not get text for sci-cljs-file"));
}));
})).catch((function (err){
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"warn","warn",-436710552),"goldly.sci.kernel-cljs",null,196,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["http get error: ",err], null);
}),null)),null,(106),null);

var G__54573 = ["cannot http-get sci-cljs file: ",url].join('');
return (reject.cljs$core$IFn$_invoke$arity$1 ? reject.cljs$core$IFn$_invoke$arity$1(G__54573) : reject.call(null,G__54573));
}));
})));
});
goldly.sci.kernel_cljs.async_load_fn = (function goldly$sci$kernel_cljs$async_load_fn(p__54574){
var map__54575 = p__54574;
var map__54575__$1 = cljs.core.__destructure_map(map__54575);
var d = map__54575__$1;
var libname = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54575__$1,new cljs.core.Keyword(null,"libname","libname",135992497));
var opts = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54575__$1,new cljs.core.Keyword(null,"opts","opts",155075701));
var ctx = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54575__$1,new cljs.core.Keyword(null,"ctx","ctx",-493610118));
var ns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54575__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var sci_mod = goldly.sci.kernel_cljs.sci_ns_lookup(libname);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(libname,"some_js_lib")){
return goldly.sci.kernel_cljs.load_module_test(ctx,libname,ns,opts);
} else {
if(cljs.core.truth_(sci_mod)){
return goldly.sci.kernel_cljs.load_module(ctx,libname,opts,ns,sci_mod);
} else {
return goldly.sci.kernel_cljs.load_module_sci(d);

}
}
});
goldly.sci.kernel_cljs._BANG_last_ns = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(sci.core.ns));
cljs.core.enable_console_print_BANG_();
goldly.sci.kernel_cljs.output = cljs.core.atom.cljs$core$IFn$_invoke$arity$1("");
goldly.sci.kernel_cljs.my_print_fn = (function goldly$sci$kernel_cljs$my_print_fn(var_args){
var args__5775__auto__ = [];
var len__5769__auto___54584 = arguments.length;
var i__5770__auto___54585 = (0);
while(true){
if((i__5770__auto___54585 < len__5769__auto___54584)){
args__5775__auto__.push((arguments[i__5770__auto___54585]));

var G__54586 = (i__5770__auto___54585 + (1));
i__5770__auto___54585 = G__54586;
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
(goldly.sci.kernel_cljs.my_print_fn.cljs$lang$applyTo = (function (seq54576){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq54576));
}));

sci.core.alter_var_root.cljs$core$IFn$_invoke$arity$2(sci.core.print_fn,cljs.core.constantly(goldly.sci.kernel_cljs.my_print_fn));
sci.core.alter_var_root.cljs$core$IFn$_invoke$arity$2(sci.core.print_err_fn,cljs.core.constantly(cljs.core._STAR_print_err_fn_STAR_));
goldly.sci.kernel_cljs.compile_code_async = (function goldly$sci$kernel_cljs$compile_code_async(code){
try{var bm__51580__auto__ = cljs.core.PersistentArrayMap.createAsIfByAssoc([sci.core.ns,cljs.core.deref(goldly.sci.kernel_cljs._BANG_last_ns)]);
if(cljs.core.map_QMARK_(bm__51580__auto__)){
} else {
throw (new Error("Assert failed: (clojure.core/map? bm__51580__auto__)"));
}

sci.impl.vars.push_thread_bindings(bm__51580__auto__);

try{var eval_p = sci.async.eval_string_PLUS_.cljs$core$IFn$_invoke$arity$2(goldly.sci.kernel_cljs.ctx_repl,code);
return eval_p.then((function (res){
var map__54578 = res;
var map__54578__$1 = cljs.core.__destructure_map(map__54578);
var val = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54578__$1,new cljs.core.Keyword(null,"val","val",128701612));
var ns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54578__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var result = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"id","id",-1388402092),null,new cljs.core.Keyword(null,"code","code",1586293142),code,new cljs.core.Keyword(null,"value","value",305978217),val,new cljs.core.Keyword(null,"out","out",-910545517),cljs.core.deref(goldly.sci.kernel_cljs.output),new cljs.core.Keyword(null,"ns","ns",441598760),cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns)], null);
cljs.core.reset_BANG_(goldly.sci.kernel_cljs._BANG_last_ns,ns);

cljs.core.reset_BANG_(goldly.sci.kernel_cljs.output,"");

taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"info","info",-317069002),"goldly.sci.kernel-cljs",null,257,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["sci-cljs response: ",result], null);
}),null)),null,(108),null);

return result;
}));
}finally {sci.impl.vars.pop_thread_bindings();
}}catch (e54577){var e = e54577;
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"goldly.sci.kernel-cljs",null,260,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["sci compile-code-async --]",code,"[-- ex: ",e], null);
}),null)),null,(107),null);

return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"root-ex","root-ex",-1080814778),e.data,new cljs.core.Keyword(null,"err","err",-2089457205),e.message], null)], null);
}});
goog.exportSymbol('goldly.sci.kernel_cljs.compile_code_async', goldly.sci.kernel_cljs.compile_code_async);
goldly.sci.kernel_cljs.rns = sci.core.create_ns.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"cljs.reader","cljs.reader",1327473948,null),null);
goldly.sci.kernel_cljs.ctx_static = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"bindings","bindings",1271397192),goldly_bindings_generated.bindings_generated,new cljs.core.Keyword(null,"preset","preset",777387345),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"termination-safe","termination-safe",-1845225130),false], null),new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([goldly_bindings_generated.ns_generated,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Symbol(null,"clojure.core","clojure.core",-189332625,null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Symbol(null,"require","require",1172530194,null),sci.async.require,new cljs.core.Symbol(null,"time","time",-1268547887,null),(function (){var ns__51567__auto__ = goldly.sci.clojure_core.cljns;
var var__51568__auto__ = new cljs.core.Var(function(){return goldly.sci.clojure_core.time;},new cljs.core.Symbol("goldly.sci.clojure-core","time","goldly.sci.clojure-core/time",589711439,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"macro","macro",-867863404),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"goldly.sci.clojure-core","goldly.sci.clojure-core",-2000722947,null),new cljs.core.Symbol(null,"time","time",-1268547887,null),"goldly/sci/clojure_core.cljs",(28),(1),(11),true,(11),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"expr","expr",-1908713478,null)], null)),"Evaluates expr and prints the time it took. Returns the value of expr.",(cljs.core.truth_(goldly.sci.clojure_core.time)?goldly.sci.clojure_core.time.cljs$lang$test:null)]));
var val__51569__auto__ = cljs.core.deref(var__51568__auto__);
var m__51570__auto__ = cljs.core.meta(var__51568__auto__);
var name__51571__auto__ = (function (){var or__5045__auto__ = null;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m__51570__auto__);
}
})();
var new_m__51572__auto__ = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"ns","ns",441598760),ns__51567__auto__,new cljs.core.Keyword(null,"name","name",1843675177),name__51571__auto__,new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m__51570__auto__),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m__51570__auto__)], null);
if(cljs.core.truth_(new cljs.core.Keyword(null,"dynamic","dynamic",704819571).cljs$core$IFn$_invoke$arity$1(m__51570__auto__))){
return sci.core.new_dynamic_var.cljs$core$IFn$_invoke$arity$3(name__51571__auto__,val__51569__auto__,new_m__51572__auto__);
} else {
if(cljs.core.truth_((function (){var or__5045__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m__51570__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return new cljs.core.Keyword("sci","macro","sci/macro",-868536151).cljs$core$IFn$_invoke$arity$1(m__51570__auto__);
}
})())){
return sci.core.new_macro_var.cljs$core$IFn$_invoke$arity$3(name__51571__auto__,val__51569__auto__,new_m__51572__auto__);
} else {
return sci.core.new_var.cljs$core$IFn$_invoke$arity$3(name__51571__auto__,val__51569__auto__,new_m__51572__auto__);

}
}
})(),new cljs.core.Symbol(null,"system-time","system-time",1690633727,null),(function (){var ns__51567__auto__ = goldly.sci.clojure_core.cljns;
var var__51568__auto__ = new cljs.core.Var(function(){return cljs.core.system_time;},new cljs.core.Symbol("cljs.core","system-time","cljs.core/system-time",1562011930,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"cljs.core","cljs.core",770546058,null),new cljs.core.Symbol(null,"system-time","system-time",1690633727,null),"cljs/core.cljs",(18),(1),(399),(399),cljs.core.list(cljs.core.PersistentVector.EMPTY),"Returns highest resolution time offered by host in milliseconds.",(cljs.core.truth_(cljs.core.system_time)?cljs.core.system_time.cljs$lang$test:null)]));
var val__51569__auto__ = cljs.core.deref(var__51568__auto__);
var m__51570__auto__ = cljs.core.meta(var__51568__auto__);
var name__51571__auto__ = (function (){var or__5045__auto__ = null;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m__51570__auto__);
}
})();
var new_m__51572__auto__ = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"ns","ns",441598760),ns__51567__auto__,new cljs.core.Keyword(null,"name","name",1843675177),name__51571__auto__,new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m__51570__auto__),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m__51570__auto__)], null);
if(cljs.core.truth_(new cljs.core.Keyword(null,"dynamic","dynamic",704819571).cljs$core$IFn$_invoke$arity$1(m__51570__auto__))){
return sci.core.new_dynamic_var.cljs$core$IFn$_invoke$arity$3(name__51571__auto__,val__51569__auto__,new_m__51572__auto__);
} else {
if(cljs.core.truth_((function (){var or__5045__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m__51570__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return new cljs.core.Keyword("sci","macro","sci/macro",-868536151).cljs$core$IFn$_invoke$arity$1(m__51570__auto__);
}
})())){
return sci.core.new_macro_var.cljs$core$IFn$_invoke$arity$3(name__51571__auto__,val__51569__auto__,new_m__51572__auto__);
} else {
return sci.core.new_var.cljs$core$IFn$_invoke$arity$3(name__51571__auto__,val__51569__auto__,new_m__51572__auto__);

}
}
})(),new cljs.core.Symbol(null,"random-uuid","random-uuid",-1574409597,null),cljs.core.random_uuid,new cljs.core.Symbol(null,"read-string","read-string",-558384455,null),(function (){var ns__51567__auto__ = goldly.sci.kernel_cljs.rns;
var var__51568__auto__ = new cljs.core.Var(function(){return cljs.reader.read_string;},new cljs.core.Symbol("cljs.reader","read-string","cljs.reader/read-string",589673466,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"top-fn","top-fn",-2056129173),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"cljs.reader","cljs.reader",1327473948,null),new cljs.core.Symbol(null,"read-string","read-string",-558384455,null),"cljs/reader.cljs",(18),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"variadic?","variadic?",584179762),false,new cljs.core.Keyword(null,"fixed-arity","fixed-arity",1586445869),(2),new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543),(2),new cljs.core.Keyword(null,"method-params","method-params",-980792179),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"s","s",-948495851,null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"opts","opts",1795607228,null),new cljs.core.Symbol(null,"s","s",-948495851,null)], null)], null),new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"s","s",-948495851,null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"opts","opts",1795607228,null),new cljs.core.Symbol(null,"s","s",-948495851,null)], null)),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",1944829838),cljs.core.list(null,null)], null),(1),(174),(174),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"s","s",-948495851,null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"opts","opts",1795607228,null),new cljs.core.Symbol(null,"s","s",-948495851,null)], null)),"Reads one object from the string s.\n   Returns nil when s is nil or empty.\n\n   Reads data in the edn format (subset of Clojure data):\n   http://edn-format.org\n\n   opts is a map as per cljs.tools.reader.edn/read",(cljs.core.truth_(cljs.reader.read_string)?cljs.reader.read_string.cljs$lang$test:null)]));
var val__51569__auto__ = cljs.core.deref(var__51568__auto__);
var m__51570__auto__ = cljs.core.meta(var__51568__auto__);
var name__51571__auto__ = (function (){var or__5045__auto__ = null;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m__51570__auto__);
}
})();
var new_m__51572__auto__ = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"ns","ns",441598760),ns__51567__auto__,new cljs.core.Keyword(null,"name","name",1843675177),name__51571__auto__,new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m__51570__auto__),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m__51570__auto__)], null);
if(cljs.core.truth_(new cljs.core.Keyword(null,"dynamic","dynamic",704819571).cljs$core$IFn$_invoke$arity$1(m__51570__auto__))){
return sci.core.new_dynamic_var.cljs$core$IFn$_invoke$arity$3(name__51571__auto__,val__51569__auto__,new_m__51572__auto__);
} else {
if(cljs.core.truth_((function (){var or__5045__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m__51570__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return new cljs.core.Keyword("sci","macro","sci/macro",-868536151).cljs$core$IFn$_invoke$arity$1(m__51570__auto__);
}
})())){
return sci.core.new_macro_var.cljs$core$IFn$_invoke$arity$3(name__51571__auto__,val__51569__auto__,new_m__51572__auto__);
} else {
return sci.core.new_var.cljs$core$IFn$_invoke$arity$3(name__51571__auto__,val__51569__auto__,new_m__51572__auto__);

}
}
})()], null),new cljs.core.Symbol(null,"goldly.sci","goldly.sci",-91271036,null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Symbol(null,"require-async","require-async",-93567966,null),goldly.sci.kernel_cljs.require_async,new cljs.core.Symbol(null,"compile-sci","compile-sci",-814834508,null),goldly.sci.kernel_cljs.compile_code,new cljs.core.Symbol(null,"compile-sci-async","compile-sci-async",-110238770,null),goldly.sci.kernel_cljs.compile_code_async,new cljs.core.Symbol(null,"resolve-symbol-sci","resolve-symbol-sci",897150083,null),goldly.sci.kernel_cljs.resolve_symbol], null)], null)], 0)),new cljs.core.Keyword(null,"classes","classes",2037804510),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Symbol(null,"js","js",-886355190,null),window,new cljs.core.Keyword(null,"allow","allow",-1857325745),new cljs.core.Keyword(null,"all","all",892129742)], null),new cljs.core.Keyword(null,"disable-arity-checks","disable-arity-checks",1131364206),true,new cljs.core.Keyword(null,"async-load-fn","async-load-fn",-472170029),goldly.sci.kernel_cljs.async_load_fn], null);
goldly.sci.kernel_cljs.ctx_repl = sci.core.init(goldly.sci.kernel_cljs.ctx_static);

//# sourceMappingURL=goldly.sci.kernel_cljs.js.map
