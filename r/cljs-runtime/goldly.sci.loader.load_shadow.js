goog.provide('goldly.sci.loader.load_shadow');
goldly.sci.loader.load_shadow.load_ext_shadow = (function goldly$sci$loader$load_shadow$load_ext_shadow(loadable){
var all_mods = loadable.modules;
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"info","info",-317069002),"goldly.sci.loader.load-shadow",null,16,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["shadow loadable mods: ",all_mods], null);
}),null)),null,(83),null);

return (new Promise((function (resolve,reject){
var on_success = (function (mod){
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"info","info",-317069002),"goldly.sci.loader.load-shadow",null,20,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["shadow module-ns did load: ",mod], null);
}),null)),null,(84),null);

return (resolve.cljs$core$IFn$_invoke$arity$1 ? resolve.cljs$core$IFn$_invoke$arity$1(mod) : resolve.call(null,mod));
});
var on_err = (function (err){
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"goldly.sci.loader.load-shadow",null,24,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["shadow-module could not be loaded: ",err], null);
}),null)),null,(85),null);

return (reject.cljs$core$IFn$_invoke$arity$1 ? reject.cljs$core$IFn$_invoke$arity$1(err) : reject.call(null,err));
});
return shadow.lazy.load.cljs$core$IFn$_invoke$arity$3(loadable,on_success,on_err);
})));
});

//# sourceMappingURL=goldly.sci.loader.load_shadow.js.map
