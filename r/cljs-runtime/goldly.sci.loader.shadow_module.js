goog.provide('goldly.sci.loader.shadow_module');
goldly.sci.loader.shadow_module.sci_ns_lookup = (function goldly$sci$loader$shadow_module$sci_ns_lookup(libname){
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"debug","debug",-1608172596),"goldly.sci.loader.shadow-module",null,13,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["looking up module for sci-ns:",libname], null);
}),null)),null,(87),null);

var temp__5802__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(goldly_bindings_generated.sci_lazy_ns_dict,libname);
if(cljs.core.truth_(temp__5802__auto__)){
var module_name = temp__5802__auto__;
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"info","info",-317069002),"goldly.sci.loader.shadow-module",null,15,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["module for ",libname,": ",module_name], null);
}),null)),null,(88),null);

return cljs.core.get.cljs$core$IFn$_invoke$arity$2(goldly_bindings_generated.lazy_modules,module_name);
} else {
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"info","info",-317069002),"goldly.sci.loader.shadow-module",null,17,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["no lazy-module found for: ",libname], null);
}),null)),null,(89),null);

return null;
}
});
goldly.sci.loader.shadow_module.add_sci_ns = (function goldly$sci$loader$shadow_module$add_sci_ns(ctx,libname,ns,opts,sci_ns,sci_defs,ns_vars){
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"info","info",-317069002),"goldly.sci.loader.shadow-module",null,21,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, ["creating sci ns: ",sci_ns,"ns-vars:",ns_vars,"sci-defs",sci_defs], null);
}),null)),null,(90),null);

var mlns = sci.core.create_ns.cljs$core$IFn$_invoke$arity$1(sci_ns);
var sci_ns_def = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$3((function (sci_def,ns_var){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(sci_def,new cljs.core.Keyword(null,"add","add",235287739))){
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"info","info",-317069002),"goldly.sci.loader.shadow-module",null,28,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["TEST: adding: ",(ns_var.cljs$core$IFn$_invoke$arity$2 ? ns_var.cljs$core$IFn$_invoke$arity$2((7),(7)) : ns_var.call(null,(7),(7)))], null);
}),null)),null,(91),null);
} else {
}

return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sci_def,sci.core.new_var.cljs$core$IFn$_invoke$arity$3(sci_def,ns_var,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ns","ns",441598760),mlns], null))], null);
}),sci_defs,ns_vars));
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"info","info",-317069002),"goldly.sci.loader.shadow-module",null,33,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, ["sci/add-namespace! sci-ns: ",libname," sci ns :",sci_ns,"def: ",sci_ns_def], null);
}),null)),null,(92),null);

return sci.core.add_namespace_BANG_(ctx,libname,sci_ns_def);
});
goldly.sci.loader.shadow_module.load_module_ns = (function goldly$sci$loader$shadow_module$load_module_ns(ctx,libname,ns,opts,sci_ns,sci_def,loadable){
return goldly.sci.loader.load_shadow.load_ext_shadow(loadable).then((function (ns_vars){
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"info","info",-317069002),"goldly.sci.loader.shadow-module",null,40,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, ["received ns-vars for sci-ns: ",sci_ns,"libname: ",libname,"ns: ",ns], null);
}),null)),null,(93),null);

return goldly.sci.loader.shadow_module.add_sci_ns(ctx,libname,ns,opts,sci_ns,sci_def,ns_vars);
}));
});
goldly.sci.loader.shadow_module.load_module = (function goldly$sci$loader$shadow_module$load_module(ctx,libname,ns,opts,sci_mod){
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"info","info",-317069002),"goldly.sci.loader.shadow-module",null,44,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["load-module: ",libname], null);
}),null)),null,(94),null);

var promises = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__54620){
var vec__54621 = p__54620;
var sci_ns = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54621,(0),null);
var map__54624 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54621,(1),null);
var map__54624__$1 = cljs.core.__destructure_map(map__54624);
var sci_def = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54624__$1,new cljs.core.Keyword(null,"sci-def","sci-def",-971575708));
var loadable = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54624__$1,new cljs.core.Keyword(null,"loadable","loadable",-411421563));
return goldly.sci.loader.shadow_module.load_module_ns(ctx,libname,ns,opts,sci_ns,sci_def,loadable);
}),sci_mod);
var p_all = promesa.core.all(promises);
return p_all.then((function (_d){
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"info","info",-317069002),"goldly.sci.loader.shadow-module",null,52,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["load-module: ",libname," - finished loading all namespaces"], null);
}),null)),null,(95),null);

return cljs.core.PersistentArrayMap.EMPTY;
}));
});

//# sourceMappingURL=goldly.sci.loader.shadow_module.js.map
