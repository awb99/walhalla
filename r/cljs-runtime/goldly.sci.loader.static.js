goog.provide('goldly.sci.loader.static$');
goldly.sci.loader.static$.application_url = (function goldly$sci$loader$static$application_url(){
return window.location.href;
});
goldly.sci.loader.static$.dynamic_base = (function goldly$sci$loader$static$dynamic_base(){
var url = goldly.sci.loader.static$.application_url();
var url_base = cljs.core.subs.cljs$core$IFn$_invoke$arity$3(url,(0),clojure.string.last_index_of.cljs$core$IFn$_invoke$arity$2(url,"/"));
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"info","info",-317069002),"goldly.sci.loader.static",null,13,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["dynamic-base: ",url_base], null);
}),null)),null,(83),null);

return url_base;
});

//# sourceMappingURL=goldly.sci.loader.static.js.map
