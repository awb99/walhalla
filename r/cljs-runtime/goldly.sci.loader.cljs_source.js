goog.provide('goldly.sci.loader.cljs_source');
goldly.sci.loader.cljs_source.ns__GT_filename = (function goldly$sci$loader$cljs_source$ns__GT_filename(ns){
return clojure.string.replace(clojure.string.replace(ns,/\./,"/"),/\-/,"_");
});
goldly.sci.loader.cljs_source.valid_code_QMARK_ = (function goldly$sci$loader$cljs_source$valid_code_QMARK_(p__54538){
var map__54539 = p__54538;
var map__54539__$1 = cljs.core.__destructure_map(map__54539);
var result = map__54539__$1;
var code = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54539__$1,new cljs.core.Keyword(null,"code","code",1586293142));
var and__5043__auto__ = code;
if(cljs.core.truth_(and__5043__auto__)){
return (!(clojure.string.blank_QMARK_(code)));
} else {
return and__5043__auto__;
}
});
goldly.sci.loader.cljs_source.on_cljs_received = (function goldly$sci$loader$cljs_source$on_cljs_received(ctx,libname,ns,opts,resolve,reject,p__54540){
var vec__54541 = p__54540;
var event_type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54541,(0),null);
var map__54544 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54541,(1),null);
var map__54544__$1 = cljs.core.__destructure_map(map__54544);
var data = map__54544__$1;
var result = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54544__$1,new cljs.core.Keyword(null,"result","result",1415092211));
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"debug","debug",-1608172596),"goldly.sci.loader.cljs-source",null,18,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["on-cljs-received: ",event_type,"data: ",data], null);
}),null)),null,(83),null);

if(cljs.core.truth_(goldly.sci.loader.cljs_source.valid_code_QMARK_(result))){
var code = new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(result);
var eval_p = sci.async.eval_string_PLUS_.cljs$core$IFn$_invoke$arity$2(ctx,code);
eval_p.then((function (res){
var map__54545 = res;
var map__54545__$1 = cljs.core.__destructure_map(map__54545);
var val = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54545__$1,new cljs.core.Keyword(null,"val","val",128701612));
var ns__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54545__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"info","info",-317069002),"goldly.sci.loader.cljs-source",null,24,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["sci-cljs compile result: ",res], null);
}),null)),null,(84),null);

var temp__5804__auto___54552 = new cljs.core.Keyword(null,"as","as",1148689641).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(temp__5804__auto___54552)){
var as_54553 = temp__5804__auto___54552;
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"warn","warn",-436710552),"goldly.sci.loader.cljs-source",null,28,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, ["registering as: ",as_54553,"in ns: ",ns__$1," to:",cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(libname)], null);
}),null)),null,(85),null);

sci.core.add_import_BANG_(ctx,ns__$1,cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(libname),new cljs.core.Keyword(null,"as","as",1148689641).cljs$core$IFn$_invoke$arity$1(opts));
} else {
}

var G__54546 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"handled","handled",1889700151),false], null);
return (resolve.cljs$core$IFn$_invoke$arity$1 ? resolve.cljs$core$IFn$_invoke$arity$1(G__54546) : resolve.call(null,G__54546));
}));

return eval_p.catch((function (e){
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"goldly.sci.loader.cljs-source",null,32,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["compile error for: ",libname," error: ",e], null);
}),null)),null,(86),null);

return (reject.cljs$core$IFn$_invoke$arity$2 ? reject.cljs$core$IFn$_invoke$arity$2("compile error for: ",libname) : reject.call(null,"compile error for: ",libname));
}));
} else {
return (reject.cljs$core$IFn$_invoke$arity$2 ? reject.cljs$core$IFn$_invoke$arity$2("no sci-code for: ",libname) : reject.call(null,"no sci-code for: ",libname));
}
});

//# sourceMappingURL=goldly.sci.loader.cljs_source.js.map
