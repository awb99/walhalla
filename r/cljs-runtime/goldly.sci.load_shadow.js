goog.provide('goldly.sci.load_shadow');
goldly.sci.load_shadow.load_ext_shadow = (function goldly$sci$load_shadow$load_ext_shadow(loadable){
return (new Promise((function (resolve,reject){
var handle_load = (function (mod){
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"info","info",-317069002),"goldly.sci.load-shadow",null,19,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["shadow module-ns did load: ",mod], null);
}),null)),null,(280),null);

return (resolve.cljs$core$IFn$_invoke$arity$1 ? resolve.cljs$core$IFn$_invoke$arity$1(mod) : resolve.call(null,mod));
});
return shadow.lazy.load.cljs$core$IFn$_invoke$arity$2(loadable,handle_load);
})));
});

//# sourceMappingURL=goldly.sci.load_shadow.js.map
