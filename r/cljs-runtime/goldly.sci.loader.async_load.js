goog.provide('goldly.sci.loader.async_load');
goldly.sci.loader.async_load.async_load_fn = (function goldly$sci$loader$async_load$async_load_fn(p__54564){
var map__54565 = p__54564;
var map__54565__$1 = cljs.core.__destructure_map(map__54565);
var d = map__54565__$1;
var libname = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54565__$1,new cljs.core.Keyword(null,"libname","libname",135992497));
var opts = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54565__$1,new cljs.core.Keyword(null,"opts","opts",155075701));
var ctx = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54565__$1,new cljs.core.Keyword(null,"ctx","ctx",-493610118));
var ns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54565__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var sci_mod = goldly.sci.loader.shadow_module.sci_ns_lookup(libname);
if(cljs.core.truth_(sci_mod)){
return goldly.sci.loader.shadow_module.load_module(ctx,libname,opts,ns,sci_mod);
} else {
return goldly.sci.loader.cljs_source_http.load_module_sci(d);

}
});

//# sourceMappingURL=goldly.sci.loader.async_load.js.map
