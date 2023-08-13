goog.provide('goldly.sci.loader.shadow_module');
goldly.sci.loader.shadow_module.patch_url = (function goldly$sci$loader$shadow_module$patch_url(uris,uri_name){
var base = goldly.sci.loader.static$.dynamic_base();
var uri = (uris[uri_name]);
var l = uri.length;
return cljs.core.doall.cljs$core$IFn$_invoke$arity$1((function (){var iter__5523__auto__ = (function goldly$sci$loader$shadow_module$patch_url_$_iter__54632(s__54633){
return (new cljs.core.LazySeq(null,(function (){
var s__54633__$1 = s__54633;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__54633__$1);
if(temp__5804__auto__){
var s__54633__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__54633__$2)){
var c__5521__auto__ = cljs.core.chunk_first(s__54633__$2);
var size__5522__auto__ = cljs.core.count(c__5521__auto__);
var b__54635 = cljs.core.chunk_buffer(size__5522__auto__);
if((function (){var i__54634 = (0);
while(true){
if((i__54634 < size__5522__auto__)){
var i = cljs.core._nth(c__5521__auto__,i__54634);
cljs.core.chunk_append(b__54635,(function (){var el = (uri[i]);
return (uri[i] = [base,cljs.core.str.cljs$core$IFn$_invoke$arity$1(el)].join(''));
})());

var G__54641 = (i__54634 + (1));
i__54634 = G__54641;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__54635),goldly$sci$loader$shadow_module$patch_url_$_iter__54632(cljs.core.chunk_rest(s__54633__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__54635),null);
}
} else {
var i = cljs.core.first(s__54633__$2);
return cljs.core.cons((function (){var el = (uri[i]);
return (uri[i] = [base,cljs.core.str.cljs$core$IFn$_invoke$arity$1(el)].join(''));
})(),goldly$sci$loader$shadow_module$patch_url_$_iter__54632(cljs.core.rest(s__54633__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5523__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$1(l));
})());
});
goldly.sci.loader.shadow_module.set_shadow_load_dir = (function goldly$sci$loader$shadow_module$set_shadow_load_dir(url){
(window.goog.global.SHADOW_ENV.scriptBase = url);

var shadow_modules = window.goog.global.shadow$modules;
var uris = (shadow_modules["uris"]);
var uri_names = Object.keys(uris);
return cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(goldly.sci.loader.shadow_module.patch_url,uris),uri_names));
});
goldly.sci.loader.shadow_module.dynamic_cljs_runtime_dir = (function goldly$sci$loader$shadow_module$dynamic_cljs_runtime_dir(){
var base = goldly.sci.loader.static$.dynamic_base();
return [base,"/r/cljs-runtime/"].join('');
});
goldly.sci.loader.shadow_module.set_github_load_mode = (function goldly$sci$loader$shadow_module$set_github_load_mode(){
var dir = goldly.sci.loader.shadow_module.dynamic_cljs_runtime_dir();
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"info","info",-317069002),"goldly.sci.loader.shadow-module",null,44,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["github shadow base: ",dir], null);
}),null)),null,(123),null);

return goldly.sci.loader.shadow_module.set_shadow_load_dir(dir);
});
goldly.sci.loader.shadow_module.sci_ns_lookup = (function goldly$sci$loader$shadow_module$sci_ns_lookup(libname){
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"debug","debug",-1608172596),"goldly.sci.loader.shadow-module",null,50,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["looking up module for sci-ns:",libname], null);
}),null)),null,(124),null);

var temp__5802__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(goldly_bindings_generated.sci_lazy_ns_dict,libname);
if(cljs.core.truth_(temp__5802__auto__)){
var module_name = temp__5802__auto__;
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"info","info",-317069002),"goldly.sci.loader.shadow-module",null,52,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["module for ",libname,": ",module_name], null);
}),null)),null,(125),null);

return cljs.core.get.cljs$core$IFn$_invoke$arity$2(goldly_bindings_generated.lazy_modules,module_name);
} else {
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"info","info",-317069002),"goldly.sci.loader.shadow-module",null,54,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["no lazy-module found for: ",libname], null);
}),null)),null,(126),null);

return null;
}
});
goldly.sci.loader.shadow_module.add_sci_ns = (function goldly$sci$loader$shadow_module$add_sci_ns(ctx,libname,ns,opts,sci_ns,sci_defs,ns_vars){
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"info","info",-317069002),"goldly.sci.loader.shadow-module",null,58,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, ["creating sci ns: ",sci_ns,"ns-vars:",ns_vars,"sci-defs",sci_defs], null);
}),null)),null,(127),null);

var mlns = sci.core.create_ns.cljs$core$IFn$_invoke$arity$1(sci_ns);
var sci_ns_def = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$3((function (sci_def,ns_var){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(sci_def,new cljs.core.Keyword(null,"add","add",235287739))){
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"info","info",-317069002),"goldly.sci.loader.shadow-module",null,65,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["TEST: adding: ",(ns_var.cljs$core$IFn$_invoke$arity$2 ? ns_var.cljs$core$IFn$_invoke$arity$2((7),(7)) : ns_var.call(null,(7),(7)))], null);
}),null)),null,(128),null);
} else {
}

return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sci_def,sci.core.new_var.cljs$core$IFn$_invoke$arity$3(sci_def,ns_var,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ns","ns",441598760),mlns], null))], null);
}),sci_defs,ns_vars));
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"info","info",-317069002),"goldly.sci.loader.shadow-module",null,70,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, ["sci/add-namespace! sci-ns: ",libname," sci ns :",sci_ns,"def: ",sci_ns_def], null);
}),null)),null,(129),null);

return sci.core.add_namespace_BANG_(ctx,libname,sci_ns_def);
});
goldly.sci.loader.shadow_module.load_module_ns = (function goldly$sci$loader$shadow_module$load_module_ns(ctx,libname,ns,opts,sci_ns,sci_def,loadable){
return goldly.sci.loader.load_shadow.load_ext_shadow(loadable).then((function (ns_vars){
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"info","info",-317069002),"goldly.sci.loader.shadow-module",null,77,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, ["received ns-vars for sci-ns: ",sci_ns,"libname: ",libname,"ns: ",ns], null);
}),null)),null,(130),null);

return goldly.sci.loader.shadow_module.add_sci_ns(ctx,libname,ns,opts,sci_ns,sci_def,ns_vars);
}));
});
goldly.sci.loader.shadow_module.load_module = (function goldly$sci$loader$shadow_module$load_module(ctx,libname,ns,opts,sci_mod){
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"info","info",-317069002),"goldly.sci.loader.shadow-module",null,81,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["load-module: ",libname], null);
}),null)),null,(131),null);

var promises = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__54636){
var vec__54637 = p__54636;
var sci_ns = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54637,(0),null);
var map__54640 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54637,(1),null);
var map__54640__$1 = cljs.core.__destructure_map(map__54640);
var sci_def = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54640__$1,new cljs.core.Keyword(null,"sci-def","sci-def",-971575708));
var loadable = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54640__$1,new cljs.core.Keyword(null,"loadable","loadable",-411421563));
return goldly.sci.loader.shadow_module.load_module_ns(ctx,libname,ns,opts,sci_ns,sci_def,loadable);
}),sci_mod);
var p_all = promesa.core.all(promises);
return p_all.then((function (_d){
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"info","info",-317069002),"goldly.sci.loader.shadow-module",null,89,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["load-module: ",libname," - finished loading all namespaces"], null);
}),null)),null,(132),null);

return cljs.core.PersistentArrayMap.EMPTY;
}));
});

//# sourceMappingURL=goldly.sci.loader.shadow_module.js.map
